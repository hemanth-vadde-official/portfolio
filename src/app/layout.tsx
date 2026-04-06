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
  title: "Hemanth Vadde | Cloud & DevOps Engineer",
  description:
    "Personal portfolio of Hemanth Vadde - Cloud & DevOps Engineer specializing in building scalable cloud infrastructure, CI/CD pipelines, and automation.",
  keywords: [
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "Portfolio",
  ],
  authors: [{ name: "Hemanth Vadde" }],
  openGraph: {
    title: "Hemanth Vadde | Cloud & DevOps Engineer",
    description:
      "Personal portfolio of Hemanth Vadde - Cloud & DevOps Engineer specializing in scalable cloud infrastructure and automation.",
    type: "website",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
