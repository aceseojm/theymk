import type { Metadata } from "next";
import { products } from "@/lib/data";
import ProductDetailClient from "@/components/ProductDetailClient";

type Props = { params: Promise<{ id: string }> };

const metaMap: Record<string, { title: string; description: string; keywords: string[] }> = {
  "humus-premium": {
    title: "휴머스 프리미엄 | 고형 완효성 유기질 비료 — YMK",
    description: "OMRI 인증 원료 기반 고형 완효성 유기질 비료. 질소 7.1%, 부식산·풀빅산 함유. 기계 살포 가능 균일 펠릿. 채소·과수·잔디·수도 전 작물 적용. 밑거름·웃거름 모두 사용.",
    keywords: ["휴머스프리미엄", "고형비료", "완효성비료", "유기질비료", "부식산비료", "밑거름", "웃거름", "비료질소", "펠릿비료"],
  },
  "amino-gold": {
    title: "아미노 골드 | 액체 속효성 아미노산 비료 — YMK",
    description: "아미노산 기반 액체 속효성 비료. 엽면시비·토양관주 모두 가능. 무취로 실내·골프장 영업 중 사용 가능. 색상·광택 개선, 빠른 영양 흡수. 화분·텃밭·스마트팜에 적합.",
    keywords: ["아미노골드", "아미노산비료", "액체비료", "속효성비료", "엽면시비", "액비", "무취액체비료", "수경재배비료"],
  },
};

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
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

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  return <ProductDetailClient id={id} />;
}
