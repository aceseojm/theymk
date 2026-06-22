import Link from "next/link";
import { trustItems } from "@/lib/data";

export default function Trust() {
  return (
    <section id="trust" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* 헤더 */}
        <div className="mb-16">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            신뢰
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-forest">
            <span className="text-leaf">공인기관으로</span>{" "}
            검증 받았습니다.
          </h2>
          <p className="mt-4 text-forest/70 max-w-xl">
            강원대학교 산학협력단 친환경농산물안전성센터 공시, 특허청 디자인등록 — 성분과 원료는 실제 발급된 서류를 근거로 표기합니다.
          </p>
          <Link
            href="/trust"
            className="inline-flex items-center gap-2 mt-4 text-sm text-leaf hover:text-leaf-bright transition-colors font-medium"
          >
            공시·인증 상세 보기 →
          </Link>
        </div>

        {/* 인증 카드 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {trustItems.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-sage/20">
              <span className="inline-block px-3 py-1 rounded-full bg-forest text-leaf-bright text-xs font-bold mb-4">
                {item.badge}
              </span>
              <h3 className="text-lg font-bold text-forest mb-2">{item.title}</h3>
              <p className="text-leaf font-semibold text-sm mb-3">{item.number}</p>
              <div className="space-y-1 text-sm text-forest/60 mb-4">
                <p>{item.issuer}</p>
                <p>{item.period}</p>
              </div>
              <p className="text-xs text-forest/50 border-t border-sage/20 pt-4 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 투명성 선언 블록 */}
        <div className="rounded-2xl bg-forest p-10 text-center">
          <h3 className="text-2xl font-bold text-paper mb-4">
            YMK 투명성 선언
          </h3>
          <p className="text-sage max-w-2xl mx-auto leading-relaxed mb-6">
            저희는 효능·효과를 단정하는 표현을 쓰지 않습니다.
            공시서에 기재된 성분과 원료를 사실 그대로 공개하고,
            분석성적서는 B2B 파트너에게 별도 제공합니다.
            과장이 넘치는 시장에서 정직함이 우리의 차별점입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-leaf-bright">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sage">효능 단정 카피 없음</span>
            </div>
            <div className="flex items-center gap-2 text-leaf-bright">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sage">원료 배합 전체 공개</span>
            </div>
            <div className="flex items-center gap-2 text-leaf-bright">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sage">공시서 기재 기준 표기</span>
            </div>
            <div className="flex items-center gap-2 text-leaf-bright">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sage">성적서 B2B 별도 제공</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
