"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

type Crop = {
  id: string;
  nameKo: string;
  nameEn: string;
  category: string;
  effectsKo: string[];
  effectsEn: string[];
  noteKo?: string;
  noteEn?: string;
  ext: string;
  hasExtra?: boolean;
};

const crops: Crop[] = [
  {
    id: "garlic",
    nameKo: "마늘",
    nameEn: "Garlic",
    category: "vegetable",
    effectsKo: ["생육 상태 개선", "수확량 증대", "품질 향상", "병해충 저항성 증가"],
    effectsEn: ["Improved growth condition", "Increased yield", "Quality improvement", "Enhanced pest resistance"],
    ext: "jpg",
  },
  {
    id: "onion",
    nameKo: "양파",
    nameEn: "Onion",
    category: "vegetable",
    effectsKo: ["뿌리 발달 촉진", "구의 크기 증가", "저장성 향상", "당도 증가"],
    effectsEn: ["Promoted root development", "Increased bulb size", "Improved storability", "Increased sugar content"],
    ext: "jpg",
  },
  {
    id: "cabbage",
    nameKo: "배추",
    nameEn: "Cabbage",
    category: "vegetable",
    effectsKo: ["생육 상태 개선", "수확량 증대", "품질 향상", "병해충 저항성 증가"],
    effectsEn: ["Improved growth condition", "Increased yield", "Quality improvement", "Enhanced pest resistance"],
    ext: "jpg",
  },
  {
    id: "pepper",
    nameKo: "청양고추",
    nameEn: "Chili Pepper",
    category: "fruitveg",
    effectsKo: ["생육 상태 개선", "수확량 증대", "품질 향상", "병해충 저항성 증가"],
    effectsEn: ["Improved growth condition", "Increased yield", "Quality improvement", "Enhanced pest resistance"],
    ext: "png",
  },
  {
    id: "pumpkin",
    nameKo: "호박",
    nameEn: "Pumpkin",
    category: "fruitveg",
    effectsKo: ["비대 방지", "당도 증가", "착색 증진", "긍정적 수확 결과"],
    effectsEn: ["Controlled enlargement", "Increased sugar content", "Improved coloring", "Positive harvest results"],
    ext: "png",
  },
  {
    id: "bokbunja",
    nameKo: "복분자",
    nameEn: "Korean Black Raspberry",
    category: "fruit",
    effectsKo: ["뿌리 발달 촉진", "저장성 향상", "당도 증가"],
    effectsEn: ["Promoted root development", "Improved storability", "Increased sugar content"],
    ext: "jpg",
  },
  {
    id: "yuzu",
    nameKo: "유자",
    nameEn: "Yuzu",
    category: "fruit",
    effectsKo: ["생육 상태 개선", "수확량 증대", "품질 향상", "병해충 저항성 증가"],
    effectsEn: ["Improved growth condition", "Increased yield", "Quality improvement", "Enhanced pest resistance"],
    ext: "png",
  },
  {
    id: "muscat",
    nameKo: "샤인머스켓",
    nameEn: "Shine Muscat",
    category: "fruit",
    effectsKo: ["비대 방지", "당도 증가", "착색 증진", "품질 향상"],
    effectsEn: ["Controlled enlargement", "Increased sugar content", "Improved coloring", "Quality improvement"],
    ext: "png",
  },
  {
    id: "rice",
    nameKo: "수도작",
    nameEn: "Paddy Rice",
    category: "rice",
    effectsKo: ["도복 피해 없음", "균일한 생육 확인"],
    effectsEn: ["No lodging damage", "Uniform growth confirmed"],
    noteKo: "미사용 구역 대비 도복 피해 현저히 감소",
    noteEn: "Significantly reduced lodging compared to untreated areas",
    ext: "jpg",
    hasExtra: true,
  },
];

const categorySections = [
  { id: "vegetable", crops: crops.filter((c) => c.category === "vegetable") },
  { id: "fruitveg", crops: crops.filter((c) => c.category === "fruitveg") },
  { id: "fruit", crops: crops.filter((c) => c.category === "fruit") },
  { id: "rice", crops: crops.filter((c) => c.category === "rice") },
];

function CropImage({ src, label, isBefore }: { src: string; label: string; isBefore: boolean }) {
  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-forest/10">
      <Image src={src} alt={label} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
      <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
        isBefore ? "bg-black/45 text-white/85" : "bg-leaf/75 text-white"
      }`}>
        {label}
      </span>
    </div>
  );
}

export default function ResultsPage() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.resultsPage : en.resultsPage;
  const tc = lang === "ko" ? ko.common : en.common;
  const categoryLabel = t.categoryLabel;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-peach.jpg" alt="Peach cultivation field" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-12 max-w-6xl mx-auto px-6 w-full left-0 right-0">
          <p className="text-white/65 text-sm font-medium uppercase tracking-widest mb-4">{t.label}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl drop-shadow-md">
            {t.title}{" "}
            <span className="text-leaf-bright">{t.titleHighlight}</span>
          </h1>
        </div>
      </section>

      {/* Sub copy + KPI */}
      <section className="bg-white py-12 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div className="max-w-xl">
              <p className="text-forest/70 text-lg leading-relaxed mb-1">{t.subtitle}</p>
              <p className="text-forest/50 text-sm leading-relaxed">{t.subtitle2}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {t.kpis.map((kpi) => (
                <div key={kpi.label} className="px-5 py-3 bg-paper border border-sage/20 rounded-xl">
                  <p className="text-forest font-bold text-sm">{kpi.label}</p>
                  <p className="text-forest/50 text-xs mt-0.5">{kpi.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category quick anchors */}
      <section className="bg-paper border-b border-sage/15 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3">
            {categorySections.map(({ id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm text-forest/60 hover:text-forest hover:bg-sage/10 transition-colors font-medium"
              >
                {categoryLabel[id as keyof typeof categoryLabel]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Crop result sections */}
      {categorySections.map(({ id, crops: sectionCrops }, secIdx) => (
        <section
          key={id}
          id={id}
          className={`py-16 scroll-mt-28 ${secIdx % 2 === 0 ? "bg-paper" : "bg-white"} border-b border-sage/10`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <span className="px-3 py-1 bg-forest text-leaf text-xs font-bold rounded-full tracking-wide">
                {categoryLabel[id as keyof typeof categoryLabel]}
              </span>
              <div className="flex-1 h-px bg-sage/15" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sectionCrops.map((crop) => (
                <div key={crop.id} className="bg-white rounded-2xl border border-sage/15 overflow-hidden shadow-sm">
                  <div className="px-6 py-4 border-b border-sage/10 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-forest">{lang === "ko" ? crop.nameKo : crop.nameEn}</h2>
                    <span className="text-xs text-forest/35 font-medium">{tc.applied}</span>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-3">
                    <CropImage
                      src={`/images/results/${crop.id}-before.${crop.ext}`}
                      label={tc.before}
                      isBefore={true}
                    />
                    <CropImage
                      src={`/images/results/${crop.id}-after.${crop.ext}`}
                      label={tc.after}
                      isBefore={false}
                    />
                    {crop.hasExtra && (
                      <>
                        <CropImage
                          src={`/images/results/${crop.id}-before-2.${crop.ext}`}
                          label={tc.before2}
                          isBefore={true}
                        />
                        <CropImage
                          src={`/images/results/${crop.id}-after-2.${crop.ext}`}
                          label={tc.after2}
                          isBefore={false}
                        />
                      </>
                    )}
                  </div>
                  <div className="px-5 pb-5">
                    <p className="text-xs text-leaf font-bold uppercase tracking-widest mb-3">
                      {tc.confirmedChanges}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {(lang === "ko" ? crop.effectsKo : crop.effectsEn).map((effect) => (
                        <li key={effect} className="flex items-center gap-2 text-base text-forest/85 font-medium">
                          <span className="w-2 h-2 rounded-full bg-leaf flex-shrink-0" />
                          {effect}
                        </li>
                      ))}
                    </ul>
                    {(lang === "ko" ? crop.noteKo : crop.noteEn) && (
                      <p className="mt-3 text-xs text-forest/40 italic border-t border-sage/10 pt-3">
                        {lang === "ko" ? crop.noteKo : crop.noteEn}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-paper mb-4">{t.ctaTitle}</h2>
          <p className="text-sage mb-8 max-w-lg mx-auto">{t.ctaDesc}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-block px-8 py-3.5 rounded-full bg-leaf text-white font-semibold hover:bg-leaf-bright transition-colors">
              {t.ctaContact}
            </Link>
            <Link href="/products" className="inline-block px-8 py-3.5 rounded-full border border-white/30 text-paper hover:border-white/60 transition-colors">
              {t.ctaProducts}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
