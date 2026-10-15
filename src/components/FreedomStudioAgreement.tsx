import React, { useState } from "react";

const initial = {
  fullName: "",
  email: "",
  phone: "",
  type: "Studio Rental",
  representative: "",
  eventName: "",
  date: "",
  start: "",
  end: "",
  guests: "",
  total: "",
  deposit: "",
  balanceDue: "",
  details: "",
  specialTerms: "",
  signature: "",
  copy: false,
};
const policies = [
  [
    "cameras",
    "I understand that security cameras operate at Freedom Dance Studio.",
  ],
  [
    "alcohol",
    "I will not bring, serve, or sell hard liquor. Any other alcohol requires prior written studio approval and compliance with applicable law.",
  ],
  [
    "equipment",
    "I am responsible for approved use of the studio, equipment, and any damage caused by my group, excluding ordinary wear.",
  ],
  [
    "payment",
    "I understand the written price, deposit, remaining balance, and payment deadlines shown in this agreement.",
  ],
  [
    "cancellation",
    "I understand that rental deposits are non-refundable under the standard rental policy unless the studio agrees otherwise in writing.",
  ],
  [
    "safety",
    "I will respect occupancy limits, permitted hours, safety instructions, cleanup requirements, and applicable laws.",
  ],
  [
    "terms",
    "I have reviewed the agreement details and studio terms and understand that the studio must separately approve the request.",
  ],
];
export default function FreedomStudioAgreement() {
  const [form, setForm] = useState(initial);
  const [checks, setChecks] = useState({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const input = (label, key, type = "text", required = false) => (
    <label className="block text-sm font-medium text-zinc-800">
      {label}
      <input
        type={type}
        required={required}
        value={form[key]}
        onChange={(e) => set(key, e.target.value)}
        className="mt-1 w-full rounded-lg border border-zinc-300 p-3 focus:outline-none focus:ring-2 focus:ring-zinc-800"
      />
    </label>
  );
  async function submit(e) {
    e.preventDefault();
    if (!policies.every(([key]) => checks[key])) {
      setStatus("Please accept every required policy.");
      return;
    }
    if (
      form.signature.trim().toLowerCase() !== form.fullName.trim().toLowerCase()
    ) {
      setStatus("Please sign using your full name exactly as entered above.");
      return;
    }
    setSending(true);
    setStatus("");
    const record = {
      ...form,
      policyAcknowledgments: Object.fromEntries(
        policies.map(([key, text]) => [key, text]),
      ),
      submittedAt: new Date().toISOString(),
      agreementStatus: "Customer submitted — pending studio approval",
    };
    try {
      const res = await fetch("/.netlify/functions/submit-studio-agreement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus(
        "Your agreement was submitted successfully. Freedom Dance Studio will review and confirm it.",
      );
      setForm(initial);
      setChecks({});
    } catch {
      setStatus(
        "We could not send your agreement. Please try again or contact Freedom Dance Studio.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <section className="mx-auto max-w-3xl rounded-2xl bg-white p-5 text-zinc-900 shadow-lg sm:p-9">
      <h2 className="text-3xl font-bold">Freedom Dance Studio</h2>
      <p className="mt-1 text-lg font-semibold">Agreement & Confirmation</p>
      <p className="mt-3 text-sm text-zinc-600">
        Complete this form after discussing your arrangement with a studio
        representative. Your submission is pending studio confirmation.
      </p>
      <form onSubmit={submit} className="mt-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {input("Full legal name", "fullName", "text", true)}
          {input("Email", "email", "email", true)}
          {input("Phone", "phone", "tel", true)}
          {input(
            "Studio representative you spoke with",
            "representative",
            "text",
            true,
          )}
          <label className="block text-sm font-medium">
            Agreement type
            <select
              className="mt-1 w-full rounded-lg border p-3"
              value={form.type}
              onChange={(e) => set("type", e.target.value)}
            >
              {[
                "Studio Rental",
                "Event",
                "Music Rehearsal",
                "Dance Class",
                "Partnership",
                "Other",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          {input("Event or project name", "eventName")}
          {input("Date", "date", "date", true)}
          {input("Expected guests", "guests", "number")}
          {input("Start time", "start", "time", true)}
          {input("End time", "end", "time", true)}
          {input("Agreed total ($)", "total", "number", true)}
          {input("Deposit ($)", "deposit", "number")}
          {input("Remaining balance / due date", "balanceDue")}
        </div>
        <label className="block text-sm font-medium">
          Everything we discussed and agreed upon
          <textarea
            required
            rows={5}
            value={form.details}
            onChange={(e) => set("details", e.target.value)}
            placeholder="Describe the space, equipment, services, responsibilities, deadlines and all other promises..."
            className="mt-1 w-full rounded-lg border p-3"
          />
        </label>
        <label className="block text-sm font-medium">
          Special arrangements or exceptions
          <textarea
            rows={3}
            value={form.specialTerms}
            onChange={(e) => set("specialTerms", e.target.value)}
            className="mt-1 w-full rounded-lg border p-3"
          />
        </label>
        <div className="rounded-xl bg-zinc-100 p-5">
          <h3 className="text-lg font-bold">Studio policies & terms</h3>
          <p className="mt-2 text-sm">
            Standard studio rental terms: rentals generally require a 2-hour
            minimum; a 50% non-refundable reservation deposit; the remaining
            balance is due before the rental begins. Rates vary from $20 to $120
            per hour. The studio may apply an occupancy-based rate or require a
            separate quote. Written, studio-approved exceptions take precedence.
          </p>
          <div className="mt-4 space-y-3">
            {policies.map(([key, text]) => (
              <label key={key} className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  required
                  checked={!!checks[key]}
                  onChange={(e) =>
                    setChecks((c) => ({ ...c, [key]: e.target.checked }))
                  }
                  className="mt-1"
                />
                <span>{text}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="rounded-xl border p-4">
          <p className="text-sm">
            By typing my full legal name below, I electronically sign this
            submission and confirm that the information and acknowledgments are
            accurate. I understand the studio must separately approve the final
            agreement.
          </p>
          <div className="mt-4">
            {input(
              "Electronic signature (full legal name)",
              "signature",
              "text",
              true,
            )}
          </div>
          <label className="mt-3 flex gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.copy}
              onChange={(e) => set("copy", e.target.checked)}
            />
            Email me a copy of my submitted agreement
          </label>
        </div>
        <button
          disabled={sending}
          type="submit"
          className="w-full rounded-xl bg-zinc-900 p-4 font-semibold text-white disabled:opacity-50"
        >
          {sending ? "Submitting..." : "Sign & Submit Agreement"}
        </button>
        {status && (
          <p role="status" className="text-sm font-semibold">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
