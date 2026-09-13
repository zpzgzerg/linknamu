import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 서비스",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gradient-to-br from-[#FEF9F1] via-[#FDEEDA] to-[#FADFC0] antialiased">
        {children}
      </body>
    </html>
  );
}
