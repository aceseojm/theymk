"use client";

import Link from "next/link";
import Image from "next/image";
import { audiences } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const enAudiences = [
  { id: "agri-b2b", icon: "🌾", title: "Agriculture B2B", subtitle: "Bulk Purchase · Distribution", desc: "Bulk purchases and nationwide distribution. Lot-by-lot test reports and certifications provided.", cta: "Bulk Purchase Inquiry" },
  { id: "golf", icon: "⛳", title: "Golf Course", subtitle: "Green · Fairway Management", desc: "Optimized nutrition supply to improve turf density and color for sustainable course management.", cta: "Golf Course Solution Inquiry" },
  { id: "oem", icon: "🏭", title: "OEM·ODM", subtitle: "Custom Branding", desc: "Custom ingredient design and packaging to strengthen brand competitiveness with fertilizer OEM·ODM solutions.", cta: "OEM Proposal Request" },
  { id: "export", icon: "✈️", title: "Export", subtitle: "Global Supply", desc: "Strict quality management and stable production for fertilizers trusted in the global market.", cta: "Export Partner Inquiry" },
  { id: "smartfarm", icon: "🧪", title: "Smart Farm · Hydroponics", subtitle: "Precision Nutrient System", desc: "High-performance clean liquid nutrients optimized for smart greenhouses and hydroponic systems.", cta: "Smart Farm Inquiry" },
  { id: "home", icon: "🪴", title: "Home Gardening", subtitle: "Small Quantity Purchase", desc: "Safe and effective fertilizer for home plant care, easy to use indoors.", cta: "Small Purchase Inquiry" },
];

const cardImages: Record<string, string> = {
  "agri-b2b": "/images/audience-agri.jpg",
  golf: "/images/golf-hero.jpg",
  oem: "/images/oem-hero-v2.jpg",
  export: "/images/export-hero.jpg",
  smartfarm: "/images/homegarden.png",
  home: "/images/homegarden.png",
};

export default function Audiences() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.audiencesSection : en.audiencesSection;
  const displayAudiences = lang === "ko" ? audiences : enAudiences;

  return (
    <section id="audiences" className="bg-forest py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">{t.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-paper">
            {t.title1}{" "}
            <span className="text-leaf-bright">{t.title2}</span>
          </h2>
          <p className="mt-4 text-sage max-w-xl">{t.subtitle}</p>
          <Link href="/audiences" className="inline-flex items-center gap-2 mt-4 text-sm text-leaf hover:text-leaf-bright transition-colors font-medium">
            {t.ctaLink}
          </Link>
        </div>

        {/* 5-column horizontal strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {displayAudiences.map((a) => (
            <Link
              key={a.id}
              href={`/audiences/${a.id}`}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-leaf/40 transition-all hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={cardImages[a.id]}
                  alt={a.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-leaf/20 flex items-center justify-center text-sm flex-shrink-0">{a.icon}</span>
                  <h3 className="text-paper font-bold text-sm leading-tight">{a.title}</h3>
                </div>
                <p className="text-sage text-xs leading-relaxed">{a.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-5 text-sage/40 text-xs">
          {lang === "ko"
            ? "※ 위 이미지는 이해를 돕기 위한 예시이며, 실제 적용 시 제품·환경에 따라 달라질 수 있습니다."
            : "※ Images above are illustrative examples. Actual results may vary depending on product and environment."}
        </p>
      </div>
    </section>
  );
}
