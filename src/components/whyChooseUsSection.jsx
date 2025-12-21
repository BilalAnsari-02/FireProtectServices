export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Certified Refilling",
      description: "We follow proper pressure testing and safety standards.",
      icon: "✔️",
    },
    {
      title: "High-Quality Products",
      description: "We offer reliable & branded fire extinguishers and tools.",
      icon: "🔥",
    },
    {
      title: "Fast & Reliable Service",
      description: "Quick response and timely service for all customers.",
      icon: "⚡",
    },
    {
      title: "Affordable Pricing",
      description: "Genuine rates for extinguishers, refilling & installation.",
      icon: "💰",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Why Choose Us?
        </h2>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
