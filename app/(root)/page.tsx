'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Star, Calendar } from 'lucide-react'

const TICKETS_URL = 'https://gofan.co/app/school/CA71942'

const stats = [
  { label: 'Years Running', value: '10+', icon: Calendar },
  { label: 'Performers', value: '100+', icon: Users },
  { label: 'Dance Styles', value: '7', icon: Star },
]

const featuredDances = [
  {
    name: 'Classical',
    desc: 'Rooted in Hindu traditions, emphasizing expressive gesture and storytelling.',
    img: '/assets/classical-dance.jpg',
  },
  {
    name: 'Bhangra',
    desc: 'High-energy Punjabi folk dance bursting with vibrant music and colorful costumes.',
    img: '/assets/bhangra.jpg',
  },
  {
    name: 'Fusion / Hip Hop',
    desc: 'Where Bollywood meets modern hip-hop for an electrifying performance.',
    img: '/assets/fusion.jpg',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function HomePage() {
  return (
    <div className="bg-cream overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/bhangra.jpg"
          alt="SACS Bhangra Performance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-cream" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-6"
          >
            Poway, California
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            South Asian{' '}
            <span className="text-gold">Cultural</span>
            {' '}Show
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/80 text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Celebrating the rich diversity of South Asian culture through dance and performance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-gray-900 font-bold rounded-full hover:bg-gold/90 transition-all duration-200 hover:scale-105 shadow-xl shadow-gold/30 w-full sm:w-auto text-center"
            >
              Get Tickets
            </a>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-200 w-full sm:w-auto text-center"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-black text-gold">{stat.value}</div>
                <div className="text-cream/50 text-xs sm:text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gold/15 rounded-3xl blur-3xl" />
              <Image
                src="/assets/all-girl.jpg"
                alt="SACS All Girl Performance"
                width={600}
                height={500}
                className="relative rounded-2xl object-cover shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              <span className="text-gold font-semibold tracking-widest uppercase text-sm">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                More Than Just a Show
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The South Asian Cultural Show (SACS) is a student-run organization in Poway that brings together talented performers to celebrate the rich diversity of South Asian culture through dance, music, and art.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From classical forms to modern fusion, SACS represents the full spectrum of South Asian cultural expression — creating a space where culture, creativity, and community intersect.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all duration-300 group"
              >
                Our Story
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dances */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">On Stage</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Featured Dances</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {featuredDances.map((dance) => (
              <motion.div
                key={dance.name}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <Image
                    src={dance.img}
                    alt={dance.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-black text-white mb-2">{dance.name}</h3>
                  <p className="text-white/0 text-sm leading-relaxed transition-all duration-300 transform translate-y-2 group-hover:text-white/70 group-hover:translate-y-0">
                    {dance.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/dances"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-gray-900 transition-all duration-200"
            >
              View All Dances
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-28 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Get Involved</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6 leading-tight">
              Be Part of Something{' '}
              <span className="text-gold">Special</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Interested in joining SACS? Whether you&apos;re a performer, organizer, or enthusiast,
              there&apos;s a place for you in our vibrant community!
            </p>
            <a
              href="https://docs.google.com/forms/d/1I3EzWeegL1_fVhpqn8iYu2EJGUbi3tN7e02o8jWYSDg/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-gray-900 font-bold rounded-full hover:bg-gold/90 transition-all duration-200 hover:scale-105 shadow-xl shadow-gold/20"
            >
              Fill Out Interest Form
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
