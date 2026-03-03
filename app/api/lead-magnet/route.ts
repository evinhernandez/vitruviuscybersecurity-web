import { NextResponse } from "next/server";

import { createNotionLead, sendLeadNotification } from "@/lib/integrations";
import {
  sanitizeLeadMagnetPayload,
  validateLeadMagnetPayload,
} from "@/lib/lead-validation";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const ASSET_MAP: Record<string, string> = {
  "ai-security-executive-brief": "/assets/ai-security-executive-brief.md",
};

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request.headers);
    const rateLimit = checkRateLimit(`asset:${ip}`);

    if (!rateLimit.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const payload = sanitizeLeadMagnetPayload(await request.json());
    const validation = validateLeadMagnetPayload(payload);

    if (!validation.ok) {
      return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
    }

    const delivery = ASSET_MAP[payload.assetId];
    if (!delivery) {
      return NextResponse.json({ ok: false, error: "Unknown assetId." }, { status: 400 });
    }

    const leadId = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    const record = {
      leadId,
      kind: "asset" as const,
      createdAt,
      ...payload,
      sourcePage: "/insights",
    };

    const jobs = await Promise.allSettled([
      sendLeadNotification(record),
      createNotionLead(record),
    ]);

    jobs.forEach((result) => {
      if (result.status === "rejected") {
        console.error("Lead magnet integration error:", result.reason);
      }
    });

    return NextResponse.json({ ok: true, leadId, delivery }, { status: 200 });
  } catch (error) {
    console.error("Lead magnet API error", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process your request right now." },
      { status: 500 },
    );
  }
}
