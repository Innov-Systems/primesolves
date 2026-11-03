import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Prime Solves | Desenvolvimento de Software e Soluções Digitais",
  description: site.description,
  metadataBase: new URL(site.url ?? "http://localhost:3000"),
  ...(site.url ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: "Prime Solves | Desenvolvimento de Software e Soluções Digitais",
    description: site.description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
    ...(site.url ? { url: site.url } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Solves | Soluções Digitais",
    description: site.description,
  },
  robots: site.url
    ? { index: true, follow: true }
    : { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
