import { Locale } from './i18n';

type TranslationKey = {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    getQuote: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      subtitleHighlight: string;
      description: string;
      getQuote: string;
      viewWork: string;
    };
    services: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    whyChoose: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
    };
  };
  services: {
    title: string;
    subtitle: string;
    getQuote: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    all: string;
  };
  about: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      subtitle: string;
    };
    whyChoose: {
      title: string;
      description: string;
      getInTouch: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
    };
    info: {
      title: string;
      description: string;
      phone: string;
      email: string;
      address: string;
      whatsapp: string;
    };
    map: {
      placeholder: string;
      description: string;
    };
  };
  footer: {
    description: string;
    services: string;
    company: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    close: string;
  };
};

const translations: Record<Locale, TranslationKey> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      getQuote: 'Get Quote',
    },
    home: {
      hero: {
        title: 'MAESTRO Print',
        subtitle: 'Make Your Brand Visible',
        subtitleHighlight: 'Make Your Brand Visible',
        description: 'Professional printing, signage & advertising solutions',
        getQuote: 'Get a Quote',
        viewWork: 'View Our Work',
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive printing and advertising solutions tailored to your needs',
        viewAll: 'View All Services',
      },
      whyChoose: {
        title: 'Why Choose MAESTRO Print?',
        subtitle: 'MAESTRO Print',
        description: 'With years of experience and state-of-the-art technology, we deliver exceptional results that elevate your brand and exceed your expectations.',
        features: [
          'Premium quality materials and printing',
          'Fast turnaround times',
          'Expert consultation and design support',
          'Competitive pricing',
          'Dedicated customer service',
        ],
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive printing and advertising solutions to bring your vision to life',
      getQuote: 'Get a Free Quote',
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Showcasing excellence in printing, signage, and branding solutions',
      all: 'All',
    },
    about: {
      title: 'About MAESTRO Print',
      subtitle: 'Making your brand visible through excellence and innovation',
      mission: {
        title: 'Our Mission',
        description: 'To deliver premium printing and advertising solutions that help businesses stand out and succeed. We combine cutting-edge technology with artistic excellence to transform your vision into impactful visual communication.',
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the leading printing and advertising company recognized for innovation, quality, and exceptional customer service. We envision a future where every business has access to world-class visual communication tools that amplify their brand message.',
      },
      values: {
        title: 'Our Values',
        subtitle: 'The principles that guide everything we do',
      },
      whyChoose: {
        title: 'Why Choose MAESTRO Print?',
        description: 'We combine years of experience with cutting-edge technology to deliver results that exceed expectations. Our commitment to quality, innovation, and customer satisfaction sets us apart in the industry.',
        getInTouch: 'Get in Touch',
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      form: {
        title: 'Send us a Message',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: "Message sent successfully! We'll get back to you soon.",
      },
      info: {
        title: 'Contact Information',
        description: "Get in touch with us through any of the following channels. We're here to help bring your vision to life.",
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        whatsapp: 'WhatsApp',
      },
      map: {
        placeholder: 'Map Integration',
        description: 'Replace this placeholder with your Google Maps embed',
      },
    },
    footer: {
      description: 'Premium printing and advertising solutions. Making your brand visible with excellence and precision.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      close: 'Close',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'À propos',
      contact: 'Contact',
      getQuote: 'Obtenir un devis',
    },
    home: {
      hero: {
        title: 'MAESTRO Print',
        subtitle: 'Rendez votre marque visible',
        subtitleHighlight: 'Rendez votre marque visible',
        description: 'Solutions professionnelles d\'impression, de signalétique et de publicité',
        getQuote: 'Obtenir un devis',
        viewWork: 'Voir nos réalisations',
      },
      services: {
        title: 'Nos Services',
        subtitle: 'Solutions complètes d\'impression et de publicité adaptées à vos besoins',
        viewAll: 'Voir tous les services',
      },
      whyChoose: {
        title: 'Pourquoi choisir MAESTRO Print?',
        subtitle: 'MAESTRO Print',
        description: 'Avec des années d\'expérience et une technologie de pointe, nous livrons des résultats exceptionnels qui élèvent votre marque et dépassent vos attentes.',
        features: [
          'Matériaux et impressions de qualité supérieure',
          'Délais d\'exécution rapides',
          'Consultation d\'experts et soutien au design',
          'Prix compétitifs',
          'Service client dédié',
        ],
      },
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Solutions complètes d\'impression et de publicité pour donner vie à votre vision',
      getQuote: 'Obtenir un devis gratuit',
    },
    portfolio: {
      title: 'Notre Portfolio',
      subtitle: 'Mettre en valeur l\'excellence en impression, signalétique et solutions de branding',
      all: 'Tous',
    },
    about: {
      title: 'À propos de MAESTRO Print',
      subtitle: 'Rendre votre marque visible grâce à l\'excellence et l\'innovation',
      mission: {
        title: 'Notre Mission',
        description: 'Fournir des solutions d\'impression et de publicité haut de gamme qui aident les entreprises à se démarquer et à réussir. Nous combinons une technologie de pointe avec l\'excellence artistique pour transformer votre vision en communication visuelle percutante.',
      },
      vision: {
        title: 'Notre Vision',
        description: 'Être l\'entreprise leader en impression et publicité reconnue pour l\'innovation, la qualité et un service client exceptionnel. Nous envisageons un avenir où chaque entreprise a accès à des outils de communication visuelle de classe mondiale qui amplifient le message de leur marque.',
      },
      values: {
        title: 'Nos Valeurs',
        subtitle: 'Les principes qui guident tout ce que nous faisons',
      },
      whyChoose: {
        title: 'Pourquoi choisir MAESTRO Print?',
        description: 'Nous combinons des années d\'expérience avec une technologie de pointe pour livrer des résultats qui dépassent les attentes. Notre engagement envers la qualité, l\'innovation et la satisfaction client nous distingue dans l\'industrie.',
        getInTouch: 'Contactez-nous',
      },
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous serions ravis de vous entendre. Envoyez-nous un message et nous répondrons dès que possible.',
      form: {
        title: 'Envoyez-nous un message',
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès! Nous vous répondrons bientôt.',
      },
      info: {
        title: 'Informations de contact',
        description: 'Contactez-nous via l\'un des canaux suivants. Nous sommes là pour vous aider à donner vie à votre vision.',
        phone: 'Téléphone',
        email: 'Email',
        address: 'Adresse',
        whatsapp: 'WhatsApp',
      },
      map: {
        placeholder: 'Intégration de la carte',
        description: 'Remplacez cet espace réservé par votre intégration Google Maps',
      },
    },
    footer: {
      description: 'Solutions d\'impression et de publicité haut de gamme. Rendre votre marque visible avec excellence et précision.',
      services: 'Services',
      company: 'Entreprise',
      contact: 'Contact',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
    },
    common: {
      readMore: 'Lire la suite',
      learnMore: 'En savoir plus',
      close: 'Fermer',
    },
  },
};

export default translations;
