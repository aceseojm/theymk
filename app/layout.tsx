import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "jjaHryYzjw01yYYC3I-GXjLImb5FIPikyKluYMRSjvs",
  },
  title: {
    default: "YMK 유기질 비료 | 친환경 비료 전문 브랜드 — 와이엠케이",
    template: "%s | YMK 와이엠케이",
  },
  description:
    "OMRI 인증 원료 기반, 40년 펠릿 자동화 기술. 농업·골프장·텃밭·스마트팜을 위한 친환경 유기질 비료 전문 브랜드 와이엠케이. 무취 고형 비료·액체 비료 추천.",
  keywords: [
    "비료", "유기질비료", "친환경비료", "유기농비료", "천연비료",
    "강길원", "와이엠케이", "YMK",
    "비료종류", "비료성분", "비료사용법", "비료추천", "비료가격", "비료구매",
    "비료효과", "비료주는시기",
    "잔디비료", "텃밭비료", "화분비료", "과수비료", "채소비료",
    "고추비료", "토마토비료", "다육이비료", "관엽식물비료",
    "완효성비료", "속효성비료", "고형비료", "액체비료", "무취비료",
    "질소비료", "인산비료", "칼륨비료", "NPK비료",
    "밑거름", "웃거름", "미생물비료",
    "가정용비료추천", "초보자비료", "가성비비료", "대용량비료",
    "스마트팜비료", "수경재배비료", "골프장비료", "비료OEM",
  ],
  metadataBase: new URL("https://the-ymk.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "YMK 유기질 비료 | 친환경 비료 전문 브랜드 — 와이엠케이",
    description:
      "OMRI 인증 원료 기반, 40년 펠릿 자동화 기술. 농업·골프장·텃밭·스마트팜을 위한 친환경 유기질 비료 전문 브랜드.",
    url: "https://the-ymk.com",
    siteName: "YMK 와이엠케이",
    images: [
      {
        url: "https://the-ymk.com/images/cover.png",
        width: 1200,
        height: 630,
        alt: "YMK 유기질 비료 — 모든 생명을 위한 맞춤 비료",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YMK 유기질 비료 | 친환경 비료 전문 브랜드",
    description:
      "OMRI 인증 원료 기반, 40년 펠릿 자동화 기술. 농업·골프장·텃밭을 위한 친환경 유기질 비료.",
    images: ["https://the-ymk.com/images/cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="62cc643110e45c6962d28aff8bf42f36405dec4d" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <LangProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
