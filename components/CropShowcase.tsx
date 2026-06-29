"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const crops = [
  {
    src: "/images/crop-chamoe.jpg",
    altKo: "참외 재배 현장",
    altEn: "Oriental Melon Field",
    categoryKo: "과채류",
    categoryEn: "Fruit Vegetables",
    nameKo: "참외",
    nameEn: "Oriental Melon",
    effectsKo: "당도 향상 · 착색 개선 · 수확량 증대",
    effectsEn: "Improved sugar content · Better coloring · Increased yield",
    href: "/results#fruitveg",
  },
  {
    src: "/images/crop-tomato.jpg",
    altKo: "토마토 재배 현장",
    altEn: "Tomato Field",
    categoryKo: "과채류",
    categoryEn: "Fruit Vegetables",
    nameKo: "토마토",
    nameEn: "Tomato",
    effectsKo: "수확량 증대 · 과실 비대 · 품질 향상",
    effectsEn: "Increased yield · Fruit enlargement · Quality improvement",
    href: "/results#fruitveg",
  },
  {
    src: "/images/crop-grape.jpg",
    altKo: "포도·샤인머스켓 재배 현장",
    altEn: "Grape · Shine Muscat Field",
    categoryKo: "과수",
    categoryEn: "Fruits",
    nameKo: "포도 · 샤인머스켓",
    nameEn: "Grape · Shine Muscat",
    effectsKo: "과실 비대 · 당도 증가 · 착색 증진",
    effectsEn: "Fruit enlargement · Increased sugar · Improved coloring",
    href: "/results#fruit",
  },
];

export default function CropShowcase() {
  const { lang } = useLang();
  const t = lang === "ko" ? ko.cropShowcase : en.cropShowcase;

  return (
    <section className="bg-white">
      <div className="grid md:grid-cols-3">
        {crops.map((crop) => (
          <Link
            key={crop.nameKo}
            href={crop.href}
            className="group relative block overflow-hidden aspect-[4/3]"
          >
            {/* Image — zoom on hover */}
            <Image
              src={crop.src}
              alt={lang === "ko" ? crop.altKo : crop.altEn}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/75" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white/55 text-xs uppercase tracking-widest mb-1.5 font-medium">
                {lang === "ko" ? crop.categoryKo : crop.categoryEn}
              </p>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-1.5">
                {lang === "ko" ? crop.nameKo : crop.nameEn}
              </h3>
              <p className="text-white/65 text-sm">
                {lang === "ko" ? crop.effectsKo : crop.effectsEn}
              </p>
              <p className="mt-3 text-leaf-bright text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {t.viewResults}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
