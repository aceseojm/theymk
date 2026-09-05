"use client";

import Link from "next/link";
import { products } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

export default function Products() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.productsSection : en.productsSection;

  return (
    <section id="products" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            {t.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-forest">
            {t.title}
          </h2>
          <p className="mt-4 text-forest/70 max-w-lg">
            {t.subtitle}
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 mt-4 text-sm text-leaf hover:text-leaf-bright transition-colors font-medium"
          >
            {t.ctaLink}
          </Link>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => {
            const isGranule = product.type === "granule";
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-sage/20 hover:border-leaf/30 transition-colors"
              >
                {/* Color banner */}
                <div className={`h-2 ${isGranule ? "bg-leaf" : "bg-clay"}`} />

                <div className="p-8">
                  {/* Badge + product name */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-2 ${
                          isGranule ? "bg-leaf/10 text-leaf" : "bg-clay/10 text-clay"
                        }`}
                      >
                        {lang === "ko" ? product.badge : ((product as any).badgeEn ?? product.badge)}
                      </span>
                      <h3 className="text-2xl font-bold text-forest">
                        {lang === "ko" ? product.name : product.nameEn}
                      </h3>
                      <p className="text-forest/60 text-sm mt-1">
                        {lang === "ko" ? product.tagline : ((product as any).taglineEn ?? product.tagline)}
                      </p>
                    </div>
                  </div>

                  {/* Spec highlight */}
                  {product.spec && (
                    <div className="my-5 p-4 bg-paper rounded-xl">
                      <p className="text-forest/50 text-xs uppercase tracking-wide mb-1">{t.specLabel}</p>
                      <p className="text-forest font-semibold">{lang === "ko" ? product.spec : ((product as any).specEn ?? product.spec)}</p>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-forest/70 text-sm leading-relaxed mb-6">
                    {lang === "ko" ? product.description : ((product as any).descriptionEn ?? product.description)}
                  </p>

                  {/* Certification info */}
                  {(product as any).hasCert && (
                    <div className="border-t border-sage/20 pt-5 space-y-2">
                      <p className="text-xs text-forest/50 uppercase tracking-wide font-medium mb-3">
                        {t.certLabel}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-forest/40 text-xs">{t.certNumber}</span>
                          <p className="text-forest font-medium">{lang === "ko" ? (product as any).certNumber : (product as any).certNumberEn}</p>
                        </div>
                        <div>
                          <span className="text-forest/40 text-xs">{t.certBody}</span>
                          <p className="text-forest font-medium whitespace-pre-line">{lang === "ko" ? (product as any).certBody : (product as any).certBodyEn}</p>
                        </div>
                        <div className="col-span-2">
                          <span className="text-forest/40 text-xs">{t.certPeriod}</span>
                          <p className="text-forest font-medium">{lang === "ko" ? (product as any).certPeriod : (product as any).certPeriodEn}</p>
                        </div>
                        {(product as any).designReg && (product as any).designReg !== "—" && (
                          <div className="col-span-2">
                            <span className="text-forest/40 text-xs">{t.designReg}</span>
                            <p className="text-forest font-medium">{lang === "ko" ? (product as any).designReg : (product as any).designRegEn}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <a
                    href="#contact"
                    className={`mt-6 block w-full text-center py-3 rounded-xl font-medium transition-colors ${
                      isGranule
                        ? "bg-forest text-paper hover:bg-leaf"
                        : "bg-paper text-forest border border-sage/30 hover:bg-sage/20"
                    }`}
                  >
                    {t.ctaProduct}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance note */}
        <p className="mt-8 text-center text-forest/40 text-xs">
          {t.complianceNote}
        </p>
      </div>
    </section>
  );
}
