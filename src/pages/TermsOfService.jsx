export default function TermsOfService() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: '📜',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing or using Fire Protect Services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.'
        },
        {
          subtitle: 'Eligibility',
          text: 'You must be at least 18 years old and have the legal authority to enter into contracts to use our services. By using our services, you represent that you meet these requirements.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.'
        }
      ]
    },
    {
      title: 'Services Provided',
      icon: '🔥',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      content: [
        {
          subtitle: 'Fire Safety Products',
          text: 'We provide fire extinguishers, fire safety equipment, and related products. All products are subject to availability and may be discontinued without notice.'
        },
        {
          subtitle: 'Installation & Maintenance',
          text: 'We offer professional installation, refilling, inspection, and annual maintenance contract (AMC) services for fire safety equipment.'
        },
        {
          subtitle: 'Partnership Services',
          text: 'As an intermediary partner of Fire India Services, we facilitate access to their products and expertise while maintaining our own service standards.'
        },
        {
          subtitle: 'Service Limitations',
          text: 'Services are subject to geographic availability, technician schedules, and compliance with local fire safety regulations.'
        }
      ]
    },
    {
      title: 'Orders and Payments',
      icon: '💳',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      content: [
        {
          subtitle: 'Order Acceptance',
          text: 'All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including product availability or pricing errors.'
        },
        {
          subtitle: 'Pricing',
          text: 'Prices are subject to change without notice. The price applicable to your order will be the price at the time of order confirmation.'
        },
        {
          subtitle: 'Payment Terms',
          text: 'Payment is required as per agreed terms. We accept various payment methods including cash, bank transfer, and digital payments.'
        },
        {
          subtitle: 'Invoicing',
          text: 'Proper invoices will be provided for all purchases in compliance with applicable tax laws and regulations.'
        }
      ]
    },
    {
      title: 'Product Warranties',
      icon: '✅',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      content: [
        {
          subtitle: 'Manufacturer Warranties',
          text: 'All products come with manufacturer warranties as specified. Warranty terms vary by product and manufacturer.'
        },
        {
          subtitle: 'ISI Certification',
          text: 'Our products are ISI certified and meet Indian safety standards. Certification details are available upon request.'
        },
        {
          subtitle: 'Service Warranty',
          text: 'Installation and refilling services come with workmanship guarantees. Specific warranty periods depend on the service type.'
        },
        {
          subtitle: 'Warranty Claims',
          text: 'To claim warranty service, customers must provide proof of purchase and the product must be used according to manufacturer guidelines.'
        }
      ]
    },
    {
      title: 'Returns and Refunds',
      icon: '🔄',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      content: [
        {
          subtitle: 'Return Policy',
          text: 'Products may be returned within 7 days of delivery if unused and in original packaging. Custom or installed products are not eligible for return.'
        },
        {
          subtitle: 'Defective Products',
          text: 'Defective products can be replaced or repaired as per manufacturer warranty terms. Contact us immediately upon discovering any defects.'
        },
        {
          subtitle: 'Refund Process',
          text: 'Approved refunds will be processed within 7-14 business days to the original payment method after we receive the returned product.'
        },
        {
          subtitle: 'Service Cancellations',
          text: 'Service appointments can be cancelled up to 24 hours before scheduled time. Cancellation fees may apply for late cancellations.'
        }
      ]
    },
    {
      title: 'Safety and Compliance',
      icon: '🛡️',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      content: [
        {
          subtitle: 'Regulatory Compliance',
          text: 'All our products and services comply with Indian fire safety regulations, ISI standards, and PESO requirements.'
        },
        {
          subtitle: 'User Responsibilities',
          text: 'Customers are responsible for proper use, maintenance, and regular inspection of fire safety equipment as per manufacturer guidelines.'
        },
        {
          subtitle: 'Safety Training',
          text: 'We recommend proper training for all users of fire safety equipment. Training services are available upon request.'
        },
        {
          subtitle: 'Emergency Use',
          text: 'Fire safety equipment should only be used in genuine emergencies. Misuse or negligence may void warranties and create liability.'
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: '⚠️',
      gradient: 'from-red-500 via-rose-500 to-pink-500',
      content: [
        {
          subtitle: 'Service Limitations',
          text: 'We provide fire safety products and services but cannot guarantee complete protection against all fire incidents.'
        },
        {
          subtitle: 'Liability Cap',
          text: 'Our liability is limited to the purchase price of products or services. We are not liable for indirect, incidental, or consequential damages.'
        },
        {
          subtitle: 'Third-Party Services',
          text: 'We are not responsible for issues arising from products or services provided by Fire India Services or other third parties.'
        },
        {
          subtitle: 'User Responsibility',
          text: 'Users must follow all safety guidelines, maintain equipment properly, and ensure compliance with local fire safety regulations.'
        }
      ]
    },
    {
      title: 'Intellectual Property',
      icon: '©️',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      content: [
        {
          subtitle: 'Trademarks',
          text: 'Fire Protect Services and Fire India Services logos, names, and branding are protected trademarks. Unauthorized use is prohibited.'
        },
        {
          subtitle: 'Website Content',
          text: 'All content on our website, including text, images, graphics, and designs, is our property or licensed to us.'
        },
        {
          subtitle: 'Restricted Use',
          text: 'You may not copy, reproduce, distribute, or create derivative works from our content without written permission.'
        }
      ]
    },
    {
      title: 'Termination',
      icon: '🚫',
      gradient: 'from-gray-600 via-gray-700 to-gray-800',
      content: [
        {
          subtitle: 'Service Termination',
          text: 'We reserve the right to refuse service or terminate agreements with customers who violate these terms or engage in fraudulent activity.'
        },
        {
          subtitle: 'AMC Termination',
          text: 'Annual Maintenance Contracts can be terminated by either party with 30 days written notice. Refunds are prorated based on unused service period.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, all outstanding payments become immediately due. Certain provisions of these terms survive termination.'
        }
      ]
    },
    {
      title: 'Dispute Resolution',
      icon: '⚖️',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      content: [
        {
          subtitle: 'Governing Law',
          text: 'These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.'
        },
        {
          subtitle: 'Informal Resolution',
          text: 'We encourage customers to contact us first to resolve any disputes informally before pursuing legal action.'
        },
        {
          subtitle: 'Arbitration',
          text: 'Disputes may be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.'
        },
        {
          subtitle: 'Class Action Waiver',
          text: 'All disputes must be brought individually and not as part of a class action or collective proceeding.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-gray-900 via-red-900 to-orange-900 text-white py-30 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-orange-400 to-red-500 rounded-full mb-6 backdrop-blur-sm">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-300 mb-2">Fire Protect Services</p>
          <p className="text-gray-400">Last Updated: December 21, 2024</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to Fire Protect Services. These Terms of Service ("Terms") govern your use of our fire safety products and services. Please read these terms carefully before using our services or making any purchases.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            By engaging with our services, purchasing products, or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
              {/* Section Header */}
              <div className={`bg-linear-to-br ${section.gradient} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{section.icon}</div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-8">
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-linear-to-br from-red-500 to-orange-500 rounded-full"></span>
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-700 leading-relaxed ml-4">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-linear-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-8 mt-8 border-2 border-orange-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Questions About These Terms?
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about these Terms of Service, please don't hesitate to contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-gray-700 bg-white rounded-xl p-4">
              <div className="w-10 h-10 bg-linear-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:8055841109" className="text-red-600 hover:text-red-700">8055841109</a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700 bg-white rounded-xl p-4">
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fireprotectservices3@gmail.com" target="_blank" className="text-red-600 hover:text-red-700 text-sm">fireprotectservices3@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Agreement Acknowledgment */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Acknowledgment and Acceptance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By using Fire Protect Services, purchasing our products, or engaging our services, you acknowledge that:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>You have read and understood these Terms of Service in full</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>You agree to be legally bound by these terms and conditions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>You have the legal capacity and authority to enter into this agreement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>You understand your rights and responsibilities as outlined herein</span>
            </li>
          </ul>
        </div>

        {/* Final CTA */}
        <div className="bg-linear-to-br from-red-600 via-orange-600 to-yellow-600 rounded-2xl p-8 mt-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-red-100 mb-6">
            Now that you understand our terms, we're ready to serve your fire safety needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105">
              Return to Home
            </a>
            <a href="/contact" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}