import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, ingredients as certIngredients } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.name} (${product.nameEn})`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const isHumus = product.id === "humus-premium";
  const otherProduct = products.find((p) => p.id !== id)!;

  return (
    <>
      {/* 히어로 — 왼쪽 제품 이미지 / 오른쪽 정보+성분표 */}
      <section className="bg-paper pt-32 pb-16 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6">
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-xs mb-8 text-forest/40" aria-label="breadcrumb">
            <Link href="/products" className="hover:text-forest transition-colors">제품</Link>
            <span>/</span>
            <span className="text-forest/70">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-[5fr_7fr] gap-10 md:gap-14 items-start">
            {/* 왼쪽: 제품 패키지 이미지 */}
            <div className="rounded-2xl overflow-hidden border border-sage/15 aspect-square sticky top-24 self-start">
              <div className="relative w-full h-full">
                <Image
                  src={isHumus ? "/images/humus-prmium-bg.png" : "/images/amino-gold-bottle.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>

            {/* 오른쪽: 제품 정보 */}
            <div className="py-2">
              {/* 뱃지 태그 */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-sage/15 text-forest/65 border border-sage/20">
                  {isHumus ? "GRANULE · 입상형" : "LIQUID · 액체형"}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-sage/15 text-forest/65 border border-sage/20">
                  OMRI 인증 원료
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-leaf/10 text-leaf border border-leaf/25">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  유기농업자재 공시 취득
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-2">
                {product.name}
              </h1>
              <p className={`font-serif text-lg mb-5 ${isHumus ? "text-leaf" : "text-clay"}`}>
                {product.nameEn}
              </p>
              <p className="text-forest/65 text-base leading-relaxed mb-7">
                {product.description}
              </p>

              {/* 성분 테이블 */}
              <div className="rounded-xl overflow-hidden border border-sage/15 mb-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-forest text-paper">
                      <th className="text-left px-4 py-3 font-medium">성분</th>
                      <th className="text-left px-4 py-3 font-medium">함량</th>
                      <th className="text-left px-4 py-3 font-medium">역할</th>
                    </tr>
                  </thead>
                  <tbody>
                    {"ingredientsDisplay" in product && product.ingredientsDisplay.map((row: { name: string; amount: string; role: string }, i: number) => (
                      <tr key={row.name} className={`border-t border-sage/10 ${i % 2 === 0 ? "bg-white" : "bg-paper/60"}`}>
                        <td className="px-4 py-3 text-forest font-medium">{row.name}</td>
                        <td className={`px-4 py-3 font-bold ${isHumus ? "text-leaf" : "text-clay"}`}>{row.amount}</td>
                        <td className="px-4 py-3 text-forest/60">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 공시 번호 (휴머스) */}
              {isHumus && (
                <p className="text-xs text-forest/35 mb-6 leading-relaxed">
                  유기농업자재 공시 {product.certNumber} · 공시기관: {product.certBody}<br />
                  유효기간: {product.certPeriod}
                </p>
              )}

              {/* CTA */}
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-full bg-forest text-paper font-semibold hover:bg-leaf transition-colors"
                >
                  샘플 신청 &amp; 상담하기
                </Link>
                <Link
                  href="/products/ingredients"
                  className="px-7 py-3.5 rounded-full border border-sage/30 text-forest/60 hover:border-leaf hover:text-leaf transition-colors text-sm"
                >
                  원료 소개 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 현장 적용 이미지 */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            {isHumus ? (
              <div className="relative aspect-video">
                <Image
                  src="/images/humus-premium-field.jpg"
                  alt="휴머스 프리미엄 현장 이미지"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 1152px"
                />
              </div>
            ) : (
              <div className="relative aspect-[3/2] bg-[#ede9df]">
                <Image
                  src="/images/amino-gold-product.jpg"
                  alt="아미노 골드 현장 이미지"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1152px"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 특징 */}
      <section className={`py-20 ${isHumus ? "bg-paper" : "bg-forest"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-2xl font-bold mb-10 ${isHumus ? "text-forest" : "text-paper"}`}>
            특징 및 이점
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {product.features.map((f, i) => (
              <div
                key={i}
                className={`flex gap-3 items-start p-5 rounded-xl ${
                  isHumus ? "bg-white border border-sage/20" : "bg-white/5 border border-white/10"
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                  isHumus ? "bg-leaf/10 text-leaf" : "bg-leaf/30 text-leaf-bright"
                }`}>
                  {i + 1}
                </span>
                <p className={`text-sm leading-relaxed ${isHumus ? "text-forest/70" : "text-sage"}`}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 혁신 기능 / 적용 범위 */}
      {isHumus ? (
        <section className="bg-forest py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-paper mb-10">혁신적인 기능</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.functions.map((fn, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 ${
                    i % 2 === 0 ? "bg-leaf text-white" : "bg-sage/20 text-sage"
                  }`}>
                    {i + 1}
                  </div>
                  <h3 className="text-paper font-semibold mb-2">{fn.title}</h3>
                  <p className="text-sage text-sm leading-relaxed">{fn.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-paper py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-forest mb-10">작물별 적용 범위</h2>
            {"applications" in product && product.applications && (
              <div className="grid sm:grid-cols-2 gap-6">
                {product.applications.map((app, i) => {
                  const appImages = [
                    "/images/app-fruitveg.jpg",
                    "/images/app-vegetable.jpg",
                    "/images/app-rice.jpg",
                    "/images/app-golf.jpg",
                  ];
                  return (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden border border-sage/20">
                      {/* 카드 상단 이미지 — 동일 비율로 통일 */}
                      <div className="relative aspect-[16/7] overflow-hidden">
                        <Image
                          src={appImages[i] ?? appImages[0]}
                          alt={app.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-4 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-forest/90 text-leaf-bright text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-bold text-white text-sm leading-tight">{app.title}</p>
                            <p className="text-white/70 text-xs">{app.crops}</p>
                          </div>
                        </div>
                      </div>
                      {/* 카드 내용 */}
                      <div className="p-6">
                        <ul className="space-y-2">
                          {app.points.map((pt, j) => (
                            <li key={j} className="flex gap-2 items-start text-sm text-forest/70">
                              <svg className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {"summaryPoints" in product && product.summaryPoints && (
              <div className="mt-10 p-7 bg-forest rounded-2xl">
                <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-5">종합 효과 요약</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.summaryPoints.map((pt, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <svg className="w-4 h-4 text-leaf-bright flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sage text-sm leading-relaxed">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 사용방법 */}
      {product.usageTable.length > 0 && (
        <section className="bg-paper py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-forest mb-3">
              {isHumus ? "작물별 사용방법" : "희석 비율 및 사용법"}
            </h2>
            <p className="text-forest/50 text-sm mb-8">
              {isHumus
                ? "※ 시비량은 지역 및 생육 상태에 따라 조절 가능"
                : "※ 반드시 물에 희석 후 사용. 원액 직접 시비 금지. 희석 비율은 생육 상태에 따라 조절 가능"}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest text-paper">
                    <th className="text-left px-5 py-3 rounded-tl-xl font-medium">작물 · 구역</th>
                    <th className="text-left px-5 py-3 font-medium">{isHumus ? "시비량" : "희석 비율"}</th>
                    <th className="text-left px-5 py-3 rounded-tr-xl font-medium">{isHumus ? "횟수" : "시비 주기"}</th>
                  </tr>
                </thead>
                <tbody>
                  {product.usageTable.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-sage/10 ${i % 2 === 1 ? "bg-sage/5" : "bg-white"}`}
                    >
                      <td className="px-5 py-3.5 text-forest font-medium">{row.crop}</td>
                      <td className="px-5 py-3.5 text-forest/70">{row.amount}</td>
                      <td className="px-5 py-3.5 text-forest/70">{row.times}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 원료 배합 바 (휴머스만) */}
            {isHumus && (
              <div className="mt-14">
                <h3 className="text-lg font-bold text-forest mb-2">원료 배합 (공시서 기준)</h3>
                <p className="text-forest/40 text-xs mb-5">유기농업자재 공시서 기재 내용 그대로</p>
                <div className="flex rounded-xl overflow-hidden h-10 mb-5">
                  {certIngredients.map((ing) => (
                    <div
                      key={ing.name}
                      style={{ width: `${ing.ratio}%`, backgroundColor: ing.color }}
                      className="flex items-center justify-center"
                    >
                      {ing.ratio >= 15 && (
                        <span className="text-white text-xs font-bold drop-shadow">{ing.ratio}%</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {certIngredients.map((ing) => (
                    <div key={ing.name} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded flex-shrink-0" style={{ backgroundColor: ing.color }} />
                      <span className="text-forest/70 text-sm">
                        {ing.name} <strong className="text-forest">{ing.ratio}%</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 컴플라이언스 + 다른 제품 */}
      <section className={`py-16 ${isHumus ? "bg-forest" : "bg-forest"}`}>
        <div className="max-w-6xl mx-auto px-6">
          {isHumus && (
            <p className="text-sage/50 text-xs text-center mb-10">
              효능·효과 미표시제품 (공시-2-3-974호). 성분 표기는 공시서 기재 내용 기준.
              분석성적서는 B2B 파트너에 별도 제공됩니다.
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-sage text-sm mb-1">다른 제품도 확인해 보세요</p>
              <Link
                href={`/products/${otherProduct.id}`}
                className="text-paper font-semibold hover:text-leaf-bright transition-colors"
              >
                {otherProduct.name} ({otherProduct.nameEn}) →
              </Link>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-leaf text-white font-semibold hover:bg-leaf-bright transition-colors flex-shrink-0"
            >
              견적·상담 신청
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
