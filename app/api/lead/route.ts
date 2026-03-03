import { NextResponse } from "next/server";

import { createNotionLead, sendLeadNotification } from "@/lib/integrations";
import { sanitizeLeadPayload, validateLeadPayload } from "@/lib/lead-validation";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request.headers);
    const rateLimit = checkRateLimit(`lead:${ip}`);

    if (!rateLimit.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const payload = sanitizeLeadPayload(await request.json());
    const validation = validateLeadPayload(payload);

    if (!validation.ok) {
      return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
    }

    const leadId = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const record = {
      leadId,
      kind: "service" as const,
      createdAt,
      ...payload,
    };

    const jobs = await Promise.allSettled([
      sendLeadNotification(record),
      createNotionLead(record),
    ]);

    jobs.forEach((result) => {
      if (result.status === "rejected") {
        console.error("Lead integration error:", result.reason);
      }
    });

    const nextStepUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "/thank-you";

    return NextResponse.json({ ok: true, leadId, nextStepUrl }, { status: 200 });
  } catch (error) {
    console.error("Lead API error", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process your request right now." },
      { status: 500 },
    );
  }
}
