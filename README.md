# 🌟 ID HOLDING INTERNATIONAL - Site Web

Site web vitrine pour **ID Holding International**, entreprise spécialisée dans le transport de produits miniers, conteneurs et carburant en Côte d'Ivoire.

---

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

---

## 📁 Structure du Projet

```
ID-Holding/
├── public/
│   └── images/          # Images du site (à ajouter)
│
├── src/
│   ├── components/      # Composants Vue
│   │   ├── layout/     # Header, Footer, Navigation
│   │   ├── home/       # Sections page d'accueil
│   │   ├── base/       # Composants réutilisables
│   │   ├── about/      # Composants page À propos
│   │   ├── services/   # Composants page Services
│   │   ├── fleet/      # Composants page Parc auto
│   │   └── contact/    # Composants page Contact
│   │
│   ├── views/          # Pages du site (5 pages)
│   │   ├── HomePage.vue
│   │   ├── AboutPage.vue
│   │   ├── ServicesPage.vue
│   │   ├── FleetPage.vue
│   │   └── ContactPage.vue
│   │
│   ├── data/           # Données statiques (8 fichiers)
│   ├── router/         # Configuration routing
│   ├── stores/         # Pinia store
│   ├── i18n/           # Configuration i18n
│   ├── locales/       # Traductions FR/EN
│   └── assets/css/     # Styles CSS
│
└── Documentation/
    └── PROJET_COPIE.md  # Détails du projet
```

---

## 📄 Pages du Site

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Accueil** | Slider, services, statistiques, qualité, partenaires |
| `/a-propos` | **À Propos** | Présentation, histoire, valeurs, équipe, qualité |
| `/activites` | **Nos Activités** | 3 services détaillés |
| `/parc-automobile` | **Parc Automobile** | 6 types de véhicules avec statistiques |
| `/contacts` | **Contacts** | Informations de contact |

**✅ Toutes les pages sont créées et fonctionnelles !**

---

## 🖼️ Images Nécessaires

Les dossiers sont créés dans `public/images/`, mais vous devez ajouter les images :

- **Logo** : `public/images/logo/id-holding-logo.png`
- **Slider** : 3 images dans `public/images/slider/`
- **Services** : 3 images dans `public/images/services/`
- **Véhicules** : 6 images dans `public/images/vehicles/`
- **Équipe** : 2 images dans `public/images/team/`
- **Partenaires** : 4 logos dans `public/images/partners/`

**⚠️ Sans les images, vous verrez des erreurs 404, mais le site fonctionnera quand même.**

---

## 🌐 Multilingue

Le site est disponible en **Français** et **Anglais**.

- Switch de langue dans le header
- Traductions complètes dans `src/locales/`
- Données bilingues dans `src/data/`

---

## 📦 Technologies

- **Vue 3** (Composition API)
- **Vite** (Build tool)
- **Vue Router 4** (Routing)
- **Pinia** (State management)
- **Vue I18n** (Internationalisation)
- **CSS** (Variables CSS modernes)

---

## ✅ État du Projet

- ✅ **5 pages** créées et fonctionnelles
- ✅ **20 composants** organisés par catégorie
- ✅ **8 fichiers de données** avec contenu complet
- ✅ **Traductions FR/EN** complètes
- ✅ **Router** configuré avec 5 routes
- ✅ **Responsive** (mobile, tablet, desktop)
- ⏳ **Images** à ajouter dans `public/images/`

---

## 🎯 Prochaines Étapes

1. **Ajouter les images** dans `public/images/`
2. **Tester toutes les pages** (navigation, multilingue, responsive)
3. **Personnaliser le contenu** dans `src/data/` si nécessaire
4. **Build de production** : `npm run build`

---

## 📞 Contact

**ID Holding International**  
Email: contact@idholding.ci  
Téléphone: +225 27 22 00 00 00  
Adresse: Zone Industrielle de Yopougon, Abidjan, Côte d'Ivoire

---

© 2026 ID Holding International
