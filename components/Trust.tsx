"use client";

import Link from "next/link";
import { trustItems } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const enTrustItems = [
  {
    badge: "Cert. · HP",
    title: "HUMAS PREMIUM Organic Materials Certification",
    number: "No. 공시-2-3-974",
    issuer: "Kangwon National University, Center for Eco-friendly Agricultural Product Safety",
    period: "Valid: 2026.02.26 ~ 2029.02.25",
    detail: "Organic materials certification per Fertilizer Management Act. Component labeling is exactly as stated in the certification.",
  },
  {
    badge: "Cert. · AG",
    title: "AMINO GOLD Organic Materials Certification",
    number: "Cert. number to be registered",
    issuer: "Organic materials certification obtained",
    period: "Certification renewal scheduled",
    detail: "AMINO GOLD is also registered as an organic materials certified product.",
  },
  {
    badge: "Design Reg.",
    title: "Design Registration Rights (2 Products)",
    number: "No. 30-1350642 et al.",
    issuer: "Korean Intellectual Property Office",
    period: "Fertilizer packaging bags — HUMAS PREMIUM · AMINO GOLD",
    detail: "Both products protect brand assets through packaging design registration.",
  },
  {
    badge: "OMRI Ingredients",
    title: "OMRI Ingredient Standard",
    number: "Ingredient standard applied",
    issuer: "Organic Materials Review Institute",
    period: "Supplied by G-Teck Bioscience (Xian)",
    detail: "OMRI certification refers to ingredient standards. Do not confuse with finished product OMRI Listed® labeling.",
  },
];

export default function Trust() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.trustSection : en.trustSection;
  const displayItems = lang === "ko" ? trustItems : enTrustItems;

  return (
    <section id="trust" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            {t.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-forest">
            <span className="text-leaf">{t.title1}</span>{" "}
            {t.title2}
          </h2>
          <p className="mt-4 text-forest/70 max-w-xl">
            {t.subtitle}
          </p>
          <Link
            href="/trust"
            className="inline-flex items-center gap-2 mt-4 text-sm text-leaf hover:text-leaf-bright transition-colors font-medium"
          >
            {t.ctaLink}
          </Link>
        </div>

        {/* Certification cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {displayItems.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-sage/20">
              <span className="inline-block px-3 py-1 rounded-full bg-forest text-leaf-bright text-xs font-bold mb-4">
                {item.badge}
              </span>
              <h3 className="text-lg font-bold text-forest mb-2">{item.title}</h3>
              <p className="text-leaf font-semibold text-sm mb-3">{item.number}</p>
              <div className="space-y-1 text-sm text-forest/60 mb-4">
                <p>{item.issuer}</p>
                <p>{item.period}</p>
              </div>
              <p className="text-xs text-forest/50 border-t border-sage/20 pt-4 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Transparency declaration block */}
        <div className="rounded-2xl bg-forest p-10 text-center">
          <h3 className="text-2xl font-bold text-paper mb-4">
            {t.declarationTitle}
          </h3>
          <p className="text-sage max-w-2xl mx-auto leading-relaxed mb-6">
            {t.declarationBody}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {t.items.map((item) => (
              <div key={item} className="flex items-center gap-2 text-leaf-bright">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sage">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
