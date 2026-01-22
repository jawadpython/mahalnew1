'use client';

import { useState } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const portfolioItems = [
  {
    id: 1,
    title: 'Corporate Branding Package',
    category: 'Branding',
    image: '/images/portfolio/portfolio-01.png',
  },
  {
    id: 2,
    title: 'Large Format Banner',
    category: 'Large Format',
    image: '/images/portfolio/portfolio-02.png',
  },
  {
    id: 3,
    title: 'LED Signage Installation',
    category: 'Signage',
    image: '/images/portfolio/portfolio-03.png',
  },
  {
    id: 4,
    title: 'Vehicle Wrap Design',
    category: 'Large Format',
    image: '/images/portfolio/portfolio-04.png',
  },
  {
    id: 5,
    title: 'Trade Show Display',
    category: 'Signage',
    image: '/images/portfolio/portfolio-05.png',
  },
  {
    id: 6,
    title: 'Laser Cut Acrylic Sign',
    category: 'Laser Cutting',
    image: '/images/portfolio/portfolio-06.png',
  },
  {
    id: 7,
    title: 'Retail Store Signage',
    category: 'Signage',
    image: '/images/portfolio/portfolio-07.png',
  },
  {
    id: 8,
    title: 'Business Card Design',
    category: 'Digital Printing',
    image: '/images/portfolio/portfolio-08.png',
  },
  {
    id: 9,
    title: 'CNC Fabricated Display',
    category: 'CNC Cutting',
    image: '/images/portfolio/portfolio-09.png',
  },
  {
    id: 10,
    title: 'Premium Print Materials',
    category: 'Digital Printing',
    image: '/images/portfolio/portfolio-10.png',
  },
  {
    id: 11,
    title: 'Custom Signage Solutions',
    category: 'Signage',
    image: '/images/portfolio/portfolio-11.png',
  },
  {
    id: 12,
    title: 'Brand Identity Design',
    category: 'Branding',
    image: '/images/portfolio/portfolio-12.png',
  },
  {
    id: 13,
    title: 'Large Format Graphics',
    category: 'Large Format',
    image: '/images/portfolio/portfolio-13.png',
  },
  {
    id: 14,
    title: 'Precision Laser Work',
    category: 'Laser Cutting',
    image: '/images/portfolio/portfolio-14.png',
  },
];

const categories = ['All', 'Branding', 'Large Format', 'Signage', 'Digital Printing', 'Laser Cutting', 'CNC Cutting'];

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {t('portfolio.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-dark-lighter sticky top-20 z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-dark text-gray-300 hover:bg-dark-lighter hover:text-primary border border-gray-800'
                }`}
              >
                {category === 'All' ? t('portfolio.all') : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg bg-dark border border-gray-800 cursor-pointer hover:border-primary/50 transition-all"
                onClick={() => setSelectedImage(item.id)}
              >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <FiZoomIn size={48} className="text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <span className="text-primary text-sm">{item.category}</span>
                    </div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 bg-dark-lighter rounded-full"
            aria-label="Close"
          >
            <FiX size={24} />
          </button>
          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
              {(() => {
                const item = portfolioItems.find((i) => i.id === selectedImage);
                if (!item) return null;
                return (
                  <>
                    <div className="relative w-full h-[90vh]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain rounded-lg"
                        sizes="100vw"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <span className="text-primary">{item.category}</span>
                    </div>
                  </>
                );
              })()}
          </div>
        </div>
      )}
    </div>
  );
}
