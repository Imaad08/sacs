import Link from 'next/link'
import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/fetch'
import { moreStoriesQuery } from '@/sanity/lib/queries'
import CoverImage from '../../../components/ui/cover-image'
import DateComponent from '../../../components/ui/date'

export default async function EventsPage() {
  const data = await sanityFetch({
    query: moreStoriesQuery,
    params: { skip: '0', limit: 10 },
  })

  return (
    <div className="bg-cream overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <Image
          src="/assets/all-guy.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        <div className="relative container mx-auto px-4 sm:px-6">
          <span className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">
            What&apos;s Happening
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mt-4 leading-tight">
            Events
          </h1>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          {data && data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {data.map((post) => (
                <article
                  key={post._id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gold/10 hover:border-gold/30 hover:-translate-y-1"
                >
                  <Link href={`/events/${post.slug}`}>
                    <div className="overflow-hidden">
                      <div className="transition-transform duration-500 group-hover:scale-105">
                        <CoverImage image={post.coverImage} priority />
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                      <DateComponent dateString={post.date} />
                    </div>
                    <h2 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                      <Link
                        href={`/events/${post.slug}`}
                        className="hover:text-gold transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/events/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm mt-4 hover:gap-3 transition-all duration-200"
                    >
                      Read More
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">No Events Yet</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Stay tuned! We&apos;ll be announcing our upcoming events and performances soon.
                Follow us on Instagram for the latest updates.
              </p>
              <a
                href="https://instagram.com/sacs.2k25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-7 py-3 bg-gold text-gray-900 font-bold rounded-full hover:bg-gold/90 transition-all duration-200"
              >
                Follow @sacs.2k25
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
