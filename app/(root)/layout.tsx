import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";

import AlertBanner from "../../components/ui/alert-banner";
import PortableText from "../../components/ui/portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    stega: false,
  });
  const title = "South Asian Culture Show";
  const description = "South Asian Culture Show(SACS) is a student-run organization in Poway that aims to promote South Asian culture through a variety of events and performances.";

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await sanityFetch({ query: settingsQuery });
  const footer = data?.footer || [];
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen">
          <Navbar />
          {isDraftMode && <AlertBanner />}
          <main>{children}</main>
          <Footer />
        </section>
        {isDraftMode && <VisualEditing />}
        <SpeedInsights />
      </body>
    </html>
  );
}
