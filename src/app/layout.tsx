import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import type {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export let metadata: Metadata = {
  title: "Nutri Check",
  description: "Nutrition facts for your favorite foods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}