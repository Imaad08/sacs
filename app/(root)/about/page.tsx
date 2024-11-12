'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function AboutPage() {
  const galleryImages = [
    { src: '/assets/classical-dance.jpg', alt: 'SACS Performance 1' },
    { src: '/assets/fusion.jpg', alt: 'SACS Performance 2' },
    { src: '/assets/guy-girl.jpg', alt: 'SACS Performance 3' },
    { src: '/assets/bhangra.jpg', alt: 'SACS Performance 4' },
    { src: '/assets/all-girl.jpg', alt: 'SACS Performance 5' },
  ]

  return (
    <div className="min-h-screen bg-cream text-gray-800">
      <main className="container mx-auto px-4 py-20 space-y-20">
        <section>
          <h1 className="text-5xl font-bold mb-10 text-center text-gray-800">About SACS</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
            <p>
              The South Asian Cultural Show (SACS) is a vibrant celebration of the diverse cultures and traditions of South Asia. Founded in [year] at [University/Organization Name], SACS has grown into a platform that not only entertains but also educates and connects communities.
            </p>
            <p>
              Our organization brings together talented performers from various South Asian backgrounds to showcase the beauty of South Asian dance, music, and art. From classical forms to modern fusion, SACS represents the rich tapestry of South Asian cultural expression.
            </p>
            <p>
              Each year, our flagship event draws hundreds of attendees, creating a space where culture, creativity, and community intersect. Beyond our annual show, SACS hosts workshops, cultural exchanges, and community outreach programs throughout the year.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Image Gallery</h2>
          <Carousel className="max-w-3xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-gold">
                    <CardContent className="p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="rounded-lg object-cover w-full h-[400px]"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-gray-800" />
            <CarouselNext className="text-gray-800" />
          </Carousel>
        </section>
        

        <section className=" py-20 w-full">
  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Purpose</h2>
  <div className="px-4 mx-auto max-w-7xl">
    <p>
      At SACS, our purpose is to:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Celebrate and promote the rich cultural heritage of South Asia</li>
      <li>Provide a platform for talented South Asian artists and performers</li>
      <li>Foster cross-cultural understanding and appreciation</li>
      <li>Create a sense of community among South Asian students and beyond</li>
      <li>Educate and inspire through the power of cultural expression</li>
    </ul>
    <p>
      Through our events and initiatives, we strive to create a more inclusive and culturally aware community, bridging gaps and building connections that last a lifetime.
    </p>
  </div>
</section>



        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Interested in being part of SACS? Whether you're a performer, organizer, or enthusiast, there's a place for you in our vibrant community!
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/80 text-gray-800 rounded-full">
            <Link href="https://docs.google.com/forms/d/1I3EzWeegL1_fVhpqn8iYu2EJGUbi3tN7e02o8jWYSDg/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">Get Involved</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}