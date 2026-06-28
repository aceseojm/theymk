import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "1984년 설립된 공장 자동화 전문 기업에서 출발해 친환경 유기질 비료 펠렛 생산 자동화 시스템 선도 기업으로 성장한 YMK의 비전과 역사를 소개합니다.",
};

const history = [
  {
    year: "1984",
    title: "공장 자동화 시스템 전문 기업 설립",
    desc: "제조 현장의 효율과 정밀도를 높이는 자동화 솔루션 개발에 집중하며 업계 경험을 축적합니다.",
  },
  {
    year: "1990s",
    title: "남해화학 프로젝트 성공",
    desc: "국내 주요 화학 기업의 대규모 자동화 프로젝트를 성공적으로 수주·완료하며 설비 엔지니어링 역량을 입증합니다.",
  },
  {
    year: "2000s",
    title: "친환경 비료 펠렛 자동화로 사업 전환",
    desc: "공장 자동화 기술을 기반으로 유기질 비료 펠렛 생산 자동화 시스템 사업에 본격 진출합니다.",
  },
  {
    year: "2010s",
    title: "대만 영밍(Young Ming) 기술 제휴",
    desc: "대만 펠렛 자동화 선도 기업 영밍(Young Ming)과 40년 기술 파트너십 및 독점 판매 계약을 체결합니다.",
  },
  {
    year: "2020s",
    title: "OMRI 인증 원료 기반 제품 출시",
    desc: "중국 G-Teck Bioscience (Xian)와 기술 협력하여 OMRI 인증 특수 기능성 원료를 국내에 독점 공급받아 휴머스 프리미엄·아미노 골드를 출시합니다.",
  },
];

const partners = [
  {
    country: "대만",
    name: "영밍 (Young Ming)",
    title: "40년 펠렛 자동화 시스템 기술 파트너",
    desc: "대만의 펠렛 자동화 기술 선도 기업으로, YMK와 40년 이상 기술 제휴 및 독점 판매 계약을 유지하고 있습니다. 균일한 입도와 높은 내구성을 보장하는 펠렛 생산 설비 노하우를 공유합니다.",
    tags: ["40년 파트너십", "펠렛 자동화", "독점 판매"],
    accent: "text-leaf",
    bg: "bg-white/5",
  },
  {
    country: "중국",
    name: "G-Teck Bioscience (Xian)",
    title: "OMRI 인증 특수 기능성 원료 공급사",
    desc: "OMRI(Organic Materials Review Institute) 기준을 충족하는 특수 기능성 원료를 국내에 독점 공급합니다. YMK는 이 원료를 기반으로 효능이 검증된 유기질 비료를 제조합니다.",
    tags: ["OMRI 인증 원료", "국내 독점 공급", "기술 협력"],
    accent: "text-clay",
    bg: "bg-white/5",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cover.png"
            alt="YMK 친환경 농업"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-12 max-w-6xl mx-auto px-6 w-full left-0 right-0">
          <p className="text-leaf-bright text-xs uppercase tracking-widest font-medium mb-3">
            About YMK
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl drop-shadow-md">
            자연과 인간, 미래 세대를 위한{" "}
            <span className="text-leaf-bright">약속</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed drop-shadow-sm">
            흙을 살리는 비료, 작물을 돌보는 원료. OMRI 인증 원료로 만든
            유기질 비료로 사람과 자연이 함께 건강해집니다.
          </p>
        </div>
      </section>

      {/* 비전 및 철학 */}
      <section id="vision" className="bg-white py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">
            비전 및 철학
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-forest mb-10">
            WE CARE — 지속 가능한 농업 환경
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌱",
                title: "자연과의 공존",
                desc: "화학비료가 아닌 유기질 원료를 사용해 토양 생태계를 보전하고 다음 세대도 건강한 땅을 물려받을 수 있도록 합니다.",
              },
              {
                icon: "🤝",
                title: "농가와의 신뢰",
                desc: "원료 배합 전체 공개, 유기농업자재 공시 취득, 로트별 분석성적서 제공으로 투명성을 지킵니다.",
              },
              {
                icon: "🌏",
                title: "미래 세대를 위한 약속",
                desc: "지속 가능한 방식으로 수확량과 품질을 높여 농업의 경제적 미래를 함께 만들어 갑니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-paper border border-sage/15"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-forest mb-2">{item.title}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대표이사 인사말 */}
      <section id="ceo-message" className="relative bg-paper py-24 scroll-mt-20 overflow-hidden border-t border-sage/10">
        {/* 배경 — 왼쪽 100% 원본, 오른쪽으로 paper 색 그라데이션 */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/images/p-speach.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          {/* 왼쪽 100% → 오른쪽도 이미지 느낌 살리면서 부드럽게 페이드 */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, transparent 0%, rgba(245,246,240,0.02) 20%, rgba(245,246,240,0.12) 35%, rgba(245,246,240,0.30) 48%, rgba(245,246,240,0.55) 60%, rgba(245,246,240,0.75) 75%, rgba(245,246,240,0.90) 90%, rgba(245,246,240,0.97) 100%)" }}
          />
          {/* 상하 살짝 페이드 */}
          <div className="absolute inset-0 bg-gradient-to-b from-paper/50 via-transparent to-paper/50" />
        </div>

        {/* 텍스트 — z-index로 이미지 위에 확실히 올리기 */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* 텍스트 블록을 더 오른쪽으로 + 왼쪽 오프셋 추가 */}
          <div className="ml-auto max-w-xl pl-8">

            <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">
              대표이사 인사말
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-forest mb-8">
              흙에서 시작해, 세상을 바꿉니다
            </h2>

            {/* 본문 텍스트 */}
            <div className="space-y-4 text-forest font-medium leading-[1.85] text-[15px]">
              <p>
                농부가 땅에 씨앗을 묻는 순간,<br />
                그 손에 쥔 비료가 어떤 것인지가 중요합니다.
              </p>
              <p>
                저는 40년 전 기계를 만들었습니다.<br />
                정밀하게, 균일하게, 믿을 수 있게 —<br />
                그 원칙이 지금 비료를 만드는 방식이 됐습니다.
              </p>
              <p>
                지금 YMK는 국내 농업과 골프장을 넘어<br />
                동남아시아와 해외 유기농 시장으로 나아가고 있습니다.<br />
                세계 어느 땅에서도 통한다는 것을 보여주고 싶습니다.
              </p>
              <p>
                흙을 살리는 일은 결국 사람을 살리는 일입니다.<br />
                더 건강한 땅, 더 안전한 먹거리, 더 오래 지속되는 농업 —<br />
                그것이 우리가 향하는 곳입니다.
              </p>
              <p>
                가고자 하는 방향만큼은 분명합니다.<br />
                정직한 원료로, 균일한 기술로,<br />
                땅과 사람 모두에게 부끄럽지 않은 비료를 만드는 것.<br />
                그 길을 끝까지 걷겠습니다.
              </p>

              {/* 서명 */}
              <div className="pt-5 border-t border-sage/30">
                <p className="text-forest/50 text-xs mb-0.5">주식회사 와이엠케이</p>
                <p className="text-forest font-bold text-lg">대표이사 강길원</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section id="history" className="bg-paper py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">
            연혁
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-forest mb-12">
            40년의 전문성
          </h2>

          <div className="relative">
            {/* 세로선 */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-sage/20 hidden md:block" />

            <div className="space-y-8">
              {history.map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-10 items-start">
                  <div className="flex-shrink-0 w-[72px] text-right">
                    <span className="text-sm font-bold text-leaf">{item.year}</span>
                  </div>
                  {/* 타임라인 점 */}
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-leaf mt-1 hidden md:block ring-4 ring-paper" />
                  <div className="flex-1 pb-8 border-b border-sage/10 last:border-0 last:pb-0">
                    <h3 className="font-bold text-forest mb-1">{item.title}</h3>
                    <p className="text-forest/55 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 엔지니어링 역량 */}
      <section id="engineering" className="bg-white py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">
                엔지니어링 역량
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-forest mb-5">
                단순 비료 제조를 넘어<br />
                <span className="text-leaf">설비 엔지니어링 선도 기업</span>
              </h2>
              <p className="text-forest/60 text-base leading-relaxed mb-6">
                YMK는 비료를 만드는 회사가 아니라, 비료 생산 자동화 설비
                시스템을 설계하고 구축하는 엔지니어링 기업입니다. 40년간
                축적된 펠렛 자동화 기술이 제품 품질의 근거가 됩니다.
              </p>
              <div className="p-5 rounded-xl bg-forest/5 border border-forest/10">
                <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-2">
                  주요 레퍼런스
                </p>
                <p className="text-forest font-semibold">
                  한텍 함안공장 유기질 펠렛 자동화 설비 시스템
                </p>
                <p className="text-leaf font-bold text-xl mt-1">약 21억 원 규모</p>
                <p className="text-forest/50 text-xs mt-1">
                  대규모 유기질 비료 생산 자동화 시스템 설계 및 구축
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "40년", label: "펠렛 자동화 경험" },
                { num: "21억+", label: "단일 설비 구축 규모" },
                { num: "균일", label: "기계 살포 최적 입도" },
                { num: "전공정", label: "직접 생산·품질 관리" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-forest text-center"
                >
                  <p className="text-leaf-bright font-bold text-2xl mb-1">
                    {stat.num}
                  </p>
                  <p className="text-sage/60 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 글로벌 파트너십 */}
      <section id="partnership" className="bg-forest py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">
            글로벌 파트너십
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-paper mb-3">
            검증된 글로벌 기술 네트워크
          </h2>
          <p className="text-sage/60 text-sm mb-10 max-w-lg">
            자체 생산 역량 위에 세계 최고 수준의 기술 파트너를 연결해
            원료부터 설비까지 품질 체인을 완성합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl bg-white/5 border border-white/10 p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-sage/60 text-xs font-medium">
                    {p.country}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-1 ${p.accent}`}>
                  {p.name}
                </h3>
                <p className="text-sage/70 text-sm mb-4">{p.title}</p>
                <p className="text-sage text-sm leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sage/60 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-forest mb-2">
              파트너십 문의 & 제품 상담
            </h2>
            <p className="text-forest/55 text-sm">
              B2B 대량 구매, OEM·ODM, 수출 파트너십 등 어떤 형태든
              환영합니다.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-forest text-paper font-semibold hover:bg-leaf transition-colors"
            >
              상담 신청하기 →
            </Link>
            <Link
              href="/why"
              className="px-6 py-3 rounded-full border border-forest/20 text-forest/70 hover:border-leaf hover:text-leaf transition-colors text-sm"
            >
              왜 YMK인가
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
