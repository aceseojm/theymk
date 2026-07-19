import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YMK를 선택하는 이유 | 40년 기술력·OMRI 인증·친환경 비료",
  description: "40년 펠릿 자동화 기술, OMRI 인증 원료, 유기질비료 공정규격 인증. 가성비 높은 친환경 비료를 선택해야 하는 이유. 비료 효과와 품질 차이를 직접 확인하세요.",
  keywords: [
    "비료추천이유", "친환경비료추천", "가성비비료", "OMRI인증비료", "유기질비료인증",
    "비료효과", "비료품질", "비료비교", "초보자용비료", "비료선택기준",
  ],
};

export default function WhyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
