"use client";

import Link from "next/link";
import { whyItems } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const icons: Record<string, React.ReactNode> = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 19.48 18 20 18 20l2-2-1.484-1.75 1.106-2.648L22 13v-2l-2.378-.605Z" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M3 21h18M3 7v14M21 7v14M9 3v18M15 3v18M3 7l6-4 6 4 6-4" />
    </svg>
  ),
};

const enWhyItems = [
  {
    icon: "globe",
    title: "OMRI-Certified Ingredients, Exclusively Sourced Domestically",
    body: "OMRI (Organic Materials Review Institute) is an independent US organization that assesses international standard compliance of organic agricultural material ingredients. YMK is the sole domestic supplier of ingredients from China's G-Teck Bioscience (Xian) that meet these standards.",
    detail: "Origin: G-Teck Bioscience (Xian), China",
  },
  {
    icon: "gear",
    title: "40 Years of Pellet Automation Technology",
    body: "YMK holds the longest pellet automation experience in the domestic fertilizer industry. Uniform pellet size and density are essential for preventing mechanical spreader blockages and accurately controlling application rates.",
    detail: "Optimized for mechanical spreading on golf courses and large farmland",
  },
  {
    icon: "factory",
    title: "In-house Production with Lot-by-Lot Quality Verification",
    body: "Without outsourcing, we operate the entire process in-house — from raw material intake to finished product shipment. Third-party analysis reports (Bito Analysis Center) are issued for every production lot.",
    detail: "Analysis reports provided separately to B2B partners",
  },
];

export default function WhySection() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.whySection : en.whySection;
  const items = lang === "ko" ? whyItems : enWhyItems;

  return (
    <section id="why" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            {t.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-forest max-w-xl leading-snug">
            {t.title1}{" "}
            <span className="text-leaf">{t.title2}</span>
          </h2>
          <p className="mt-4 text-forest/70 max-w-xl">
            {t.subtitle}
          </p>
        </div>

        {/* More link */}
        <div className="mb-10">
          <Link
            href="/why"
            className="inline-flex items-center gap-2 text-sm text-leaf hover:text-leaf-bright transition-colors font-medium"
          >
            {t.ctaLink}
          </Link>
        </div>

        {/* Card grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-sage/20 hover:border-leaf/40 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-forest flex items-center justify-center text-leaf mb-6 group-hover:bg-leaf group-hover:text-white transition-colors">
                {icons[item.icon]}
              </div>
              <h3 className="text-lg font-bold text-forest mb-3">{item.title}</h3>
              <p className="text-forest/70 text-sm leading-relaxed mb-4">{item.body}</p>
              <p className="text-xs text-leaf font-medium border-t border-sage/20 pt-4">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
