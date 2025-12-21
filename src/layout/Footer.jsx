import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-gray-800 to-black text-gray-300 pt-16 pb-6 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Fire Protect Services
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your trusted partner for comprehensive fire safety solutions. Protecting lives and properties with excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://wa.me/8055841109" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="mailto:fireprotectservices3@gmail.com" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="tel:8055841109" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-red-500 to-orange-500 rounded"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="flex items-center gap-2 hover:text-red-500 hover:translate-x-1 transition-all group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="flex items-center gap-2 hover:text-red-500 hover:translate-x-1 transition-all group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="/products" className="flex items-center gap-2 hover:text-red-500 hover:translate-x-1 transition-all group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="flex items-center gap-2 hover:text-red-500 hover:translate-x-1 transition-all group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center gap-2 hover:text-red-500 hover:translate-x-1 transition-all group">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-red-500 to-orange-500 rounded"></div>
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Fire Extinguishers
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Refilling Services
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Safety Inspections
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Safety Equipment
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Emergency Training
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-red-500 to-orange-500 rounded"></div>
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:8055841109" className="flex items-start gap-3 hover:text-red-500 transition-colors group">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-semibold">8055841109</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fireprotectservices3@gmail.com" target="_blank" className="flex items-start gap-3 hover:text-red-500 transition-colors group">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-semibold text-sm break-all">fireprotectservices3@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-sm">Mithpada, Khoni Road, Near Aasra Hotel, Bhiwandi, Thane, Maharashtra</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

         {/* Emergency Contact Banner */}
      <div className="max-w-7xl mx-auto mt-8 mb-8 relative z-10">
        <div className="bg-linear-to-r from-red-600 to-orange-600 rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="text-white">
                <h4 className="font-bold text-lg">Emergency Support</h4>
                <p className="text-sm text-red-100">We're here when you need us most</p>
              </div>
            </div>
            <a href="tel:8055841109" className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              Call Now: 8055841109
            </a>
          </div>
        </div>
      </div>
         {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Fire Protect Services. All rights reserved. | Keeping You Safe, Always.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-500 hover:text-red-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  );
}