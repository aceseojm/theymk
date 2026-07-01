"use client";

import Link from "next/link";
import Image from "next/image";
import { audiences } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const cardBg: Record<string, string> = {
  "agri-b2b": "bg-leaf",
  golf: "bg-forest",
  oem: "bg-white border border-sage/20",
  export: "bg-forest",
  home: "bg-sage",
};

const textMain: Record<string, string> = {
  "agri-b2b": "text-white",
  golf: "text-paper",
  oem: "text-forest",
  export: "text-paper",
  home: "text-forest",
};

const textSub: Record<string, string> = {
  "agri-b2b": "text-white/70",
  golf: "text-sage",
  oem: "text-forest/60",
  export: "text-sage",
  home: "text-forest/70",
};

const ctaStyle: Record<string, string> = {
  "agri-b2b": "bg-white text-leaf hover:bg-paper",
  golf: "bg-white/10 border border-white/30 text-white hover:bg-white/20",
  oem: "bg-forest text-paper hover:bg-leaf",
  export: "bg-white/10 border border-white/30 text-white hover:bg-white/20",
  home: "bg-forest text-paper hover:bg-leaf",
};

const cardImage: Record<string, string | null> = {
  "agri-b2b": "/images/audience-agri.jpg",
  golf: "/images/golf-hero.jpg",
  oem: "/images/oem-hero-v2.jpg",
  export: "/images/export-hero.jpg",
  home: "/images/homegarden.png",
};

const enAudienceMap: Record<string, { title: string; subtitle: string; desc: string; cta: string }> = {
  "agri-b2b": { title: "Agriculture B2B", subtitle: "Bulk Purchase · Distribution", desc: "Bulk purchases of 1 ton or more, nationwide distribution contracts available. Lot-by-lot test reports and certifications provided.", cta: "Bulk Purchase Inquiry" },
  golf: { title: "Golf Course", subtitle: "Green · Fairway Management", desc: "Uniform pellets optimized for mechanical spreading. No spreader blockages with 40 years of automation technology.", cta: "Golf Course Solution Inquiry" },
  oem: { title: "OEM·ODM", subtitle: "Custom Branding", desc: "Ingredient blend, packaging, and branding customization. Consultation available from small sample quantities.", cta: "OEM Proposal Request" },
  export: { title: "Export", subtitle: "Southeast Asia · Overseas Supply", desc: "OMRI-based products well-suited for entry into overseas organic certification markets.", cta: "Export Partner Inquiry" },
  home: { title: "Home Gardening", subtitle: "Small Quantity Purchase", desc: "For home gardens and balcony planters. Odor-free pellet type, usable indoors.", cta: "Small Purchase Inquiry" },
};

export default function AudiencesPage() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.audiencesPage : en.audiencesPage;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/audiences-collage.jpg"
            alt=""
            fill
            className="object-cover object-center brightness-0 invert opacity-50"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-4">{t.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-paper leading-tight mb-6 max-w-2xl">
            {t.title}{" "}
            <span className="text-leaf-bright">{t.titleHighlight}</span>
          </h1>
          <p className="text-sage text-lg max-w-xl leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* Card grid */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((seg) => {
              const img = cardImage[seg.id];
              const enData = enAudienceMap[seg.id];
              const title = lang === "ko" ? seg.title : enData.title;
              const subtitle = lang === "ko" ? seg.subtitle : enData.subtitle;
              const desc = lang === "ko" ? seg.desc : enData.desc;
              const cta = lang === "ko" ? seg.cta : enData.cta;

              return (
                <Link
                  key={seg.id}
                  href={`/audiences/${seg.id}`}
                  className={`group relative rounded-2xl p-8 flex flex-col justify-between min-h-64 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl ${img ? "" : cardBg[seg.id]}`}
                >
                  {img && (
                    <>
                      <Image src={img} alt={title} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-transparent" />
                    </>
                  )}
                  <div className="relative z-10">
                    <p className={`text-xs font-medium uppercase tracking-widest mb-1 ${img ? "text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" : textSub[seg.id]}`}>
                      {subtitle}
                    </p>
                    <h2 className={`text-xl font-bold mb-3 ${img ? "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" : textMain[seg.id]}`}>
                      {title}
                    </h2>
                    <p className={`text-sm leading-relaxed ${img ? "text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" : textSub[seg.id]}`}>
                      {desc}
                    </p>
                  </div>
                  <div className="relative z-10 mt-6">
                    <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      img ? "bg-white/15 border border-white/40 text-white hover:bg-white/25" : ctaStyle[seg.id]
                    }`}>
                      {t.viewDetail}
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
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
          <Link href="/contact" className="inline-block px-8 py-3.5 rounded-full bg-leaf text-white font-semibold hover:bg-leaf-bright transition-colors">
            {t.ctaContact}
          </Link>
        </div>
      </section>
    </>
  );
}
