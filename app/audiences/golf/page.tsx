import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "골프장 잔디 관리 솔루션 — YMK",
  description:
    "HUMAS PREMIUM + AMINO GOLD 이중 시비 체계로 그린·페어웨이 잔디 품질을 높이고 유지관리 비용을 절감합니다. 기계 살포 최적화·무취 설계·OMRI 인증 원료.",
};

const zones = [
  {
    name: "그린",
    en: "Green",
    desc: "가장 정밀한 관리가 필요한 구역. 잔디 밀도와 색상 균일성이 이용객 만족도를 직결.",
    humus: "낮은 시비량으로 균형 유지. 뿌리 활착 강화로 홀컵 교체 후 회복 기간 단축.",
    amino: "엽면 스프레이로 즉각 색상 개선. 병해 저항성 강화로 패치(patch) 발생 억제.",
    color: "bg-leaf",
  },
  {
    name: "티잉 구역",
    en: "Tee Box",
    desc: "반복적인 디봇(divot) 손상이 잦은 구역. 빠른 회복력이 핵심.",
    humus: "한 번의 기계 살포로 시즌 내내 지속 효과. 뿌리층 강화로 디봇 회복 기간 단축.",
    amino: "골프장 그린·티잉구역 전용 배합. 스프레이 살포로 균일 도포.",
    color: "bg-sage",
  },
  {
    name: "페어웨이",
    en: "Fairway",
    desc: "대면적 균일 시비가 관건. 기계 살포 효율과 잔디 색상 균일성이 핵심.",
    humus: "균일 펠릿 입도로 살포기 막힘 없이 전면 시비. 40년 펠릿 자동화 기술.",
    amino: "화학비료 절반 대체 가능. 추가 비료 사용 감소로 연간 자재 비용 절감.",
    color: "bg-forest",
  },
  {
    name: "러프",
    en: "Rough",
    desc: "자연스러운 성장감을 유지하면서 병해·잡초 경쟁에 강한 밀도 확보.",
    humus: "토양 유기물 증가로 토착 잔디 생육 기반 강화. 화학비료 대체.",
    amino: "무취 제품으로 클럽하우스·주거 인접 구역 민원 없음.",
    color: "bg-clay",
  },
];

const challenges = [
  {
    no: "01",
    title: "친환경 전환",
    body: "화학비료 사용을 줄이면서도 잔디 품질 유지",
    points: ["OMRI 인증 원료 기반", "ESG 대응", "품질 유지"],
  },
  {
    no: "02",
    title: "무취 시비",
    body: "영업 중에도 시비 가능",
    points: ["민원 감소", "작업시간 확보", "이용객 만족도 향상"],
  },
  {
    no: "03",
    title: "균일한 살포",
    body: "막힘 없는 펠릿 설계",
    points: ["균일한 살포", "잔디 품질 향상", "작업 효율 개선"],
  },
];

export default function GolfPage() {
  return (
    <>
      {/* ── 히어로 ── */}
      <section className="relative h-[520px] overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/golf-hero.jpg"
            alt="골프장 전경"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-12 max-w-6xl mx-auto px-6 w-full left-0 right-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
          <nav className="flex items-center gap-2 text-xs mb-8 absolute top-28 left-6" aria-label="breadcrumb">
            <Link href="/audiences" className="text-white/50 hover:text-white">활용 분야</Link>
            <span className="text-white/25">/</span>
            <span className="text-white/75">골프장</span>
          </nav>

          <span className="inline-block px-3 py-1 rounded-full bg-leaf/20 text-leaf-bright text-xs font-bold mb-4 w-fit">
            ⛳ 골프장 전용 솔루션
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-paper leading-tight max-w-3xl">
            코스의 품격이<br />
            <span className="text-leaf-bright">비료에서 시작됩니다</span>
          </h1>
        </div>
      </section>

      {/* 보조 카피 + CTA + KPI */}
      <section className="bg-white py-10 border-b border-sage/15">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <p className="text-forest/70 text-lg leading-relaxed md:max-w-xl">
              HUMAS PREMIUM × AMINO GOLD 이중 시비 체계.
              기계 살포 최적화·무취 설계·OMRI 인증 원료로 그린부터 러프까지 관리합니다.
            </p>
            <div className="flex flex-wrap gap-3 md:ml-auto flex-shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-forest text-paper font-semibold hover:bg-leaf transition-colors text-sm"
              >
                골프장 솔루션 상담 →
              </Link>
              <Link
                href="/products"
                className="px-6 py-3 rounded-full border border-sage/30 text-forest/70 hover:border-forest/50 hover:text-forest transition-colors text-sm"
              >
                제품 상세 보기
              </Link>
            </div>
          </div>
          <div className="flex gap-8 pt-6 border-t border-sage/10">
            {[
              { value: "무취", label: "AMINO GOLD 설계" },
              { value: "40년", label: "펠릿 자동화 기술" },
              { value: "OMRI", label: "인증 원료 기준" },
            ].map((kpi) => (
              <div key={kpi.label} className="border-l-2 border-leaf pl-4">
                <p className="text-xl font-bold text-forest">{kpi.value}</p>
                <p className="text-forest/45 text-xs mt-0.5">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 골프장 운영 효율 ── */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-forest mb-12">
            골프장 운영을 더 효율적으로
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((c) => (
              <div key={c.no} className="bg-white rounded-2xl border border-sage/20 p-7">
                <p className="text-leaf font-bold text-xs tracking-widest mb-3">{c.no}</p>
                <h3 className="text-forest font-bold text-xl mb-2">{c.title}</h3>
                <p className="text-forest/55 text-sm mb-6 leading-relaxed">{c.body}</p>
                <ul className="space-y-2">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-forest/75">
                      <svg className="w-4 h-4 text-leaf flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 두 제품의 역할 분담 ── */}
      <section className="bg-forest py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">YMK 이중 시비 체계</p>
          <h2 className="text-3xl font-bold text-paper mb-4">
            기반은 만들고, 품질은 유지합니다
          </h2>
          <p className="text-sage text-sm mb-12 max-w-xl">
            HUMAS PREMIUM이 생육 기반을 만들고, AMINO GOLD가 시즌 중 잔디 컨디션을 관리합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* HUMAS PREMIUM */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-leaf/20 flex items-center justify-center">
                  <span className="text-leaf-bright font-bold text-xs">HP</span>
                </span>
                <div>
                  <p className="text-paper font-bold">HUMAS PREMIUM</p>
                  <p className="text-sage/60 text-xs">펠릿형 기반 시비 · 연 1~2회</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "아미노산 및 미네랄 함유로 잔디 생육 기반 구축",
                  "뿌리 활착 + 병해저항성 강화",
                  "한 번의 시비로 장기간 효과 지속",
                  "기계 살포 및 장기 보관에 최적화",
                  "잔디 생육 균형 유지 및 미관 향상",
                ].map((pt, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-sage text-sm">
                    <svg className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 rounded-xl px-4 py-3">
                <p className="text-sage/50 text-xs">적합 구역</p>
                <p className="text-sage text-sm font-medium mt-0.5">페어웨이 · 러프 · 그린 기반 시비</p>
              </div>
            </div>

            {/* AMINO GOLD */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-clay/20 flex items-center justify-center">
                  <span className="text-clay font-bold text-xs">AG</span>
                </span>
                <div>
                  <p className="text-paper font-bold">AMINO GOLD</p>
                  <p className="text-sage/60 text-xs">액체형 엽면 시비 · 시즌 중 추가</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "골프장 그린, 티잉구역, 페어웨이 전용 배합",
                  "엽면시비 가능 — 스프레이 분사로 균일 도포",
                  "광택·색상·밀도 향상 + 병해 저항성 강화",
                  "무취 제품으로 이용객 불편 없음",
                  "화학비료 대체로 환경오염 감소",
                ].map((pt, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-sage text-sm">
                    <svg className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 rounded-xl px-4 py-3">
                <p className="text-sage/50 text-xs">적합 구역</p>
                <p className="text-sage text-sm font-medium mt-0.5">그린 · 티잉구역 · 페어웨이 스프레이 시비</p>
              </div>
            </div>
          </div>

          {/* 시비 캘린더 힌트 */}
          <div className="mt-8 p-5 bg-white/5 rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-leaf text-sm font-semibold mb-1">권장 시비 조합</p>
              <p className="text-sage/70 text-sm">
                <span className="text-paper font-medium">봄·가을 HUMAS PREMIUM</span> 기반 시비 후,
                시즌 중 <span className="text-paper font-medium">AMINO GOLD 엽면 추가 시비</span>로 화학비료 의존을 단계적으로 줄입니다.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-5 py-2.5 rounded-full bg-leaf/20 border border-leaf/30 text-leaf-bright text-sm hover:bg-leaf hover:text-white transition-colors"
            >
              시비 스케줄 상담
            </Link>
          </div>
        </div>
      </section>

      {/* ── 구역별 적용 ── */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">구역별 가이드</p>
          <h2 className="text-3xl font-bold text-forest mb-8">
            코스 구역별 맞춤 처방
          </h2>
          {/* 구역별 처방 인포그래픽 */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-10 border border-sage/15 shadow-sm">
            <Image
              src="/images/golf-course-v2.png"
              alt="그린·티잉구역·페어웨이·러프 구역별 맞춤 처방"
              width={2912}
              height={1470}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {zones.map((zone) => (
              <div key={zone.name} className="bg-white rounded-2xl border border-sage/20 overflow-hidden">
                <div className={`h-1.5 ${zone.color}`} />
                <div className="p-7">
                  <div className="flex items-baseline gap-2 mb-3">
                    <h3 className="text-xl font-bold text-forest">{zone.name}</h3>
                    <span className="text-forest/35 text-sm font-serif">{zone.en}</span>
                  </div>
                  <p className="text-forest/55 text-sm leading-relaxed mb-5">{zone.desc}</p>

                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-16 text-xs font-bold text-leaf-bright bg-leaf/10 rounded px-1.5 py-1 text-center leading-tight">
                        HUMAS<br />PREM.
                      </span>
                      <p className="text-forest/70 text-sm">{zone.humus}</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-16 text-xs font-bold text-clay bg-clay/10 rounded px-1.5 py-1 text-center leading-tight">
                        AMINO<br />GOLD
                      </span>
                      <p className="text-forest/70 text-sm">{zone.amino}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 경제적 효과 ── */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">경제적 효과</p>
          <h2 className="text-3xl font-bold text-forest mb-12">유지관리 비용 절감의 세 가지 경로</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💴",
                title: "추가 비료 사용 감소",
                body: "완효성·속효성 혼합 설계로 추가 시비 횟수를 줄입니다. 연간 자재 비용 절감.",
                sub: "HUMAS PREMIUM 완효성 사용 시",
              },
              {
                icon: "🔧",
                title: "살포기 유지비 절감",
                body: "균일 펠릿 입도로 살포기 막힘·수리 빈도를 줄입니다. 작업 인력 효율 향상.",
                sub: "40년 펠릿 자동화 기술",
              },
              {
                icon: "🌿",
                title: "ESG·환경 대응 비용 절감",
                body: "화학비료 대체로 토양 오염 처리 비용과 환경 규제 대응 부담을 낮춥니다.",
                sub: "OMRI 인증 원료 기반",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-sage/20 p-7">
                <p className="text-3xl mb-4">{item.icon}</p>
                <h3 className="text-forest font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-forest/55 text-sm leading-relaxed mb-4">{item.body}</p>
                <p className="text-leaf/70 text-xs font-medium">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* 지속가능성 메시지 */}
          <div className="mt-10 bg-forest rounded-2xl p-8 grid md:grid-cols-3 gap-6">
            {[
              { label: "지속가능한 토양 관리", body: "토양 유기물을 늘려 다음 시즌 시비량을 자연스럽게 줄이는 선순환." },
              { label: "시각적 완성도 향상", body: "균일한 잔디 색상과 밀도로 코스 사진 퀄리티가 달라집니다." },
              { label: "고객 만족도 증대", body: "냄새 없는 친환경 코스가 이용객 재방문율에 긍정적으로 작용합니다." },
            ].map((item) => (
              <div key={item.label} className="border-l border-white/10 pl-5">
                <p className="text-leaf-bright font-semibold text-sm mb-2">{item.label}</p>
                <p className="text-sage/70 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About YMK ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-leaf text-xs uppercase tracking-widest font-medium mb-3">About YMK</p>
          <h2 className="text-3xl font-bold text-forest mb-4">
            <span className="text-leaf">40년</span>의 엔지니어링 신뢰
          </h2>
          <p className="text-forest/60 text-base max-w-2xl mb-12 leading-relaxed">
            WE CARE — 자연과 인간, 미래 세대를 위한 약속. 1984년 공장 자동화 전문 기업으로 출발해
            친환경 유기질 비료 펠렛 생산 자동화 시스템 선도 기업으로 성장했습니다.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* 연혁 */}
            <div>
              <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-5">연혁 및 엔지니어링 역량</p>
              <div className="space-y-5">
                {[
                  { year: "1984", text: "공장 자동화 시스템 전문 기업 설립" },
                  { year: "1990s", text: "남해화학 프로젝트 성공 — 대규모 설비 엔지니어링 역량 입증" },
                  { year: "2000s", text: "친환경 비료 펠렛 자동화 사업으로 전환" },
                  { year: "현재", text: "한텍 함안공장 약 21억 원 규모 유기질 펠렛 자동화 설비 시스템 구축" },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 text-xs font-bold text-leaf w-14 pt-0.5">{item.year}</span>
                    <p className="text-forest/65 text-sm leading-relaxed border-l border-sage/20 pl-4">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 글로벌 파트너십 */}
            <div>
              <p className="text-xs text-forest/40 uppercase tracking-widest font-medium mb-5">글로벌 파트너십</p>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-paper border border-sage/15">
                  <span className="inline-block px-2 py-0.5 rounded text-xs bg-sage/15 text-forest/50 font-medium mb-2">대만</span>
                  <p className="font-bold text-forest mb-1">영밍 (Young Ming)</p>
                  <p className="text-forest/55 text-sm leading-relaxed">
                    40년 펠렛 자동화 시스템 기술 제휴 및 독점 판매 계약.
                    균일한 입도와 내구성을 보장하는 펠렛 생산 설비 노하우를 공유합니다.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-paper border border-sage/15">
                  <span className="inline-block px-2 py-0.5 rounded text-xs bg-sage/15 text-forest/50 font-medium mb-2">중국</span>
                  <p className="font-bold text-forest mb-1">G-Teck Bioscience (Xian)</p>
                  <p className="text-forest/55 text-sm leading-relaxed">
                    OMRI 인증 특수 기능성 원료 국내 독점 공급 기술 협력.
                    골프장 잔디에 적합한 유기질 원료를 안정적으로 수급합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-leaf text-sm font-medium hover:underline"
          >
            회사 소개 전체 보기 →
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-forest py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-leaf/20 text-leaf-bright text-xs font-bold mb-5">
            ⛳ 골프장 전용 상담
          </span>
          <h2 className="text-3xl font-bold text-paper mb-4">
            코스 규모에 맞는 시비 처방을 제안합니다
          </h2>
          <p className="text-sage text-sm mb-8 leading-relaxed">
            9홀 이상 코스라면 연간 공급 계약 제안이 가능합니다.
            샘플 먼저 받아보신 후 살포기 테스트를 진행하는 절차를 권장합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-leaf text-white font-semibold hover:bg-leaf-bright transition-colors"
            >
              샘플·상담 신청 →
            </Link>
            <Link
              href="/products/humus-premium"
              className="px-7 py-3.5 rounded-full border border-white/20 text-sage hover:text-paper hover:border-white/40 transition-colors"
            >
              HUMAS PREMIUM 상세
            </Link>
            <Link
              href="/products/amino-gold"
              className="px-7 py-3.5 rounded-full border border-white/20 text-sage hover:text-paper hover:border-white/40 transition-colors"
            >
              AMINO GOLD 상세
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-8 text-xs text-sage/40">
            <span>효능·효과 미표시제품 (공시-2-3-974호)</span>
            <span>OMRI 표기는 원료 기준</span>
            <span>시비량은 현장 상담 후 결정</span>
          </div>
        </div>
      </section>
    </>
  );
}
