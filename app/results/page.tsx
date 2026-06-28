import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "적용 사례",
  description: "마늘·양파·수도작·배추 등 9가지 작물에서 확인된 YMK 비료 사용 전·후 변화입니다.",
};

type Crop = {
  id: string;
  name: string;
  category: string;
  effects: string[];
  note?: string;
  ext: string;
  hasExtra?: boolean;
};

const categoryLabel: Record<string, string> = {
  vegetable: "채소류",
  fruitveg: "과채류",
  fruit: "과수",
  rice: "수도작",
};

const crops: Crop[] = [
  {
    id: "garlic",
    name: "마늘",
    category: "vegetable",
    effects: ["생육 상태 개선", "수확량 증대", "품질 향상", "병해충 저항성 증가"],
    ext: "jpg",
  },
  {
    id: "onion",
    name: "양파",
    category: "vegetable",
    effects: ["뿌리 발달 촉진", "구의 크기 증가", "저장성 향상", "당도 증가"],
    ext: "jpg",
  },
  {
    id: "cabbage",
    name: "배추",
    category: "vegetable",
    effects: ["생육 상태 개선", "수확량 증대", "품질 향상", "병해충 저항성 증가"],
    ext: "jpg",
  },
  {
    id: "pepper",
    name: "청양고추",
    category: "fruitveg",
    effects: ["생육 상태 개선", "수확량 증대", "품질 향상", "병해충 저항성 증가"],
    ext: "png",
  },
  {
    id: "pumpkin",
    name: "호박",
    category: "fruitveg",
    effects: ["비대 방지", "당도 증가", "착색 증진", "긍정적 수확 결과"],
    ext: "png",
  },
  {
    id: "bokbunja",
    name: "복분자",
    category: "fruit",
    effects: ["뿌리 발달 촉진", "저장성 향상", "당도 증가"],
    ext: "jpg",
  },
  {
    id: "yuzu",
    name: "유자",
    category: "fruit",
    effects: ["생육 상태 개선", "수확량 증대", "품질 향상", "병해충 저항성 증가"],
    ext: "png",
  },
  {
    id: "muscat",
    name: "샤인머스켓",
    category: "fruit",
    effects: ["비대 방지", "당도 증가", "착색 증진", "품질 향상"],
    ext: "png",
  },
  {
    id: "rice",
    name: "수도작",
    category: "rice",
    effects: ["도복 피해 없음", "균일한 생육 확인"],
    note: "미사용 구역 대비 도복 피해 현저히 감소",
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
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
      <span
        className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
          isBefore ? "bg-black/45 text-white/85" : "bg-leaf/75 text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-peach.jpg"
            alt="복숭아 재배 현장"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-12 max-w-6xl mx-auto px-6 w-full left-0 right-0">
          <p className="text-white/65 text-sm font-medium uppercase tracking-widest mb-4">
            적용 사례
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl drop-shadow-md">
            데이터로 확인한{" "}
            <span className="text-leaf-bright">적용 효과</span>
          </h1>
        </div>
      </section>

      {/* 보조 카피 + KPI */}
      <section className="bg-white py-12 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div className="max-w-xl">
              <p className="text-forest/70 text-lg leading-relaxed mb-1">
                시험 재배와 분석 결과를 바탕으로 제품 효과를 검증했습니다.
              </p>
              <p className="text-forest/50 text-sm leading-relaxed">
                마늘·양파·수도작·배추 등 9가지 작물에 YMK 휴머스 프리미엄을 적용한 실제 사례입니다. 성분과 원료를 근거로 관찰된 변화를 기록합니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "9가지 작물", sub: "채소·과채·과수·수도작" },
                { label: "전·후 비교", sub: "실제 현장 촬영 자료" },
                { label: "휴머스 프리미엄", sub: "유기농업자재 공시 제품" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="px-5 py-3 bg-paper border border-sage/20 rounded-xl"
                >
                  <p className="text-forest font-bold text-sm">{kpi.label}</p>
                  <p className="text-forest/50 text-xs mt-0.5">{kpi.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 카테고리 퀵 앵커 */}
      <section className="bg-paper border-b border-sage/15 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3">
            {categorySections.map(({ id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm text-forest/60 hover:text-forest hover:bg-sage/10 transition-colors font-medium"
              >
                {categoryLabel[id]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 작물별 결과 섹션 */}
      {categorySections.map(({ id, crops: sectionCrops }, secIdx) => (
        <section
          key={id}
          id={id}
          className={`py-16 scroll-mt-28 ${secIdx % 2 === 0 ? "bg-paper" : "bg-white"} border-b border-sage/10`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <span className="px-3 py-1 bg-forest text-leaf text-xs font-bold rounded-full tracking-wide">
                {categoryLabel[id]}
              </span>
              <div className="flex-1 h-px bg-sage/15" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sectionCrops.map((crop) => (
                <div
                  key={crop.id}
                  className="bg-white rounded-2xl border border-sage/15 overflow-hidden shadow-sm"
                >
                  {/* 카드 헤더 */}
                  <div className="px-6 py-4 border-b border-sage/10 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-forest">{crop.name}</h2>
                    <span className="text-xs text-forest/35 font-medium">
                      휴머스 프리미엄 적용
                    </span>
                  </div>

                  {/* 이미지 비교 */}
                  <div className="p-4 grid grid-cols-2 gap-3">
                    <CropImage
                      src={`/images/results/${crop.id}-before.${crop.ext}`}
                      label="사용 전"
                      isBefore={true}
                    />
                    <CropImage
                      src={`/images/results/${crop.id}-after.${crop.ext}`}
                      label="사용 후"
                      isBefore={false}
                    />
                    {crop.hasExtra && (
                      <>
                        <CropImage
                          src={`/images/results/${crop.id}-before-2.${crop.ext}`}
                          label="사용 전 ②"
                          isBefore={true}
                        />
                        <CropImage
                          src={`/images/results/${crop.id}-after-2.${crop.ext}`}
                          label="사용 후 ②"
                          isBefore={false}
                        />
                      </>
                    )}
                  </div>

                  {/* 확인된 변화 */}
                  <div className="px-5 pb-5">
                    <p className="text-xs text-leaf font-bold uppercase tracking-widest mb-3">
                      확인된 변화
                    </p>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {crop.effects.map((effect) => (
                        <li
                          key={effect}
                          className="flex items-center gap-2 text-base text-forest/85 font-medium"
                        >
                          <span className="w-2 h-2 rounded-full bg-leaf flex-shrink-0" />
                          {effect}
                        </li>
                      ))}
                    </ul>
                    {crop.note && (
                      <p className="mt-3 text-xs text-forest/40 italic border-t border-sage/10 pt-3">
                        {crop.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* 하단 CTA */}
      <section className="bg-forest py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-paper mb-4">
            내 작물에도 적용해보고 싶다면
          </h2>
          <p className="text-sage mb-8 max-w-lg mx-auto">
            작물 종류와 재배 환경에 맞는 시비 방법을 안내드립니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-full bg-leaf text-white font-semibold hover:bg-leaf-bright transition-colors"
            >
              상담 신청하기 →
            </Link>
            <Link
              href="/products"
              className="inline-block px-8 py-3.5 rounded-full border border-white/30 text-paper hover:border-white/60 transition-colors"
            >
              제품 상세 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
