import { defineQuery } from 'next-sanity'
import type { Metadata, ResolvingMetadata } from 'next'
import { type PortableTextBlock } from 'next-sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { ArrowLeft, Calendar } from 'lucide-react'

import Avatar from '../../../../components/ui/avatar'
import CoverImage from '../../../../components/ui/cover-image'
import DateComponent from '../../../../components/ui/date'
import MoreEvents from '../../../../components/ui/more-events'
import PortableText from '../../../../components/ui/portable-text'

import { sanityFetch } from '@/sanity/lib/fetch'
import { postQuery, settingsQuery } from '@/sanity/lib/queries'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'

type Props = {
  params: Promise<{ slug: string }>
}

const postSlugs = defineQuery(
  `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
)

export async function generateStaticParams() {
  return await sanityFetch({
    query: postSlugs,
    perspective: 'published',
    stega: false,
  })
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await sanityFetch({ query: postQuery, params, stega: false })
  const previousImages = (await parent).openGraph?.images || []
  const ogImage = resolveOpenGraphImage(post?.coverImage)
  return {
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata
}

export default async function PostPage({ params }: Props) {
  const [post] = await Promise.all([
    sanityFetch({ query: postQuery, params }),
    sanityFetch({ query: settingsQuery }),
  ])

  if (!post?._id) return notFound()

  return (
    <div className="bg-cream min-h-screen">
      {/* Back link */}
      <div className="container mx-auto px-4 sm:px-6 pt-8">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all duration-200 text-sm group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          All Events
        </Link>
      </div>

      <article className="container mx-auto px-4 sm:px-6 py-12 max-w-3xl">
        {/* Title */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 text-gold text-sm font-semibold mb-4">
            <Calendar className="h-4 w-4" />
            <DateComponent dateString={post.date} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight text-balance">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
          )}
        </div>

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-14">
          <CoverImage image={post.coverImage} priority />
        </div>

        {/* Content */}
        {post.content?.length && (
          <div className="prose prose-gray prose-lg max-w-none">
            <PortableText
              className="text-gray-700 leading-relaxed"
              value={post.content as PortableTextBlock[]}
            />
          </div>
        )}
      </article>

      {/* More Events */}
      <aside className="border-t border-gold/20 bg-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            More Events
          </h2>
          <Suspense>
            <MoreEvents skip={post._id} limit={2} />
          </Suspense>
        </div>
      </aside>
    </div>
  )
}
