export type LeadPayload = {
  name: string;
  email: string;
  company: string;
  role: string;
  companySize: string;
  serviceInterest: string;
  urgency: string;
  budgetBand: string;
  message: string;
  sourcePage?: string;
  companyWebsite?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
};

export type LeadMagnetPayload = {
  email: string;
  name?: string;
  assetId: string;
  companyWebsite?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function trimText(input: unknown, maxLen = 5000) {
  if (typeof input !== "string") {
    return "";
  }

  return input.trim().slice(0, maxLen);
}

export function sanitizeLeadPayload(raw: unknown): LeadPayload {
  const payload = (raw ?? {}) as Record<string, unknown>;

  return {
    name: trimText(payload.name, 120),
    email: trimText(payload.email, 160).toLowerCase(),
    company: trimText(payload.company, 180),
    role: trimText(payload.role, 120),
    companySize: trimText(payload.companySize, 80),
    serviceInterest: trimText(payload.serviceInterest, 120),
    urgency: trimText(payload.urgency, 80),
    budgetBand: trimText(payload.budgetBand, 120),
    message: trimText(payload.message, 2500),
    sourcePage: trimText(payload.sourcePage, 160),
    companyWebsite: trimText(payload.companyWebsite, 160),
    utm: {
      source: trimText((payload.utm as Record<string, unknown> | undefined)?.source, 80),
      medium: trimText((payload.utm as Record<string, unknown> | undefined)?.medium, 80),
      campaign: trimText((payload.utm as Record<string, unknown> | undefined)?.campaign, 120),
      term: trimText((payload.utm as Record<string, unknown> | undefined)?.term, 120),
      content: trimText((payload.utm as Record<string, unknown> | undefined)?.content, 120),
    },
  };
}

export function validateLeadPayload(payload: LeadPayload) {
  const missing: string[] = [];

  if (!payload.name) missing.push("name");
  if (!payload.email) missing.push("email");
  if (!payload.company) missing.push("company");
  if (!payload.role) missing.push("role");
  if (!payload.serviceInterest) missing.push("serviceInterest");
  if (!payload.message) missing.push("message");

  if (missing.length > 0) {
    return { ok: false, error: `Missing required fields: ${missing.join(", ")}` };
  }

  if (!isEmail(payload.email)) {
    return { ok: false, error: "Invalid email address." };
  }

  if (payload.companyWebsite) {
    return { ok: false, error: "Spam detected." };
  }

  return { ok: true };
}

export function sanitizeLeadMagnetPayload(raw: unknown): LeadMagnetPayload {
  const payload = (raw ?? {}) as Record<string, unknown>;

  return {
    email: trimText(payload.email, 160).toLowerCase(),
    name: trimText(payload.name, 120),
    assetId: trimText(payload.assetId, 120),
    companyWebsite: trimText(payload.companyWebsite, 160),
    utm: {
      source: trimText((payload.utm as Record<string, unknown> | undefined)?.source, 80),
      medium: trimText((payload.utm as Record<string, unknown> | undefined)?.medium, 80),
      campaign: trimText((payload.utm as Record<string, unknown> | undefined)?.campaign, 120),
      term: trimText((payload.utm as Record<string, unknown> | undefined)?.term, 120),
      content: trimText((payload.utm as Record<string, unknown> | undefined)?.content, 120),
    },
  };
}

export function validateLeadMagnetPayload(payload: LeadMagnetPayload) {
  if (!payload.email || !isEmail(payload.email)) {
    return { ok: false, error: "A valid email address is required." };
  }

  if (!payload.assetId) {
    return { ok: false, error: "assetId is required." };
  }

  if (payload.companyWebsite) {
    return { ok: false, error: "Spam detected." };
  }

  return { ok: true };
}
