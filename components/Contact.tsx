"use client";

import { company } from "@/lib/data";
import ContactInner from "@/components/ContactInner";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

export default function Contact() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.contactSection : en.contactSection;

  return (
    <section id="contact" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
              {t.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              {t.title}
            </h2>
            <p className="text-forest/70 leading-relaxed mb-8">
              {t.subtitle}
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <svg
                  className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-forest">{lang === "ko" ? company.name : company.nameEn}</p>
                  <p className="text-forest/60">
                    {lang === "ko" ? `${t.ceoLabel} ${company.ceo}` : "CEO Kil Won, Kang"} · {t.bizLabel} {company.bizNumber}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg
                  className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-forest/70">{lang === "ko" ? company.address : company.addressEn}</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <p className="text-forest/70">
                  Tel. {lang === "ko" ? company.tel : company.telEn} &nbsp;·&nbsp; Fax. {lang === "ko" ? company.fax : company.faxEn}
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactInner />
          </div>
        </div>
      </div>
    </section>
  );
}
