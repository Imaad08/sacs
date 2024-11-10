'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center justify-between bg-gold transition-shadow duration-300 ${
        hasShadow ? 'shadow-md' : ''
      }`}
    >
      <Link href="/" className="text-2xl font-bold text-gray-800">
        SACS
      </Link>

      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
        </button>
      </div>

      <nav className="hidden lg:flex lg:gap-6">
        {['About', 'Leadership', 'Events', 'Dances', 'Tickets', 'Contact'].map((item) => (
          <Link
            key={item}
            href={item === 'About' ? '#about' : `/${item.toLowerCase().replace(' ', '-')}`}
            className="text-gray-800 hover:text-cream transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </nav>

      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-14 left-0 w-full bg-gold flex flex-col items-center space-y-4 py-4 transition-all duration-300 ease-in-out ${
          isMenuOpen && hasShadow ? 'shadow-md' : ''
        }`}
      >
        {['About', 'Leadership', 'Events', 'Dances', 'Tickets', 'Contact'].map((item) => (
          <Link
            key={item}
            href={item === 'About' ? '#about' : `/${item.toLowerCase().replace(' ', '-')}`}
            className="text-gray-800 hover:text-cream transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)} 
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}
