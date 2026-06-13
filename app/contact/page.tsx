import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/data";
import ContactInner from "@/components/ContactInner";

export const metadata: Metadata = {
  title: "상담 신청",
  description:
    "대량 구매, 골프장 도입, OEM·ODM, 수출 파트너십 등 어떤 상담이든 환영합니다. 영업일 기준 1~2일 내 답변드립니다.",
};

export default function ContactPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="hero-gradient-deep pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-forest/50 text-sm font-medium uppercase tracking-widest mb-4">
            상담 신청
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6 max-w-2xl">
            파트너십 및{" "}
            <span className="text-leaf">구매 상담</span>
          </h1>
          <p className="text-forest/65 text-lg max-w-xl leading-relaxed">
            어떤 규모, 어떤 목적이든 환영합니다. 양식을 작성하시면 영업일 기준
            1~2일 내 담당자가 직접 연락드립니다.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["대량 구매", "골프장 도입", "OEM·ODM", "수출 파트너십", "홈가드닝"].map(
              (type) => (
                <span
                  key={type}
                  className="px-4 py-2 rounded-full bg-white/50 text-forest text-sm border border-forest/10 backdrop-blur-sm"
                >
                  {type}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* 폼 + 사이드바 */}
      <section className="bg-paper py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* 사이드바 */}
            <div className="space-y-8">
              <div>
                <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-3">
                  회사 정보
                </p>
                <p className="font-bold text-forest">{company.name}</p>
                <p className="text-forest/60 text-sm mt-1 leading-relaxed">
                  대표이사 {company.ceo}
                  <br />
                  사업자 {company.bizNumber}
                  <br />
                  {company.address}
                </p>
              </div>

              <div>
                <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-3">
                  답변 소요 시간
                </p>
                <p className="text-forest text-sm">영업일 기준 1~2일</p>
              </div>

              <div>
                <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-4">
                  상담 유형
                </p>
                <ul className="space-y-2 text-sm text-forest/70">
                  {[
                    { icon: "🌾", label: "대량 구매 · 유통 계약" },
                    { icon: "⛳", label: "골프장 도입" },
                    { icon: "🏭", label: "OEM · ODM 제작" },
                    { icon: "✈️", label: "수출 파트너십" },
                    { icon: "🪴", label: "홈가드닝 소량 구매" },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-2 items-center">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-sage/20 pt-6">
                <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-3">
                  도움이 필요하신가요?
                </p>
                <div className="space-y-2 text-sm">
                  <Link href="/why" className="block text-leaf hover:underline">
                    → 왜 YMK인가
                  </Link>
                  <Link
                    href="/products"
                    className="block text-leaf hover:underline"
                  >
                    → 제품 사양 확인
                  </Link>
                  <Link
                    href="/audiences"
                    className="block text-leaf hover:underline"
                  >
                    → 활용 분야별 안내
                  </Link>
                  <Link
                    href="/trust"
                    className="block text-leaf hover:underline"
                  >
                    → 공시 · 인증 정보
                  </Link>
                </div>
              </div>
            </div>

            {/* 상담 폼 */}
            <div className="md:col-span-2">
              <ContactInner />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
