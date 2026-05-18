'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const leaders = [
  {
    id: 1,
    name: 'Sania Singh',
    role: 'President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    bio: 'Sania bio',
    category: 'president' as const,
  },
  {
    id: 2,
    name: 'Kavin Ramesh',
    role: 'President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    bio: 'Kavin bio',
    category: 'president' as const,
  },
  {
    id: 3,
    name: 'Olivia Haffie',
    role: 'President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    bio: 'Olivia bio',
    category: 'president' as const,
  },
  {
    id: 4,
    name: 'Tarun Tata',
    role: 'Vice President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    bio: 'Tarun bio',
    category: 'vp' as const,
  },
  {
    id: 5,
    name: 'Nitin Ramesh',
    role: 'Vice President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    bio: 'Nitin bio',
    category: 'vp' as const,
  },
  {
    id: 6,
    name: 'Tanvi Movva',
    role: 'Vice President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    bio: 'Tanvi bio',
    category: 'vp' as const,
  },
]

type Leader = typeof leaders[0]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function LeadershipPage() {
  const [selected, setSelected] = useState<Leader | null>(null)

  const presidents = leaders.filter((l) => l.category === 'president')
  const vps = leaders.filter((l) => l.category === 'vp')

  return (
    <div className="bg-cream overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <Image src="/assets/classical-dance.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        <div className="relative container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">The Team</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mt-4 leading-tight">
              Leadership
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="py-24 sm:py-32 container mx-auto px-4 sm:px-6 space-y-24">
        {/* Presidents */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Executive Board</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Presidents</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {presidents.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} onClick={() => setSelected(leader)} />
            ))}
          </motion.div>
        </div>

        {/* Vice Presidents */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Executive Board</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Vice Presidents</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {vps.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} onClick={() => setSelected(leader)} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              <div className="relative h-52 sm:h-60">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors duration-200"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-5 left-5">
                  <span className="px-2.5 py-0.5 bg-gold text-gray-900 font-bold text-xs rounded-full mb-2 inline-block">
                    {selected.role}
                  </span>
                  <h3 className="text-white font-black text-xl">{selected.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{selected.bio}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LeaderCard({ leader, onClick }: { leader: Leader; onClick: () => void }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gold/10 hover:border-gold/30"
    >
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-5 py-2.5 bg-gold text-gray-900 font-bold rounded-full text-sm shadow-lg">
            View Bio
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="text-xs font-bold text-gold uppercase tracking-widest mb-1">{leader.role}</div>
        <h3 className="font-black text-gray-900 text-lg">{leader.name}</h3>
      </div>
    </motion.div>
  )
}
