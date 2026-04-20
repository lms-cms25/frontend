import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import "./theme.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Shiko LMS",
  description: "Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={archivo.variable}
    >
      <body>{children}</body>
    </html>
  );
}
