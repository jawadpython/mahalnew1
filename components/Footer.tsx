'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Digital Printing', href: '/services#digital' },
      { name: 'Large Format', href: '/services#large-format' },
      { name: 'Signage', href: '/services#signage' },
      { name: 'Laser Cutting', href: '/services#laser' },
      { name: 'CNC Cutting', href: '/services#cnc' },
      { name: 'Branding', href: '/services#branding' },
    ],
    company: [
      { name: t('nav.about'), href: '/about' },
      { name: t('nav.portfolio'), href: '/portfolio' },
      { name: t('nav.contact'), href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-primary">MAESTRO</span>
              <span className="text-gray-300"> Print</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiPhone className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">info@maestroprint.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">123 Business St, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} MAESTRO Print. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
