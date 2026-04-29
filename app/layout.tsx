import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "草刈りナビ｜草刈り業者比較・料金・おすすめランキング",
    template: "%s｜草刈りナビ",
  },
  description: "草刈り業者の料金比較・口コミ・おすすめランキングを掲載。空き地・庭・アパートなどシーン別に最適な業者を紹介。無料見積もり対応。",
  keywords: ["草刈り", "業者", "料金", "比較", "ランキング", "庭", "雑草"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg">{children}</body>
    </html>
  );
}
