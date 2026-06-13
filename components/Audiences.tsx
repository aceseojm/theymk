import Link from "next/link";
import { audiences } from "@/lib/data";

export default function Audiences() {
  return (
    <section id="audiences" className="bg-forest py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* 헤더 */}
        <div className="mb-16">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            도입 대상
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-paper">
            B2B 우선, 모두를 위한{" "}
            <span className="text-leaf-bright">솔루션</span>
          </h2>
          <p className="mt-4 text-sage max-w-xl">
            대량 구매부터 홈가드닝까지 — 각 도입 상황에 맞춘 동선으로 안내합니다.
          </p>
          <Link
            href="/audiences"
            className="inline-flex items-center gap-2 mt-4 text-sm text-leaf hover:text-leaf-bright transition-colors font-medium"
          >
            도입 대상별 상세 안내 →
          </Link>
        </div>

        {/* 카드 그리드 (2+3 또는 모바일 1열) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <div
              key={a.id}
              className={`rounded-2xl p-7 border transition-all hover:-translate-y-1 cursor-default ${
                i === 0
                  ? "bg-leaf text-white border-leaf"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="text-3xl mb-4">{a.icon}</div>
              <p
                className={`text-xs font-medium uppercase tracking-widest mb-1 ${
                  i === 0 ? "text-white/70" : "text-sage"
                }`}
              >
                {a.subtitle}
              </p>
              <h3
                className={`text-xl font-bold mb-3 ${
                  i === 0 ? "text-white" : "text-paper"
                }`}
              >
                {a.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  i === 0 ? "text-white/80" : "text-sage"
                }`}
              >
                {a.desc}
              </p>
              <a
                href="#contact"
                className={`inline-block text-sm font-medium py-2 px-4 rounded-full transition-colors ${
                  i === 0
                    ? "bg-white text-leaf hover:bg-paper"
                    : "border border-sage/40 text-sage hover:bg-white/10 hover:text-paper"
                }`}
              >
                {a.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
