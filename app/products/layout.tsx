import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비료 제품 | 휴머스 프리미엄·아미노 골드 유기질 비료",
  description: "고형 완효성 유기질 비료 '휴머스 프리미엄'과 액체 속효성 아미노산 비료 '아미노 골드'. OMRI 인증 원료 기반, 질소·인산·칼륨 균형 영양 공급. 냄새 없는 친환경 비료.",
  keywords: [
    "휴머스프리미엄", "아미노골드", "유기질비료제품", "완효성비료", "속효성비료",
    "고형비료", "액체비료", "아미노산비료", "부식산비료", "풀빅산비료",
    "질소비료", "인산비료", "칼륨비료", "NPK비료", "무취비료", "친환경비료",
    "비료성분", "비료효과", "비료추천",
  ],
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
