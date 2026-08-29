import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter per IP (prevents abuse)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 12; // 12 messages per min

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction for Rate Limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const now = Date.now();
    const clientData = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };

    if (now > clientData.resetTime) {
      clientData.count = 0;
      clientData.resetTime = now + RATE_LIMIT_WINDOW;
    }

    clientData.count += 1;
    rateLimitMap.set(ip, clientData);

    if (clientData.count > MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many messages. Please slow down and try again in a minute." },
        { status: 429 }
      );
    }

    // 2. Parse and Validate User Input
    const body = await req.json();
    const { message, history } = body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message content cannot be empty." }, { status: 400 });
    }

    if (message.length > 800) {
      return NextResponse.json({ error: "Message is too long (max 800 chars)." }, { status: 400 });
    }

    // 3. System Prompt for HandsFree AI Assistant
    const systemInstruction = `You are the autonomous AI assistant for HandsFree (handsfree.co).
HandsFree builds ultra-fast Next.js web applications, autonomous AI agent pipelines, CRM syncs (HubSpot, Salesforce), Stripe billing, and zero-touch back-office operations.
Your job is to assist founders, CTOs, and agency owners in identifying bottlenecks they can automate with HandsFree.
Tone: High-agency, concise, professional, technologically adept, and encouraging.
If asked about pricing or booking, invite them to use the ROI Calculator on the page or book a discovery sprint via the contact form.`;

    const apiKey = process.env.GEMINI_API_KEY;

    // 4. Secure Gemini API Call (Server-to-Server)
    if (apiKey) {
      try {
        const contents = [];

        // Append formatted conversation history
        if (Array.isArray(history)) {
          for (const item of history.slice(-6)) {
            contents.push({
              role: item.role === "assistant" ? "model" : "user",
              parts: [{ text: item.content }],
            });
          }
        }

        // Append current message
        contents.push({
          role: "user",
          parts: [{ text: message }],
        });

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents,
              systemInstruction: {
                parts: [{ text: systemInstruction }],
              },
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 500,
              },
            }),
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const reply =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "I'm ready to help you automate your business operations. What workflows would you like to streamline?";
          return NextResponse.json({ reply });
        }
      } catch (geminiError) {
        console.error("Gemini upstream error:", geminiError);
      }
    }

    // 5. Intelligent Fallback (if no GEMINI_API_KEY is configured in .env.local yet)
    const lower = message.toLowerCase();
    let fallbackReply = "Our autonomous architecture handles everything from Next.js web development to AI customer pipelines. Would you like to estimate your savings with the ROI matrix or schedule a demo?";

    if (lower.includes("price") || lower.includes("cost") || lower.includes("rate") || lower.includes("roi")) {
      fallbackReply = "Our pricing is structured around high-ROI custom builds and retainer integrations. You can estimate your annual payroll savings directly in our interactive ROI Calculator above!";
    } else if (lower.includes("service") || lower.includes("what do you do") || lower.includes("help")) {
      fallbackReply = "HandsFree builds ultra-fast web apps, AI agent pipelines, CRM synchronization, and automated Stripe billing systems so your business operates 100% hands-free.";
    } else if (lower.includes("contact") || lower.includes("book") || lower.includes("demo") || lower.includes("hire")) {
      fallbackReply = "You can book a call or send your project specifications using our Contact form at the bottom of the page. Our engineering team reviews and replies within 4 hours.";
    }

    return NextResponse.json({ reply: fallbackReply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
