import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "商品一覧|OWNDAYS x MELLER(メラー)公式オンラインストア|サングラス",
  description: "OWNDAYSXMELLER商品一覧一覧。デザイン性・機能性に優れたサステナブルな素材のサングラス(全てUV99%以上カット・偏光レンズ・傷防止コート・撥水コート)を展開中。",
  keywords: ["商品一覧", "サングラス", "偏光レンズ", "Meler", "メラーアイウェア", "フレーム", "サステイナブ", "トレンド", "バルセロナ", "スペイン", "OWNDAYS", "才>デーズ", "オンデイズ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} h-full antialiased`}
    >
      <body className="font-['Oswald'] min-h-dvh w-full overflow-x-hidden flex flex-col bg-[#FF6723]">
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
