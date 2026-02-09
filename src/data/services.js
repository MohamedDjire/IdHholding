// src/data/services.js
export const services = [
  {
    id: 1,
    slug: 'transport-miniers',
    title_fr: 'Transport de Produits Miniers',
    title_en: 'Mining Products Transportation',
    shortDescription_fr: 'Transport sécurisé de minerais et matériaux d\'extraction vers les sites industriels.',
    shortDescription_en: 'Secure transport of ores and extraction materials to industrial sites.',
    description_fr: `
      <p>ID Holding International est spécialisé dans le transport de produits miniers depuis plus de 10 ans. Notre expertise couvre le transport de tous types de minerais : bauxite, manganèse, or, fer et autres ressources minières.</p>
      <p>Nous disposons d'une flotte de camions bennes et de plateaux spécialement conçus pour le transport de matériaux lourds et volumineux. Nos équipes sont formées aux protocoles de sécurité les plus stricts.</p>
    `,
    description_en: `
      <p>ID Holding International has specialized in mining products transportation for over 10 years. Our expertise covers the transport of all types of ores: bauxite, manganese, gold, iron and other mining resources.</p>
      <p>We have a fleet of dump trucks and flatbeds specially designed for transporting heavy and bulky materials. Our teams are trained in the strictest safety protocols.</p>
    `,
    features_fr: [
      'Transport de bauxite, manganèse, or et fer',
      'Flotte de camions bennes haute capacité',
      'Équipes formées aux normes de sécurité',
      'Couverture nationale et régionale',
      'Suivi GPS en temps réel'
    ],
    features_en: [
      'Transport of bauxite, manganese, gold and iron',
      'High-capacity dump truck fleet',
      'Teams trained in safety standards',
      'National and regional coverage',
      'Real-time GPS tracking'
    ],
    icon: 'mountain',
    color: '#f97316',
    image: '/images/services/transport-minier.jpg'
  },
  {
    id: 2,
    slug: 'transport-conteneurs',
    title_fr: 'Transport de Conteneurs',
    title_en: 'Container Transportation',
    shortDescription_fr: 'Acheminement de conteneurs maritimes depuis les ports vers vos entrepôts.',
    shortDescription_en: 'Maritime container transport from ports to your warehouses.',
    description_fr: `
      <p>Notre service de transport de conteneurs assure la liaison entre les principaux ports de Côte d'Ivoire et vos sites de production ou entrepôts.</p>
      <p>Avec notre flotte de tracteurs et remorques porte-conteneurs, nous garantissons des délais de livraison optimaux et une manipulation soigneuse de vos marchandises.</p>
    `,
    description_en: `
      <p>Our container transport service ensures the link between the main ports of Ivory Coast and your production sites or warehouses.</p>
      <p>With our fleet of tractors and container trailers, we guarantee optimal delivery times and careful handling of your goods.</p>
    `,
    features_fr: [
      'Transport conteneurs 20\' et 40\'',
      'Liaison port-entrepôt',
      'Tracteurs et remorques modernes',
      'Délais de livraison garantis',
      'Assurance marchandises incluse'
    ],
    features_en: [
      '20\' and 40\' container transport',
      'Port-warehouse connection',
      'Modern tractors and trailers',
      'Guaranteed delivery times',
      'Goods insurance included'
    ],
    icon: 'container',
    color: '#1e3a8a',
    image: '/images/services/transport-conteneurs.jpg'
  },
  {
    id: 3,
    slug: 'transport-carburant',
    title_fr: 'Transport de Carburant',
    title_en: 'Fuel Transportation',
    shortDescription_fr: 'Transport sécurisé de carburant et produits pétroliers avec citernes certifiées.',
    shortDescription_en: 'Secure transport of fuel and petroleum products with certified tankers.',
    description_fr: `
      <p>Le transport de carburant nécessite une expertise particulière et des équipements conformes aux normes internationales. ID Holding dispose d'une flotte de citernes certifiées ADR.</p>
      <p>Nos chauffeurs sont spécialement formés à la manipulation de produits dangereux et respectent des protocoles de sécurité rigoureux à chaque étape du transport.</p>
    `,
    description_en: `
      <p>Fuel transport requires special expertise and equipment that complies with international standards. ID Holding has a fleet of ADR certified tankers.</p>
      <p>Our drivers are specially trained in handling dangerous goods and follow rigorous safety protocols at every stage of transport.</p>
    `,
    features_fr: [
      'Citernes certifiées ADR',
      'Chauffeurs formés aux matières dangereuses',
      'Protocoles de sécurité stricts',
      'Transport essence, diesel et GPL',
      'Partenaire des majors pétroliers'
    ],
    features_en: [
      'ADR certified tankers',
      'Drivers trained in hazardous materials',
      'Strict safety protocols',
      'Petrol, diesel and LPG transport',
      'Partner of major oil companies'
    ],
    icon: 'fuel',
    color: '#dc2626',
    image: '/images/services/transport-carburant.png'
  }
]
