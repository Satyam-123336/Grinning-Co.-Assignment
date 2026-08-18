import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "N.A.S.A. Noir | The Scent of the Cosmos",
  description: "Bottled from the edge of the universe. Experience the luxury of space with N.A.S.A. Noir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${spaceGrotesk.variable} antialiased bg-black text-slate-200 selection:bg-amber-500/30 selection:text-amber-200`}
      >
        {children}
      </body>
    </html>
  );
}
