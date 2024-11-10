import type { ClientPerspective, QueryParams } from "next-sanity";
import { draftMode } from "next/headers";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

/**
 * Used to fetch data in Server Components, it has built in support for handling Draft Mode and perspectives.
 * When using the "published" perspective then time-based revalidation is used, set to match the time-to-live on Sanity's API CDN (60 seconds)
 * and will also fetch from the CDN.
 * When using the "previewDrafts" perspective then the data is fetched from the live API and isn't cached, it will also fetch draft content that isn't published yet.
 */
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  perspective: _perspective,
  /**
   * Stega embedded Content Source Maps are used by Visual Editing by both the Sanity Presentation Tool and Vercel Visual Editing.
   * The Sanity Presentation Tool will enable Draft Mode when loading up the live preview, and we use it as a signal for when to embed source maps.
   * When outside of the Sanity Studio we also support the Vercel Toolbar Visual Editing feature, which is only enabled in production when it's a Vercel Preview Deployment.
   */
  stega: _stega,
}: {
  query: QueryString;
  params?: QueryParams | Promise<QueryParams>;
  perspective?: Omit<ClientPerspective, "raw">;
  stega?: boolean;
}) {
  const perspective =
    _perspective || (await draftMode()).isEnabled
      ? "previewDrafts"
      : "published";
  const stega =
    _stega ||
    perspective === "previewDrafts" ||
    process.env.VERCEL_ENV === "preview";
  if (perspective === "previewDrafts") {
    return client.fetch(query, await params, {
      stega,
      perspective: "previewDrafts",
      token,
      useCdn: false,
      next: { revalidate: 0 },
    });
  }
  return client.fetch(query, await params, {
    stega,
    perspective: "published",
    useCdn: true,
    next: { revalidate: 60 },
  });
}
