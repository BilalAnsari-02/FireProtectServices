export default function ServicesHomeSection() {
  const services = [
    {
      title: "New Fire Extinguishers",
      description:
        "We provide all types of high-quality fire extinguishers for homes, offices, and industries.",
      icon: "🚒",
    },
    {
      title: "Extinguisher Refilling",
      description:
        "Certified refilling for ABC, CO₂, Foam, Water, and all types of fire extinguishers.",
      icon: "🧯",
    },
    {
      title: "Fire Safety Tools",
      description:
        "We supply fire buckets, hoses, alarms, signage, and all essential fire safety equipment.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Our Fire Safety Services
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
