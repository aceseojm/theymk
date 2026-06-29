"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { audiences, products } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

type DropdownItem = { href: string; label: string; sub?: string };

type NavLink =
  | { href: string; label: string; dropdown?: undefined }
  | { href: string; label: string; dropdown: DropdownItem[] };

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { lang, toggle } = useLang();
  const t = lang === "ko" ? ko.nav : en.nav;

  const productDropdown: DropdownItem[] = [
    ...products.map((p) => ({
      href: `/products/${p.id}`,
      label: lang === "ko" ? p.name : p.nameEn,
      sub: lang === "ko" ? p.nameEn : p.name,
    })),
    {
      href: "/products/ingredients",
      label: t.ingredients,
      sub: t.ingredientsSub,
    },
  ];

  const audienceDropdown: DropdownItem[] = audiences.map((a) => ({
    href: `/audiences/${a.id}`,
    label: lang === "ko" ? a.title : (enAudienceTitles[a.id] ?? a.title),
    sub: lang === "ko" ? a.subtitle : (enAudienceSubtitles[a.id] ?? a.subtitle),
  }));

  const resultsDropdown: DropdownItem[] = [
    { href: "/results#vegetable", label: t.resultsVegetable, sub: t.resultsVegetableSub },
    { href: "/results#fruitveg", label: t.resultsFruitveg, sub: t.resultsFruitvegSub },
    { href: "/results#fruit", label: t.resultsFruit, sub: t.resultsFruitSub },
    { href: "/results#rice", label: t.resultsRice, sub: t.resultsRiceSub },
  ];

  const aboutDropdown: DropdownItem[] = [
    { href: "/about#vision", label: t.aboutVision, sub: t.aboutVisionSub },
    { href: "/about#ceo-message", label: t.aboutCeo, sub: t.aboutCeoSub },
    { href: "/about#history", label: t.aboutHistory, sub: t.aboutHistorySub },
    { href: "/about#engineering", label: t.aboutEngineering, sub: t.aboutEngineeringSub },
    { href: "/about#partnership", label: t.aboutPartnership, sub: t.aboutPartnershipSub },
  ];

  const links: NavLink[] = [
    { href: "/about", label: t.about, dropdown: aboutDropdown },
    { href: "/why", label: t.why },
    { href: "/products", label: t.products, dropdown: productDropdown },
    { href: "/audiences", label: t.audiences, dropdown: audienceDropdown },
    { href: "/results", label: t.results, dropdown: resultsDropdown },
    { href: "/trust", label: t.trust },
    { href: "/contact", label: t.contact },
  ];

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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/images/ymk-logo-new.png"
              alt="YMK Logo"
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

        {/* Desktop menu */}
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
                      viewAllText={lang === "ko" ? `전체 ${l.label} 보기` : `View All ${l.label}`}
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

          {/* Language toggle */}
          <li>
            <button
              onClick={toggle}
              className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs hover:bg-white/25 hover:border-white/50 transition-all ml-2 backdrop-blur-sm"
              aria-label="Switch language"
            >
              <span className={lang === "ko" ? "text-paper font-bold" : "text-white/40"}>KO</span>
              <span className="text-white/30 mx-0.5">|</span>
              <span className={lang === "en" ? "text-paper font-bold" : "text-white/40"}>EN</span>
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-paper p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={t.openMenu}
          aria-expanded={mobileOpen}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile dropdown */}
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
                            {lang === "ko" ? `전체 ${l.label}` : `All ${l.label}`}
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

            {/* Mobile language toggle */}
            <li className="pt-2 border-t border-white/10 mt-2">
              <button
                onClick={toggle}
                className="flex items-center gap-2 py-2 text-sm"
                aria-label="Switch language"
              >
                <span className={lang === "ko" ? "text-paper font-semibold" : "text-sage/40"}>KO</span>
                <span className="text-white/20">|</span>
                <span className={lang === "en" ? "text-paper font-semibold" : "text-sage/40"}>EN</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function DropdownMenu({
  items,
  indexHref,
  indexLabel: _indexLabel,
  onClose,
  pathname,
  viewAllText,
}: {
  items: DropdownItem[];
  indexHref: string;
  indexLabel: string;
  onClose: () => void;
  pathname: string;
  viewAllText: string;
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
          <p className="text-sm font-medium leading-tight">{viewAllText}</p>
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

// English audience titles/subtitles for nav dropdown
const enAudienceTitles: Record<string, string> = {
  "agri-b2b": "Agriculture B2B",
  golf: "Golf Course",
  oem: "OEM·ODM",
  export: "Export",
  home: "Home Gardening",
};

const enAudienceSubtitles: Record<string, string> = {
  "agri-b2b": "Bulk Purchase · Distribution",
  golf: "Green · Fairway Management",
  oem: "Custom Branding",
  export: "Southeast Asia · Overseas",
  home: "Small Quantity Purchase",
};
