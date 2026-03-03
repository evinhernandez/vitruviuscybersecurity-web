"use client";

import { FormEvent, useState } from "react";

import { getUtmFromLocation, track } from "@/lib/analytics";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "error"; message: string }
  | { status: "success"; delivery: string };

export default function LeadMagnetForm() {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "submitting" });

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/lead-magnet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        assetId: "ai-security-executive-brief",
        companyWebsite: String(formData.get("companyWebsite") || ""),
        utm: getUtmFromLocation(),
      }),
    });

    const result = (await response.json()) as {
      ok: boolean;
      error?: string;
      delivery?: string;
    };

    if (!response.ok || !result.ok || !result.delivery) {
      setState({ status: "error", message: result.error || "Try again in a moment." });
      return;
    }

    track("asset_download", { assetId: "ai-security-executive-brief" });
    setState({ status: "success", delivery: result.delivery });
  }

  return (
    <div className="rounded-xl2 border border-line bg-slate2/30 p-6">
      <div className="text-sm font-semibold">Download: AI Security Executive Brief</div>
      <p className="mt-2 text-sm text-muted">
        Get the 90-day governance and control checklist used in our assessments.
      </p>

      <form onSubmit={onSubmit} className="mt-4 space-y-3">
        <input
          name="name"
          placeholder="Name"
          className="w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-gold/60"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Work email"
          className="w-full rounded-lg bg-ink/40 border border-line px-4 py-3 text-sm outline-none focus:border-gold/60"
        />

        <input type="text" name="companyWebsite" className="hidden" tabIndex={-1} autoComplete="off" />

        <button
          type="submit"
          disabled={state.status === "submitting"}
          className="rounded-full bg-gold text-ink px-5 py-2 text-sm font-semibold hover:opacity-90 transition disabled:opacity-60"
        >
          {state.status === "submitting" ? "Sending..." : "Get Brief"}
        </button>
      </form>

      {state.status === "error" && <p className="mt-3 text-sm text-red-300">{state.message}</p>}

      {state.status === "success" && (
        <p className="mt-3 text-sm text-sand">
          Download ready: <a href={state.delivery} className="underline">Open executive brief</a>
        </p>
      )}
    </div>
  );
}
