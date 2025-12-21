import { useState } from 'react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      category: 'abc',
      name: 'ABC Powder Fire Extinguisher',
      sizes: ['1kg', '2kg', '4kg', '6kg', '9kg'],
      image: '🧯',
      price: '₹800 - ₹3,500',
      description: 'Multi-purpose extinguisher effective on Class A, B, and C fires. Ideal for offices, homes, and industrial use.',
      features: ['All-purpose protection', 'ISI certified', 'Easy to use', 'Long shelf life', '5-year warranty'],
      bestFor: ['Offices', 'Homes', 'Warehouses', 'Shops'],
      color: 'red'
    },
    {
      id: 2,
      category: 'co2',
      name: 'CO2 Fire Extinguisher',
      sizes: ['2kg', '4.5kg', '6.5kg', '9kg'],
      image: '❄️',
      price: '₹1,200 - ₹4,800',
      description: 'Carbon dioxide extinguisher perfect for electrical fires and sensitive equipment. Leaves no residue.',
      features: ['Electrical fire safe', 'No residue', 'Clean discharge', 'Eco-friendly', 'Premium quality'],
      bestFor: ['Server rooms', 'Electrical panels', 'Labs', 'Computer centers'],
      color: 'blue'
    },
    {
      id: 3,
      category: 'foam',
      name: 'Foam Type Fire Extinguisher',
      sizes: ['6 Ltr', '9 Ltr', '50 Ltr', '75 Ltr'],
      image: '💧',
      price: '₹2,500 - ₹15,000',
      description: 'Highly effective foam-based extinguisher for Class A and B fires. Creates a cooling blanket effect.',
      features: ['Dual-purpose', 'Cooling effect', 'Surface sealing', 'High capacity', 'Industrial grade'],
      bestFor: ['Petrol pumps', 'Oil storage', 'Garages', 'Chemical plants'],
      color: 'cyan'
    },
    {
      id: 4,
      category: 'water',
      name: 'Water Type Fire Extinguisher',
      sizes: ['9 Ltr', '50 Ltr'],
      image: '💦',
      price: '₹1,800 - ₹8,000',
      description: 'Water-based extinguisher ideal for Class A fires involving wood, paper, and textiles.',
      features: ['Economical', 'Large capacity', 'Effective cooling', 'Easy refill', 'Eco-friendly'],
      bestFor: ['Textile mills', 'Paper industry', 'Wood storage', 'Construction sites'],
      color: 'teal'
    },
    {
      id: 5,
      category: 'accessories',
      name: 'Fire Extinguisher Stand',
      sizes: ['Single', 'Double', 'Trolley mounted'],
      image: '🔧',
      price: '₹400 - ₹2,500',
      description: 'Durable metal stands for proper storage and display of fire extinguishers.',
      features: ['Heavy duty', 'Weather resistant', 'Easy installation', 'Multiple sizes', 'Red powder coated'],
      bestFor: ['All locations', 'Indoor/Outdoor', 'Wall mounting', 'Floor standing'],
      color: 'gray'
    },
    {
      id: 6,
      category: 'accessories',
      name: 'Fire Hose Reel',
      sizes: ['15m', '25m', '30m'],
      image: '🔥',
      price: '₹8,000 - ₹25,000',
      description: 'Professional grade fire hose reel system with durable rubber hose and brass nozzle.',
      features: ['High pressure', 'Auto-rewind', 'Brass fittings', 'Swivel mount', 'Weather proof'],
      bestFor: ['Factories', 'Malls', 'Hotels', 'Apartments'],
      color: 'orange'
    },
    {
      id: 7,
      category: 'safety',
      name: 'Fire Safety Signages',
      sizes: ['6x9 inch', '9x12 inch', '12x18 inch'],
      image: '🚨',
      price: '₹150 - ₹800',
      description: 'Glow-in-dark and reflective safety signs for fire exits, equipment locations, and evacuation routes.',
      features: ['Glow-in-dark', 'ISI marked', 'Weather resistant', 'Self-adhesive', 'Multiple designs'],
      bestFor: ['All buildings', 'Emergency exits', 'Equipment marking', 'Compliance'],
      color: 'yellow'
    },
    {
      id: 8,
      category: 'safety',
      name: 'Fire Blanket',
      sizes: ['1m x 1m', '1.2m x 1.2m', '1.8m x 1.8m'],
      image: '🛡️',
      price: '₹800 - ₹2,500',
      description: 'Flame-retardant blanket for smothering small fires and protecting individuals.',
      features: ['Fiberglass material', 'Heat resistant', 'Reusable', 'Compact storage', 'Quick deployment'],
      bestFor: ['Kitchens', 'Labs', 'Workshops', 'Homes'],
      color: 'green'
    },
    {
      id: 9,
      category: 'safety',
      name: 'Emergency Exit Light',
      sizes: ['LED 3W', 'LED 5W', 'LED 10W'],
      image: '💡',
      price: '₹600 - ₹3,000',
      description: 'Battery backup emergency lights for exit signage and evacuation guidance.',
      features: ['LED technology', '3-hour backup', 'Auto-sensing', 'Energy efficient', 'Long lasting'],
      bestFor: ['Buildings', 'Corridors', 'Stairways', 'Emergency exits'],
      color: 'green'
    },
    {
      id: 10,
      category: 'accessories',
      name: 'Fire Alarm System',
      sizes: ['Basic', 'Advanced', 'Addressable'],
      image: '🔔',
      price: '₹5,000 - ₹50,000',
      description: 'Complete fire alarm and detection system with smoke detectors and manual call points.',
      features: ['Smoke detection', 'Heat sensors', 'Manual triggers', 'Loud alarm', 'Expandable'],
      bestFor: ['Commercial', 'Industrial', 'Residential', 'Institutions'],
      color: 'red'
    },
    {
      id: 11,
      category: 'abc',
      name: 'Modular Fire Extinguisher',
      sizes: ['25kg', '50kg', '75kg'],
      image: '🏭',
      price: '₹8,000 - ₹20,000',
      description: 'Heavy-duty modular fire extinguisher with wheeled trolley for large-scale fire protection.',
      features: ['Trolley mounted', 'High capacity', 'Industrial grade', 'Easy mobility', 'Long discharge time'],
      bestFor: ['Factories', 'Large warehouses', 'Oil refineries', 'Power plants'],
      color: 'red'
    },
    {
      id: 12,
      category: 'safety',
      name: 'Fire Sprinkler System',
      sizes: ['Wet system', 'Dry system', 'Pre-action'],
      image: '🚿',
      price: '₹30,000 - ₹2,00,000',
      description: 'Automatic fire sprinkler system for comprehensive building protection.',
      features: ['Auto activation', 'Full coverage', 'Low maintenance', 'Code compliant', 'Professional installation'],
      bestFor: ['Buildings', 'Malls', 'Hotels', 'Hospitals'],
      color: 'blue'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🔥', count: products.length },
    { id: 'abc', name: 'ABC Extinguishers', icon: '🧯', count: products.filter(p => p.category === 'abc').length },
    { id: 'co2', name: 'CO2 Extinguishers', icon: '❄️', count: products.filter(p => p.category === 'co2').length },
    { id: 'foam', name: 'Foam Type', icon: '💧', count: products.filter(p => p.category === 'foam').length },
    { id: 'water', name: 'Water Type', icon: '💦', count: products.filter(p => p.category === 'water').length },
    { id: 'safety', name: 'Safety Equipment', icon: '🛡️', count: products.filter(p => p.category === 'safety').length },
    { id: 'accessories', name: 'Accessories', icon: '⚙️', count: products.filter(p => p.category === 'accessories').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getColorClasses = (color) => {
    const colors = {
      red: { bg: 'from-red-500 to-orange-600', badge: 'bg-red-100 text-red-700' },
      blue: { bg: 'from-blue-500 to-cyan-600', badge: 'bg-blue-100 text-blue-700' },
      cyan: { bg: 'from-cyan-500 to-blue-600', badge: 'bg-cyan-100 text-cyan-700' },
      teal: { bg: 'from-teal-500 to-emerald-600', badge: 'bg-teal-100 text-teal-700' },
      gray: { bg: 'from-gray-500 to-gray-700', badge: 'bg-gray-100 text-gray-700' },
      orange: { bg: 'from-orange-500 to-red-600', badge: 'bg-orange-100 text-orange-700' },
      yellow: { bg: 'from-yellow-500 to-orange-500', badge: 'bg-yellow-100 text-yellow-700' },
      green: { bg: 'from-green-500 to-emerald-600', badge: 'bg-green-100 text-green-700' }
    };
    return colors[color] || colors.red;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-gray-900 via-red-900 to-orange-900 text-white py-30 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fire Safety Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Premium quality fire extinguishers and safety equipment at competitive prices
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8055841109" className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                📞 Order Now: 8055841109
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 transition-all">
                Get Bulk Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🧯', label: 'Products', value: '100+' },
            { icon: '✅', label: 'ISI Certified', value: '100%' },
            { icon: '⭐', label: 'Rating', value: '4.8/5' },
            { icon: '🚚', label: 'Free Delivery', value: 'Pan India' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-white shadow-md mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center ms-4 my-4 gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-linear-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  selectedCategory === category.id ? 'bg-white bg-opacity-20' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <p className="text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image/Icon */}
              <div className={`bg-linear-to-br ${getColorClasses(product.color).bg} p-8 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                </div>
                <div className="text-8xl mb-4 relative z-10">{product.image}</div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getColorClasses(product.color).badge}`}>
                  {product.category.toUpperCase()}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Sizes */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Available Sizes:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Features:
                  </p>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Price Range</p>
                    <p className="text-lg font-bold text-gray-900">{product.price}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-linear-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className={`bg-linear-to-br ${getColorClasses(selectedProduct.color).bg} p-8 text-white`}>
              <div className="flex justify-between items-start mb-4">
                <div className="text-7xl">{selectedProduct.image}</div>
                <button onClick={() => setSelectedProduct(null)} className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="text-lg opacity-90">{selectedProduct.description}</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Available Sizes */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    📏 Available Sizes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size, index) => (
                      <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    🎯 Best For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.bestFor.map((use, index) => (
                      <span key={index} className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium text-sm">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* All Features */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  ✨ Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and Actions */}
              <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-xl p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Price Range</p>
                    <p className="text-3xl font-bold text-gray-900">{selectedProduct.price}</p>
                    <p className="text-sm text-gray-500 mt-1">*Prices vary by size and quantity</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:8055841109" className="bg-linear-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all hover:scale-105">
                      📞 Call to Order
                    </a>
                    <a href="https://wa.me/8055841109" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all hover:scale-105">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Buy From Us */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Buy From Us?</h2>
            <p className="text-gray-600 text-lg">Quality products with unmatched service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: '✅', title: 'ISI Certified', desc: '100% genuine products' },
              { icon: '🚚', title: 'Free Delivery', desc: 'Pan India shipping' },
              { icon: '💰', title: 'Best Prices', desc: 'Wholesale rates' },
              { icon: '🔄', title: 'Easy Returns', desc: '7-day return policy' },
              { icon: '🛠️', title: 'Installation', desc: 'Expert installation' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-linear-to-br hover:from-red-50 hover:to-orange-50 transition-all">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-red-600 to-orange-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Need Bulk Orders?</h2>
          <p className="text-xl mb-8 text-red-100">
            Get special discounts on bulk purchases. Contact us for custom quotes!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8055841109" className="bg-white text-red-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              📞 Call: 8055841109
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-red-600 transition-all">
              📧 Request Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}