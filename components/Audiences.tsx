"use client";

import Link from "next/link";
import { audiences } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const enAudiences = [
  { id: "agri-b2b", icon: "🌾", title: "Agriculture B2B", subtitle: "Bulk Purchase · Distribution", desc: "Bulk purchases of 1 ton or more, nationwide distribution contracts available. Lot-by-lot test reports and certifications provided.", cta: "Bulk Purchase Inquiry" },
  { id: "golf", icon: "⛳", title: "Golf Course", subtitle: "Green · Fairway Management", desc: "Uniform pellets optimized for mechanical spreading. No spreader blockages with 40 years of automation technology.", cta: "Golf Course Solution Inquiry" },
  { id: "oem", icon: "🏭", title: "OEM·ODM", subtitle: "Custom Branding", desc: "Ingredient blend, packaging, and branding customization. Consultation available from small sample quantities.", cta: "OEM Proposal Request" },
  { id: "export", icon: "✈️", title: "Export", subtitle: "Southeast Asia · Overseas Supply", desc: "OMRI-based products well-suited for entry into overseas organic certification markets.", cta: "Export Partner Inquiry" },
  { id: "home", icon: "🪴", title: "Home Gardening", subtitle: "Small Quantity Purchase", desc: "For home gardens and balcony planters. Odor-free pellet type, usable indoors.", cta: "Small Purchase Inquiry" },
];

export default function Audiences() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.audiencesSection : en.audiencesSection;
  const displayAudiences = lang === "ko" ? audiences : enAudiences;

  return (
    <section id="audiences" className="bg-forest py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            {t.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-paper">
            {t.title1}{" "}
            <span className="text-leaf-bright">{t.title2}</span>
          </h2>
          <p className="mt-4 text-sage max-w-xl">
            {t.subtitle}
          </p>
          <Link
            href="/audiences"
            className="inline-flex items-center gap-2 mt-4 text-sm text-leaf hover:text-leaf-bright transition-colors font-medium"
          >
            {t.ctaLink}
          </Link>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayAudiences.map((a, i) => (
            <div
              key={a.id}
              className={`rounded-2xl p-7 border transition-all hover:-translate-y-1 cursor-default ${
                i === 0
                  ? "bg-leaf text-white border-leaf"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="text-3xl mb-4">{a.icon}</div>
              <p
                className={`text-xs font-medium uppercase tracking-widest mb-1 ${
                  i === 0 ? "text-white/70" : "text-sage"
                }`}
              >
                {a.subtitle}
              </p>
              <h3
                className={`text-xl font-bold mb-3 ${
                  i === 0 ? "text-white" : "text-paper"
                }`}
              >
                {a.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  i === 0 ? "text-white/80" : "text-sage"
                }`}
              >
                {a.desc}
              </p>
              <a
                href="#contact"
                className={`inline-block text-sm font-medium py-2 px-4 rounded-full transition-colors ${
                  i === 0
                    ? "bg-white text-leaf hover:bg-paper"
                    : "border border-sage/40 text-sage hover:bg-white/10 hover:text-paper"
                }`}
              >
                {a.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
