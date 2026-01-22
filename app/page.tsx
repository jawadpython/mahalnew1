'use client';

import Link from 'next/link';
import { FiPrinter, FiLayers, FiBox, FiScissors, FiCpu, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/lib/translations';

const serviceIcons = [FiPrinter, FiLayers, FiBox, FiScissors, FiCpu, FiAward];

export default function Home() {
  const { t, locale } = useLanguage();

  const services = [
    {
      icon: FiPrinter,
      title: 'Digital Printing',
      description: 'High-quality digital printing for all your marketing materials',
    },
    {
      icon: FiLayers,
      title: 'Large Format Printing',
      description: 'Banners, posters, and large-scale displays with stunning clarity',
    },
    {
      icon: FiBox,
      title: 'Signage & Light Boxes',
      description: 'Custom signage solutions that make your brand stand out',
    },
    {
      icon: FiScissors,
      title: 'Laser Cutting',
      description: 'Precision laser cutting for intricate designs and materials',
    },
    {
      icon: FiCpu,
      title: 'CNC Cutting',
      description: 'Advanced CNC cutting technology for precise fabrication',
    },
    {
      icon: FiAward,
      title: 'Branding & Visual Identity',
      description: 'Complete branding solutions to elevate your business presence',
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{t('home.hero.title')}</span>
            <br />
            <span className="text-primary">{t('home.hero.subtitle')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('home.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all text-lg">
                {t('home.hero.getQuote')}
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all text-lg">
                {t('home.hero.viewWork')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-dark p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all">
                {t('home.services.viewAll')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('home.whyChoose.title')}
              </h2>
              <p className="text-base text-gray-400 mb-6 leading-relaxed">
                {t('home.whyChoose.description')}
              </p>
              <div className="space-y-3">
                {(translations[locale].home.whyChoose.features as string[]).map((feature: string) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/portfolio/portfolio-04.png"
                alt="MAESTRO Print Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
