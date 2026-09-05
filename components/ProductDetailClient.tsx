"use client";

import Link from "next/link";
import Image from "next/image";
import { products, ingredients as certIngredients } from "@/lib/data";
import { notFound } from "next/navigation";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

type Props = { id: string };

export default function ProductDetailClient({ id }: Props) {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.productDetail : en.productDetail;

  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const isGranule = product.type === "granule";
  const otherProducts = products.filter((p) => p.id !== id);
  const description = (lang === "ko" ? product.description : (product as any).descriptionEn) ?? product.description;
  const fieldObjectFit = (product as any).fieldObjectFit ?? "object-cover";
  const fieldAspect = (product as any).fieldAspect ?? "aspect-video";
  const fieldBg = (product as any).fieldBg ?? "";
  const isPackagePhoto = (product as any).cardImage === (product as any).detailImage;

  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-32 pb-16 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8 text-forest/40" aria-label="breadcrumb">
            <Link href="/products" className="hover:text-forest transition-colors">{t.breadcrumb}</Link>
            <span>/</span>
            <span className="text-forest/70">{lang === "ko" ? product.name : product.nameEn}</span>
          </nav>

          <div className="grid md:grid-cols-[5fr_7fr] gap-10 md:gap-14 items-start">
            {/* Left: product image */}
            <div className="rounded-2xl overflow-hidden border border-sage/15 aspect-square sticky top-24 self-start">
              <div className={`relative w-full h-full ${isPackagePhoto ? "p-[15%]" : ""}`}>
                <Image
                  src={(product as any).detailImage}
                  alt={lang === "ko" ? product.name : product.nameEn}
                  fill
                  className={isPackagePhoto ? "object-contain object-center" : "object-cover object-center"}
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>

            {/* Right: product info */}
            <div className="py-2">
              {/* Badge tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-sage/15 text-forest/65 border border-sage/20">
                  {isGranule ? t.granuleTag : t.liquidTag}
                </span>
                {(product as any).omriCertified && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-sage/15 text-forest/65 border border-sage/20">
                    {t.omriTag}
                  </span>
                )}
                {(product as any).hasCert && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-leaf/10 text-leaf border border-leaf/25">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t.certifiedTag}
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-2">
                {lang === "ko" ? product.name : product.nameEn}
              </h1>
              <p className={`font-serif text-lg mb-5 ${isGranule ? "text-leaf" : "text-clay"}`}>
                {lang === "ko" ? product.nameEn : product.name}
              </p>
              <p className="text-forest/65 text-base leading-relaxed mb-7">
                {description}
              </p>

              {/* Ingredient table */}
              <div className="rounded-xl overflow-hidden border border-sage/15 mb-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-forest text-paper">
                      <th className="text-left px-4 py-3 font-medium">{t.compHeader}</th>
                      <th className="text-left px-4 py-3 font-medium">{t.amountHeader}</th>
                      <th className="text-left px-4 py-3 font-medium">{t.roleHeader}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {"ingredientsDisplay" in product && product.ingredientsDisplay.map((row: { name: string; amount: string; role: string }, i: number) => (
                      <tr key={row.name} className={`border-t border-sage/10 ${i % 2 === 0 ? "bg-white" : "bg-paper/60"}`}>
                        <td className="px-4 py-3 text-forest font-medium">{row.name}</td>
                        <td className={`px-4 py-3 font-bold ${isGranule ? "text-leaf" : "text-clay"}`}>{row.amount}</td>
                        <td className="px-4 py-3 text-forest/60">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cert number */}
              {(product as any).hasCert && (
                <p className="text-xs text-forest/35 mb-6 leading-relaxed">
                  {lang === "ko" ? "유기농업자재 공시" : "Organic Materials Cert."} {lang === "ko" ? (product as any).certNumber : (product as any).certNumberEn} · {lang === "ko" ? "공시기관" : "Issuer"}: {lang === "ko" ? (product as any).certBody : (product as any).certBodyEn?.replace(/\n/g, " · ")}<br />
                  {lang === "ko" ? "유효기간" : "Valid"}: {lang === "ko" ? (product as any).certPeriod : (product as any).certPeriodEn}
                </p>
              )}

              {/* CTA */}
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact" className="px-7 py-3.5 rounded-full bg-forest text-paper font-semibold hover:bg-leaf transition-colors">
                  {t.ctaSample}
                </Link>
                <Link href="/products/ingredients" className="px-7 py-3.5 rounded-full border border-sage/30 text-forest/60 hover:border-leaf hover:text-leaf transition-colors text-sm">
                  {t.ctaIngredients}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field application image */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className={`relative ${fieldAspect} ${fieldBg}`}>
              <Image
                src={(product as any).fieldImage}
                alt={lang === "ko" ? `${product.name} 현장 이미지` : `${product.nameEn} field application`}
                fill
                className={`${fieldObjectFit} object-center`}
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-20 ${isGranule ? "bg-paper" : "bg-forest"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-2xl font-bold mb-10 ${isGranule ? "text-forest" : "text-paper"}`}>
            {t.featuresTitle}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {product.features.map((f, i) => (
              <div key={i} className={`flex gap-3 items-start p-5 rounded-xl ${
                isGranule ? "bg-white border border-sage/20" : "bg-white/5 border border-white/10"
              }`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                  isGranule ? "bg-leaf/10 text-leaf" : "bg-leaf/30 text-leaf-bright"
                }`}>
                  {i + 1}
                </span>
                <p className={`text-sm leading-relaxed ${isGranule ? "text-forest/70" : "text-sage"}`}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functions / Applications */}
      {"functions" in product && product.functions ? (
        <section className="bg-forest py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-paper mb-10">{t.functionsTitle}</h2>
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
            <h2 className="text-2xl font-bold text-forest mb-10">{t.applicationsTitle}</h2>
            {"applications" in product && product.applications && (
              <div className="grid sm:grid-cols-2 gap-6">
                {product.applications.map((app, i) => {
                  const appImages: string[] | null =
                    product.id === "amino-gold"
                      ? ["/images/app-fruitveg.jpg", "/images/app-vegetable.jpg", "/images/app-rice.jpg", "/images/app-golf.jpg"]
                      : null;
                  const appBannerAspect = product.id === "alora-prime" ? "aspect-[9/1]" : "aspect-[16/7]";
                  return (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden border border-sage/20">
                      <div className={`relative ${appBannerAspect} overflow-hidden`}>
                        {appImages ? (
                          <Image src={appImages[i] ?? appImages[0]} alt={app.title} fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 50vw" />
                        ) : (
                          <div className="absolute inset-0 bg-forest" />
                        )}
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
                <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-5">{t.summaryTitle}</p>
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

      {/* Usage table */}
      {product.usageTable.length > 0 && (
        <section className="bg-paper py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-forest mb-3">
              {isGranule ? t.usageHumusTitle : t.usageAminoTitle}
            </h2>
            <p className="text-forest/50 text-sm mb-8">
              {(product as any).usageNote ?? (isGranule ? t.usageHumusNote : t.usageAminoNote)}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest text-paper">
                    <th className="text-left px-5 py-3 rounded-tl-xl font-medium">{t.cropZone}</th>
                    <th className="text-left px-5 py-3 font-medium">{isGranule ? t.amountLabel : t.dilutionLabel}</th>
                    <th className="text-left px-5 py-3 rounded-tr-xl font-medium">{isGranule ? t.timesHumus : t.timesAmino}</th>
                  </tr>
                </thead>
                <tbody>
                  {product.usageTable.map((row, i) => (
                    <tr key={i} className={`border-b border-sage/10 ${i % 2 === 1 ? "bg-sage/5" : "bg-white"}`}>
                      <td className="px-5 py-3.5 text-forest font-medium">{row.crop}</td>
                      <td className="px-5 py-3.5 text-forest/70">{row.amount}</td>
                      <td className="px-5 py-3.5 text-forest/70">{row.times}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Composition bar (products with certified ingredient ratios only) */}
            {product.ingredients.length > 0 && (
              <div className="mt-14">
                <h3 className="text-lg font-bold text-forest mb-2">{t.ingredientsTitle}</h3>
                <p className="text-forest/40 text-xs mb-5">{t.ingredientsNote}</p>
                <div className="flex rounded-xl overflow-hidden h-10 mb-5">
                  {certIngredients.map((ing) => (
                    <div key={ing.name} style={{ width: `${ing.ratio}%`, backgroundColor: ing.color }} className="flex items-center justify-center">
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
                        {lang === "ko" ? ing.name : (ing.name === "탈지대두" ? "Defatted Soybean" : ing.name === "해조" ? "Seaweed" : ing.name === "골분" ? "Bone Meal" : "Peat")} <strong className="text-forest">{ing.ratio}%</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Compliance + other product */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6">
          {(product as any).hasCert && product.id === "humus-premium" && (
            <p className="text-sage/50 text-xs text-center mb-10">{t.complianceNote}</p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-sage text-sm mb-1">{t.otherProduct}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {otherProducts.map((op) => (
                  <Link key={op.id} href={`/products/${op.id}`} className="text-paper font-semibold hover:text-leaf-bright transition-colors">
                    {lang === "ko" ? op.name : op.nameEn} ({lang === "ko" ? op.nameEn : op.name}) →
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="px-6 py-3 rounded-full bg-leaf text-white font-semibold hover:bg-leaf-bright transition-colors flex-shrink-0">
              {t.ctaConsult}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
