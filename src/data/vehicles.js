// src/data/vehicles.js
export const vehicles = [
  {
    id: 1,
    type_fr: 'Citernes',
    type_en: 'Tankers',
    quantity: 18,
    description_fr: 'Citernes certifiées ADR pour le transport de carburant et produits pétroliers',
    description_en: 'ADR certified tankers for fuel and petroleum products transport',
    icon: 'tanker',
    color: '#dc2626',
    image: '/images/vehicles/citernes.jpg'
  },
  {
    id: 2,
    type_fr: 'Plateaux',
    type_en: 'Flatbeds',
    quantity: 75,
    description_fr: 'Plateaux pour le transport de conteneurs et marchandises diverses',
    description_en: 'Flatbeds for container and various goods transport',
    icon: 'flatbed',
    color: '#1e3a8a',
    image: '/images/vehicles/plateaux.jpg'
  },
  {
    id: 3,
    type_fr: 'Camions Benne',
    type_en: 'Dump Trucks',
    quantity: 55,
    description_fr: 'Camions benne haute capacité pour le transport de produits miniers',
    description_en: 'High-capacity dump trucks for mining products transport',
    icon: 'dump-truck',
    color: '#f97316',
    image: '/images/vehicles/benne.jpg'
  },
  {
    id: 4,
    type_fr: 'Chargeuses',
    type_en: 'Loaders',
    quantity: 25,
    description_fr: 'Chargeuses pour les opérations de chargement sur site',
    description_en: 'Loaders for on-site loading operations',
    icon: 'loader',
    color: '#fbbf24',
    image: '/images/vehicles/chargeuse.jpg'
  },
  {
    id: 5,
    type_fr: 'Tracteurs',
    type_en: 'Tractors',
    quantity: 120,
    description_fr: 'Tracteurs routiers puissants pour le convoyage longue distance',
    description_en: 'Powerful road tractors for long-distance haulage',
    icon: 'tractor',
    color: '#1e3a8a',
    image: '/images/vehicles/tracteurs.jpg'
  },
  {
    id: 6,
    type_fr: 'Porteurs',
    type_en: 'Carriers',
    quantity: 60,
    description_fr: 'Véhicules porteurs polyvalents pour livraisons urbaines',
    description_en: 'Versatile carrier vehicles for urban deliveries',
    icon: 'carrier',
    color: '#64748b',
    image: '/images/vehicles/porteurs.jpg'
  }
]

export const totalVehicles = vehicles.reduce((sum, v) => sum + v.quantity, 0)
