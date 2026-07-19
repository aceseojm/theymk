import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "인증·특허·성분분석 | 검증된 친환경 비료 — YMK",
  description: "유기질비료 공정규격 인증(공시-2-3-974호), 디자인 등록, OMRI 인증 원료 기반. 대학 연구기관 성분 분석 리포트로 검증된 YMK 친환경 비료의 품질을 확인하세요.",
  keywords: [
    "비료인증", "유기질비료인증", "OMRI인증", "비료성분분석", "비료특허",
    "친환경비료인증", "유기농비료인증", "비료공정규격", "비료안전성", "비료성분표",
  ],
};

export default function TrustLayout({ children }: { children: React.ReactNode }) {
  return children;
}
