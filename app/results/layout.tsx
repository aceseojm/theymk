import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비료 사용 결과 | 채소·과수·잔디 실제 적용 사례 — YMK",
  description: "고추·토마토·채소·과수·잔디 등 9가지 작물 실제 비료 사용 전후 사진. 유기질 비료 휴머스 프리미엄·아미노 골드 현장 적용 결과 확인.",
  keywords: [
    "비료효과", "비료사용결과", "비료전후", "고추비료효과", "토마토비료효과",
    "채소비료", "과수비료", "잔디비료효과", "비료적용사례", "유기질비료효과",
    "비료사용법", "비료주는시기", "웃거름", "밑거름",
  ],
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
