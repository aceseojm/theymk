"use client";

import Link from "next/link";
import Image from "next/image";
import { audiences } from "@/lib/data";
import { notFound } from "next/navigation";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const enAudienceData: Record<string, {
  title: string;
  subtitle: string;
  body: string;
  cta: string;
  benefits: string[];
  faq: { q: string; a: string }[];
}> = {
  "agri-b2b": {
    title: "Agriculture B2B",
    subtitle: "Bulk Purchase · Distribution",
    body: "Nationwide distribution contracts and bulk purchases of 1 ton or more available. Lot-by-lot analysis reports and organic materials certifications provided. Supply continuity guaranteed through stable raw material procurement contracts.",
    cta: "Bulk Purchase Inquiry",
    benefits: [
      "Lot-by-lot analysis reports (Bito Analysis Center) provided",
      "Organic materials certification No. 공시-2-3-974 documentation provided",
      "Supply chain stability through 40 years of automation technology",
      "OMRI-certified ingredient base for overseas organic market entry",
      "Design-registered products that differentiate brand value",
    ],
    faq: [
      { q: "What is the minimum order quantity?", a: "The basic unit for B2B is 1 ton or more. Bulk supply contracts on a seasonal or annual basis are available." },
      { q: "Can analysis reports be provided?", a: "Yes. Lot-by-lot analysis reports from Bito Analysis Center are provided to B2B partners separately." },
      { q: "Is OEM production possible?", a: "Custom branding (OEM/ODM) for partner companies is available. Please visit the OEM page for details." },
    ],
  },
  golf: {
    title: "Golf Course",
    subtitle: "Green · Fairway Management",
    body: "HUMAS PREMIUM + AMINO GOLD dual application system. Manage turf from greens to rough with mechanical spreading optimization, odor-free design, and OMRI-certified ingredients.",
    cta: "Golf Course Solution Inquiry",
    benefits: [
      "Uniform pellets optimized for mechanical spreading (40 years of automation)",
      "Odor-free AMINO GOLD — applicable during business hours",
      "OMRI-certified ingredient base for eco-friendly transition and ESG compliance",
      "Dual application system: HUMAS PREMIUM for foundation, AMINO GOLD for maintenance",
      "Turf density and color uniformity improvement, reduced chemical fertilizer use",
    ],
    faq: [
      { q: "Will pellets block my spreader?", a: "No. Uniform pellet size from 40 years of automation technology prevents spreader blockages. Suitable for large-scale fairway spreading." },
      { q: "Can it be applied during business hours?", a: "Yes. AMINO GOLD is an odor-free product, eliminating complaints from guests even during operation hours." },
      { q: "Is sample testing possible first?", a: "Yes. We recommend sample testing before committing to annual contracts. Please inquire through the contact page." },
    ],
  },
  oem: {
    title: "OEM · ODM",
    subtitle: "Custom Branding",
    body: "Custom blending of ingredients, packaging, and branding available. Consultation available from small sample quantities.",
    cta: "OEM Proposal Request",
    benefits: [
      "Custom ingredient blend formulation",
      "Packaging design and branding customization",
      "Small-quantity sample consultation available",
      "Organic materials certification support",
      "Supply chain stability guarantee",
    ],
    faq: [
      { q: "What are the minimum quantities for OEM?", a: "Consultation is available from sample quantities. Please contact us for volume requirements." },
      { q: "Can I customize the ingredient blend?", a: "Yes. Custom formulation consulting is available based on your target crop and desired effect." },
      { q: "Is brand name registration possible?", a: "Yes. Product name and packaging design registration support is available." },
    ],
  },
  export: {
    title: "Export",
    subtitle: "Southeast Asia · Overseas Supply",
    body: "OMRI-based products well-suited for entry into overseas organic certification markets.",
    cta: "Export Partner Inquiry",
    benefits: [
      "OMRI-certified ingredient base for overseas organic market compatibility",
      "Organic materials certification documentation support",
      "Stable raw material supply through G-Teck Bioscience (Xian) partnership",
      "Quality guarantee through lot-by-lot analysis reports",
      "40 years of automation technology ensuring consistent quality",
    ],
    faq: [
      { q: "Which countries can be exported to?", a: "Southeast Asia and other overseas markets. Please inquire for specific country regulations and requirements." },
      { q: "What certifications are available?", a: "OMRI-certified ingredient base, Korean organic materials certification. International certification support consultation available." },
      { q: "Can you handle custom packaging for overseas markets?", a: "Yes. Packaging localization for export markets is possible. Please inquire for details." },
    ],
  },
  smartfarm: {
    title: "Smart Farm · Hydroponics",
    subtitle: "Precision Nutrient System",
    body: "The more precisely a smart farm is controlled by sensors and ICT automation, the more the purity and uniformity of nutrients absorbed by crops determines success. YMK supplies high-performance clean liquid nutrients optimized for smart greenhouses and hydroponic systems.",
    cta: "Smart Farm Solution Inquiry",
    benefits: [
      "Zero nozzle clogging — fine impurities fully removed by precision filtration",
      "Perfect solubility and uniform density — stable EC/pH monitoring support",
      "OMRI-certified ingredient base — applicable to eco-friendly certified hydroponics",
      "Ingredient transparency — 3rd-party analysis reports for precision fertilization planning",
      "B2B bulk supply contracts available for smart greenhouses and plant factories",
    ],
    faq: [
      { q: "Can AMINO GOLD be used directly in hydroponic systems?", a: "Yes. Its perfect solubility and odor-free design allows direct application to nutrient solution systems and drip lines." },
      { q: "I'm concerned about nozzle clogging.", a: "Precision filtration removes fine impurities, minimizing spray nozzle clogging." },
      { q: "Is custom blending available for plant factories?", a: "Yes. Custom blend consulting is available based on crop type and growth stage. Please inquire for details." },
    ],
  },
  home: {
    title: "Home Gardening",
    subtitle: "Small Quantity Purchase",
    body: "For home gardens and balcony planters. Odor-free pellet type, usable indoors.",
    cta: "Small Purchase Inquiry",
    benefits: [
      "Odor-free pellet type usable indoors and on balconies",
      "Safe organic materials certification base",
      "Easy application — no need to dissolve before use",
      "Suitable for various crops (vegetables, herbs, ornamentals)",
      "Long-term slow-release effect with small application amounts",
    ],
    faq: [
      { q: "Is it safe to use indoors?", a: "Yes. Odor-free pellet type is suitable for indoor pots and balcony planters." },
      { q: "How do I apply it?", a: "Sprinkle around the base of plants. Rainwater or watering will gradually dissolve and be absorbed into the soil." },
      { q: "Can it be used on all plants?", a: "Yes. Suitable for vegetables, herbs, ornamental plants, and fruit trees." },
    ],
  },
};

const heroImages: Record<string, string> = {
  "agri-b2b": "/images/audience-agri.jpg",
  export: "/images/export-hero.jpg",
  oem: "/images/oem-hero-v2.jpg",
  smartfarm: "/images/smartfarm.jpg",
  home: "/images/homegarden.png",
  golf: "/images/golf-course-v2.png",
};

type Props = { id: string };

export default function AudienceDetailClient({ id }: Props) {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.audiencesPage : en.audiencesPage;

  const seg = audiences.find((a) => a.id === id);
  if (!seg) notFound();

  const enData = enAudienceData[id];
  const currentIdx = audiences.findIndex((a) => a.id === id);
  const prev = audiences[currentIdx - 1];
  const next = audiences[currentIdx + 1];

  const isDark = seg.id === "golf" || seg.id === "export" || seg.id === "home" || seg.id === "smartfarm" || seg.id === "oem";
  const isLeaf = seg.id === "agri-b2b";
  const heroImg = heroImages[seg.id] ?? null;

  const displayTitle = lang === "ko" ? seg.title : enData.title;
  const displaySubtitle = lang === "ko" ? seg.subtitle : enData.subtitle;
  const displayBody = lang === "ko" ? seg.body : enData.body;
  const displayCta = lang === "ko" ? seg.cta : enData.cta;
  const displayBenefits = lang === "ko" ? seg.benefits : enData.benefits;
  const displayFaq = lang === "ko" ? seg.faq : enData.faq;

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden h-[520px] ${isLeaf ? "bg-leaf" : isDark ? "bg-forest" : "bg-paper"}`}>
        {heroImg && (
          <div className="absolute inset-0">
            <Image src={heroImg} alt={displayTitle} fill className={seg.id === "export" ? "object-contain" : "object-cover object-center"} priority />
            {seg.id === "smartfarm" && (
              <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/55 to-transparent" />
            )}
            {seg.id !== "home" && seg.id !== "export" && seg.id !== "agri-b2b" && seg.id !== "smartfarm" && seg.id !== "oem" && (
              <div className="absolute inset-0 bg-forest/75" />
            )}
          </div>
        )}
        <div className={`absolute inset-0 flex flex-col justify-end max-w-6xl mx-auto px-6 pb-12 w-full left-0 right-0 ${["home", "export", "agri-b2b"].includes(seg.id) ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]" : ""}`}>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8 absolute top-28 left-6" aria-label="breadcrumb">
            <Link href="/audiences" className={`hover:underline ${
              isLeaf || isDark ? "text-white/60 hover:text-white" : "text-forest/50 hover:text-forest"
            }`}>
              {t.breadcrumb}
            </Link>
            <span className={isLeaf || isDark ? "text-white/30" : "text-forest/30"}>/</span>
            <span className={isLeaf || isDark ? "text-white/80" : "text-forest/70"}>{displayTitle}</span>
          </nav>

          <p className={`text-sm font-medium uppercase tracking-widest mb-2 ${
            isLeaf || isDark ? "text-white/60" : "text-leaf"
          }`}>
            {displaySubtitle}
          </p>
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${
            isLeaf || isDark ? "text-white" : "text-forest"
          }`}>
            {displayTitle}
          </h1>
        </div>
      </section>

      {/* Sub copy + CTA */}
      <section className="bg-white py-10 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-6">
          <p className="text-lg leading-relaxed text-forest/70 md:max-w-xl">{displayBody}</p>
          <div className="md:ml-auto flex-shrink-0">
            <Link href="/contact" className="inline-block px-7 py-3.5 rounded-full font-semibold transition-colors bg-forest text-paper hover:bg-leaf">
              {displayCta} →
            </Link>
          </div>
        </div>
      </section>

      {/* Product highlights */}
      {"productHighlights" in seg && seg.productHighlights && (
        <section className="bg-paper py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-forest mb-10">{t.productHighlights}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {(seg.productHighlights as { product: string; features: { title: string; desc: string }[] }[]).map((ph) => {
                const bgImg = ph.product === "휴머스 프리미엄" ? "/images/humas long.png" : "/images/amino long.png";
                return (
                  <div key={ph.product} className="group relative">
                    <div className="relative z-10 mx-4 h-52 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-sage/20 to-paper/80 py-[1px]">
                      <Image src={bgImg} alt={ph.product} fill className="object-contain object-center group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="relative -mt-10 bg-white rounded-2xl pt-14 pb-8 px-8 shadow-md border border-sage/15">
                      <h3 className="text-base font-bold text-forest mb-6 pb-4 border-b border-sage/20">{ph.product}</h3>
                      <ul className="space-y-5">
                        {ph.features.map((f, i) => (
                          <li key={i} className="flex gap-4">
                            <div className="w-7 h-7 rounded-full bg-leaf/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3.5 h-3.5 text-leaf" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold text-forest mb-1">{f.title}</p>
                              <p className="text-forest/60 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Benefits + FAQ */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-forest mb-8">{t.benefits}</h2>
              <ul className="space-y-5">
                {displayBenefits.map((b, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-forest flex items-center justify-center text-leaf text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-forest/70 leading-relaxed">{b}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/contact" className="inline-block px-7 py-3.5 rounded-full bg-forest text-paper font-semibold hover:bg-leaf transition-colors">
                  {displayCta} →
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-forest mb-8">{t.faq}</h2>
              <div className="space-y-5">
                {displayFaq.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-sage/20">
                    <p className="font-semibold text-forest mb-2">Q. {item.q}</p>
                    <p className="text-forest/60 text-sm leading-relaxed">A. {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other audiences */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sage text-sm mb-6">{t.otherAudiences}</p>
          <div className="flex flex-wrap gap-3">
            {audiences.filter((a) => a.id !== seg.id).map((a) => {
              const enA = enAudienceData[a.id];
              return (
                <Link key={a.id} href={`/audiences/${a.id}`} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sage hover:bg-white/10 hover:text-paper transition-colors text-sm">
                  {lang === "ko" ? a.title : enA.title}
                </Link>
              );
            })}
          </div>

          {/* Prev / Next */}
          <div className="flex justify-between mt-10 pt-8 border-t border-white/10">
            {prev ? (
              <Link href={`/audiences/${prev.id}`} className="flex items-center gap-2 text-sage hover:text-paper transition-colors text-sm">
                ← {lang === "ko" ? prev.title : enAudienceData[prev.id].title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/audiences/${next.id}`} className="flex items-center gap-2 text-sage hover:text-paper transition-colors text-sm">
                {lang === "ko" ? next.title : enAudienceData[next.id].title} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
