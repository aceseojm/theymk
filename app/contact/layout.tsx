import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비료 구매·상담 문의 | 대량 구매·OEM·수출 — YMK 와이엠케이",
  description: "YMK 유기질 비료 구매 문의, 대량 구매 계약, OEM·ODM 상담, 골프장 솔루션, 스마트팜 양액 문의. 전화·이메일·온라인 문의 가능. 비료 판매처 직접 상담.",
  keywords: [
    "비료구매", "비료판매", "비료온라인구매", "비료대량구매", "비료가격문의",
    "비료OEM문의", "비료수출문의", "친환경비료구매", "유기질비료판매처",
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
