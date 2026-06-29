"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

export default function Hero() {
  const [hovered, setHovered] = useState<"company" | "agri" | "golf" | null>(null);
  const { lang } = useLang();
  const t = lang === "ko" ? ko.hero : en.hero;

  return (
    <section className="relative h-screen flex overflow-hidden" aria-label="Main hero">

      {/* Center title (shown when not hovering) */}
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 z-30 hidden md:flex flex-col items-center justify-center pointer-events-none transition-all duration-500 ${
          hovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <span className="text-white/50 text-[10px] uppercase tracking-[0.35em] font-medium mb-4">
          {t.badge}
        </span>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight drop-shadow-2xl px-4">
          {t.title1}
          <br />
          <span className="text-leaf-bright">{t.title2}</span>
        </h1>
        <div className="flex items-center gap-5 mt-8">
          <span className="flex items-center gap-1.5 text-white/45 text-xs tracking-wide">
            {t.hint1}
          </span>
          <div className="w-px h-5 bg-white/20" />
          <span className="flex items-center gap-1.5 text-white/45 text-xs tracking-wide">
            {t.hint2}
          </span>
          <div className="w-px h-5 bg-white/20" />
          <span className="flex items-center gap-1.5 text-white/45 text-xs tracking-wide">
            {t.hint3}
          </span>
        </div>
      </div>

      {/* Left panel — Company */}
      <div
        className={`relative flex-shrink-0 overflow-hidden cursor-pointer
          transition-[width] duration-700 ease-in-out
          ${hovered === "company" ? "w-[50%]" : (hovered === "agri" || hovered === "golf") ? "w-[25%]" : "w-1/3"}
          hidden md:block`}
        style={{ minWidth: 0 }}
        onMouseEnter={() => setHovered("company")}
        onMouseLeave={() => setHovered(null)}
      >
        <div
          className="absolute inset-0 bg-cover transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: "url('/images/company.png')",
            backgroundPosition: "center center",
            transform: hovered === "company" ? "scale(1.04)" : "scale(1.08)",
          }}
        />
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            hovered === "company"
              ? "bg-gradient-to-t from-black/65 via-black/15 to-transparent"
              : "bg-gradient-to-t from-black/80 via-black/40 to-black/20"
          }`}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
          <span className="text-leaf-bright text-[10px] uppercase tracking-[0.3em] font-semibold mb-3 block drop-shadow">
            {t.companyBadge}
          </span>
          <h2
            className={`text-white font-bold leading-tight mb-4 drop-shadow-lg transition-all duration-500 ${
              hovered === "company" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            }`}
          >
            {t.companyTitle1}<br />{t.companyTitle2}
          </h2>
          <div className={`overflow-hidden transition-all duration-500 ${
            hovered === "company" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <p className="text-white/75 text-sm max-w-sm leading-relaxed mb-6">
              {t.companyDesc}
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/40 text-white font-semibold hover:bg-leaf hover:border-leaf transition-colors text-sm backdrop-blur-sm shadow-lg">
                {t.companyCta}
              </Link>
            </div>
          </div>
          <div className={`absolute right-8 top-1/2 -translate-y-1/2 transition-all duration-500 ${
            hovered === "company" ? "opacity-0 translate-x-3" : "opacity-40"
          }`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Divider 1 */}
      <div
        className="relative z-20 hidden md:flex flex-shrink-0 items-center justify-center"
        style={{
          width: "2px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0.25) 75%, transparent 100%)",
        }}
      >
        <div className="absolute w-11 h-11 rounded-full bg-forest/90 border border-white/25 flex items-center justify-center shadow-2xl backdrop-blur-sm">
          <span className="text-leaf-bright text-[9px] font-bold tracking-widest">YMK</span>
        </div>
      </div>

      {/* Center panel — Agriculture */}
      <div
        className={`relative flex-shrink-0 overflow-hidden cursor-pointer
          transition-[width] duration-700 ease-in-out
          ${hovered === "agri" ? "w-[50%]" : (hovered === "company" || hovered === "golf") ? "w-[25%]" : "w-1/3"}
          hidden md:block`}
        style={{ minWidth: 0 }}
        onMouseEnter={() => setHovered("agri")}
        onMouseLeave={() => setHovered(null)}
      >
        <div
          className="absolute inset-0 bg-cover transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: "url('/images/hero-agri.jpg')",
            backgroundPosition: "center 45%",
            transform: hovered === "agri" ? "scale(1.04)" : "scale(1.08)",
          }}
        />
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            hovered === "agri"
              ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              : "bg-gradient-to-t from-black/80 via-black/40 to-black/20"
          }`}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
          <span className="text-leaf-bright text-[10px] uppercase tracking-[0.3em] font-semibold mb-3 block drop-shadow">
            {t.agriBadge}
          </span>
          <h2
            className={`text-white font-bold leading-tight mb-4 drop-shadow-lg transition-all duration-500 ${
              hovered === "agri" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            }`}
          >
            {t.agriTitle1}<br />{t.agriTitle2}
          </h2>
          <div className={`overflow-hidden transition-all duration-500 ${
            hovered === "agri" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <p className="text-white/75 text-sm max-w-sm leading-relaxed mb-6">
              {t.agriDesc.split("\n").map((line, i) => (
                <span key={i}>{line}{i < t.agriDesc.split("\n").length - 1 && <br />}</span>
              ))}
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf text-white font-semibold hover:bg-leaf-bright transition-colors text-sm shadow-lg">
                {t.agriCtaProducts}
              </Link>
              <Link href="/audiences/agri-b2b"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/40 text-white/85 hover:text-white hover:border-white/70 transition-colors text-sm backdrop-blur-sm">
                {t.agriCtaAudiences}
              </Link>
            </div>
          </div>
          <div className={`absolute right-8 top-1/2 -translate-y-1/2 transition-all duration-500 ${
            hovered === "agri" ? "opacity-0 translate-x-3" : "opacity-40"
          }`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Divider 2 */}
      <div
        className="relative z-20 hidden md:flex flex-shrink-0 items-center justify-center"
        style={{
          width: "2px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0.25) 75%, transparent 100%)",
        }}
      >
        <div className="absolute w-11 h-11 rounded-full bg-forest/90 border border-white/25 flex items-center justify-center shadow-2xl backdrop-blur-sm">
          <span className="text-leaf-bright text-[9px] font-bold tracking-widest">YMK</span>
        </div>
      </div>

      {/* Right panel — Golf */}
      <div
        className={`relative flex-shrink-0 overflow-hidden cursor-pointer
          transition-[width] duration-700 ease-in-out
          ${hovered === "golf" ? "w-[50%]" : (hovered === "company" || hovered === "agri") ? "w-[25%]" : "w-1/3"}
          hidden md:block`}
        style={{ minWidth: 0 }}
        onMouseEnter={() => setHovered("golf")}
        onMouseLeave={() => setHovered(null)}
      >
        <div
          className="absolute inset-0 bg-cover transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: "url('/images/hero-golf.jpg')",
            backgroundPosition: "center 35%",
            transform: hovered === "golf" ? "scale(1.04)" : "scale(1.08)",
          }}
        />
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            hovered === "golf"
              ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              : "bg-gradient-to-t from-black/80 via-black/40 to-black/20"
          }`}
        />
        <div className="absolute inset-0 flex flex-col justify-end items-end text-right p-10 md:p-14">
          <span className="text-leaf text-[10px] uppercase tracking-[0.3em] font-semibold mb-3 block drop-shadow">
            {t.golfBadge}
          </span>
          <h2
            className={`text-white font-bold leading-tight mb-4 drop-shadow-lg transition-all duration-500 ${
              hovered === "golf" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            }`}
          >
            {t.golfTitle1}<br />{t.golfTitle2}
          </h2>
          <div className={`overflow-hidden transition-all duration-500 ${
            hovered === "golf" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <p className="text-white/75 text-sm max-w-sm leading-relaxed mb-6 ml-auto">
              {t.golfDesc.split("\n").map((line, i) => (
                <span key={i}>{line}{i < t.golfDesc.split("\n").length - 1 && <br />}</span>
              ))}
            </p>
            <div className="flex gap-3 flex-wrap justify-end">
              <Link href="/audiences/golf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/40 text-white font-semibold hover:bg-leaf hover:border-leaf transition-colors text-sm backdrop-blur-sm shadow-lg">
                {t.golfCta}
              </Link>
            </div>
          </div>
          <div className={`absolute left-8 top-1/2 -translate-y-1/2 transition-all duration-500 ${
            hovered === "golf" ? "opacity-0 -translate-x-3" : "opacity-40"
          }`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile — vertical stack */}
      <div className="md:hidden w-full flex flex-col h-full">
        <Link href="/about" className="relative flex-1 overflow-hidden flex flex-col justify-end p-8">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/company.png')", backgroundPosition: "center center" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative">
            <span className="text-leaf-bright text-[10px] uppercase tracking-widest font-semibold mb-2 block">{t.mobileCompanyBadge}</span>
            <h2 className="text-white text-xl font-bold mb-2 leading-tight">{t.mobileCompanyTitle1}<br />{t.mobileCompanyTitle2}</h2>
            <span className="text-white/65 text-sm">{t.mobileCompanyCta}</span>
          </div>
        </Link>
        <div className="h-px bg-white/10" />
        <Link href="/products" className="relative flex-1 overflow-hidden flex flex-col justify-end p-8">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-agri.jpg')", backgroundPosition: "center 45%" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative">
            <span className="text-leaf-bright text-[10px] uppercase tracking-widest font-semibold mb-2 block">{t.mobileAgriBadge}</span>
            <h2 className="text-white text-xl font-bold mb-2 leading-tight">{t.mobileAgriTitle1}<br />{t.mobileAgriTitle2}</h2>
            <span className="text-white/65 text-sm">{t.mobileAgriCta}</span>
          </div>
        </Link>
        <div className="h-px bg-white/10" />
        <Link href="/audiences/golf" className="relative flex-1 overflow-hidden flex flex-col justify-end p-8">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-golf.jpg')", backgroundPosition: "center 35%" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative">
            <span className="text-leaf text-[10px] uppercase tracking-widest font-semibold mb-2 block">{t.mobileGolfBadge}</span>
            <h2 className="text-white text-xl font-bold mb-2 leading-tight">{t.mobileGolfTitle1}<br />{t.mobileGolfTitle2}</h2>
            <span className="text-white/65 text-sm">{t.mobileGolfCta}</span>
          </div>
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="text-white/25 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
}
