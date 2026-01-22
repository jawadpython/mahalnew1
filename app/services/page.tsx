'use client';

import Image from 'next/image';
import {
  FiPrinter,
  FiLayers,
  FiBox,
  FiScissors,
  FiCpu,
  FiAward,
  FiCheckCircle,
} from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  {
    id: 'digital',
    icon: FiPrinter,
    title: 'Digital Printing',
    description:
      'High-quality digital printing services for all your marketing and promotional materials. We use the latest printing technology to deliver crisp, vibrant, and professional results.',
    features: [
      'Business cards and stationery',
      'Flyers and brochures',
      'Posters and banners',
      'Catalogues and magazines',
      'Photo printing',
      'Variable data printing',
    ],
    image: '/images/portfolio/portfolio-08.png',
  },
  {
    id: 'large-format',
    icon: FiLayers,
    title: 'Large Format Printing',
    description:
      'Make a big impression with our large format printing services. Perfect for trade shows, exhibitions, retail displays, and outdoor advertising.',
    features: [
      'Banners and flags',
      'Vehicle wraps',
      'Wall murals',
      'Trade show displays',
      'Window graphics',
      'Floor graphics',
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
  },
  {
    id: 'signage',
    icon: FiBox,
    title: 'Signage & Light Boxes',
    description:
      'Custom signage solutions that make your brand stand out. From illuminated light boxes to elegant signage, we create eye-catching displays.',
    features: [
      'Illuminated light boxes',
      'LED signage',
      'Channel letters',
      'Storefront signs',
      'Directional signage',
      'Custom fabricated signs',
    ],
    image: '/images/portfolio/portfolio-03.png',
  },
  {
    id: 'laser',
    icon: FiScissors,
    title: 'Laser Cutting',
    description:
      'Precision laser cutting services for a wide range of materials. Ideal for intricate designs, custom shapes, and detailed fabrication work.',
    features: [
      'Acrylic cutting',
      'Wood cutting',
      'Fabric cutting',
      'Metal cutting',
      'Paper and card cutting',
      'Custom shapes and designs',
    ],
    image: '/images/portfolio/portfolio-06.png',
  },
  {
    id: 'cnc',
    icon: FiCpu,
    title: 'CNC Cutting',
    description:
      'Advanced CNC cutting technology for precise fabrication. Perfect for creating complex shapes, prototypes, and production runs with unmatched accuracy.',
    features: [
      'Plastic fabrication',
      'Acrylic routing',
      'Foam cutting',
      'Woodworking',
      'Prototype development',
      'Custom production',
    ],
    image: '/images/portfolio/portfolio-09.png',
  },
  {
    id: 'branding',
    icon: FiAward,
    title: 'Branding & Visual Identity',
    description:
      'Complete branding solutions to elevate your business presence. From logo design to comprehensive brand identity packages.',
    features: [
      'Logo design',
      'Brand identity packages',
      'Marketing materials',
      'Packaging design',
      'Brand guidelines',
      'Complete rebranding',
    ],
    image: '/images/portfolio/portfolio-01.png',
  },
];

export default function Services() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {t('services.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative h-80 rounded-lg overflow-hidden bg-dark border border-gray-800">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-80"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                    </div>
                  </div>

                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Contact us today for a free quote and consultation
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all"
          >
            {t('services.getQuote')}
          </a>
        </div>
      </section>
    </div>
  );
}
