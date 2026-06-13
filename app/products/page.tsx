import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "제품",
  description:
    "휴머스 프리미엄(HUMAS PREMIUM)과 아미노 골드(AMINO GOLD) — OMRI 인증 원료로 만든 두 가지 유기질 비료의 성분과 사용방법을 안내합니다.",
};

export default function ProductsPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="hero-gradient pt-32 pb-20 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-4">제품</p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-5 max-w-2xl">
            OMRI 인증 원료, <span className="text-leaf">유기질비료 등록 제품</span>
          </h1>

          {/* 경제성 메시지 */}
          <p className="text-forest/70 text-lg max-w-xl leading-relaxed mb-2">
            화학비료를 대체할 수 있도록 설계된 YMK의 유기질 비료 솔루션
          </p>
          <p className="text-forest/55 text-base max-w-xl leading-relaxed mb-8">
            상업 농가(과수·과채·수도작)부터 프리미엄 골프장 잔디 관리, 안전한 홈가드닝까지
            목적에 맞는 솔루션을 제안합니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/results"
              className="px-6 py-3 rounded-full bg-forest text-paper font-semibold hover:bg-leaf transition-colors text-sm"
            >
              적용 결과 보기 →
            </Link>
            <Link
              href="/audiences"
              className="px-6 py-3 rounded-full border border-forest/25 text-forest font-medium hover:border-leaf hover:text-leaf transition-colors text-sm bg-white/40 backdrop-blur-sm"
            >
              활용 분야별 가이드
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-forest/25 text-forest font-medium hover:border-leaf hover:text-leaf transition-colors text-sm bg-white/40 backdrop-blur-sm"
            >
              대량 구매 견적 문의
            </Link>
          </div>

          {/* 타겟 태그 */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["상업 농가", "과수 · 과채 · 수도작", "골프장 잔디", "홈가드닝"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/50 border border-forest/10 text-forest/55 text-xs backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 제품 카드 2개 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => {
              const isHumus = product.id === "humus-premium";
              return (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group rounded-2xl overflow-hidden border border-sage/20 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:border-leaf/30"
                >
                  {/* 제품 이미지 */}
                  {isHumus ? (
                    /* 휴머스: 클린 제품 이미지 → 흰 배경에 object-contain */
                    <div className="relative h-52 overflow-hidden bg-white flex items-center justify-center">
                      <Image
                        src="/images/humus-premium-nobg.png"
                        alt="휴머스 프리미엄 제품"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="relative h-52 overflow-hidden bg-white flex items-center justify-center">
                      <Image
                        src="/images/amino-gold-nobg.png"
                        alt="아미노 골드 제품"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className={`h-1 ${isHumus ? "bg-leaf" : "bg-yellow-400"}`} />
                  <div className="p-8">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-4 ${
                      isHumus ? "bg-leaf/10 text-leaf" : "bg-yellow-400/15 text-yellow-600"
                    }`}>
                      {product.badge}
                    </span>

                    <h2 className="text-2xl font-bold mb-1 text-forest">
                      {product.name}
                    </h2>
                    <p className={`font-serif text-sm mb-4 ${isHumus ? "text-leaf" : "text-yellow-600"}`}>
                      {product.nameEn}
                    </p>
                    <p className="text-sm italic leading-relaxed mb-6 text-forest/55">
                      &ldquo;{product.tagline}&rdquo;
                    </p>

                    {/* 핵심 특징 미리보기 */}
                    <ul className="space-y-2 mb-8">
                      {product.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-forest/60">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-leaf" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* 스펙 */}
                    {isHumus && (
                      <div className="mb-6 p-4 rounded-xl bg-sage/10">
                        <p className="text-xs uppercase tracking-widest font-medium mb-2 text-forest/40">
                          질소전량 (공시 기준)
                        </p>
                        <p className="text-2xl font-bold text-leaf">
                          7.1%
                        </p>
                        <p className="text-xs mt-0.5 text-forest/35">
                          {product.certNumber}
                        </p>
                      </div>
                    )}

                    {/* 인증 뱃지 */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-leaf/10 text-leaf">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        유기농업자재 공시
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-forest/5 text-forest/50">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        디자인등록
                      </span>
                    </div>

                    <div className={`flex items-center gap-2 text-sm font-medium ${
                      isHumus ? "text-leaf" : "text-clay"
                    } group-hover:gap-3 transition-all`}>
                      상세 보기
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 제품 비교표 */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-2">제품 비교</p>
            <h2 className="text-2xl md:text-3xl font-bold text-forest mb-2">두 제품, 한눈에 비교</h2>
            <p className="text-forest/55 text-sm">목적에 따라 단독 또는 병행 사용이 가능합니다.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-sage/20">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-forest">
                  <th className="text-left px-6 py-4 text-sage/60 font-medium w-[30%]">항목</th>
                  <th className="text-left px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-14 flex-shrink-0">
                        <Image
                          src="/images/humus-premium-nobg.png"
                          alt="휴머스 프리미엄"
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <span className="text-leaf-bright font-bold block">휴머스 프리미엄</span>
                        <span className="text-sage/50 text-xs font-normal">HUMAS PREMIUM</span>
                      </div>
                    </div>
                  </th>
                  <th className="text-left px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-14 flex-shrink-0">
                        <Image
                          src="/images/amino-gold-nobg.png"
                          alt="아미노 골드"
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <span className="text-yellow-400 font-bold block">아미노 골드</span>
                        <span className="text-yellow-400/50 text-xs font-normal">AMINO GOLD</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "제형", a: "펠릿형 (고형)", b: "액체형" },
                  { label: "시비 방법", a: "토양 시비 — 기계·수동 살포", b: "엽면 시비 + 토양 관주" },
                  { label: "주요 효과", a: "뿌리 발달, 토양 유기물 증가, 장기 지속", b: "즉효성 영양 공급, 색상·광택 개선" },
                  { label: "시비 주기", a: "연 1~2회 (기반 시비)", b: "시즌 중 수시 추가 시비" },
                  { label: "질소전량", a: "7.1%  (공시-2-3-974호)", b: "공시 취득" },
                  { label: "적용 대상", a: "과수·채소·수도작·페어웨이·러프", b: "과수·채소·수도작·그린·티잉구역" },
                  { label: "화학비료 대체", a: "✓  단독 대체 가능", b: "✓  단독·병행 모두 가능" },
                  { label: "포장 단위", a: "20 kg", b: "1 L / 20 L" },
                  { label: "인증", a: "유기농업자재 공시 + 디자인등록", b: "유기농업자재 공시 + 디자인등록" },
                ].map((row, i) => (
                  <tr key={row.label} className={`border-t border-sage/15 ${i % 2 === 0 ? "bg-white" : "bg-paper/60"}`}>
                    <td className="px-6 py-4 text-forest/45 font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-forest/80">{row.a}</td>
                    <td className="px-6 py-4 text-forest/80">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 병행 사용 안내 */}
          <div className="mt-6 p-5 bg-forest/5 border border-forest/10 rounded-xl flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1">
              <p className="text-forest font-semibold text-sm mb-1">추천 조합: 휴머스 프리미엄 + 아미노 골드 병행</p>
              <p className="text-forest/55 text-xs leading-relaxed">
                봄·가을 휴머스 프리미엄으로 기반을 다지고, 생육 기간 중 아미노 골드로 추가 영양을 공급하면 화학비료 없이 작물 품질을 극대화할 수 있습니다.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-5 py-2.5 rounded-full bg-forest text-paper text-sm font-medium hover:bg-leaf transition-colors"
            >
              조합 상담 신청
            </Link>
          </div>
        </div>
      </section>

      {/* 원료 소개 배너 */}
      <section className="bg-paper border-t border-sage/15 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-2">원료 소개</p>
              <h2 className="text-2xl font-bold text-forest mb-3">
                제품 품질의 출발점 — OMRI 인증 원료 7종
              </h2>
              <p className="text-forest/55 text-sm max-w-lg">
                식물성 아미노산, 휴믹산, 풀빅산, 알긴산, 해조추출물, 미라클510, YK2 —
                각 원료의 특성과 작용을 확인하세요.
              </p>
            </div>
            <Link
              href="/products/ingredients"
              className="flex-shrink-0 px-7 py-3.5 rounded-full bg-forest text-paper hover:bg-leaf transition-colors font-medium"
            >
              원료 소개 보러가기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
