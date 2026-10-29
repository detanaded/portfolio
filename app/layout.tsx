import "./globals.css";
import { ThemeProvider } from "@/components/navigation/theme-provider";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Header from "@/components/navigation/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Ernie Hernandez | Front End Engineer",
  description:
    "Front end engineer building fast, accessible interfaces with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Ernie Hernandez | Front End Engineer",
    description:
      "Front end engineer building fast, accessible interfaces with React, Next.js, and TypeScript.",
    url: "/",
    siteName: "Ernie Hernandez",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ernie Hernandez | Front End Engineer",
    description:
      "Front end engineer building fast, accessible interfaces with React, Next.js, and TypeScript.",
  },
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn("font-sans scroll-smooth", plusJakartaSans.variable)}
      >
        <head />
        <body className="bg-background">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="container mx-auto">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
