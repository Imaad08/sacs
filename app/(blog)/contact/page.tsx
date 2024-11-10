"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { FormEvent } from 'react';

export default function Contact() {
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const object: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      object[key] = value.toString();
    });

    const json = JSON.stringify(object);

    setResultMessage("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const jsonResponse = await response.json();

      if (response.status === 200) {
        setResultMessage(jsonResponse.message);
      } else {
        console.log(response);
        setResultMessage(jsonResponse.message);
      }
    } catch (error) {
      console.log(error);
      setResultMessage("Something went wrong!");
    } finally {
      form.reset();
      setTimeout(() => {
        setResultMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-cream text-gray-800">
      <main className="space-y-20">
        <section className="hero bg-cream py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
          </div>
        </section>

        <section id="information" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Information</h2>
          <ul className="text-2xl italic text-center">
            <li className="py-6">Location: San Diego, CA 92127</li>
            <li className="py-6">Email: sacsexec@gmail.com</li>
            <li className="py-6">Instagram: @sacs.2k25</li>
          </ul>
          <div className="flex justify-center mt-6">
          <Button asChild size="lg" className="bg-gold hover:bg-gold/80 text-gray-800 mb-10 rounded-full">
            <Link href="https://docs.google.com/forms/d/1I3EzWeegL1_fVhpqn8iYu2EJGUbi3tN7e02o8jWYSDg/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">Interest Form</Link>
          </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Send Us a Message</h2>
          <div className="max-w-lg mx-auto bg-cream p-5 rounded-md shadow-lg">
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="apikey"
                value="2b9f6e80-b4d7-4fca-b3fe-34d92de44ef9"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                id="botcheck"
                style={{ display: "none" }}
              />

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none bg-cream focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                  Your Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md bg-cream focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="text-sm text-gray-600">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+1 (555) 1234-567"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md bg-cream focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-600">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md bg-cream focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <Button asChild className="w-full px-3 py-4 text-white bg-gold rounded-md focus:outline-none hover:bg-gold/80">
                  <button type="submit">Send Message</button>
                </Button>
              </div>

              <p className="text-base text-center text-gray-400" id="result">
                {resultMessage}
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
