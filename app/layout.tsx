import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "./_providers/QueryProvider"; // Import your QueryProvider here

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniLearn",
  description: "A comprehensive SaaS platform for university learning management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
