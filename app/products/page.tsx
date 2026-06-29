"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

export default function ProductsPage() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.productsPage : en.productsPage;

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-4">{t.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-5 max-w-2xl">
            {t.title} <span className="text-leaf">{t.titleHighlight}</span>
          </h1>
          <p className="text-forest/70 text-lg max-w-xl leading-relaxed mb-2">{t.subtitle}</p>
          <p className="text-forest/55 text-base max-w-xl leading-relaxed mb-8">{t.subtitle2}</p>

          <div className="flex flex-wrap gap-3">
            <Link href="/results" className="px-6 py-3 rounded-full bg-forest text-paper font-semibold hover:bg-leaf transition-colors text-sm">
              {t.ctaResults}
            </Link>
            <Link href="/audiences" className="px-6 py-3 rounded-full border border-forest/25 text-forest font-medium hover:border-leaf hover:text-leaf transition-colors text-sm bg-white/40 backdrop-blur-sm">
              {t.ctaAudiences}
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-full border border-forest/25 text-forest font-medium hover:border-leaf hover:text-leaf transition-colors text-sm bg-white/40 backdrop-blur-sm">
              {t.ctaContact}
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {t.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/50 border border-forest/10 text-forest/55 text-xs backdrop-blur-sm">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Product cards */}
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
                  {isHumus ? (
                    <div className="relative h-52 overflow-hidden bg-white flex items-center justify-center">
                      <Image src="/images/humus-premium-nobg.png" alt={lang === "ko" ? "휴머스 프리미엄 제품" : "HUMAS PREMIUM Product"} fill className="object-contain group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  ) : (
                    <div className="relative h-52 overflow-hidden bg-white flex items-center justify-center">
                      <Image src="/images/amino-gold-nobg.png" alt={lang === "ko" ? "아미노 골드 제품" : "AMINO GOLD Product"} fill className="object-contain group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  )}
                  <div className={`h-1 ${isHumus ? "bg-leaf" : "bg-yellow-400"}`} />
                  <div className="p-8">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-4 ${isHumus ? "bg-leaf/10 text-leaf" : "bg-yellow-400/15 text-yellow-600"}`}>
                      {lang === "ko" ? product.badge : (isHumus ? "Flagship Product" : "Liquid Complex Nutrient")}
                    </span>

                    <h2 className="text-2xl font-bold mb-1 text-forest">
                      {lang === "ko" ? product.name : product.nameEn}
                    </h2>
                    <p className={`font-serif text-sm mb-4 ${isHumus ? "text-leaf" : "text-yellow-600"}`}>
                      {lang === "ko" ? product.nameEn : product.name}
                    </p>
                    <p className="text-sm italic leading-relaxed mb-6 text-forest/55">
                      &ldquo;{lang === "ko" ? product.tagline : (isHumus
                        ? "OMRI-certified ingredient-based pellet organic fertilizer. Total nitrogen 7.1% by official standard. Full ingredient disclosure."
                        : "4-component liquid nutrient with US organic certified ingredients. Suitable for foliar and soil application.")}&rdquo;
                    </p>

                    {/* Feature list */}
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

                    {/* Spec */}
                    {isHumus && (
                      <div className="mb-6 p-4 rounded-xl bg-sage/10">
                        <p className="text-xs uppercase tracking-widest font-medium mb-2 text-forest/40">
                          {t.nitrogenLabel}
                        </p>
                        <p className="text-2xl font-bold text-leaf">7.1%</p>
                        <p className="text-xs mt-0.5 text-forest/35">{product.certNumber}</p>
                      </div>
                    )}

                    {/* Certification badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-leaf/10 text-leaf">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        {t.certifiedOrganic}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-forest/5 text-forest/50">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        {t.designReg}
                      </span>
                    </div>

                    <div className={`flex items-center gap-2 text-sm font-medium ${isHumus ? "text-leaf" : "text-clay"} group-hover:gap-3 transition-all`}>
                      {t.viewDetail}
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

      {/* Product comparison table */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-2">{t.compareLabel}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-forest mb-2">{t.compareTitle}</h2>
            <p className="text-forest/55 text-sm">{t.compareSubtitle}</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-sage/20">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-forest">
                  <th className="text-left px-6 py-4 text-sage/60 font-medium w-[30%]">{t.tableHeader}</th>
                  <th className="text-left px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-14 flex-shrink-0">
                        <Image src="/images/humus-premium-nobg.png" alt="HUMAS PREMIUM" fill className="object-contain" sizes="40px" />
                      </div>
                      <div>
                        <span className="text-leaf-bright font-bold block">{lang === "ko" ? "휴머스 프리미엄" : "HUMAS PREMIUM"}</span>
                        <span className="text-sage/50 text-xs font-normal">{lang === "ko" ? "HUMAS PREMIUM" : "휴머스 프리미엄"}</span>
                      </div>
                    </div>
                  </th>
                  <th className="text-left px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-14 flex-shrink-0">
                        <Image src="/images/amino-gold-nobg.png" alt="AMINO GOLD" fill className="object-contain" sizes="40px" />
                      </div>
                      <div>
                        <span className="text-yellow-400 font-bold block">{lang === "ko" ? "아미노 골드" : "AMINO GOLD"}</span>
                        <span className="text-yellow-400/50 text-xs font-normal">{lang === "ko" ? "AMINO GOLD" : "아미노 골드"}</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.tableRows.map((row, i) => (
                  <tr key={i} className={`border-t border-sage/15 ${i % 2 === 0 ? "bg-white" : "bg-paper/60"}`}>
                    <td className="px-6 py-4 text-forest/45 font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-forest/80">{row.a}</td>
                    <td className="px-6 py-4 text-forest/80">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Combination note */}
          <div className="mt-6 p-5 bg-forest/5 border border-forest/10 rounded-xl flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1">
              <p className="text-forest font-semibold text-sm mb-1">{t.combineTitle}</p>
              <p className="text-forest/55 text-xs leading-relaxed">{t.combineDesc}</p>
            </div>
            <Link href="/contact" className="flex-shrink-0 px-5 py-2.5 rounded-full bg-forest text-paper text-sm font-medium hover:bg-leaf transition-colors">
              {t.combineCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Ingredients banner */}
      <section className="bg-paper border-t border-sage/15 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-2">{t.ingredientsBanner}</p>
              <h2 className="text-2xl font-bold text-forest mb-3">{t.ingredientsBannerTitle}</h2>
              <p className="text-forest/55 text-sm max-w-lg">{t.ingredientsBannerDesc}</p>
            </div>
            <Link href="/products/ingredients" className="flex-shrink-0 px-7 py-3.5 rounded-full bg-forest text-paper hover:bg-leaf transition-colors font-medium">
              {t.ingredientsBannerCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
