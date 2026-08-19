import type { Metadata } from "next";
import { Work_Sans, Archivo_Black, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-body" });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Dhruv Karavadiya — Full-Stack Developer",
  description:
    "Portfolio of Dhruv Karavadiya, a full-stack developer working with React, Next.js, Node.js, Express.js, MongoDB and PostgreSQL.",
  icons: {
    icon: "/favicion_portfolio.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${archivoBlack.variable} ${plexMono.variable} font-body bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
