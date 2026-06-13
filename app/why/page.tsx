import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "왜 YMK인가",
  description: "OMRI 인증 원료 독점 수급, 40년 펠릿 자동화 기술, 직접 생산 — YMK가 다른 세 가지 이유를 설명합니다.",
};

const icons: Record<string, React.ReactNode> = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 19.48 18 20 18 20l2-2-1.484-1.75 1.106-2.648L22 13v-2l-2.378-.605Z" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 21h18M3 7v14M21 7v14M9 3v18M15 3v18M3 7l6-4 6 4 6-4" />
    </svg>
  ),
};

const details = [
  {
    icon: "globe",
    title: "OMRI 인증 원료, 국내 독점 수급",
    subtitle: "원료 수급",
    body: "OMRI(Organic Materials Review Institute)는 미국의 독립 기관으로 유기농업자재 원료의 국제 기준 적합성을 심사합니다. YMK는 OMRI 기준을 충족하는 중국 G-Teck Bioscience(Xian)의 원료를 국내에서 유일하게 공급받고 있습니다.",
    points: [
      "국내 비료 시장에서 동일 원료를 구하는 것은 현실적으로 불가능",
      "원료 수급 계약으로 공급망 리스크 최소화",
      "원산지 투명 공개 — G-Teck Bioscience (Xian), 중국",
      "OMRI 표기는 원료 기준이며, 완제품 OMRI Listed®와 혼동하지 마세요",
    ],
  },
  {
    icon: "gear",
    title: "40년 펠릿 자동화 기술",
    subtitle: "제조 공정",
    body: "YMK는 국내 비료 업계에서 가장 오랜 펠릿 자동화 경험을 갖고 있습니다. 펠릿의 입도와 밀도가 균일해야 기계 살포기가 막히지 않고, 시비량을 정확하게 조절할 수 있습니다.",
    points: [
      "골프장·대면적 농지 기계 살포 최적화",
      "입도 균일성으로 시비량 오차 최소화",
      "펠릿 밀도 설계로 토양 침투 속도 조절",
      "자동화 라인으로 로트 간 품질 편차 통제",
    ],
  },
  {
    icon: "factory",
    title: "직접 생산, 로트별 품질 확인",
    subtitle: "품질 관리",
    body: "외주 없이 자체 공장에서 원료 입고부터 완제품 출고까지 전 공정을 직접 운영합니다. 모든 생산 로트에 대해 제3기관(비토분석센타) 분석성적서를 발행하고, B2B 파트너에게 제공합니다.",
    points: [
      "원료 입고 → 배합 → 펠릿화 → 포장 전 공정 내재화",
      "로트별 분석성적서 발행 (비토분석센타)",
      "B2B 파트너에게 성적서 별도 공개",
      "유기농업자재 공시 기준 성분 관리 (강원대 산학협력단)",
    ],
  },
];

export default function WhyPage() {
  return (
    <>
      {/* 페이지 히어로 */}
      <section className="hero-gradient pt-32 pb-20 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-4">
            왜 YMK인가
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6 max-w-2xl">
            원료부터 생산까지,{" "}
            <span className="text-leaf">직접 책임집니다.</span>
          </h1>
          <p className="text-forest/60 text-lg max-w-xl leading-relaxed">
            YMK는 핵심 원료 선정부터 배합 기술, 생산 공정까지 직접 관리합니다. 그래서 품질의 차이를 꾸준히 유지할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 상세 섹션 */}
      {details.map((d, i) => (
        <section key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-paper"} py-20 border-b border-sage/10`}>
          <div className="max-w-6xl mx-auto px-6">
            {/* 아이콘/로고 + 제목 — 왼쪽 절반 */}
            <div className="md:w-1/2 mb-8">
              <div className="mb-6">
                {i === 0 ? (
                  <div className="rounded-2xl bg-forest p-5 inline-flex items-center justify-center">
                    <div className="relative w-36 h-24">
                      <Image
                        src="/images/omri-logo.png"
                        alt="OMRI LISTED For Organic Use"
                        fill
                        className="object-contain"
                        sizes="144px"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-forest/10 flex items-center justify-center text-forest">
                    {icons[d.icon]}
                  </div>
                )}
              </div>
              <span className="text-xs font-medium uppercase tracking-widest mb-2 block text-leaf">
                {d.subtitle}
              </span>
              <h2 className="text-3xl font-bold text-forest">
                {d.title}
              </h2>
            </div>

            {/* 본문 + 번호 목록 — 같은 높이에서 시작 */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <p className="leading-relaxed text-forest/65">
                {d.body}
              </p>
              <ul className="space-y-5">
                {d.points.map((pt, j) => (
                  <li key={j} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-forest text-paper flex items-center justify-center text-xs font-bold">
                      {j + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-forest/65">
                      {pt}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* 하단 CTA */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-forest mb-4">
            이 원료와 기술로 만든 제품을 확인하세요
          </h2>
          <p className="text-forest/60 mb-8">
            OMRI 인증 원료와 40년 자동화 공정으로 생산한 두 가지 유기질 비료입니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/products"
              className="inline-block px-8 py-3.5 rounded-full bg-forest text-paper font-semibold hover:bg-leaf transition-colors"
            >
              제품 보러가기 →
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-full border border-forest text-forest font-semibold hover:bg-forest hover:text-paper transition-colors"
            >
              상담 문의하기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
