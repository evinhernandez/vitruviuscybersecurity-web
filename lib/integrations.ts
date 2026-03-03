type LeadRecord = {
  leadId: string;
  kind: "service" | "asset";
  createdAt: string;
  name?: string;
  email: string;
  company?: string;
  role?: string;
  companySize?: string;
  serviceInterest?: string;
  urgency?: string;
  budgetBand?: string;
  message?: string;
  sourcePage?: string;
  assetId?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
};

function clean(value?: string) {
  return value && value.length > 0 ? value : "-";
}

export async function sendLeadNotification(record: LeadRecord) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_ALERT_TO;
  const from = process.env.LEAD_ALERT_FROM;

  if (!apiKey || !to || !from) {
    console.info("Lead alert skipped: RESEND env vars missing", record.leadId);
    return { ok: true, skipped: true };
  }

  const subject =
    record.kind === "service"
      ? `New Service Lead: ${clean(record.company)} (${record.leadId})`
      : `New Asset Download Lead (${record.leadId})`;

  const text = [
    `Lead ID: ${record.leadId}`,
    `Kind: ${record.kind}`,
    `Created At: ${record.createdAt}`,
    `Name: ${clean(record.name)}`,
    `Email: ${record.email}`,
    `Company: ${clean(record.company)}`,
    `Role: ${clean(record.role)}`,
    `Company Size: ${clean(record.companySize)}`,
    `Service Interest: ${clean(record.serviceInterest)}`,
    `Urgency: ${clean(record.urgency)}`,
    `Budget: ${clean(record.budgetBand)}`,
    `Asset ID: ${clean(record.assetId)}`,
    `Source Page: ${clean(record.sourcePage)}`,
    `UTM Source: ${clean(record.utm?.source)}`,
    `UTM Medium: ${clean(record.utm?.medium)}`,
    `UTM Campaign: ${clean(record.utm?.campaign)}`,
    `Message: ${clean(record.message)}`,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend error (${response.status}): ${errorBody}`);
  }

  return { ok: true };
}

export async function createNotionLead(record: LeadRecord) {
  const notionKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_LEADS_DATABASE_ID;

  if (!notionKey || !databaseId) {
    console.info("Notion lead skipped: NOTION env vars missing", record.leadId);
    return { ok: true, skipped: true };
  }

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        "Lead ID": { rich_text: [{ text: { content: record.leadId } }] },
        Name: {
          title: [{ text: { content: record.name || record.email || "Unknown" } }],
        },
        Email: { email: record.email },
        Company: { rich_text: [{ text: { content: clean(record.company) } }] },
        Segment: { select: { name: "Mid-market B2B" } },
        Offer: {
          rich_text: [
            { text: { content: record.serviceInterest || record.assetId || "General" } },
          ],
        },
        Status: { select: { name: "New" } },
        "Created At": { date: { start: record.createdAt } },
        "UTM Source": {
          rich_text: [{ text: { content: clean(record.utm?.source) } }],
        },
        "UTM Campaign": {
          rich_text: [{ text: { content: clean(record.utm?.campaign) } }],
        },
        Notes: {
          rich_text: [
            {
              text: {
                content: record.message || `Asset lead for ${record.assetId || "unknown"}`,
              },
            },
          ],
        },
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Notion error (${response.status}): ${errorBody}`);
  }

  return { ok: true };
}
