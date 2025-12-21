import { useState } from 'react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 1,
      category: 'extinguishers',
      icon: '🧯',
      title: 'Fire Extinguishers',
      description: 'Premium quality fire extinguishers for all types of fires - ABC, CO2, Foam, and Water based.',
      features: ['ABC Powder', 'CO2 Type', 'Foam Based', 'Water Type', 'Clean Agent'],
      price: 'Starting from ₹800',
      color: 'red'
    },
    {
      id: 2,
      category: 'refilling',
      icon: '🔄',
      title: 'Refilling Services',
      description: 'Professional refilling and maintenance services for all types of fire extinguishers.',
      features: ['Quick Service', 'Certified Refills', 'Pressure Testing', 'Quality Check', 'Free Pickup'],
      price: 'Starting from ₹200',
      color: 'orange'
    },
    {
      id: 3,
      category: 'inspection',
      icon: '✅',
      title: 'Safety Inspection',
      description: 'Comprehensive fire safety audits and inspections to ensure compliance and safety.',
      features: ['Fire Audit', 'NOC Assistance', 'Compliance Check', 'Safety Report', 'Recommendations'],
      price: 'Contact for Quote',
      color: 'yellow'
    },
    {
      id: 4,
      category: 'equipment',
      icon: '🛡️',
      title: 'Safety Equipment',
      description: 'Complete range of fire safety equipment including hose reels, sprinklers, and alarms.',
      features: ['Fire Hose Reels', 'Sprinkler Systems', 'Fire Alarms', 'Safety Signs', 'Emergency Lights'],
      price: 'Varies by Product',
      color: 'green'
    },
    {
      id: 5,
      category: 'training',
      icon: '👨‍🏫',
      title: 'Fire Safety Training',
      description: 'Professional training programs to educate your team on fire safety and emergency response.',
      features: ['Fire Drills', 'Extinguisher Training', 'Evacuation Plans', 'Safety Awareness', 'Certification'],
      price: 'Custom Packages',
      color: 'blue'
    },
    {
      id: 6,
      category: 'installation',
      icon: '⚙️',
      title: 'Installation & AMC',
      description: 'Expert installation and annual maintenance contracts for all fire safety systems.',
      features: ['Professional Setup', 'Annual Maintenance', 'Regular Inspections', 'Emergency Support', '24/7 Service'],
      price: 'Contact for Details',
      color: 'purple'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🔥' },
    { id: 'extinguishers', name: 'Extinguishers', icon: '🧯' },
    { id: 'refilling', name: 'Refilling', icon: '🔄' },
    { id: 'inspection', name: 'Inspection', icon: '✅' },
    { id: 'equipment', name: 'Equipment', icon: '🛡️' },
    { id: 'training', name: 'Training', icon: '👨‍🏫' },
    { id: 'installation', name: 'Installation', icon: '⚙️' }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const getColorClasses = (color) => {
    const colors = {
      red: 'from-red-500 to-orange-500',
      orange: 'from-orange-500 to-yellow-500',
      yellow: 'from-yellow-500 to-amber-500',
      green: 'from-green-500 to-emerald-500',
      blue: 'from-blue-500 to-cyan-500',
      purple: 'from-purple-500 to-pink-500'
    };
    return colors[color] || colors.red;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-gray-900 via-red-900 to-orange-900 text-white py-30 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Fire Safety Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive fire protection solutions tailored to keep your property and people safe
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8055841109" className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                Call: 8055841109
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 transition-all">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 ms-4 my-4 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  activeTab === category.id
                    ? 'bg-linear-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Card Header */}
              <div className={`bg-linear-to-br ${getColorClasses(service.color)} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Key Features
                </h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Pricing</p>
                    <p className="text-lg font-bold text-gray-900">{service.price}</p>
                  </div>
                  <a
                    href="/contact"
                    className="bg-linear-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Fire Protect Services?</h2>
            <p className="text-gray-600 text-lg">Your safety is our top priority</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Certified Experts', description: 'Licensed professionals with years of experience' },
              { icon: '⏰', title: '24/7 Support', description: 'Round-the-clock emergency assistance' },
              { icon: '💰', title: 'Best Prices', description: 'Competitive rates without compromising quality' },
              { icon: '⚡', title: 'Quick Response', description: 'Fast service delivery and installation' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-linear-to-br hover:from-red-50 hover:to-orange-50 transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-gray-900 via-red-900 to-orange-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Ensure Your Safety?</h2>
          <p className="text-xl mb-8 text-red-100">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8055841109" className="bg-white text-red-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              📞 Call: 8055841109
            </a>
            <a href="https://wa.me/8055841109" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-4 px-10 rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-lg">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}