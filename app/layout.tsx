import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// import { SanityLive } from "@/sanity/lib/live";
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Samuele Spriano | Personal coach",
  description: "Samuele Spriano | Personal coach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
