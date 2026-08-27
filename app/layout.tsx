import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Azeem Hashmi | AI & Full-Stack Software Engineer",
  description:
    "Portfolio of Abdul Azeem Hashmi - BS Artificial Intelligence Student at FAST NUCES Islamabad. Specializing in Autonomous AI Agents, LLM Applications, Next.js, and Full-Stack Engineering.",
  keywords: [
    "Abdul Azeem Hashmi",
    "AI Engineer",
    "Autonomous Agents",
    "FastAPI",
    "Next.js",
    "LangChain",
    "Gemini API",
    "Software Engineer",
    "FAST NUCES",
  ],
  authors: [{ name: "Abdul Azeem Hashmi" }],
  creator: "Abdul Azeem Hashmi",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#06080f] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
