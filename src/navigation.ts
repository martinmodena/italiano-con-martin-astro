import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Migrazione', href: getPermalink('/migrazione') },
    { text: 'Contatti', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/', target: '_blank', icon: 'tabler:brand-github' }],
};

export const footerData = {
  links: [
    {
      title: 'Sito',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Migrazione', href: getPermalink('/migrazione') },
        { text: 'Contatti', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legale',
      links: [
        { text: 'Termini', href: getPermalink('/terms') },
        { text: 'Privacy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: 'AstroWind-based static site.',
};
