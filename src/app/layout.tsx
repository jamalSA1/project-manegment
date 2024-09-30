import "~/styles/globals.css";

import {Cairo, Zain, IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic } from "next/font/google";
import { type Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const cairoClassName = Noto_Kufi_Arabic({
  weight: ['400', '700'],
  subsets: ['arabic']
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" className={`${cairoClassName.className}`}>
      <body>
        <TRPCReactProvider>
          {children}
          </TRPCReactProvider>
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}
