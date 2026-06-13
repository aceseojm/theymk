import Link from "next/link";
import { whyItems } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 19.48 18 20 18 20l2-2-1.484-1.75 1.106-2.648L22 13v-2l-2.378-.605Z" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M3 21h18M3 7v14M21 7v14M9 3v18M15 3v18M3 7l6-4 6 4 6-4" />
    </svg>
  ),
};

export default function WhySection() {
  return (
    <section id="why" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="mb-16">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            왜 YMK인가
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-forest max-w-xl leading-snug">
            원료부터 생산까지,{" "}
            <span className="text-leaf">YMK가 직접 관리합니다</span>
          </h2>
          <p className="mt-4 text-forest/70 max-w-xl">
            원료 수급, 제조 공정, 품질 관리 — 세 가지를 모두 자체적으로 운영합니다.
          </p>
        </div>

        {/* 더 보기 링크 */}
        <div className="mb-10">
          <Link
            href="/why"
            className="inline-flex items-center gap-2 text-sm text-leaf hover:text-leaf-bright transition-colors font-medium"
          >
            YMK를 선택하는 이유 →
          </Link>
        </div>

        {/* 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-8">
          {whyItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-sage/20 hover:border-leaf/40 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-forest flex items-center justify-center text-leaf mb-6 group-hover:bg-leaf group-hover:text-white transition-colors">
                {icons[item.icon]}
              </div>
              <h3 className="text-lg font-bold text-forest mb-3">{item.title}</h3>
              <p className="text-forest/70 text-sm leading-relaxed mb-4">{item.body}</p>
              <p className="text-xs text-leaf font-medium border-t border-sage/20 pt-4">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
