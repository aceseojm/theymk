import type { Metadata } from "next";
import Link from "next/link";
import { rawIngredients } from "@/lib/data";

export const metadata: Metadata = {
  title: "원료 소개 — OMRI 인증 원료 7종",
  description:
    "식물성 아미노산, 휴믹산, 풀빅산, 알긴산, 해조추출물, 미라클510, YK2 — YMK 제품에 사용되는 OMRI 기준 원료 7종을 소개합니다.",
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

export default function IngredientsPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="bg-forest pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-xs mb-8" aria-label="breadcrumb">
            <Link href="/products" className="text-white/50 hover:text-white hover:underline">
              제품
            </Link>
            <span className="text-white/25">/</span>
            <span className="text-white/75">원료 소개</span>
          </nav>

          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-4">
            03 · 원료 소개
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-paper leading-tight mb-6 max-w-2xl">
            미국 협회 인증 원료,{" "}
            <span className="text-leaf-bright">7종</span>
          </h1>
          <p className="text-sage text-lg max-w-xl leading-relaxed mb-10">
            YMK 제품에 사용되는 모든 원료는 OMRI(Organic Materials Review Institute) 기준을 충족합니다. 아래 인증서가 그 근거입니다.
          </p>

          {/* OMRI 인증 3종 배지 */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { label: "아미노산 인증", category: "NOP Amino Acids", product: "Soy Proteins" },
              { label: "알긴산", category: "NOP Humic Acids – alkali extracted", product: "Potassium Humate" },
              { label: "휴믹산", category: "NOP Seaweed and Seaweed Products", product: "Seaweed Extract" },
            ].map((cert) => (
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
              <p className="text-sage/50 text-xs mb-1">원료 특성</p>
              <div className="flex flex-wrap gap-2">
                {["고품질 원료 사용", "OMRI 인증 획득", "수용성 및 유기농", "다양한 영양소 함유"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sage text-xs">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sage/50 text-xs mb-1">원료의 역할</p>
              <div className="flex flex-wrap gap-2">
                {["생육 활성화", "토양 개량", "병충해 저항성", "작물 품질 향상"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-leaf/10 border border-leaf/20 text-leaf-bright text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 원료 7종 */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-forest mb-12">원료 상세</h2>
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
                        <h3 className={`text-lg font-bold ${c.text}`}>{ing.name}</h3>
                        <p className={`text-xs ${c.sub}`}>{ing.source}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-0 mb-5">
                      <div>
                        <p className={`text-xs font-medium uppercase tracking-widest mb-2 ${c.sub}`}>
                          원료 특징
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
                          작용 효과
                        </p>
                        <p className={`text-sm leading-relaxed ${c.sub}`}>{ing.effects}</p>
                      </div>
                    </div>

                    <div className={`text-xs px-3 py-2 rounded-lg ${
                      c.bg.includes("bg-paper") || c.bg.includes("bg-sage")
                        ? "bg-forest/5 text-forest/50"
                        : "bg-white/10 text-white/40"
                    }`}>
                      OMRI 분류: {ing.omriCategory}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-paper mb-4">
            원료가 만들어낸 제품을 확인하세요
          </h2>
          <p className="text-sage mb-8">
            OMRI 인증 원료가 집약된 두 가지 제품 — 휴머스 프리미엄과 아미노 골드
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products/humus-premium"
              className="px-6 py-3 rounded-full bg-leaf text-white font-medium hover:bg-leaf-bright transition-colors"
            >
              휴머스 프리미엄 보기
            </Link>
            <Link
              href="/products/amino-gold"
              className="px-6 py-3 rounded-full border border-sage/30 text-sage hover:text-paper hover:border-white/40 transition-colors"
            >
              아미노 골드 보기
            </Link>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sage/40 text-xs">
              OMRI 표기는 원료 기준이며, 완제품 OMRI Listed® 인증과 다릅니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
