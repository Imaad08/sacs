import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SacsHomepageComponent() {
  return (
    <div className="min-h-screen bg-cream text-gray-800">
      <main className="space-y-20">
        <section className="hero bg-gold/10 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-800">South Asian Cultural Show</h1>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-600">
              Celebrating the rich diversity of South Asian culture through dance and performance
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/80 text-gray-800 rounded-full">
              <Link href="/tickets">Get Tickets</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">About SACS</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image 
                src="/placeholder.svg" 
                alt="SACS Performance" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <p className="text-lg text-gray-600">
                The South Asian Cultural Show (SACS) is a vibrant celebration of the diverse cultures and traditions of South Asia. Our organization brings together talented performers to showcase the beauty of South Asian dance, music, and art.
              </p>
              <p className="text-lg text-gray-600">
                Founded in [year], SACS has grown into a platform that not only entertains but also educates and connects communities. Our annual show is a testament to the rich heritage and contemporary expressions of South Asian culture.
              </p>
              <Button variant="outline" asChild className="border-gold text-gray-800 hover:bg-gold hover:text-gray-800 rounded-full">
                <Link href="/about">Learn more about our history and mission</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gold/10 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Mixer Night', 'Dance Workshop', 'Cultural Showcase'].map((event) => (
                <Card key={event} className="bg-cream border-gold">
                  <CardHeader>
                    <CardTitle className="text-gray-800">{event}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-600">
                      {event === 'Mixer Night' && 'Join us for a night of music, dance, and networking!'}
                      {event === 'Dance Workshop' && 'Learn the basics of Bhangra and Bollywood dance styles.'}
                      {event === 'Cultural Showcase' && 'Experience the diversity of South Asian performances.'}
                    </p>
                    <Button variant="link" asChild className="text-gold hover:text-gold/80">
                      <Link href="/events">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join SACS</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            Interested in being part of our vibrant community? Fill out our interest form and discover exciting opportunities!
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/80 text-gray-800 mb-10 rounded-full">
          <Link href="https://docs.google.com/forms/d/1I3EzWeegL1_fVhpqn8iYu2EJGUbi3tN7e02o8jWYSDg/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">Interest Form</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}