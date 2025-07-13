import CreeatyPreview from '../images/creeaty-preview.png';
import DDGThemesPreview from '../images/ddg-themes-preview.png';
import MiniPreview from '../images/mini-preview.png';
import NomadaHomePreview from '../images/nomada-home-preview.png';
import TIQRPreview from '../images/tiqr-preview.png';

export const projects = [
  {
    name: 'TIQR',
    description: {
      en: 'A comprehensive platform for purchasing tickets to concerts, festivals, and events, offering a seamless and secure online experience.',
      es: 'Una plataforma completa de compra para entradas a conciertos, festivales y eventos, ofreciendo una experiencia online fluida y segura.',
    },
    image: TIQRPreview,
    alt: 'Preview of the TIQR web app',
    url: 'https://www.tiqr.io/',
  },
  {
    name: 'Creeaty',
    description: {
      en: 'A creator-centric platform facilitating partnerships between hotels and a diverse array of genuine content creators worldwide.',
      es: 'Una plataforma centrada para creadores que facilita la colaboración entre hoteles y una gran variedad de creadores de contenido en todo el mundo.',
    },
    image: CreeatyPreview,
    alt: 'Preview of the Creeaty web app',
    url: 'https://www.creeaty.com/',
  },
  {
    name: 'Nomada Home',
    description: {
      en: 'A platform connecting travelers and renters with property owners, offering flexible monthly rentals for extended stays.',
      es: 'Una plataforma que conecta a viajeros y arrendatarios con propietarios, ofreciendo rentas mensuales flexibles para estancias prolongadas.',
    },
    image: NomadaHomePreview,
    alt: 'Preview of the Nomada Home web app',
    url: 'https://www.nomada-home.com/',
  },
];

export const sideProjects = [
  {
    name: 'mini',
    description: {
      en: 'A versatile design system offering a curated library of TailwindCSS-built UI components for intuitive interfaces.',
      es: 'Un sistema de diseño versátil que ofrece una biblioteca de componentes UI creados con TailwindCSS para crear interfaces intuitivas.',
    },
    image: MiniPreview,
    alt: 'Preview of the mini web app',
    url: 'https://mini.codingcodax.dev/',
  },
  {
    name: 'DDG Themes',
    description: {
      en: 'Enhance your DuckDuckGo experience with a diverse collection of customizable themes, effortlessly installable for a personalized search.',
      es: 'Mejora tu experiencia en DuckDuckGo con una diversa colección de temas personalizables, fácil de instalar para una búsqueda personalizada.',
    },
    image: DDGThemesPreview,
    alt: 'Preview of the DDG Themes web app',
    url: 'https://ddg.codingcodax.dev/',
  },
];
