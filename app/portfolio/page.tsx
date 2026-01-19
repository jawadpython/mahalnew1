'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

const portfolioItems = [
  {
    id: 1,
    title: 'Corporate Branding Package',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Large Format Banner',
    category: 'Large Format',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'LED Signage Installation',
    category: 'Signage',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Vehicle Wrap Design',
    category: 'Large Format',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Trade Show Display',
    category: 'Signage',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Laser Cut Acrylic Sign',
    category: 'Laser Cutting',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Retail Store Signage',
    category: 'Signage',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    title: 'Business Card Design',
    category: 'Digital Printing',
    image: 'https://images.unsplash.com/photo-1586114669940-9135c3e92f64?w=800&h=600&fit=crop',
  },
  {
    id: 9,
    title: 'CNC Fabricated Display',
    category: 'CNC Cutting',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop',
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
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-dark-lighter sticky top-20 z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-dark text-gray-300 hover:bg-dark-lighter hover:text-primary border border-gray-800'
                }`}
              >
                {category === 'All' ? t('portfolio.all') : category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-xl bg-dark border border-gray-800 cursor-pointer"
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
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 bg-dark-lighter rounded-full"
              aria-label="Close"
            >
              <FiX size={24} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = portfolioItems.find((i) => i.id === selectedImage);
                if (!item) return null;
                return (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <span className="text-primary">{item.category}</span>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
