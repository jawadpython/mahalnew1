'use client';

import { FiMessageCircle } from 'react-icons/fi';

export default function WhatsAppButton() {
  const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
  const message = 'Hello! I would like to get a quote.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <FiMessageCircle size={24} className="text-white" />
    </a>
  );
}
