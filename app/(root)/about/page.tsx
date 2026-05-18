'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Users, Globe, BookOpen, Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const galleryImages = [
  { src: '/assets/classical-dance.jpg', alt: 'Classical Dance' },
  { src: '/assets/fusion.jpg', alt: 'Fusion Performance' },
  { src: '/assets/guy-girl.jpg', alt: 'Guy Girl Dance' },
  { src: '/assets/bhangra.jpg', alt: 'Bhangra Dance' },
  { src: '/assets/all-girl.jpg', alt: 'All Girl Performance' },
]

const purposes = [
  {
    icon: Star,
    title: 'Celebrate Culture',
    desc: 'Promote and celebrate the rich cultural heritage of South Asia through vibrant, authentic performances.',
  },
  {
    icon: Users,
    title: 'Build Community',
    desc: 'Create a sense of belonging and community among South Asian students and the broader San Diego area.',
  },
  {
    icon: Globe,
    title: 'Foster Understanding',
    desc: 'Bridge cultural gaps and build cross-cultural understanding, appreciation, and lasting friendships.',
  },
  {
    icon: Heart,
    title: 'Empower Artists',
    desc: 'Provide a platform for talented South Asian artists and performers to showcase their passion and skill.',
  },
  {
    icon: BookOpen,
    title: 'Educate & Inspire',
    desc: 'Educate and inspire through the power of cultural expression, reaching new audiences every year.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function AboutPage() {
  return (
    <div className="bg-cream overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <Image
          src="/assets/all-girl.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        <div className="relative container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">Our Story</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mt-4 leading-tight">
              About SACS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeUp}>
                <span className="text-gold font-semibold tracking-widest uppercase text-sm">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-6">Our Mission</h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                The South Asian Cultural Show (SACS) is a vibrant celebration of the diverse cultures and
                traditions of South Asia. We are a student-run organization that has grown into a platform
                that not only entertains but also educates and connects communities across Poway and beyond.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                Our organization brings together talented performers from various South Asian backgrounds to
                showcase the beauty of South Asian dance, music, and art. From classical forms to modern
                fusion, SACS represents the rich tapestry of South Asian cultural expression.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                Each year, our flagship event draws hundreds of attendees, creating a space where culture,
                creativity, and community intersect. Beyond our annual show, SACS hosts workshops, cultural
                exchanges, and community outreach programs throughout the year.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Memories</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Photo Gallery</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image, i) => (
                  <CarouselItem key={i}>
                    <div className="relative h-72 sm:h-[450px] rounded-2xl overflow-hidden">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-5 left-5">
                        <span className="text-white font-semibold text-base">{image.alt}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white" />
              <CarouselNext className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Purpose Cards */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Why We Exist</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">Our Purpose</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
          >
            {purposes.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gold/10 hover:border-gold/30"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-200">
                  <p.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gold/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Whether you&apos;re a performer, organizer, or enthusiast — there&apos;s a place for you in SACS.
            </p>
            <a
              href="https://docs.google.com/forms/d/1I3EzWeegL1_fVhpqn8iYu2EJGUbi3tN7e02o8jWYSDg/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-gray-900 font-bold rounded-full hover:bg-gold/90 transition-all duration-200 hover:scale-105 shadow-xl shadow-gold/20"
            >
              Get Involved
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
