import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";
import { Header } from "@/components/Header";
import { GeistSans } from "geist/font/sans";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Tools Box ",
  description: "Best Tools For Dev , find your tool to build your project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx(`${GeistSans.className} antialiased`, "bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}