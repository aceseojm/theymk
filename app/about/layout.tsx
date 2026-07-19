import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개 | 40년 비료 전문 기업 와이엠케이 — 강길원 대표",
  description: "1985년 설립, 40년 펠릿 자동화 기술 보유 친환경 유기질 비료 전문 기업 와이엠케이. 강길원 대표이사가 이끄는 OMRI 인증 원료 기반 비료 브랜드 YMK의 비전·역사·기술력을 소개합니다.",
  keywords: ["와이엠케이", "YMK", "강길원", "비료회사", "유기질비료회사", "친환경비료기업", "비료제조업체", "40년비료", "펠릿비료제조"],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
