import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Robot Genie",
  description: "Futuristic online learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-[var(--neon-blue)] selection:text-black min-h-screen flex flex-col`}>
        <MotionProvider>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
