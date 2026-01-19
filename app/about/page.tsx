'use client';

import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTarget, FiHeart } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

const values = [
  {
    icon: FiAward,
    title: 'Excellence',
    description: 'We strive for perfection in every project, delivering exceptional quality that exceeds expectations.',
  },
  {
    icon: FiUsers,
    title: 'Partnership',
    description: 'Building long-term relationships with our clients through trust, collaboration, and exceptional service.',
  },
  {
    icon: FiTarget,
    title: 'Innovation',
    description: 'Embracing the latest technology and creative solutions to bring your vision to life.',
  },
  {
    icon: FiHeart,
    title: 'Dedication',
    description: 'Committed to your success, we go above and beyond to ensure your satisfaction.',
  },
];

export default function About() {
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
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              <span className="text-primary font-semibold text-xl">MAESTRO Print</span> is a premium
              printing and advertising company dedicated to helping businesses elevate their brand
              presence through exceptional visual communication.
            </p>
            <p>
              With years of experience in the industry, we've built a reputation for delivering
              high-quality printing solutions, custom signage, and comprehensive branding services.
              Our state-of-the-art facility houses the latest technology in digital printing, large
              format printing, laser cutting, and CNC fabrication.
            </p>
            <p>
              We understand that your brand is your most valuable asset. That's why we approach every
              project with meticulous attention to detail, ensuring that every print, sign, and design
              element reflects the excellence of your brand.
            </p>
            <p>
              Our team of skilled professionals combines creative expertise with technical precision
              to bring your vision to life. From initial consultation to final delivery, we work
              closely with you to ensure your complete satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-dark-lighter p-8 rounded-xl border border-gray-800"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FiTarget size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('about.mission.title')}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('about.mission.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-dark-lighter p-8 rounded-xl border border-gray-800"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FiAward size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('about.vision.title')}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('about.vision.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-dark p-8 rounded-xl border border-gray-800 hover:border-primary/50 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.whyChoose.title')}
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {t('about.whyChoose.description')}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-primary/50 transition-all text-lg"
            >
              {t('about.whyChoose.getInTouch')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
