import { company } from "@/lib/data";
import ContactInner from "@/components/ContactInner";

export default function Contact() {
  return (
    <section id="contact" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* 왼쪽 — 안내 */}
          <div>
            <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
              상담 신청
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              파트너십 또는 구매 상담
            </h2>
            <p className="text-forest/70 leading-relaxed mb-8">
              대량 구매, OEM·ODM, 수출 파트너십, 골프장 도입 등 어떤 상담이든
              환영합니다. 양식을 작성해 주시면 영업일 기준 1~2일 내
              연락드립니다.
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
                  <p className="font-semibold text-forest">{company.name}</p>
                  <p className="text-forest/60">
                    대표 {company.ceo} · 사업자 {company.bizNumber}
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
                <p className="text-forest/70">{company.address}</p>
              </div>
            </div>
          </div>

          {/* 오른쪽 — 폼 */}
          <div>
            <ContactInner />
          </div>
        </div>
      </div>
    </section>
  );
}
