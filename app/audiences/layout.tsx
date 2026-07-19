import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비료 활용분야 | 농업·골프장·OEM·스마트팜·텃밭 비료 — YMK",
  description: "농업 B2B 대량 구매, 골프장 잔디 비료, OEM·ODM 제조, 해외 수출, 스마트팜·수경재배 양액, 가정용 텃밭·화분 비료까지. 분야별 맞춤 유기질 비료 솔루션.",
  keywords: [
    "농업용비료", "잔디비료", "골프장비료", "비료OEM", "비료ODM",
    "스마트팜비료", "수경재배비료", "양액비료", "텃밭비료", "화분비료",
    "가정용비료", "대용량비료", "비료대량구매", "친환경비료추천", "비료수출",
  ],
};

export default function AudiencesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
