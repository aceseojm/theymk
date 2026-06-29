"use client";

import Link from "next/link";
import { rawIngredients } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const ingredientEnNames: Record<string, string> = {
  "amino-acid": "Plant-Based Amino Acids",
  "humic-acid": "Humic Acid",
  "fulvic-acid": "Fulvic Acid",
  "alginic-acid": "Alginic Acid",
  "seaweed-extract": "Seaweed Extract",
  "miracle-510": "Miracle 510",
  "yk2": "YK2",
};

// OMRI Listed 원료 카드 색상
const accent = [
  { bg: "bg-leaf", text: "text-white", sub: "text-white/70" },
  { bg: "bg-forest", text: "text-paper", sub: "text-sage" },
  { bg: "bg-paper border border-sage/20", text: "text-forest", sub: "text-forest/60" },
  { bg: "bg-forest", text: "text-paper", sub: "text-sage" },
  { bg: "bg-sage", text: "text-forest", sub: "text-forest/70" },
  { bg: "bg-paper border border-sage/20", text: "text-forest", sub: "text-forest/60" },
  { bg: "bg-forest", text: "text-paper", sub: "text-sage" },
];

const enBadges = [
  { label: "Amino Acid Cert.", category: "NOP Amino Acids", product: "Soy Proteins" },
  { label: "Alginic Acid", category: "NOP Humic Acids – alkali extracted", product: "Potassium Humate" },
  { label: "Humic Acid", category: "NOP Seaweed and Seaweed Products", product: "Seaweed Extract" },
];

export default function IngredientsPage() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.ingredientsPage : en.ingredientsPage;

  const badges = lang === "ko"
    ? [
        { label: "아미노산 인증", category: "NOP Amino Acids", product: "Soy Proteins" },
        { label: "알긴산", category: "NOP Humic Acids – alkali extracted", product: "Potassium Humate" },
        { label: "휴믹산", category: "NOP Seaweed and Seaweed Products", product: "Seaweed Extract" },
      ]
    : enBadges;

  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" aria-label="breadcrumb">
            <Link href="/products" className="text-white/50 hover:text-white hover:underline">
              {t.breadcrumb}
            </Link>
            <span className="text-white/25">/</span>
            <span className="text-white/75">{t.breadcrumbSub}</span>
          </nav>

          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-4">
            {t.label}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-paper leading-tight mb-6 max-w-2xl">
            {t.title}{" "}
            <span className="text-leaf-bright">{t.titleHighlight}</span>
          </h1>
          <p className="text-sage text-lg max-w-xl leading-relaxed mb-10">{t.subtitle}</p>

          {/* OMRI cert 3 badges */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
            {badges.map((cert) => (
              <div key={cert.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-leaf-bright font-bold text-xs">OMRI</span>
                </div>
                <p className="text-paper text-sm font-semibold mb-1">{cert.label}</p>
                <p className="text-sage/60 text-xs leading-tight">{cert.category}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div>
              <p className="text-sage/50 text-xs mb-1">{t.charLabel}</p>
              <div className="flex flex-wrap gap-2">
                {t.charItems.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sage text-xs">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sage/50 text-xs mb-1">{t.roleLabel}</p>
              <div className="flex flex-wrap gap-2">
                {t.roleItems.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-leaf/10 border border-leaf/20 text-leaf-bright text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient 7 items */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-forest mb-12">{t.detailTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rawIngredients.map((ing, i) => {
              const c = accent[i % accent.length];
              return (
                <div key={ing.id} className={`rounded-2xl overflow-hidden ${c.bg}`}>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        c.bg.includes("bg-paper") || c.bg.includes("bg-sage")
                          ? "bg-forest text-leaf-bright"
                          : "bg-white/15 text-white"
                      }`}>
                        {ing.no}
                      </span>
                      <div>
                        <h3 className={`text-lg font-bold ${c.text}`}>
                          {lang === "ko" ? ing.name : (ingredientEnNames[ing.id] ?? ing.name)}
                        </h3>
                        <p className={`text-xs ${c.sub}`}>{ing.source}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-0 mb-5">
                      <div>
                        <p className={`text-xs font-medium uppercase tracking-widest mb-2 ${c.sub}`}>
                          {t.featureLabel}
                        </p>
                        <ul className="space-y-1.5">
                          {ing.features.map((f, j) => (
                            <li key={j} className={`flex gap-2 items-start text-sm ${c.sub}`}>
                              <span className="mt-1 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className={`text-xs font-medium uppercase tracking-widest mb-2 ${c.sub}`}>
                          {t.effectLabel}
                        </p>
                        <p className={`text-sm leading-relaxed ${c.sub}`}>{ing.effects}</p>
                      </div>
                    </div>

                    <div className={`text-xs px-3 py-2 rounded-lg ${
                      c.bg.includes("bg-paper") || c.bg.includes("bg-sage")
                        ? "bg-forest/5 text-forest/50"
                        : "bg-white/10 text-white/40"
                    }`}>
                      {t.omriLabel} {ing.omriCategory}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-paper mb-4">{t.ctaTitle}</h2>
          <p className="text-sage mb-8">{t.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products/humus-premium"
              className="px-6 py-3 rounded-full bg-leaf text-white font-medium hover:bg-leaf-bright transition-colors"
            >
              {t.ctaHumus}
            </Link>
            <Link
              href="/products/amino-gold"
              className="px-6 py-3 rounded-full border border-sage/30 text-sage hover:text-paper hover:border-white/40 transition-colors"
            >
              {t.ctaAmino}
            </Link>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sage/40 text-xs">{t.omriNote}</p>
          </div>
        </div>
      </section>
    </>
  );
}
