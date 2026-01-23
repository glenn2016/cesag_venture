export const NAV_LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'Formations', path: '/formations' },
  { name: 'Adhésion', path: '/adhesion' },
]

export const SOCIAL_LINKS = [
  { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/cesagventure' },
  { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/cesagventure' },
  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/cesagventure' },
  { name: 'WhatsApp', icon: 'MessageCircle', url: 'https://wa.me/221XXXXXXXXX' },
]

export const CONTACT_INFO = {
  email: 'cesagventure@cesag.sn',
  phone: '+221 XX XXX XX XX',
  address: 'CESAG, Boulevard du Général De Gaulle, Dakar',
}

export const FILIERES = [
  { value: 'MSG', label: 'Master Sciences de Gestion (MSG)' },
  { value: 'MBF', label: 'Master Banque & Finance (MBF)' },
  { value: 'MPCGF', label: 'Master Comptabilité (MPCGF)' },
  { value: 'MBA', label: 'MBA' },
  { value: 'DESS', label: 'DESS' },
  { value: 'Licence', label: 'Licence' },
  { value: 'Autre', label: 'Autre' },
]

export const FORMATION_CATEGORIES = [
  { id: 'all', label: 'Toutes', icon: null },
  { id: 'finance', label: 'Finance', icon: '💰' },
  { id: 'bourse', label: 'Bourse & BRVM', icon: '📈' },
  { id: 'crypto', label: 'Crypto', icon: '🔗' },
  { id: 'trading', label: 'Trading', icon: '📊' },
]

export const FORMATION_LEVELS = {
  beginner: { label: 'Débutant', dots: 1 },
  intermediate: { label: 'Intermédiaire', dots: 2 },
  advanced: { label: 'Avancé', dots: 3 },
}

export const API = {
  COINGECKO: 'https://api.coingecko.com/api/v3',
}