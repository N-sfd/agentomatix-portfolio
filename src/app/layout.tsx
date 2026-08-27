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
  title: "Agentomatix AI Portfolio | Consult America",
  description:
    "AI web applications, SaaS dashboards, healthcare AI tools, e-commerce platforms, writing assistants, resume analyzers, booking systems, and business applications by Consult America.",
  openGraph: {
    title: "Agentomatix AI Portfolio | Consult America",
    description:
      "AI web applications, SaaS dashboards, healthcare AI tools, e-commerce platforms, writing assistants, resume analyzers, booking systems, and business applications by Consult America.",
    type: "website",
    url: "https://agentomatix-portfolio.pages.dev/portfolio/",
    siteName: "Agentomatix AI Portfolio",
    images: [
      {
        url: "https://agentomatix-portfolio.pages.dev/logo.png",
        width: 256,
        height: 256,
        alt: "Consult America logo",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070d1a] text-slate-100">{children}</body>
    </html>
  );
}
