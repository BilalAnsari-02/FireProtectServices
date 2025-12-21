import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-linear-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Fire Protect Services</h1>
              <p className="text-xs text-gray-500">Partner of Fire India Services</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">
              Home
            </a>
            <a href="/services" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">
              Services
            </a>
            <a href="/products" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">
              Products
            </a>
            <a href="/about" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">
              Contact
            </a>
          </div>

          {/* Call Now Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:8055841109" 
              className="bg-linear-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call: 8055841109
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">
                Home
              </a>
              <a href="/services" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">
                Services
              </a>
              <a href="/products" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">
                Products
              </a>
              <a href="/about" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">
                About
              </a>
              <a href="/contact" className="text-gray-700 hover:text-red-600 font-semibold transition-colors py-2">
                Contact
              </a>
              <a 
                href="tel:8055841109" 
                className="bg-linear-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-full text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call: 8055841109
              </a>
            </div>
          </div>
        )}
      </div>


     
    </nav>
  );
}