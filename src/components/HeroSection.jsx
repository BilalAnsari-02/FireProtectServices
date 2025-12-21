
export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white">
      {/* Background with overlay */}
      <div className="relative">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.ViXDaTnnpwljp-qH65sm9wHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Fire Safety"
          className="w-full h-[75vh] object-cover opacity-40"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Complete Fire Safety Solutions
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            We provide new fire extinguishers, refilling services, and high-quality
            fire protection tools for homes, offices, and industries.
          </p>

          <div className="flex space-x-4">
            <a
              href="tel:9876543210"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/9876543210"
              className="bg-white hover:bg-gray-200 text-red-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
