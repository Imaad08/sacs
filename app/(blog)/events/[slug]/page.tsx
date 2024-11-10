import { defineQuery } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Avatar from "../../../../components/ui/avatar";
import CoverImage from "../../../../components/ui/cover-image";
import DateComponent from "../../../../components/ui/date";
import MoreEvents from "../../../../components/ui/more-events";
import PortableText from "../../../../components/ui/portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

const postSlugs = defineQuery(
  `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
);

export async function generateStaticParams() {
  return await sanityFetch({
    query: postSlugs,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await sanityFetch({
    query: postQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}
export default async function PostPage({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch({ query: postQuery, params }),
    sanityFetch({ query: settingsQuery }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <div className="bg-cream min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-5 flex-1 flex flex-col items-center">
        <article className="text-center">
          <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
            {post.title}
          </h1>
          <div className="overflow-hidden mb-8 sm:mx-0 md:mb-16">
            <CoverImage image={post.coverImage} priority />
          </div>
          <div className="max-w-2xl w-full mx-auto">
            <div className="mb-6 text-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Time and Location</h2>
              <div className="mb-4 text-lg">
                <DateComponent dateString={post.date} />
              </div>

              {post.excerpt && (
                <p className="text-pretty text-lg leading-relaxed mb-4">{post.excerpt}</p>
              )}
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-8">About the Event</h2>
          {post.content?.length && (
            <PortableText
              className="max-w-2xl mx-auto"
              value={post.content as PortableTextBlock[]}
            />
          )}
        </article>
        <aside className="w-full text-center">
          <hr className="border-accent-2 mb-24 mt-28" />
          <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
            More Events
          </h2>
          <Suspense>
            <MoreEvents skip={post._id} limit={2} />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
