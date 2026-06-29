"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

type FormState = {
  company: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  message: string;
  consent: boolean;
};

export default function ContactInner() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.contact : en.contact;

  const [form, setForm] = useState<FormState>({
    company: "",
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const set =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const typeLabel: Record<string, string> = {
      bulk: "대량 구매", golf: "골프장 도입", oem: "OEM·ODM",
      export: "수출 파트너십", home: "홈가드닝 소량 구매", other: "기타",
    };

    try {
      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx2_PasF3dk0mTfMs3yknWi6I0bdCQ27xGxGb2cqa1Jy7aeL1cFNOxHSzoIA6lEu2ox/exec";

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: form.company,
          name: form.name,
          phone: form.phone,
          email: form.email,
          type: typeLabel[form.type] || form.type,
          message: form.message,
        }),
      });
      setSubmitted(true);
    } catch {
      setError(t.errorMsg);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 rounded-full bg-leaf/10 flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-leaf"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-forest mb-2">{t.successTitle}</h3>
        <p className="text-forest/60 text-sm">
          {t.successDesc}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-forest mb-1.5">
            {t.companyName}
          </label>
          <input
            type="text"
            value={form.company}
            onChange={set("company")}
            placeholder={t.companyPlaceholder}
            className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-forest mb-1.5">
            {t.contactPerson} <span className="text-clay">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            required
            placeholder={t.namePlaceholder}
            className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-forest mb-1.5">
            {t.phone} <span className="text-clay">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            required
            placeholder={t.phonePlaceholder}
            className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-forest mb-1.5">
            {t.email}
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-forest mb-1.5">
          {t.inquiryType}
        </label>
        <select
          value={form.type}
          onChange={set("type")}
          className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm focus:outline-none focus:border-leaf"
        >
          <option value="">{t.selectPlaceholder}</option>
          <option value="bulk">{t.typeBulk}</option>
          <option value="golf">{t.typeGolf}</option>
          <option value="oem">{t.typeOem}</option>
          <option value="export">{t.typeExport}</option>
          <option value="home">{t.typeHome}</option>
          <option value="other">{t.typeOther}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-forest mb-1.5">
          {t.message}
        </label>
        <textarea
          value={form.message}
          onChange={set("message")}
          rows={4}
          placeholder={t.messagePlaceholder}
          className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf resize-none"
        />
      </div>

      {/* Privacy consent */}
      <div className="p-4 rounded-xl bg-sage/10 border border-sage/20">
        <label className="flex gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={set("consent")}
            required
            className="mt-0.5 w-4 h-4 accent-leaf flex-shrink-0"
          />
          <span className="text-xs text-forest/70 leading-relaxed">
            <strong className="text-forest">{t.consentRequired}</strong> {t.consentText}
          </span>
        </label>
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}
      <button
        type="submit"
        disabled={!form.consent || sending}
        className="w-full py-3.5 rounded-xl bg-forest text-paper font-semibold hover:bg-leaf transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {sending ? t.sending : t.submit}
      </button>
    </form>
  );
}
