'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MapPin, Instagram, ArrowRight, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Diego, CA 92127',
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sacsexec@gmail.com',
    href: 'mailto:sacsexec@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@sacs.2k25',
    href: 'https://instagram.com/sacs.2k25',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function ContactPage() {
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const object: Record<string, string> = {}
    formData.forEach((value, key) => { object[key] = value.toString() })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(object),
      })
      const json = await response.json()
      setResult(response.ok ? json.message : json.message || 'Something went wrong.')
    } catch {
      setResult('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
      form.reset()
      setTimeout(() => setResult(null), 5000)
    }
  }

  return (
    <div className="bg-cream overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <Image src="/assets/bhangra.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        <div className="relative container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">Reach Out</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mt-4 leading-tight">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {/* Info */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeUp}>
                <span className="text-gold font-semibold tracking-widest uppercase text-sm">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-4">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Have a question about SACS, want to get involved, or just want to say hello? Reach out through any of the channels below.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gold/10 hover:border-gold/30 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-200">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-semibold text-gray-900 hover:text-gold transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-semibold text-gray-900">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <a
                  href="https://docs.google.com/forms/d/1I3EzWeegL1_fVhpqn8iYu2EJGUbi3tN7e02o8jWYSDg/viewform?edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-gray-900 font-bold rounded-full hover:bg-gold/90 transition-all duration-200 hover:scale-105 shadow-lg shadow-gold/20"
                >
                  Interest Form
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-7 sm:p-8">
                <h3 className="font-black text-gray-900 text-xl mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="apikey" value="2b9f6e80-b4d7-4fca-b3fe-34d92de44ef9" />
                  <input type="hidden" name="subject" value="New Submission from SACS Website" />
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="What's on your mind?"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-gray-900 font-bold rounded-xl hover:bg-gold/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {result && (
                    <p className="text-center text-sm text-gray-500 pt-1">{result}</p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
