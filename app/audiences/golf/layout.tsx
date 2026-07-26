import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "골프장 잔디 비료 | 그린·페어웨이 전용 유기질 비료 — YMK",
  description: "골프장 그린·페어웨이·러프 전용 무취 유기질 비료. 기계 살포 최적화 균일 펠릿, 악취 없이 영업 중 시비 가능. 잔디 밀도·색상 균일화 효과.",
  keywords: [
    "골프장비료", "잔디비료", "그린비료", "페어웨이비료",
    "잔디관리비료", "골프코스비료", "잔디영양제",
    "골프장잔디관리", "유기질잔디비료", "무취잔디비료",
  ],
};

export default function GolfLayout({ children }: { children: React.ReactNode }) {
  return children;
}
