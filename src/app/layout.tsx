
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
  title: "Zineb Hadri | AI Engineer",

  description:
    "Portfolio of Zineb Hadri, AI Engineering student at Université Paris-Saclay. Explore projects in Agentic AI, RAG, LLMs, NLP and Machine Learning.",

  keywords: [
    "Zineb Hadri",
    "AI Engineer",
    "Agentic RAG",
    "LangGraph",
    "Machine Learning",
    "LLM",
    "NLP",
    "Paris-Saclay",
  ],

  authors: [{ name: "Zineb Hadri" }],

  openGraph: {
    title: "Zineb Hadri | AI Engineer",
    description:
      "AI Engineering portfolio featuring Agentic RAG, Machine Learning and NLP projects.",
    url: "https://zineb-portfolio-beta.vercel.app",
    siteName: "Zineb Hadri Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
