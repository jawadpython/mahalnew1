'use client';

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
      <section className="relative py-16 bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-base text-gray-300 leading-relaxed">
            <p>
              <span className="text-primary font-semibold text-xl">MAESTRO Print</span> is a premium
              printing and advertising company dedicated to helping businesses elevate their brand
              presence through exceptional visual communication.
            </p>
            <p>
              With years of experience in the industry, we&apos;ve built a reputation for delivering
              high-quality printing solutions, custom signage, and comprehensive branding services.
              Our state-of-the-art facility houses the latest technology in digital printing, large
              format printing, laser cutting, and CNC fabrication.
            </p>
            <p>
              We understand that your brand is your most valuable asset. That&apos;s why we approach every
              project with meticulous attention to detail, ensuring that every print, sign, and design
              element reflects the excellence of your brand.
            </p>
            <p>
              Our team of skilled professionals combines creative expertise with technical precision
              to bring your vision to life. From initial consultation to final delivery, we work
              closely with you to ensure your complete satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-dark-lighter p-6 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FiTarget size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('about.mission.title')}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('about.mission.description')}
              </p>
            </div>

            <div className="bg-dark-lighter p-6 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FiAward size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('about.vision.title')}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-dark p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('about.whyChoose.title')}
          </h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            {t('about.whyChoose.description')}
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all"
          >
            {t('about.whyChoose.getInTouch')}
          </a>
        </div>
      </section>
    </div>
  );
}
