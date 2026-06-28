"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [hovered, setHovered] = useState<"company" | "agri" | "golf" | null>(null);

  return (
    <section className="relative h-screen flex overflow-hidden" aria-label="메인 히어로">

      {/* ──────────────────────────────────────
          중앙 타이틀 (호버 전에만 표시)
      ────────────────────────────────────── */}
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 z-30 hidden md:flex flex-col items-center justify-center pointer-events-none transition-all duration-500 ${
          hovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <span className="text-white/50 text-[10px] uppercase tracking-[0.35em] font-medium mb-4">
          YMK · We Care
        </span>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight drop-shadow-2xl px-4">
          모든 생명을 위한
          <br />
          <span className="text-leaf-bright">맞춤 비료</span>
        </h1>
        <div className="flex items-center gap-5 mt-8">
          <span className="flex items-center gap-1.5 text-white/45 text-xs tracking-wide">
            회사소개
          </span>
          <div className="w-px h-5 bg-white/20" />
          <span className="flex items-center gap-1.5 text-white/45 text-xs tracking-wide">
            농업 · 작물
          </span>
          <div className="w-px h-5 bg-white/20" />
          <span className="flex items-center gap-1.5 text-white/45 text-xs tracking-wide">
            골프장 · 조경
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════
          왼쪽 패널 — 회사소개
      ══════════════════════════════════════ */}
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
            회사소개 · About YMK
          </span>
          <h2
            className={`text-white font-bold leading-tight mb-4 drop-shadow-lg transition-all duration-500 ${
              hovered === "company" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            }`}
          >
            땅을 아끼고,<br />생명을 돌봅니다
          </h2>
          <div className={`overflow-hidden transition-all duration-500 ${
            hovered === "company" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <p className="text-white/75 text-sm max-w-sm leading-relaxed mb-6">
              1984년 공장 자동화 전문 기업으로 시작해 친환경 유기질 비료 펠렛 자동화 시스템 선도 기업으로 성장한 YMK입니다.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/40 text-white font-semibold hover:bg-leaf hover:border-leaf transition-colors text-sm backdrop-blur-sm shadow-lg">
                회사소개 →
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

      {/* ── 구분선 1 + YMK 배지 ── */}
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

      {/* ══════════════════════════════════════
          가운데 패널 — 농업 · 작물
      ══════════════════════════════════════ */}
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
            농업 · 원예 · B2B
          </span>
          <h2
            className={`text-white font-bold leading-tight mb-4 drop-shadow-lg transition-all duration-500 ${
              hovered === "agri" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            }`}
          >
            작물과 농지를 위한<br />YMK 유기질 비료
          </h2>
          <div className={`overflow-hidden transition-all duration-500 ${
            hovered === "agri" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <p className="text-white/75 text-sm max-w-sm leading-relaxed mb-6">
              과채류·채소·수도작·과수 등 다양한 작물에 적용.
              OMRI 인증 원료 기반 펠릿형(휴머스 프리미엄)과 액체형(아미노 골드).
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf text-white font-semibold hover:bg-leaf-bright transition-colors text-sm shadow-lg">
                제품 보기 →
              </Link>
              <Link href="/audiences/agri-b2b"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/40 text-white/85 hover:text-white hover:border-white/70 transition-colors text-sm backdrop-blur-sm">
                농업 B2B 안내
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

      {/* ── 구분선 2 + YMK 배지 ── */}
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

      {/* ══════════════════════════════════════
          오른쪽 패널 — 골프장 · 조경
      ══════════════════════════════════════ */}
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
            골프장 · 조경 · 잔디
          </span>
          <h2
            className={`text-white font-bold leading-tight mb-4 drop-shadow-lg transition-all duration-500 ${
              hovered === "golf" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
            }`}
          >
            코스 품질을 높이는<br />YMK 프리미엄 비료
          </h2>
          <div className={`overflow-hidden transition-all duration-500 ${
            hovered === "golf" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <p className="text-white/75 text-sm max-w-sm leading-relaxed mb-6 ml-auto">
              그린·페어웨이·티잉구역 구역별 맞춤 시비.
              무취 설계로 이용객 불편 없이 운영 중 적용 가능.
            </p>
            <div className="flex gap-3 flex-wrap justify-end">
              <Link href="/audiences/golf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/40 text-white font-semibold hover:bg-leaf hover:border-leaf transition-colors text-sm backdrop-blur-sm shadow-lg">
                골프장 솔루션 →
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

      {/* ══════════════════════════════════════
          모바일 — 수직 스택 (터치 탭으로 이동)
      ══════════════════════════════════════ */}
      <div className="md:hidden w-full flex flex-col h-full">
        <Link href="/about" className="relative flex-1 overflow-hidden flex flex-col justify-end p-8">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/company.png')", backgroundPosition: "center center" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative">
            <span className="text-leaf-bright text-[10px] uppercase tracking-widest font-semibold mb-2 block">회사소개</span>
            <h2 className="text-white text-xl font-bold mb-2 leading-tight">땅을 아끼고,<br />생명을 돌봅니다</h2>
            <span className="text-white/65 text-sm">회사소개 →</span>
          </div>
        </Link>
        <div className="h-px bg-white/10" />
        <Link href="/products" className="relative flex-1 overflow-hidden flex flex-col justify-end p-8">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-agri.jpg')", backgroundPosition: "center 45%" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative">
            <span className="text-leaf-bright text-[10px] uppercase tracking-widest font-semibold mb-2 block">농업 · 작물</span>
            <h2 className="text-white text-xl font-bold mb-2 leading-tight">작물과 농지를 위한<br />YMK 유기질 비료</h2>
            <span className="text-white/65 text-sm">제품 보기 →</span>
          </div>
        </Link>
        <div className="h-px bg-white/10" />
        <Link href="/audiences/golf" className="relative flex-1 overflow-hidden flex flex-col justify-end p-8">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-golf.jpg')", backgroundPosition: "center 35%" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative">
            <span className="text-leaf text-[10px] uppercase tracking-widest font-semibold mb-2 block">골프장 · 조경</span>
            <h2 className="text-white text-xl font-bold mb-2 leading-tight">코스 품질을 높이는<br />YMK 프리미엄 비료</h2>
            <span className="text-white/65 text-sm">골프장 솔루션 →</span>
          </div>
        </Link>
      </div>

      {/* ── 스크롤 다운 힌트 ── */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="text-white/25 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
}
