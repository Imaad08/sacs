import Link from 'next/link';
import { Instagram, Mail, MapPin } from 'lucide-react';

const quickLinks = ['About', 'Leadership', 'Events', 'Dances', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-cream">
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-black text-gold mb-4">SACS</h3>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              South Asian Cultural Show — a student-run organization in Poway celebrating the rich diversity of South Asian culture through dance and performance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gold mb-5 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-cream/60 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gold mb-5 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/60 text-sm">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <span>San Diego, CA 92127</span>
              </li>
              <li>
                <a
                  href="mailto:sacsexec@gmail.com"
                  className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors duration-200 text-sm group"
                >
                  <Mail className="h-4 w-4 text-gold group-hover:scale-110 transition-transform duration-200" />
                  sacsexec@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sacs.2k25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors duration-200 text-sm group"
                >
                  <Instagram className="h-4 w-4 text-gold group-hover:scale-110 transition-transform duration-200" />
                  @sacs.2k25
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-sm">
            &copy; {new Date().getFullYear()} South Asian Cultural Show. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-cream/30 hover:text-gold transition-colors duration-200 text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
