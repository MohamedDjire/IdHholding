# Traduction du site ID Holding International

Résumé de ce qui est utilisé pour la traduction (pour les collègues).

---

## 1. Bibliothèque

- **vue-i18n** (v9) : gestion des langues dans l’app Vue.
- Dépendance dans `package.json` : `"vue-i18n": "^9.9.0"`.

---

## 2. Fichiers de traduction

- **Emplacement** : `src/locales/`
  - **`fr.json`** : textes en français
  - **`en.json`** : textes en anglais

- Structure en clés hiérarchiques, par exemple :
  - `nav.home`, `nav.about`, …
  - `home.hero.title`, `home.about.description`, …
  - `about.pageTitle`, `services.intro`, `fleet.pageTitle`, `contact.*`, etc.

- Pour ajouter ou modifier un texte : éditer le bon fichier (`fr.json` ou `en.json`) et la bonne clé.

---

## 3. Configuration i18n

- **Fichier** : `src/i18n/index.js`
  - Création de l’instance avec `createI18n()`.
  - Langue par défaut : **français** (`fr`).
  - Langue de repli si une traduction manque : **français** (`fallbackLocale: 'fr'`).
  - Langue mémorisée dans le navigateur : `localStorage.getItem('locale')` (au chargement).

---

## 4. Store Pinia (synchronisation langue)

- **Fichier** : `src/stores/app.js`
  - État : `locale` (ex. `'fr'` ou `'en'`).
  - Actions : `setLocale(newLocale)`, `toggleLocale()`.
  - La langue est enregistrée dans **localStorage** (`locale`) pour persister entre les visites.
  - Helper pour les données (services, équipe, etc.) :  
    **`getLocalizedContent(item, field)`**  
    Utilise les propriétés `field_fr` et `field_en` d’un objet (ex. `title_fr`, `title_en`).

---

## 5. Utilisation dans les composants

**Textes issus des fichiers de traduction (fr.json / en.json) :**

```js
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
```

Dans le template :

```html
{{ t('nav.home') }}
{{ t('home.about.title') }}
```

**Données déjà localisées (ex. services, équipe, véhicules) :**

- Les objets ont des champs par langue : `title_fr`, `title_en`, `description_fr`, `description_en`, etc.
- Dans les composants, on utilise le **store** pour récupérer la valeur selon la langue courante :

```js
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
```

- Soit avec le helper :  
  `appStore.getLocalizedContent(item, 'title')`  
  (équivalent à `item['title_' + locale]` avec repli sur `_fr`).
- Soit directement :  
  `item[\`title_${appStore.locale}\`]` ou `item[\`description_${appStore.locale}\`]`.

Les données concernées se trouvent dans `src/data/` (services, team, vehicles, etc.) : chaque entrée a des champs `*_fr` et `*_en`.

---

## 6. Changement de langue (sélecteur)

- **Composant** : `src/components/layout/LanguageSwitcher.vue`
  - Deux boutons : **FR** et **EN**.
  - Au clic : mise à jour de la locale vue-i18n **et** du store (`appStore.setLocale(lang)`), ce qui met à jour toute l’interface et le contenu issu des données.

---

## 7. Résumé pour modifier / ajouter des textes

| Besoin | Où aller |
|--------|----------|
| Modifier un texte du menu, des titres, boutons, etc. | `src/locales/fr.json` et `src/locales/en.json` |
| Modifier un texte lié aux données (ex. nom d’un service, d’un véhicule) | `src/data/*.js` (champs `*_fr` et `*_en`) |
| Comportement du sélecteur de langue | `src/components/layout/LanguageSwitcher.vue` et `src/stores/app.js` |
| Config langue par défaut / fallback | `src/i18n/index.js` |

---

## 8. Rappel technique

- **vue-i18n** : pour tous les textes “statiques” définis dans `fr.json` / `en.json` (clés utilisées avec `t('...')`).
- **Store + champs `_fr` / `_en`** : pour le contenu dynamique (liste de services, équipe, véhicules, partenaires, etc.) stocké dans `src/data/`.

Si tu veux, on peut détailler un écran précis (ex. page Activités ou Contact) pour montrer quelles clés et quels champs modifier.
