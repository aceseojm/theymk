"use client";

import Link from "next/link";
import { company } from "@/lib/data";
import ContactInner from "@/components/ContactInner";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

export default function ContactPage() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.contactPage : en.contactPage;

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient-deep pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-forest/50 text-sm font-medium uppercase tracking-widest mb-4">{t.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6 max-w-2xl">
            {t.title}{" "}
            <span className="text-leaf">{t.titleHighlight}</span>
          </h1>
          <p className="text-forest/65 text-lg max-w-xl leading-relaxed">{t.subtitle}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            {t.tags.map((type) => (
              <span
                key={type}
                className="px-4 py-2 rounded-full bg-white/50 text-forest text-sm border border-forest/10 backdrop-blur-sm"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-paper py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-3">
                  {t.companyInfoLabel}
                </p>
                <p className="font-bold text-forest">{company.name}</p>
                <p className="text-forest/60 text-sm mt-1 leading-relaxed">
                  {lang === "ko" ? "대표이사" : "CEO"} {company.ceo}
                  <br />
                  {lang === "ko" ? "사업자" : "Biz. Reg."} {company.bizNumber}
                  <br />
                  {company.address}
                </p>
              </div>

              <div>
                <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-3">
                  {t.responseLabel}
                </p>
                <p className="text-forest text-sm">{t.responseTime}</p>
              </div>

              <div>
                <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-4">
                  {t.inquiryTypesLabel}
                </p>
                <ul className="space-y-2 text-sm text-forest/70">
                  {t.inquiryTypes.map((item) => (
                    <li key={item.label} className="flex gap-2 items-center">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-sage/20 pt-6">
                <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-3">
                  {t.helpLabel}
                </p>
                <div className="space-y-2 text-sm">
                  {t.helpLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block text-leaf hover:underline">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="md:col-span-2">
              <ContactInner />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
