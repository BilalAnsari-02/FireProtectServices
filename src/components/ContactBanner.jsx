export default function ContactBanner() {
  return (
    <section className="bg-linear-to-r from-red-500 to-orange-500 text-white py-10 text-center px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Need Fire Safety Services?
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Contact us today for fire extinguishers, refilling, and safety tools.
      </p>

      <a
        href="tel:9876543210"
        className="bg-white text-red-600 text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
      >
        📞 Call Now
      </a>
    </section>
  );
}
