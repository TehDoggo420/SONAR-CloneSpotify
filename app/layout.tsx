import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SONAR",
  description: "Listen to music!! CHILL!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
