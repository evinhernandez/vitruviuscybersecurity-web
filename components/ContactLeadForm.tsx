"use client";

import { FormEvent, useState } from "react";

import { getUtmFromLocation, track } from "@/lib/analytics";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "error"; message: string }
  | { status: "success"; nextStepUrl: string };

const COMPANY_SIZES = [
  "1-49 employees",
  "50-249 employees",
  "250-999 employees",
  "1000+ employees",
];

const SERVICE_INTERESTS = [
  "AI Security Assessment",
  "Red Team Sprint",
  "Zero Trust Architecture Workshop",
  "Compliance and Risk Engineering",
];

const URGENCY_LEVELS = ["This month", "This quarter", "Exploring options"];

const BUDGET_BANDS = [
  "Under $15k",
  "$15k-$30k",
  "$30k-$75k",
  "$75k+",
  "Prefer to discuss",
];

export default function ContactLeadForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ status: "submitting" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    track("form_submit", { formId: "lead-contact" });

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      role: String(formData.get("role") || ""),
      companySize: String(formData.get("companySize") || ""),
      serviceInterest: String(formData.get("serviceInterest") || ""),
      urgency: String(formData.get("urgency") || ""),
      budgetBand: String(formData.get("budgetBand") || ""),
      message: String(formData.get("message") || ""),
      companyWebsite: String(formData.get("companyWebsite") || ""),
      sourcePage: "/contact",
      utm: getUtmFromLocation(),
    };

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as {
      ok: boolean;
      error?: string;
      nextStepUrl?: string;
    };

    if (!response.ok || !result.ok) {
      setSubmitState({
        status: "error",
        message: result.error || "Unable to submit right now.",
      });
      return;
    }

    const nextStepUrl = result.nextStepUrl || "/thank-you";
    setSubmitState({ status: "success", nextStepUrl });
    track("lead_submit_success", { formId: "lead-contact" });
    form.reset();
  }

  return (
    <div className="rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input
            name="name"
            required
            onFocus={() => track("form_start", { formId: "lead-contact" })}
            className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-cyan/60"
          />
        </div>

        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-cyan/60"
          />
        </div>

        <div>
          <label className="block text-sm">Company</label>
          <input
            name="company"
            required
            className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-cyan/60"
          />
        </div>

        <div>
          <label className="block text-sm">Role</label>
          <input
            name="role"
            required
            className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-cyan/60"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm">Company size</label>
            <select
              name="companySize"
              required
              className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-cyan/60"
              defaultValue=""
            >
              <option value="" disabled>
                Select one
              </option>
              {COMPANY_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm">Urgency</label>
            <select
              name="urgency"
              required
              className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-cyan/60"
              defaultValue=""
            >
              <option value="" disabled>
                Select one
              </option>
              {URGENCY_LEVELS.map((urgency) => (
                <option key={urgency} value={urgency}>
                  {urgency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm">Service interest</label>
          <select
            name="serviceInterest"
            required
            className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-cyan/60"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            {SERVICE_INTERESTS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm">Budget</label>
          <select
            name="budgetBand"
            required
            className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-cyan/60"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            {BUDGET_BANDS.map((band) => (
              <option key={band} value={band}>
                {band}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm">What outcomes are you targeting?</label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-cyan/60"
          />
        </div>

        <input type="text" name="companyWebsite" className="hidden" tabIndex={-1} autoComplete="off" />

        <button
          type="submit"
          disabled={submitState.status === "submitting"}
          className="rounded-full bg-cyan text-ink px-6 py-3 text-sm font-semibold hover:opacity-90 transition disabled:opacity-60"
        >
          {submitState.status === "submitting" ? "Submitting..." : "Request Assessment"}
        </button>
      </form>

      {submitState.status === "error" && (
        <p className="mt-3 text-sm text-red-300">{submitState.message}</p>
      )}

      {submitState.status === "success" && (
        <div className="mt-4 rounded-lg border border-cyan/40 bg-cyan/10 p-4 text-sm">
          Request received. Next step: book your discovery call.
          <div className="mt-2">
            <a
              href={submitState.nextStepUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("calendly_open", { source: "contact_success" })}
              className="text-sand underline"
            >
              Open scheduling
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
