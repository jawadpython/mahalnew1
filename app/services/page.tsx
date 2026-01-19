'use client';

import { motion } from 'framer-motion';
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
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800',
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
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
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
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
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
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800',
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
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
  },
];

export default function Services() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dark via-dark-lighter to-dark overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <motion.div
                    className={`${!isEven ? 'lg:col-start-2' : ''}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative h-96 rounded-xl overflow-hidden bg-dark border border-gray-800">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={120} className="text-primary/30" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
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
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us today for a free quote and consultation
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-primary/50 transition-all text-lg"
            >
              {t('services.getQuote')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
