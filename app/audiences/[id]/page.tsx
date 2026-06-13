import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { audiences } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return audiences.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const seg = audiences.find((a) => a.id === id);
  if (!seg) return {};
  return {
    title: `활용 분야 — ${seg.title}`,
    description: seg.body,
  };
}

export default async function AudienceDetailPage({ params }: Props) {
  const { id } = await params;
  const seg = audiences.find((a) => a.id === id);
  if (!seg) notFound();

  const currentIdx = audiences.findIndex((a) => a.id === id);
  const prev = audiences[currentIdx - 1];
  const next = audiences[currentIdx + 1];

  const isDark = seg.id === "golf" || seg.id === "export" || seg.id === "home";
  const isLeaf = seg.id === "agri-b2b";

  const heroImages: Record<string, string> = {
    "agri-b2b": "/images/audience-agri.jpg",
    export: "/images/export.png",
    oem: "/images/oem.png",
    home: "/images/homegarden.png",
    golf: "/images/golf-course-v2.png",
  };
  const heroImg = heroImages[seg.id] ?? null;

  return (
    <>
      {/* 히어로 */}
      <section
        className={`relative h-[520px] overflow-hidden ${
          isLeaf ? "bg-leaf" : isDark ? "bg-forest" : "bg-paper"
        }`}
      >
        {/* 배경 이미지 */}
        {heroImg && (
          <div className="absolute inset-0">
            <Image
              src={heroImg}
              alt={seg.title}
              fill
              className="object-cover object-center"
              priority
            />
            {seg.id !== "home" && seg.id !== "export" && seg.id !== "agri-b2b" && (
              <div className={`absolute inset-0 ${
                seg.id === "oem"
                  ? "bg-gradient-to-r from-white/80 via-white/35 to-transparent"
                  : "bg-forest/75"
              }`} />
            )}
          </div>
        )}
        <div className={`absolute inset-0 flex flex-col justify-end max-w-6xl mx-auto px-6 pb-12 w-full left-0 right-0 ${["home", "export", "agri-b2b"].includes(seg.id) ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]" : ""}`}>
          {/* 브레드크럼 */}
          <nav className="flex items-center gap-2 text-xs mb-8 absolute top-28 left-6" aria-label="breadcrumb">
            <Link
              href="/audiences"
              className={`hover:underline ${
                isLeaf || isDark ? "text-white/60 hover:text-white" : "text-forest/50 hover:text-forest"
              }`}
            >
              활용 분야
            </Link>
            <span className={isLeaf || isDark ? "text-white/30" : "text-forest/30"}>/</span>
            <span className={isLeaf || isDark ? "text-white/80" : "text-forest/70"}>
              {seg.title}
            </span>
          </nav>


          <p className={`text-sm font-medium uppercase tracking-widest mb-2 ${
            isLeaf || isDark ? "text-white/60" : "text-leaf"
          }`}>
            {seg.subtitle}
          </p>
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${
            isLeaf || isDark ? "text-white" : "text-forest"
          }`}>
            {seg.title}
          </h1>
        </div>
      </section>

      {/* 보조 카피 + CTA */}
      <section className="bg-white py-10 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-6">
          <p className={`text-lg leading-relaxed text-forest/70 md:max-w-xl`}>
            {seg.body}
          </p>
          <div className="md:ml-auto flex-shrink-0">
            <Link
              href="/contact"
              className="inline-block px-7 py-3.5 rounded-full font-semibold transition-colors bg-forest text-paper hover:bg-leaf"
            >
              {seg.cta} →
            </Link>
          </div>
        </div>
      </section>

      {/* 제품별 주요 특장점 */}
      {"productHighlights" in seg && seg.productHighlights && (
        <section className="bg-paper py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-forest mb-10">제품별 주요 특장점</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {(seg.productHighlights as { product: string; features: { title: string; desc: string }[] }[]).map((ph) => {
                const bgImg =
                  ph.product === "휴머스 프리미엄"
                    ? "/images/humas long.png"
                    : "/images/amino long.png";
                return (
                  <div key={ph.product} className="group relative">
                    {/* 이미지: 제품 전체 노출, 카드 위로 살짝 걸침 */}
                    <div className="relative z-10 mx-4 h-52 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-sage/20 to-paper/80 py-[1px]">
                      <Image
                        src={bgImg}
                        alt={ph.product}
                        fill
                        className="object-contain object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* 텍스트 카드: 이미지 하단에만 살짝 겹침 */}
                    <div className="relative -mt-10 bg-white rounded-2xl pt-14 pb-8 px-8 shadow-md border border-sage/15">
                      <h3 className="text-base font-bold text-forest mb-6 pb-4 border-b border-sage/20">
                        {ph.product}
                      </h3>
                      <ul className="space-y-5">
                        {ph.features.map((f, i) => (
                          <li key={i} className="flex gap-4">
                            <div className="w-7 h-7 rounded-full bg-leaf/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3.5 h-3.5 text-leaf" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold text-forest mb-1">{f.title}</p>
                              <p className="text-forest/60 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 혜택 + FAQ */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* 혜택 */}
            <div>
              <h2 className="text-2xl font-bold text-forest mb-8">제공 내용</h2>
              <ul className="space-y-5">
                {seg.benefits.map((b, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-forest flex items-center justify-center text-leaf text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-forest/70 leading-relaxed">{b}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3.5 rounded-full bg-forest text-paper font-semibold hover:bg-leaf transition-colors"
                >
                  {seg.cta} →
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-forest mb-8">자주 묻는 질문</h2>
              <div className="space-y-5">
                {seg.faq.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-sage/20">
                    <p className="font-semibold text-forest mb-2">Q. {item.q}</p>
                    <p className="text-forest/60 text-sm leading-relaxed">A. {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 다른 활용 분야 */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sage text-sm mb-6">다른 활용 분야도 확인해 보세요</p>
          <div className="flex flex-wrap gap-3">
            {audiences
              .filter((a) => a.id !== seg.id)
              .map((a) => (
                <Link
                  key={a.id}
                  href={`/audiences/${a.id}`}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sage hover:bg-white/10 hover:text-paper transition-colors text-sm"
                >
                  {a.title}
                </Link>
              ))}
          </div>

          {/* 이전 / 다음 */}
          <div className="flex justify-between mt-10 pt-8 border-t border-white/10">
            {prev ? (
              <Link
                href={`/audiences/${prev.id}`}
                className="flex items-center gap-2 text-sage hover:text-paper transition-colors text-sm"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/audiences/${next.id}`}
                className="flex items-center gap-2 text-sage hover:text-paper transition-colors text-sm"
              >
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
