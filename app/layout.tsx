import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { koKR } from "@clerk/localizations";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import { SyncUserProvider } from "@/components/providers/sync-user-provider";
import "./globals.css";

// Clerk 키가 프리렌더 단계에서 비어있을 경우 빌드가 실패할 수 있으므로,
// 레이아웃을 강제로 동적 처리하여 정적 프리렌더를 회피합니다.
export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS 템플릿",
  description: "Next.js + Clerk + Supabase 보일러플레이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // 핵심 로그: 빌드/SSR 단계에서 키 인식 여부를 길이 기준으로 남깁니다(마스킹 처리).
  if (typeof window === "undefined") {
    const masked = publishableKey
      ? `present(len=${String(publishableKey).length})`
      : "missing";
    // eslint-disable-next-line no-console
    console.log("[Clerk] publishableKey (server) =", masked);
  }

  return (
    <ClerkProvider localization={koKR} publishableKey={publishableKey}>
      <html lang="ko">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SyncUserProvider>
            <Navbar />
            {children}
          </SyncUserProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
