import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Products from "@/components/Products";
import CropShowcase from "@/components/CropShowcase";
import Audiences from "@/components/Audiences";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "YMK 유기질 비료 | 친환경 비료 전문 — 농업·골프장·텃밭·홈가드닝",
  description: "냄새 없는 친환경 유기질 비료. 농업·골프장·텃밭·화분·스마트팜까지, YMK 40년 기술로 식물을 건강하게.",
  keywords: [
    "유기질비료", "친환경비료", "천연비료", "유기농비료", "무취비료",
    "잔디비료", "텃밭비료", "화분비료", "고형비료", "액체비료",
    "완효성비료", "질소비료", "인산비료", "칼륨비료", "NPK비료",
    "비료추천", "비료가격", "비료구매", "가정용비료", "농업용비료",
    "YMK", "와이엠케이", "강길원", "휴머스프리미엄", "아미노골드",
    "비료OEM", "비료수출", "스마트팜비료", "수경재배비료", "골프장비료",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "주식회사 와이엠케이",
  alternateName: "YMK",
  url: "https://the-ymk.com",
  logo: "https://the-ymk.com/icon.png",
  description: "40년 펠릿 자동화 기술과 OMRI 인증 원료 기반의 친환경 유기질 비료 전문 기업",
  foundingDate: "1985",
  founder: { "@type": "Person", name: "강길원" },
  address: { "@type": "PostalAddress", addressCountry: "KR" },
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", availableLanguage: "Korean" },
  sameAs: ["https://the-ymk.com"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WhySection />
      <Products />
      <CropShowcase />
      <Audiences />
      <Trust />
      <Contact />
    </>
  );
}
