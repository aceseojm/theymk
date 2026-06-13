import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "YMK — 못 구하는 원료, 못 가진 기술",
    template: "%s | YMK",
  },
  description:
    "국내 조달 불가능한 OMRI 원료 한국 독점, 40년 펠릿 자동화 기술, 직접 생산 역량. 주식회사 와이엠케이의 유기질 비료 솔루션.",
  openGraph: {
    title: "YMK — 못 구하는 원료, 못 가진 기술",
    description:
      "국내 조달 불가능한 OMRI 원료 한국 독점, 40년 펠릿 자동화 기술, 직접 생산 역량. 주식회사 와이엠케이의 유기질 비료 솔루션.",
    url: "https://theymk.vercel.app",
    siteName: "YMK",
    images: [
      {
        url: "https://theymk.vercel.app/images/cover.png",
        width: 1200,
        height: 630,
        alt: "YMK 유기질 비료 — 못 구하는 원료, 못 가진 기술",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YMK — 못 구하는 원료, 못 가진 기술",
    description:
      "국내 조달 불가능한 OMRI 원료 한국 독점, 40년 펠릿 자동화 기술, 직접 생산 역량.",
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
