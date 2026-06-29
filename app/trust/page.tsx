"use client";

import Link from "next/link";
import Image from "next/image";
import { trustItems, company } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const ingredients = [
  { name: "탈지대두", nameEn: "Defatted Soybean", ratio: 57, color: "#6BA12B" },
  { name: "해조", nameEn: "Seaweed", ratio: 20, color: "#8DC63F" },
  { name: "골분", nameEn: "Bone Meal", ratio: 19, color: "#A7BE89" },
  { name: "토탄", nameEn: "Peat", ratio: 4, color: "#143019" },
];

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

export default function TrustPage() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.trustPage : en.trustPage;
  const displayTrustItems = lang === "ko" ? trustItems : enTrustItems;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div className="hero-gradient-overlay absolute inset-0 opacity-40" />
        <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row md:items-end gap-10">
          <div className="flex-1">
            <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-4">{t.label}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-paper leading-tight mb-6 max-w-2xl">
              {t.title}{" "}
              <span className="text-leaf-bright">{t.titleHighlight}</span>
            </h1>
            <p className="text-sage text-lg max-w-xl leading-relaxed">{t.subtitle}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {[
              { src: "/images/cert-design-humus.png", label: t.certThumb1 },
              { src: "/images/cert-design-amino.png", label: t.certThumb2 },
              { src: "/images/cert-organic.png", label: t.certThumb3 },
              { src: "/images/cert-test.png", label: t.certThumb4 },
            ].map((cert) => (
              <div key={cert.src} className="flex flex-col items-center gap-1.5">
                <div className="relative w-16 h-22 rounded-md overflow-hidden border border-white/20 shadow-lg">
                  <Image src={cert.src} alt={cert.label.replace("\n", " ")} width={64} height={88} className="object-cover object-top w-full h-full" />
                </div>
                <p className="text-sage/60 text-[9px] text-center leading-tight whitespace-pre-line">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification details */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-forest mb-10">{t.certTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {displayTrustItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-sage/20">
                <span className="inline-block px-3 py-1.5 rounded-full bg-forest text-leaf-bright text-xs font-bold mb-5">{item.badge}</span>
                <h3 className="text-xl font-bold text-forest mb-2">{item.title}</h3>
                <p className="text-leaf font-semibold text-sm mb-4">{item.number}</p>
                <div className="space-y-2 text-sm text-forest/60 mb-5 pb-5 border-b border-sage/20">
                  <p>{item.issuer}</p>
                  <p>{item.period}</p>
                </div>
                <p className="text-xs text-forest/50 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organic materials cert detail */}
      <section className="bg-forest py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block text-xs text-leaf uppercase tracking-widest font-medium mb-3">{t.certDetailLabel}</span>
              <h2 className="text-3xl font-bold text-paper mb-5">공시-2-3-974호</h2>
              <p className="text-sage leading-relaxed mb-8">
                {lang === "ko"
                  ? "비료관리법에 따른 유기농업자재 공시. 강원대학교 산학협력단 친환경농산물안전성센터가 성분 분석 및 공시를 담당합니다. 공시서에 기재된 성분 수치가 이 웹사이트에 표기된 모든 수치의 단일 원천입니다."
                  : "Organic materials certification per Fertilizer Management Act. Kangwon National University's Center for Eco-friendly Agricultural Product Safety handles component analysis and certification. The component figures stated in the certification are the sole source of all figures displayed on this website."}
              </p>
              <ul className="space-y-3">
                {t.tableRows.map((row, i) => (
                  <li key={i} className="flex gap-4 text-sm">
                    <span className="text-sage/50 w-24 flex-shrink-0">{row.label}</span>
                    <span className="text-paper font-medium">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-4">{t.orgLabel}</p>
              {ingredients.map((ing) => (
                <div key={ing.name} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-sage">{lang === "ko" ? ing.name : ing.nameEn}</span>
                    <span className="text-paper font-semibold">{ing.ratio}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${ing.ratio}%`, backgroundColor: ing.color }} />
                  </div>
                </div>
              ))}
              <p className="text-sage/50 text-xs mt-4">{t.originLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency declaration */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-forest mb-10">{t.transparencyTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              {t.transparency.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-sage/20">
                  <div className="w-8 h-8 rounded-full bg-leaf/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-leaf" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest mb-1">{item.title}</p>
                    <p className="text-forest/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-forest rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">{t.legalLabel}</p>
                <p className="text-paper font-bold text-lg mb-1">{company.name}</p>
                <p className="text-sage text-sm leading-relaxed">
                  {lang === "ko" ? "대표이사" : "CEO"} {company.ceo}<br />
                  {lang === "ko" ? "사업자등록번호" : "Biz. Reg. No."} {company.bizNumber}<br />
                  {company.address}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sage/60 text-xs leading-relaxed">
                  {t.omriNote.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < t.omriNote.split("\n").length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>
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
