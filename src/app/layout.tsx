import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kunal Goswami | AI & Data Science Engineer",
  description: "Portfolio of Kunal Goswami. I build data-driven projects, from analytics dashboards to machine learning models and secure data pipelines.",
};

import CommandPalette from "@/components/CommandPalette";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-white flex flex-col">
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
