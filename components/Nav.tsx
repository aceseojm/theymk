"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { audiences, products } from "@/lib/data";

type DropdownItem = { href: string; label: string; sub?: string };

type NavLink =
  | { href: string; label: string; dropdown?: undefined }
  | { href: string; label: string; dropdown: DropdownItem[] };

const productDropdown: DropdownItem[] = [
  ...products.map((p) => ({
    href: `/products/${p.id}`,
    label: p.name,
    sub: p.nameEn,
  })),
  { href: "/products/ingredients", label: "원료 소개", sub: "OMRI 인증 7종" },
];

const audienceDropdown: DropdownItem[] = audiences.map((a) => ({
  href: `/audiences/${a.id}`,
  label: a.title,
  sub: a.subtitle,
}));

const resultsDropdown: DropdownItem[] = [
  { href: "/results#vegetable", label: "채소류", sub: "마늘·양파·배추" },
  { href: "/results#fruitveg", label: "과채류", sub: "청양고추·호박" },
  { href: "/results#fruit", label: "과수", sub: "복분자·유자·샤인머스켓" },
  { href: "/results#rice", label: "수도작", sub: "수도작(벼)" },
];

const aboutDropdown: DropdownItem[] = [
  { href: "/about#vision", label: "비전 및 철학", sub: "WE CARE" },
  { href: "/about#ceo-message", label: "대표이사 인사말", sub: "강길원 대표" },
  { href: "/about#history", label: "연혁", sub: "1984 ~ 현재" },
  { href: "/about#engineering", label: "엔지니어링 역량", sub: "설비 시스템 구축" },
  { href: "/about#partnership", label: "글로벌 파트너십", sub: "대만 영밍 · 중국 G-Teck" },
];

const links: NavLink[] = [
  { href: "/about", label: "회사소개", dropdown: aboutDropdown },
  { href: "/why", label: "왜 YMK인가" },
  { href: "/products", label: "제품 및 원료", dropdown: productDropdown },
  { href: "/audiences", label: "활용 분야", dropdown: audienceDropdown },
  { href: "/results", label: "적용 사례", dropdown: resultsDropdown },
  { href: "/trust", label: "인증 및 특허" },
  { href: "/contact", label: "상담 신청" },
];

function DropdownMenu({
  items,
  indexHref,
  indexLabel,
  onClose,
  pathname,
}: {
  items: DropdownItem[];
  indexHref: string;
  indexLabel: string;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <div
      role="menu"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-forest/98 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden"
    >
      <Link
        href={indexHref}
        role="menuitem"
        className="flex items-start gap-3 px-4 py-3 text-sage hover:bg-white/5 hover:text-paper border-b border-white/10 transition-colors"
        onClick={onClose}
      >
        <div>
          <p className="text-sm font-medium leading-tight">전체 {indexLabel} 보기</p>
        </div>
      </Link>
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            className={`flex items-start gap-3 px-4 py-3 transition-colors ${
              active
                ? "bg-leaf/20 text-leaf-bright"
                : "text-sage hover:bg-white/5 hover:text-paper"
            }`}
            onClick={onClose}
          >
            <div>
              <p className={`text-sm font-medium leading-tight ${active ? "text-leaf-bright" : ""}`}>
                {item.label}
              </p>
              {item.sub && (
                <p className="text-xs text-sage/40 mt-0.5">{item.sub}</p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // 페이지 이동 시 드롭다운 닫기
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-forest/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav ref={navRef} className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/images/ymk-logo-new.png"
              alt="YMK 로고"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif text-lg font-semibold text-paper tracking-wider leading-none">
            <span className="text-paper/60 text-[9px] font-sans font-medium tracking-widest uppercase leading-none">
              We Care
            </span>
          </span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive =
              pathname === l.href ||
              (l.href !== "/" && pathname.startsWith(l.href + "/"));
            const isOpen = openDropdown === l.href;

            if (l.dropdown) {
              return (
                <li key={l.href} className="relative">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : l.href)}
                    className={`flex items-center gap-1 text-sm transition-colors ${
                      isActive
                        ? "text-leaf-bright font-semibold"
                        : "text-sage hover:text-paper"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                  >
                    {l.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <DropdownMenu
                      items={l.dropdown}
                      indexHref={l.href}
                      indexLabel={l.label}
                      onClose={() => setOpenDropdown(null)}
                      pathname={pathname}
                    />
                  )}
                </li>
              );
            }

            return (
              <li key={l.href}>
                {l.href === "/contact" ? (
                  <Link
                    href={l.href}
                    className="px-4 py-2 rounded-full bg-leaf text-white text-sm font-medium hover:bg-leaf-bright transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <Link
                    href={l.href}
                    className={`text-sm transition-colors ${
                      isActive ? "text-leaf-bright font-semibold" : "text-sage hover:text-paper"
                    }`}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden text-paper p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="메뉴 열기"
          aria-expanded={mobileOpen}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* 모바일 드롭다운 */}
      {mobileOpen && (
        <div className="md:hidden bg-forest/97 backdrop-blur-sm border-t border-white/10">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const isActive =
                pathname === l.href ||
                (l.href !== "/" && pathname.startsWith(l.href + "/"));
              const isExpanded = mobileExpanded === l.href;

              if (l.dropdown) {
                return (
                  <li key={l.href}>
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : l.href)}
                      className={`w-full flex items-center justify-between py-2.5 text-sm ${
                        isActive ? "text-leaf-bright font-semibold" : "text-sage"
                      }`}
                    >
                      <span>{l.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <ul className="pl-3 mt-1 mb-2 space-y-0.5 border-l border-white/10">
                        <li>
                          <Link
                            href={l.href}
                            className="block py-1.5 px-2 text-xs text-sage/50 hover:text-paper"
                            onClick={() => setMobileOpen(false)}
                          >
                            전체 {l.label}
                          </Link>
                        </li>
                        {l.dropdown.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block py-1.5 px-2 text-sm ${
                                pathname === item.href
                                  ? "text-leaf-bright font-medium"
                                  : "text-sage hover:text-paper"
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.label}
                              {item.sub && (
                                <span className="text-sage/40 text-xs ml-1">— {item.sub}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block py-2.5 text-sm ${
                      isActive ? "text-leaf-bright font-semibold" : "text-sage hover:text-paper"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
