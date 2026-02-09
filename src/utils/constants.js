// ID HOLDING INTERNATIONAL - Constants

export const APP_NAME = 'ID Holding International'
export const APP_VERSION = '1.0.0'

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
export const API_TIMEOUT = import.meta.env.VITE_API_TIMEOUT || 10000

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/a-propos',
  SERVICES: '/activites',
  VEHICLES: '/parc-automobile',
  CAREERS: '/carriere',
  NEWS: '/actualites',
  NEWS_DETAIL: '/actualites/:slug',
  CONTACT: '/contacts',
  NOT_FOUND: '/404'
}

// Languages
export const LANGUAGES = {
  FR: 'fr',
  EN: 'en'
}

export const DEFAULT_LANGUAGE = LANGUAGES.FR

// Breakpoints
export const BREAKPOINTS = {
  MOBILE_S: 320,
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  DESKTOP_LG: 1280,
  DESKTOP_XL: 1920
}

// Colors
export const COLORS = {
  PRIMARY_BLUE: '#1e3a8a',
  PRIMARY_BLUE_LIGHT: '#2c5282',
  SECONDARY_ORANGE: '#f97316',
  SECONDARY_ORANGE_DARK: '#ea580c',
  ACCENT_YELLOW: '#fbbf24',
  NEUTRAL_GRAY: '#64748b',
  NEUTRAL_DARK: '#475569',
  BG_WHITE: '#ffffff',
  BG_LIGHT: '#f8fafc'
}

// Services
export const SERVICES_CATEGORIES = {
  MINING: 'transport-produits-miniers',
  CONTAINERS: 'transport-conteneurs',
  FUEL: 'transport-carburant'
}

// Vehicles
export const VEHICLE_TYPES = {
  TANKERS: 'citernes',
  FLATBEDS: 'plateaux',
  DUMP_TRUCKS: 'camions-benne',
  SELF_LOADERS: 'auto-chargeuses',
  TRACTORS: 'tracteurs',
  CARRIERS: 'porteurs'
}

// News Categories
export const NEWS_CATEGORIES = {
  ACTUALITE: 'actualite',
  EVENEMENT: 'evenement',
  COMMUNIQUE: 'communique'
}

// Job Contract Types
export const CONTRACT_TYPES = {
  CDI: 'CDI',
  CDD: 'CDD',
  STAGE: 'Stage',
  INTERIM: 'Interim'
}

// Contact Message Status
export const MESSAGE_STATUS = {
  NEW: 'new',
  READ: 'read',
  REPLIED: 'replied'
}

// Application Status
export const APPLICATION_STATUS = {
  PENDING: 'pending',
  REVIEWED: 'reviewed',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected'
}

// Pagination
export const ITEMS_PER_PAGE = 12
export const NEWS_PER_PAGE = 9
export const JOBS_PER_PAGE = 10

// Social Media
export const SOCIAL_MEDIA = {
  FACEBOOK: import.meta.env.VITE_FACEBOOK_URL,
  LINKEDIN: import.meta.env.VITE_LINKEDIN_URL,
  TWITTER: import.meta.env.VITE_TWITTER_URL,
  INSTAGRAM: import.meta.env.VITE_INSTAGRAM_URL
}

// Contact Info
export const CONTACT_INFO = {
  EMAIL: import.meta.env.VITE_CONTACT_EMAIL,
  PHONE: import.meta.env.VITE_CONTACT_PHONE,
  ADDRESS: 'Zone Industrielle de Vridi',
  CITY: 'Abidjan',
  COUNTRY: 'Côte d\'Ivoire',
  POSTAL_CODE: 'BP 1234'
}

// Animation Durations (ms)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500
}

// Toast Duration
export const TOAST_DURATION = 5000

// Max File Upload Size (bytes)
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

// Allowed File Types
export const ALLOWED_FILE_TYPES = {
  CV: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
}

// Google Maps
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
export const COMPANY_COORDINATES = {
  lat: 5.2476, // Abidjan coordinates (à ajuster)
  lng: -3.9366
}

// reCAPTCHA
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

// Local Storage Keys
export const STORAGE_KEYS = {
  LANGUAGE: 'id_holding_language',
  THEME: 'id_holding_theme',
  USER_TOKEN: 'id_holding_token'
}

// SEO Defaults
export const SEO_DEFAULTS = {
  TITLE: 'ID Holding International - Leader du Transport Spécialisé',
  DESCRIPTION: 'ID Holding International, entreprise spécialisée dans le transport de produits miniers, conteneurs et carburant en Côte d\'Ivoire.',
  IMAGE: '/images/og-image.jpg',
  URL: 'https://idholding-ci.com'
}

export default {
  APP_NAME,
  APP_VERSION,
  API_BASE_URL,
  API_TIMEOUT,
  ROUTES,
  LANGUAGES,
  DEFAULT_LANGUAGE,
  BREAKPOINTS,
  COLORS,
  SERVICES_CATEGORIES,
  VEHICLE_TYPES,
  NEWS_CATEGORIES,
  CONTRACT_TYPES,
  MESSAGE_STATUS,
  APPLICATION_STATUS,
  ITEMS_PER_PAGE,
  NEWS_PER_PAGE,
  JOBS_PER_PAGE,
  SOCIAL_MEDIA,
  CONTACT_INFO,
  ANIMATION_DURATION,
  TOAST_DURATION,
  MAX_FILE_SIZE,
  ALLOWED_FILE_TYPES,
  GOOGLE_MAPS_API_KEY,
  COMPANY_COORDINATES,
  RECAPTCHA_SITE_KEY,
  STORAGE_KEYS,
  SEO_DEFAULTS
}
