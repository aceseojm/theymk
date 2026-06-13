import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { trustItems, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "인증 및 특허",
  description: "유기농업자재 공시, 디자인등록, OMRI 원료 기준 — YMK의 투명성을 서류로 증명합니다.",
};

export default function TrustPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div className="hero-gradient-overlay absolute inset-0 opacity-40" />
        <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row md:items-end gap-10">
          <div className="flex-1">
            <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-4">인증 및 특허</p>
            <h1 className="text-4xl md:text-5xl font-bold text-paper leading-tight mb-6 max-w-2xl">
              검증된 기술력,{" "}
              <span className="text-leaf-bright">공식 인증으로 증명합니다</span>
            </h1>
            <p className="text-sage text-lg max-w-xl leading-relaxed">
              대학 연구기관 검증, 특허 및 공식 등록을 통해 제품의 신뢰성을 객관적으로 확인할 수 있습니다.
            </p>
          </div>
          {/* 인증서 썸네일 */}
          <div className="flex gap-3 flex-shrink-0">
            {[
              { src: "/images/cert-design-humus.png", label: "디자인등록증\n(휴머스 프리미엄)" },
              { src: "/images/cert-design-amino.png", label: "디자인등록증\n(아미노 골드)" },
              { src: "/images/cert-organic.png", label: "유기농업자재\n공시서" },
              { src: "/images/cert-test.png", label: "비료피해\n시험성적서" },
            ].map((cert) => (
              <div key={cert.src} className="flex flex-col items-center gap-1.5">
                <div className="relative w-16 h-22 rounded-md overflow-hidden border border-white/20 shadow-lg">
                  <Image
                    src={cert.src}
                    alt={cert.label.replace("\n", " ")}
                    width={64}
                    height={88}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <p className="text-sage/60 text-[9px] text-center leading-tight whitespace-pre-line">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인증 상세 */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-forest mb-10">인증 및 등록 현황</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trustItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-sage/20">
                <span className="inline-block px-3 py-1.5 rounded-full bg-forest text-leaf-bright text-xs font-bold mb-5">
                  {item.badge}
                </span>
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

      {/* 유기농업자재 공시 상세 */}
      <section className="bg-forest py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block text-xs text-leaf uppercase tracking-widest font-medium mb-3">
                유기농업자재 공시 상세
              </span>
              <h2 className="text-3xl font-bold text-paper mb-5">공시-2-3-974호</h2>
              <p className="text-sage leading-relaxed mb-8">
                비료관리법에 따른 유기농업자재 공시. 강원대학교 산학협력단 친환경농산물안전성센터가 성분 분석 및 공시를 담당합니다. 공시서에 기재된 성분 수치가 이 웹사이트에 표기된 모든 수치의 단일 원천입니다.
              </p>
              <ul className="space-y-3">
                {[
                  { label: "제품명", value: "휴머스 프리미엄" },
                  { label: "공시번호", value: "제 공시-2-3-974호" },
                  { label: "공시기관", value: "강원대학교 산학협력단 친환경농산물안전성센터" },
                  { label: "유효기간", value: "2026.02.26 ~ 2029.02.25" },
                  { label: "주성분", value: "질소전량 7.1%" },
                  { label: "효능·효과", value: "미표시제품" },
                ].map((row, i) => (
                  <li key={i} className="flex gap-4 text-sm">
                    <span className="text-sage/50 w-24 flex-shrink-0">{row.label}</span>
                    <span className="text-paper font-medium">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-4">
                원료 구성 (공시서 기준)
              </p>
              {[
                { name: "탈지대두", ratio: 57, color: "#6BA12B" },
                { name: "해조", ratio: 20, color: "#8DC63F" },
                { name: "골분", ratio: 19, color: "#A7BE89" },
                { name: "토탄", ratio: 4, color: "#143019" },
              ].map((ing) => (
                <div key={ing.name} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-sage">{ing.name}</span>
                    <span className="text-paper font-semibold">{ing.ratio}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${ing.ratio}%`, backgroundColor: ing.color }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-sage/50 text-xs mt-4">
                원산지: 중국 G-Teck Bioscience (Xian)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 투명성 선언 */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-forest mb-10">YMK 투명성 선언</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              {[
                {
                  title: "효능 단정 카피 없음",
                  desc: "\"잘 크는 비료\", \"수확량 증가\" 등 효능을 단정하는 표현을 사용하지 않습니다. 성분과 원료 사실만 표기합니다.",
                },
                {
                  title: "원료 배합 전체 공개",
                  desc: "탈지대두 57%, 해조 20%, 골분 19%, 토탄 4% — 공시서에 등록된 실제 투입 비율을 그대로 공개합니다.",
                },
                {
                  title: "공시서 기재 기준 표기",
                  desc: "이 웹사이트의 모든 수치(질소전량 7.1% 등)는 유기농업자재 공시서에 기재된 내용 그대로입니다.",
                },
                {
                  title: "성적서 B2B 별도 제공",
                  desc: "분석성적서(비토분석센타 발행)는 웹사이트에 게시하지 않고, B2B 파트너에게 별도 제공합니다.",
                },
              ].map((item, i) => (
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
                <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">
                  법적 표기
                </p>
                <p className="text-paper font-bold text-lg mb-1">{company.name}</p>
                <p className="text-sage text-sm leading-relaxed">
                  대표이사 {company.ceo}<br />
                  사업자등록번호 {company.bizNumber}<br />
                  {company.address}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sage/60 text-xs leading-relaxed space-y-1">
                  OMRI 표기는 원료 기준이며, 완제품 OMRI Listed® 인증과는 다릅니다.<br />
                  본 제품은 강원대학교 산학협력단 친환경농산물안전성센터로부터 유기농업자재 공시를 받은 제품입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-paper mb-4">
            B2B 파트너라면 성적서를 직접 확인하세요
          </h2>
          <p className="text-sage mb-8">
            분석성적서(비토분석센타) 및 공시서 원본은 상담 신청 후 제공합니다.
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
