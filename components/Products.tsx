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
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-sage/20 hover:border-leaf/30 transition-colors"
            >
              {/* Color banner */}
              <div
                className={`h-2 ${
                  product.id === "humus-premium" ? "bg-leaf" : "bg-clay"
                }`}
              />

              <div className="p-8">
                {/* Badge + product name */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-2 ${
                        product.id === "humus-premium"
                          ? "bg-leaf/10 text-leaf"
                          : "bg-clay/10 text-clay"
                      }`}
                    >
                      {lang === "ko" ? product.badge : (product.id === "humus-premium" ? "Flagship Product" : "Type 4 Complex Fertilizer (Liquid)")}
                    </span>
                    <h3 className="text-2xl font-bold text-forest">
                      {lang === "ko" ? product.name : product.nameEn}
                    </h3>
                    <p className="text-forest/60 text-sm mt-1">
                      {lang === "ko" ? product.tagline : (product.id === "humus-premium"
                        ? "OMRI-certified ingredient-based granule-type organic fertilizer. Total nitrogen 7.1% by official standard. Full ingredient disclosure."
                        : "4-component liquid nutrient with US organic certified ingredients. Suitable for foliar and soil application.")}
                    </p>
                  </div>
                </div>

                {/* Spec highlight */}
                {product.spec && (
                  <div className="my-5 p-4 bg-paper rounded-xl">
                    <p className="text-forest/50 text-xs uppercase tracking-wide mb-1">{t.specLabel}</p>
                    <p className="text-forest font-semibold">{lang === "ko" ? product.spec : (product as any).specEn}</p>
                  </div>
                )}

                {/* Description */}
                <p className="text-forest/70 text-sm leading-relaxed mb-6">
                  {lang === "ko" ? product.description : (product.id === "humus-premium"
                    ? "High-nitrogen organic fertilizer with 7.1% total nitrogen (certified standard). Manufactured using OMRI-certified ingredients sourced exclusively in Korea. Efficacy not specified on label — only ingredient and material facts are disclosed."
                    : "4-component liquid fertilizer using US organic-certified ingredients. Combines plant-based amino acids, humic acid, and more to act directly on soil and crops.")}
                </p>

                {/* Certification info */}
                {product.certNumber !== "공시 예정" && (
                  <div className="border-t border-sage/20 pt-5 space-y-2">
                    <p className="text-xs text-forest/50 uppercase tracking-wide font-medium mb-3">
                      {t.certLabel}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-forest/40 text-xs">{t.certNumber}</span>
                        <p className="text-forest font-medium">{lang === "ko" ? product.certNumber : (product as any).certNumberEn}</p>
                      </div>
                      <div>
                        <span className="text-forest/40 text-xs">{t.certBody}</span>
                        <p className="text-forest font-medium whitespace-pre-line">{lang === "ko" ? product.certBody : (product as any).certBodyEn}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="text-forest/40 text-xs">{t.certPeriod}</span>
                        <p className="text-forest font-medium">{lang === "ko" ? product.certPeriod : (product as any).certPeriodEn}</p>
                      </div>
                      {product.designReg && product.designReg !== "—" && (
                        <div className="col-span-2">
                          <span className="text-forest/40 text-xs">{t.designReg}</span>
                          <p className="text-forest font-medium">{lang === "ko" ? product.designReg : (product as any).designRegEn}</p>
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
                  {t.ctaProduct}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance note */}
        <p className="mt-8 text-center text-forest/40 text-xs">
          {t.complianceNote}
        </p>
      </div>
    </section>
  );
}
