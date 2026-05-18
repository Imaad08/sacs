'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const dances = [
  {
    name: 'Classical',
    description:
      'Indian classical dance has been rooted in Hindu religion for thousands of years. It encompasses eight various forms of dance, including Bharatanatyam and Kathak. This style of dance requires years of rigorous training and places a heavy emphasis on expressive gestures and facial expressions.',
    imageSrc: '/assets/classical-dance.jpg',
  },
  {
    name: 'Fusion / Hip Hop',
    description:
      'Being one of the biggest dances in SACS, this form combines both Bollywood style and modern hip-hop to create a mixture of both worlds. Using the trendiest and most upbeat music, dancers entertain the audience with their fun and smooth dance moves. You will hear our generation\'s most popular and well-known rap music, along with modern hip-hop style Bollywood tunes.',
    imageSrc: '/assets/fusion.jpg',
  },
  {
    name: 'Guy Girl',
    description:
      'This dance form is known as the "filmy" style. Each person is paired up and taught dances that reflect what Bollywood culture is truly about. This exuberant and lively dance uses top music from the most popular Indian movies of all time. This dance gets the audience to sing along with the music and dance along with the performers.',
    imageSrc: '/assets/guy-girl.jpg',
  },
  {
    name: 'Bhangra',
    description:
      'Bhangra is another type of traditional dance that originates from the Indian state of Punjab. This physically demanding dance form incorporates vigorous kicks, leaps, and bends of the body to the beat of a dhol. The performers wear colorful and vibrant costumes that stand out from the rest. Bhangra is all about having fun and giving off an energetic and lively vibe to the audience.',
    imageSrc: '/assets/bhangra.jpg',
  },
  {
    name: 'All Girl',
    description:
      'This dance highlights the feminine aspects of Bollywood dance by having an all-female group perform. The dance also utilizes some of the most popular Indian music and captivates the audience with the intricate and difficult dance moves. Performers get to wear beautiful costumes and truly elevate the importance of female empowerment in dance, as well.',
    imageSrc: '/assets/all-girl.jpg',
  },
  {
    name: 'All Guy',
    description:
      'Opposite of All Girl, this dance is solely composed of guys who are equally as passionate about dance as females. All Guy has continually proven to receive the most hype and support from the crowd because of their high energy and carefree style. The guys get up on stage to have fun with their peers, demonstrate the masculine side of dance, and get the audience to start dancing, as well.',
    imageSrc: '/assets/all-guy.jpg',
  },
  {
    name: 'Senior',
    description:
      'Being the last dance to perform, the Senior dance wraps up the show by bringing out the graduating class of South Asian Culture Show. This nostalgic dance often times brings the audience and performers to tears as the seniors unite and dance next to each other one last time. Aside from all the emotions, this dance also encompasses the happiness and energy that the seniors have invested in SACS for the past four years.',
    imageSrc: '/assets/seniors.jpg',
  },
]

export default function DancesPage() {
  return (
    <div className="bg-cream overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <Image src="/assets/fusion.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        <div className="relative container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">On Stage</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mt-4 leading-tight">
              Dances of SACS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Dances */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 space-y-24 sm:space-y-32">
          {dances.map((dance, index) => (
            <DanceCard key={dance.name} dance={dance} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}

interface Dance {
  name: string
  description: string
  imageSrc: string
}

function DanceCard({ dance, index }: { dance: Dance; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image */}
      <motion.div
        className={`relative group rounded-2xl overflow-hidden shadow-2xl ${!isEven ? 'lg:order-last' : ''}`}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="relative h-72 sm:h-[420px]">
          <Image
            src={dance.imageSrc}
            alt={dance.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-400" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gold text-gray-900 font-black text-sm rounded-full">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </motion.div>

      {/* Text */}
      <div className="space-y-5">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900">{dance.name}</h2>
        <div className="w-14 h-1 bg-gold rounded-full" />
        <p className="text-gray-600 text-lg leading-relaxed">{dance.description}</p>
      </div>
    </motion.div>
  )
}
