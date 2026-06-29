"use client";

import { ingredients } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const enIngredients = [
  { name: "Defatted Soybean", ratio: 57, color: "#6BA12B" },
  { name: "Seaweed", ratio: 20, color: "#8DC63F" },
  { name: "Bone Meal", ratio: 19, color: "#A7BE89" },
  { name: "Peat", ratio: 4, color: "#143019" },
];

export default function CompositionSignature() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.compositionSection : en.compositionSection;
  const displayIngredients = lang === "ko" ? ingredients : enIngredients;

  return (
    <section className="bg-forest py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            {t.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-paper mb-4">
            {t.title}
          </h2>
          <p className="text-sage max-w-xl mx-auto">
            {t.subtitle1} <strong className="text-paper font-semibold">{t.subtitle2}</strong>{t.subtitle3}<br />
            {t.subtitle4} <strong className="text-paper font-semibold">{t.subtitle5}</strong>{t.subtitle6}
          </p>
        </div>

        {/* Composition bar */}
        <div className="max-w-3xl mx-auto">
          {/* Horizontal ratio bar */}
          <div className="flex rounded-2xl overflow-hidden h-16 mb-8 shadow-xl">
            {displayIngredients.map((ing) => (
              <div
                key={ing.name}
                style={{ width: `${ing.ratio}%`, backgroundColor: ing.color }}
                className="flex items-center justify-center transition-all duration-500"
                title={`${ing.name} ${ing.ratio}%`}
              >
                {ing.ratio >= 15 && (
                  <span className="text-white text-sm font-bold drop-shadow">
                    {ing.ratio}%
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayIngredients.map((ing) => (
              <div key={ing.name} className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded flex-shrink-0"
                  style={{ backgroundColor: ing.color }}
                />
                <div>
                  <p className="text-paper text-sm font-semibold">{ing.name}</p>
                  <p className="text-sage text-xs">{ing.ratio}{t.ratioLabel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certification info */}
          <div className="mt-10 p-5 rounded-xl bg-white/5 border border-white/10 text-center">
            <p className="text-sage text-sm">
              {t.certNote1} <strong className="text-paper font-semibold">{t.certNote2}</strong>{t.certNote3}
            </p>
            <p className="text-sage/60 text-xs mt-1">
              {t.certNumber}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
