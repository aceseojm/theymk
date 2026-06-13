import Image from "next/image";
import Link from "next/link";

const crops = [
  {
    src: "/images/토마토가_주렁주렁_걸려있는_토마토_202606111216.jpeg",
    alt: "방울토마토 재배 현장",
    category: "과채류",
    name: "방울토마토",
    effects: "당도 향상 · 착색 개선 · 수확량 증대",
    href: "/results#fruitveg",
  },
  {
    src: "/images/crop-tomato.jpg",
    alt: "토마토 재배 현장",
    category: "과채류",
    name: "토마토",
    effects: "수확량 증대 · 과실 비대 · 품질 향상",
    href: "/results#fruitveg",
  },
  {
    src: "/images/crop-grape.jpg",
    alt: "포도·샤인머스켓 재배 현장",
    category: "과수",
    name: "포도 · 샤인머스켓",
    effects: "과실 비대 · 당도 증가 · 착색 증진",
    href: "/results#fruit",
  },
];

export default function CropShowcase() {
  return (
    <section className="bg-white">
      <div className="grid md:grid-cols-3">
        {crops.map((crop) => (
          <Link
            key={crop.name}
            href={crop.href}
            className="group relative block overflow-hidden aspect-[4/3]"
          >
            {/* 이미지 — 호버 시 확대 */}
            <Image
              src={crop.src}
              alt={crop.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/75" />

            {/* 텍스트 */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white/55 text-xs uppercase tracking-widest mb-1.5 font-medium">
                {crop.category}
              </p>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-1.5">
                {crop.name}
              </h3>
              <p className="text-white/65 text-sm">
                {crop.effects}
              </p>
              <p className="mt-3 text-leaf-bright text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                적용 사례 보기 →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
