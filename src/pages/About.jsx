import { useState } from 'react';

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState(2024);

  const timeline = [
    { year: 2015, title: 'Fire India Services Founded', description: 'Founded by Shaikh Md. Asif in Mumbai, establishing a strong foundation in fire safety', icon: '🎯' },
    { year: 2017, title: 'Expanded Services', description: 'Grew our service offerings and client base across Maharashtra', icon: '📈' },
    { year: 2020, title: 'Bihar Branch Opens', description: 'Established our Patna branch to serve clients across Bihar', icon: '🏢' },
    { year: 2023, title: 'ISI Certification', description: 'Achieved ISI certification for all our products and services', icon: '✅' },
    { year: 2024, title: 'Fire Protect Services', description: 'Siddiqui Adnan joins as intermediary partner in Bhiwandi, expanding our reach', icon: '🤝' }
  ];

  const locations = [
    {
      name: 'Mumbai - Main Branch',
      address: 'Fire India Services',
      icon: '🏢',
      type: 'Headquarters'
    },
    {
      name: 'Bhiwandi Branch',
      address: 'Mithpada, Khoni Road, Near Aasra Hotel, Bhiwandi, Thane, Maharashtra',
      contact: 'Siddiqui Adnan',
      icon: '🏪',
      type: 'Partner Branch'
    },
    {
      name: 'Patna Branch',
      address: 'Metro Pillar No.165, Patna Gaya Road, Jakariyapur Bari Pahari, Near Bairiya Bus Stand, Patna - 800030, Bihar',
      icon: '🏬',
      type: 'Regional Branch'
    }
  ];

  const values = [
    { icon: '🛡️', title: 'Safety First', description: 'Your safety is our top priority in everything we do' },
    { icon: '💎', title: 'Quality', description: 'We never compromise on the quality of our products and services' },
    { icon: '🤝', title: 'Trust', description: 'Building lasting relationships through reliability and honesty' },
    { icon: '⚡', title: 'Quick Service', description: 'Fast response and efficient service delivery across all locations' },
    { icon: '🎯', title: 'Excellence', description: 'Striving for perfection in every project we undertake' },
    { icon: '💚', title: 'Partnership', description: 'Working together to serve communities across India' }
  ];

  const achievements = [
    { number: '9+', label: 'Years Experience', icon: '📅' },
    { number: '3', label: 'Locations', icon: '📍' },
    { number: '500+', label: 'Happy Clients', icon: '😊' },
    { number: '1000+', label: 'Projects Completed', icon: '✅' },
    { number: '24/7', label: 'Support Available', icon: '🕐' },
    { number: '100%', label: 'Quality Assured', icon: '⭐' }
  ];

  const certifications = [
    { name: 'ISI Certified', icon: '✅', color: 'green' },
    { name: 'ISO 9001:2015', icon: '🏅', color: 'blue' },
    { name: 'Fire Safety Council', icon: '🔥', color: 'red' },
    { name: 'PESO Approved', icon: '⚡', color: 'yellow' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-gray-900 via-red-900 to-orange-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-5xl">🔥</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Fire Protect Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              A proud partner of Fire India Services, serving Maharashtra and Bihar since 2015
            </p>
            <p className="text-lg text-red-200 max-w-2xl mx-auto">
              Give us the opportunity to serve you once - experience the difference in quality and service
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-red-500 to-orange-500 rounded-2xl p-8 text-white shadow-2xl">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-red-50 leading-relaxed">
              As an intermediary partner of Fire India Services, we are committed to delivering comprehensive fire safety solutions that protect lives and properties. We aim to make professional fire safety accessible and affordable for everyone across Maharashtra and Bihar.
            </p>
          </div>
          
          <div className="bg-linear-to-br from-orange-500 to-yellow-500 rounded-2xl p-8 text-white shadow-2xl">
            <div className="text-5xl mb-4">🌟</div>
            <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
            <p className="text-lg text-orange-50 leading-relaxed">
              Give us the opportunity to serve you once, and we'll prove why Fire India Services has been trusted for over 9 years. We believe in quality service, genuine products, and building relationships that last.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A legacy of excellence in fire safety across India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🏢 Fire India Services (Main Branch)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded in 2015 by <strong>Shaikh Md. Asif</strong> in Mumbai, Fire India Services has established itself as a trusted name in fire safety solutions. With a strong presence in Mumbai and Patna, we've been serving clients across India for over 9 years.
                </p>
              </div>

              <div className="bg-linear-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🤝 Fire Protect Services (Partner Branch)</h3>
                <p className="text-gray-700 leading-relaxed">
                  In 2024, <strong>Siddiqui Adnan</strong> joined as an intermediary partner, establishing Fire Protect Services in Bhiwandi. We act as a trusted connection between clients and Fire India Services' quality products and expertise.
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed italic">
                "We invite you to give us the opportunity to serve you once. Experience the quality, reliability, and dedication that has made Fire India Services successful for nearly a decade."
              </p>
            </div>

            <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                {[
                  { icon: '🏆', text: '9+ years of industry experience' },
                  { icon: '✅', text: 'ISI certified products & services' },
                  { icon: '🤝', text: 'Backed by Fire India Services' },
                  { icon: '📍', text: 'Serving Mumbai, Bhiwandi & Patna' },
                  { icon: '⚡', text: '24/7 emergency support' },
                  { icon: '💯', text: 'Genuine products, honest service' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-gray-600 text-lg">Milestones that shaped our growth</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-red-500 via-orange-500 to-yellow-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="text-2xl font-bold text-red-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden md:block relative z-10">
                  <div className="w-6 h-6 bg-linear-to-br from-red-500 to-orange-500 rounded-full ring-4 ring-white shadow-lg"></div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-gray-600 text-lg">Serving you across Maharashtra and Bihar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{location.icon}</div>
                <div className="inline-block px-3 py-1 bg-linear-to-r from-red-500 to-orange-500 text-white text-xs font-semibold rounded-full mb-3">
                  {location.type}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{location.address}</p>
                {location.contact && (
                  <p className="text-red-600 font-semibold text-sm">Contact: {location.contact}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-linear-to-br from-gray-900 via-red-900 to-orange-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-300 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600 text-lg">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-linear-to-br from-red-50 to-orange-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-linear-to-br from-gray-100 to-orange-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Accreditations</h2>
            <p className="text-gray-600 text-lg">Recognized and certified by leading authorities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-6xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-red-600 to-orange-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Give Us The Opportunity To Serve You Once</h2>
          <p className="text-xl mb-8 text-red-100">
            Experience the quality and reliability that has made Fire India Services a trusted name for 9+ years
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8055841109" className="bg-white text-red-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              📞 Call: 8055841109
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-red-600 transition-all">
              📧 Contact Us
            </a>
            <a href="https://wa.me/8055841109" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-4 px-10 rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-lg">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}