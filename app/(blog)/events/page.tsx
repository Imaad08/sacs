import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery } from "@/sanity/lib/queries";
import CoverImage from "../../../components/ui/cover-image";
import DateComponent from "../../../components/ui/date";

export default async function Page() {
  const data = await sanityFetch({ query: moreStoriesQuery, params: { skip: "0", limit: 10 } });

  return (
    <div className="bg-cream min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-5">
        <h1 className="text-6xl font-bold text-center mt-16 mb-8">Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {data?.map((post: any) => {
            const { _id, title, slug, coverImage, excerpt, date } = post;
            return (
              <article key={_id} className="max-w-[800px]">
                <div className="overflow-hidden rounded-lg shadow-md transition-shadow duration-200 hover:shadow-lg">
                  <Link href={`/events/${slug}`} passHref>
                    <CoverImage image={coverImage} priority />
                  </Link>
                </div>
                <div className="mb-20 md:mb-28 mt-2">
                  <div>
                    <h3 className="text-pretty mb-4 text-2xl leading-tight lg:text-3xl">
                      <Link href={`/events/${slug}`} passHref>
                        <p className="hover:underline">{title}</p>
                      </Link>
                    </h3>
                    <div className="mb-4 text-lg md:mb-0">
                      <DateComponent dateString={date} />
                    </div>
                  </div>
                  <div>
                    {excerpt && (
                      <p className="text-pretty mb-4 mt-2 text-base leading-relaxed">
                        {excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
