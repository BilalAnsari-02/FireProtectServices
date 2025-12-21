export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Information We Collect',
      icon: '📝',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you contact us or request our services, we may collect personal information including your name, email address, phone number, physical address, and company details.'
        },
        {
          subtitle: 'Service Information',
          text: 'Information about the fire safety products or services you inquire about, purchase history, and service requirements.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We may collect information about your device, browser type, IP address, and how you interact with our website for improving user experience.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: '🎯',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'To provide fire safety products, installation services, maintenance, and support as requested by you.'
        },
        {
          subtitle: 'Communication',
          text: 'To respond to your inquiries, send service updates, appointment reminders, and important safety notifications.'
        },
        {
          subtitle: 'Improvement',
          text: 'To improve our services, website functionality, and customer experience based on feedback and usage patterns.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'To comply with legal obligations, safety regulations, and maintain records as required by fire safety laws.'
        }
      ]
    },
    {
      title: 'Information Sharing',
      icon: '🔒',
      content: [
        {
          subtitle: 'Fire India Services',
          text: 'As a partner of Fire India Services, we may share your information with our parent company for service fulfillment and quality assurance.'
        },
        {
          subtitle: 'Service Providers',
          text: 'We may share information with trusted third-party service providers who assist in product delivery, installation, or maintenance services.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information when required by law, court order, or to protect the rights, property, or safety of our company and clients.'
        },
        {
          subtitle: 'No Sale of Data',
          text: 'We do not sell, rent, or trade your personal information to third parties for marketing purposes.'
        }
      ]
    },
    {
      title: 'Data Security',
      icon: '🛡️',
      content: [
        {
          subtitle: 'Protection Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, or destruction.'
        },
        {
          subtitle: 'Secure Communication',
          text: 'All sensitive information transmitted through our website or communications is encrypted and securely stored.'
        },
        {
          subtitle: 'Access Control',
          text: 'Access to personal information is restricted to authorized personnel who need it to perform their job functions.'
        }
      ]
    },
    {
      title: 'Your Rights',
      icon: '✅',
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, update, or correct your personal information at any time by contacting us.'
        },
        {
          subtitle: 'Data Deletion',
          text: 'You can request deletion of your personal information, subject to our legal obligations to retain certain records.'
        },
        {
          subtitle: 'Opt-Out',
          text: 'You can opt-out of promotional communications at any time while still receiving essential service-related messages.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You can request a copy of your personal information in a commonly used electronic format.'
        }
      ]
    },
    
    {
      title: 'Data Retention',
      icon: '📅',
      content: [
        {
          subtitle: 'Retention Period',
          text: 'We retain your personal information for as long as necessary to provide services and comply with legal obligations.'
        },
        {
          subtitle: 'Service Records',
          text: 'Fire safety service records may be retained for extended periods as required by safety regulations and compliance laws.'
        },
        {
          subtitle: 'Deletion Policy',
          text: 'Information is securely deleted or anonymized when no longer needed for business or legal purposes.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-linear-to-br  from-gray-900 via-red-900 to-orange-900 py-30 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-orange-400 to-red-500 rounded-full mb-6 backdrop-blur-sm">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300 mb-2">Fire Protect Services</p>
          <p className="text-gray-400">Last Updated: December 21, 2024</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Fire Protect Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect information when you use our fire safety services, visit our website, or interact with us.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            By using our services or providing us with your information, you consent to the practices described in this policy. We encourage you to read this policy carefully and contact us if you have any questions.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Section Header */}
              <div className="bg-linear-to-r from-red-500 to-orange-500 p-6 text-white">
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
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
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
        <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-8 mt-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact Us About Privacy
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:8055841109" className="text-red-600 hover:text-red-700">8055841109</a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fireprotectservices3@gmail.com" target="_blank" className="text-red-600 hover:text-red-700">fireprotectservices3@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3 text-gray-700">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm">Mithpada, Khoni Road, Near Aasra Hotel, Bhiwandi, Thane, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Updates */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
        </div>

        {/* Acknowledgment */}
        <div className="bg-linear-to-r from-red-600 to-orange-600 rounded-2xl p-8 mt-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You for Trusting Us</h2>
          <p className="text-lg text-red-100 mb-6">
            Your privacy and security are important to us. We are committed to protecting your personal information and using it responsibly to provide you with the best fire safety services.
          </p>
          <a href="/" className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}