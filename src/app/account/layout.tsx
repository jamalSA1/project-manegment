import "~/styles/globals.css";

import { Noto_Kufi_Arabic } from "next/font/google";
import { type Metadata } from "next";
import AccountPage from "./page";

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
      <body className="accountBody">
        {children}
      </body>
  );
}
