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
  metadataBase: new URL("https://kusakari-navi.com"),
  twitter: {
    card: "summary_large_image",
  },
  title: {
    default: "草刈りナビ｜草刈り業者比較・料金・おすすめランキング",
    template: "%s｜草刈りナビ",
  },
  description: "草刈り業者の料金比較・口コミ・おすすめランキングを掲載しています。空き地・庭・アパートなど、シーン別に適した業者を紹介します。",
  keywords: ["草刈り", "業者", "料金", "比較", "ランキング", "庭", "雑草"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg">{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"草刈りナビ\",\"url\":\"https://kusakari-navi-deploy.pages.dev/\",\"logo\":\"https://kusakari-navi-deploy.pages.dev/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://kusakari-navi-deploy.pages.dev/about/\"]}" }}
        />
        </body>
    </html>
  );
}
