import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gold/90 text-gray-800 py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} South Asian Cultural Show. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/privacy" className="text-gray-800 hover:text-cream transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-cream transition-colors duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
