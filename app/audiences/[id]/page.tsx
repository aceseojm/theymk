import type { Metadata } from "next";
import { audiences } from "@/lib/data";
import AudienceDetailClient from "@/components/AudienceDetailClient";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

const metaMap: Record<string, { title: string; description: string; keywords: string[] }> = {
  "agri-b2b": {
    title: "농업용 유기질 비료 B2B 대량 구매 | 1톤 이상 공급 — YMK",
    description: "농업 B2B 1톤 이상 대량 구매 계약, 전국 유통. 로트별 성분 분석 리포트 제공, 유기질비료 공정규격 인증 제품. 농사용 비료 가격 및 대량 공급 문의.",
    keywords: ["농업용비료", "비료대량구매", "농사용비료", "비료도매", "유기질비료B2B", "농업비료가격", "비료공급업체"],
  },
  golf: {
    title: "골프장 잔디 비료 | 그린·페어웨이 전용 유기질 비료 — YMK",
    description: "골프장 그린·페어웨이·러프 전용 무취 유기질 비료. 기계 살포 최적화 균일 펠릿, 악취 없이 영업 중 시비 가능. 잔디 밀도·색상 균일화 효과.",
    keywords: ["골프장비료", "잔디비료", "그린비료", "페어웨이비료", "잔디관리비료", "골프코스비료", "잔디영양제"],
  },
  oem: {
    title: "비료 OEM·ODM 제조 | 맞춤 성분·패키징 — YMK",
    description: "비료 OEM·ODM 맞춤 성분 배합, 포장 디자인, 브랜딩까지. 소량 샘플부터 대량 생산까지 상담 가능. 유기질비료 공정규격 인증 지원.",
    keywords: ["비료OEM", "비료ODM", "비료주문제작", "비료위탁생산", "비료맞춤제조", "비료브랜딩", "비료포장"],
  },
  export: {
    title: "유기질 비료 수출 | 동남아시아 해외 공급 — YMK",
    description: "OMRI 인증 원료 기반 유기질 비료 해외 수출. 동남아시아 유기농 인증 시장 진출에 최적화. 로트별 분석 리포트로 수출 서류 지원.",
    keywords: ["비료수출", "유기질비료수출", "동남아비료", "해외비료공급", "비료수출파트너", "OMRI비료수출"],
  },
  smartfarm: {
    title: "스마트팜·수경재배 액체 비료 | 양액 시스템 최적화 — YMK",
    description: "스마트 온실·수경재배·식물공장 전용 고기능성 청정 액체 비료. 완전 용해, 노즐 막힘 없음, EC/pH 안정 모니터링 지원. 스마트팜 B2B 대량 납품.",
    keywords: ["스마트팜비료", "수경재배비료", "양액비료", "식물공장비료", "수경농장비료", "액체비료", "스마트온실비료"],
  },
  home: {
    title: "가정용 화분·텃밭 비료 추천 | 무취 친환경 — YMK",
    description: "실내 화분·베란다·텃밭용 냄새 없는 무취 펠릿 비료. 다육이·관엽식물·채소·허브에 모두 사용 가능. 초보자도 쉬운 가정용 친환경 비료 추천.",
    keywords: ["화분비료", "텃밭비료", "가정용비료", "실내비료", "베란다비료", "다육이비료", "관엽식물비료", "초보자비료", "무취비료"],
  },
};

export async function generateStaticParams() {
  return audiences.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const meta = metaMap[id];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default async function AudienceDetailPage({ params }: Props) {
  const { id } = await params;
  const exists = audiences.find((a) => a.id === id);
  if (!exists) notFound();
  return <AudienceDetailClient id={id} />;
}
