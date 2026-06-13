import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { audiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "활용 분야",
  description:
    "농업 B2B, 골프장, OEM·ODM, 수출, 홈가드닝 — 구매 목적별로 알맞은 방법을 안내합니다.",
};

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
  oem: "/images/oem.png",
  export: "/images/export.png",
  home: "/images/homegarden.png",
};

export default function AudiencesPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="bg-forest pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-4">
            활용 분야
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-paper leading-tight mb-6 max-w-2xl">
            같은 제품,{" "}
            <span className="text-leaf-bright">다양한 현장</span>
          </h1>
          <p className="text-sage text-lg max-w-xl leading-relaxed">
            두 종류의 유기질 비료를 활용 목적에 맞게 적용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 카드 그리드 */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((seg) => {
              const img = cardImage[seg.id];
              return (
                <Link
                  key={seg.id}
                  href={`/audiences/${seg.id}`}
                  className={`group relative rounded-2xl p-8 flex flex-col justify-between min-h-64 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl ${img ? "" : cardBg[seg.id]}`}
                >
                  {img && (
                    <>
                      <Image
                        src={img}
                        alt={seg.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-transparent" />
                    </>
                  )}
                  <div className="relative z-10">

                    <p className={`text-xs font-medium uppercase tracking-widest mb-1 ${img ? "text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" : textSub[seg.id]}`}>
                      {seg.subtitle}
                    </p>
                    <h2 className={`text-xl font-bold mb-3 ${img ? "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" : textMain[seg.id]}`}>
                      {seg.title}
                    </h2>
                    <p className={`text-sm leading-relaxed ${img ? "text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" : textSub[seg.id]}`}>
                      {seg.desc}
                    </p>
                  </div>
                  <div className="relative z-10 mt-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        img ? "bg-white/15 border border-white/40 text-white hover:bg-white/25" : ctaStyle[seg.id]
                      }`}
                    >
                      자세히 보기
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
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

      {/* 하단 CTA */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-paper mb-4">
            어떤 항목인지 잘 모르겠다면 바로 문의하세요
          </h2>
          <p className="text-sage mb-8">
            구매 규모나 용도를 말씀해 주시면 적합한 방법을 안내해 드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-leaf text-white font-semibold hover:bg-leaf-bright transition-colors"
          >
            상담 신청하기 →
          </Link>
        </div>
      </section>
    </>
  );
}
