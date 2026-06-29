import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  verification: {
    google: "jjaHryYzjw01yYYC3I-GXjLImb5FIPikyKluYMRSjvs",
  },
  title: {
    default: "YMK — 모든 생명을 위한 맞춤 비료",
    template: "%s | YMK",
  },
  description:
    "OMRI 인증 원료 기반, 40년 펠릿 자동화 기술. 농업·골프장·조경을 위한 주식회사 와이엠케이의 친환경 유기질 비료 솔루션.",
  openGraph: {
    title: "YMK — 모든 생명을 위한 맞춤 비료",
    description:
      "OMRI 인증 원료 기반, 40년 펠릿 자동화 기술. 농업·골프장·조경을 위한 친환경 유기질 비료 솔루션.",
    url: "https://theymk.vercel.app",
    siteName: "YMK",
    images: [
      {
        url: "https://theymk.vercel.app/images/cover.png",
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
    title: "YMK — 모든 생명을 위한 맞춤 비료",
    description:
      "OMRI 인증 원료 기반, 40년 펠릿 자동화 기술. 농업·골프장·조경을 위한 친환경 유기질 비료 솔루션.",
    images: ["https://theymk.vercel.app/images/cover.png"],
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
