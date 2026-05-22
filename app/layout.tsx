import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Alex Chen — Full-Stack Developer & Designer",
  description:
    "Portfolio of Alex Chen — a full-stack developer and UI/UX designer crafting beautiful, performant web experiences.",
  keywords: ["developer", "portfolio", "full-stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen — Full-Stack Developer & Designer",
    description: "Portfolio of Alex Chen — crafting beautiful, performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <Providers>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
