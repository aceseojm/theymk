"use client";

import Image from "next/image";
import { company } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

export default function Footer() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.footer : en.footer;

  return (
    <footer className="bg-forest border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="relative w-12 h-12 flex-shrink-0 mt-0.5">
              <Image
                src="/images/ymk-logo1.png"
                alt="YMK Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-serif text-paper text-lg font-semibold mb-0.5">YMK</p>
              <p className="text-leaf text-[10px] font-medium uppercase tracking-widest mb-2">We Care</p>
              <p className="text-sage text-xs leading-relaxed">
                {company.name}
                <br />
                {t.bizNumber} {company.bizNumber}
                <br />
                {company.address}
                <br />
                Tel. 031.8018.2034 &nbsp;|&nbsp; Fax. 031.8018.2033
              </p>
            </div>
          </div>
          <div className="text-sage text-xs text-left md:text-right self-end md:self-auto">
            <p>© {new Date().getFullYear()} {t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
