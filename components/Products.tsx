import Link from "next/link";
import { products } from "@/lib/data";

export default function Products() {
  return (
    <section id="products" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="mb-16">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            제품
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-forest">
            두 가지 유기질 비료
          </h2>
          <p className="mt-4 text-forest/70 max-w-lg">
            펠릿형 기반 시비제(휴머스 프리미엄)와 액체형 복합 영양제(아미노 골드). 용도와 작물에 따라 단독 또는 함께 사용합니다.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 mt-4 text-sm text-leaf hover:text-leaf-bright transition-colors font-medium"
          >
            제품 상세 사양 보기 →
          </Link>
        </div>

        {/* 제품 카드 */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-sage/20 hover:border-leaf/30 transition-colors"
            >
              {/* 상단 컬러 배너 */}
              <div
                className={`h-2 ${
                  product.id === "humus-premium" ? "bg-leaf" : "bg-clay"
                }`}
              />

              <div className="p-8">
                {/* 뱃지 + 제품명 */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-2 ${
                        product.id === "humus-premium"
                          ? "bg-leaf/10 text-leaf"
                          : "bg-clay/10 text-clay"
                      }`}
                    >
                      {product.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-forest">{product.name}</h3>
                    <p className="text-forest/60 text-sm mt-1">{product.tagline}</p>
                  </div>
                </div>

                {/* 스펙 강조 */}
                {product.spec && (
                  <div className="my-5 p-4 bg-paper rounded-xl">
                    <p className="text-forest/50 text-xs uppercase tracking-wide mb-1">핵심 스펙</p>
                    <p className="text-forest font-semibold">{product.spec}</p>
                  </div>
                )}

                {/* 설명 */}
                <p className="text-forest/70 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* 인증 정보 */}
                {product.certNumber !== "공시 예정" && (
                  <div className="border-t border-sage/20 pt-5 space-y-2">
                    <p className="text-xs text-forest/50 uppercase tracking-wide font-medium mb-3">
                      인증 정보
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-forest/40 text-xs">공시번호</span>
                        <p className="text-forest font-medium">{product.certNumber}</p>
                      </div>
                      <div>
                        <span className="text-forest/40 text-xs">공시기관</span>
                        <p className="text-forest font-medium">{product.certBody}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="text-forest/40 text-xs">유효기간</span>
                        <p className="text-forest font-medium">{product.certPeriod}</p>
                      </div>
                      {product.designReg && product.designReg !== "—" && (
                        <div className="col-span-2">
                          <span className="text-forest/40 text-xs">디자인등록</span>
                          <p className="text-forest font-medium">{product.designReg}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <a
                  href="#contact"
                  className={`mt-6 block w-full text-center py-3 rounded-xl font-medium transition-colors ${
                    product.id === "humus-premium"
                      ? "bg-forest text-paper hover:bg-leaf"
                      : "bg-paper text-forest border border-sage/30 hover:bg-sage/20"
                  }`}
                >
                  {product.certNumber === "공시 예정"
                    ? "출시 사전 알림 신청"
                    : "견적·상담 신청"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 컴플라이언스 노트 */}
        <p className="mt-8 text-center text-forest/40 text-xs">
          * 효능·효과 미표시제품(공시-2-3-974호). 성분 표기는 공시서 기재 내용 기준.
          분석성적서는 B2B 파트너에 별도 제공합니다.
        </p>
      </div>
    </section>
  );
}
