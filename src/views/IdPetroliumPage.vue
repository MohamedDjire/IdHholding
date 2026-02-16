<template>
  <div class="petrolium-page">
    <!-- Hero -->
    <section class="petrolium-hero">
      <div class="hero-overlay"></div>
      <div class="container hero-inner">
        <router-link to="/groupe" class="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Retour au Groupe
        </router-link>
        <div class="hero-text">
          <span class="hero-badge">Filiale ID Holding International</span>
          <h1>ID Petrolium</h1>
          <p class="hero-subtitle">
            Distribution de carburants et gestion de stations-service.
            Une nouvelle ere pour l'energie en Afrique.
          </p>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <p class="section-label">A propos</p>
            <h2>L'energie au service du developpement</h2>
            <p>
              ID Petrolium est la filiale du groupe ID Holding International dediee au secteur
              de l'energie. Specialisee dans la distribution de carburants et la gestion de
              stations-service, l'entreprise ambitionne de devenir un acteur incontournable
              du marche.
            </p>
            <p>
              Actuellement en phase de lancement, ID Petrolium prepare l'ouverture
              de ses premieres stations-service, concues pour offrir un service de qualite
              aux professionnels comme aux particuliers.
            </p>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-value">Stations-service</span>
              <span class="stat-label">Activite principale</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">Distribution</span>
              <span class="stat-label">Carburants et lubrifiants</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">En cours</span>
              <span class="stat-label">Phase de lancement</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="gallery">
      <div class="container">
        <p class="section-label">Nos installations</p>
        <h2>Stations-service modernes et fonctionnelles</h2>
        <p class="gallery-intro">
          Decouvrez en images le type d'infrastructures que ID Petrolium met en place
          pour repondre aux besoins energetiques de l'industrie et du grand public.
        </p>

        <div class="gallery-grid">
          <figure class="gallery-item main">
            <img src="/images/station-1.jpg" alt="Station-service moderne avec pompes a carburant" loading="lazy" />
            <figcaption>Station-service avec zone de ravitaillement pour vehicules industriels</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="/images/station-2.jpg" alt="Vue aerienne d'une station-service avec camion citerne" loading="lazy" />
            <figcaption>Livraison de carburant par camion citerne</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="/images/station-3.jpg" alt="Pompes a carburant modernes" loading="lazy" />
            <figcaption>Equipements modernes pour une distribution efficace</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services">
      <div class="container">
        <p class="section-label">Nos services</p>
        <h2>Ce que nous proposons</h2>

        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M10 8V6a2 2 0 012-2h8a2 2 0 012 2v2" stroke="currentColor" stroke-width="2"/>
                <circle cx="16" cy="17" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>Distribution de carburants</h3>
            <p>Approvisionnement en essence, diesel et autres produits petroliers pour les professionnels et les particuliers.</p>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M8 28V12l8-8 8 8v16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="13" y="20" width="6" height="8" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>Gestion de stations</h3>
            <p>Construction, equipement et exploitation de stations-service modernes et conformes aux normes internationales.</p>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"/>
                <path d="M16 8v8l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Logistique petroliere</h3>
            <p>Transport et acheminement de produits petroliers en partenariat avec le reseau logistique du groupe ID Holding.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Un projet en construction</h2>
          <p>
            ID Petrolium est en phase de lancement. Pour en savoir plus sur nos projets
            ou explorer des opportunites de partenariat, contactez le groupe ID Holding International.
          </p>
          <router-link to="/groupe" class="btn btn-white">Retour au Groupe</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.petrolium-hero {
  position: relative;
  background: var(--color-primary);
  padding: 3rem 0 5rem;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  opacity: 0.95;
}

.hero-inner {
  position: relative;
  z-index: 1;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--color-white);
}

.hero-badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: var(--color-accent);
  color: var(--color-white);
  border-radius: 100px;
  margin-bottom: 1.25rem;
}

.hero-text h1 {
  color: var(--color-white);
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  margin-bottom: 1rem;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.15rem;
  max-width: 560px;
}

/* About */
.about {
  padding: 5rem 0;
}

.about-grid {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

.about-text {
  flex: 1.2;
}

.section-label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
}

.about-text h2 {
  margin-bottom: 1.25rem;
}

.about-text p {
  margin-bottom: 1rem;
  font-size: 0.98rem;
}

.about-stats {
  flex: 0.8;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stat-card {
  padding: 1.5rem;
  background: var(--color-surface);
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
}

.stat-value {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

/* Gallery */
.gallery {
  padding: 5rem 0;
  background: var(--color-surface);
}

.gallery h2 {
  margin-bottom: 0.75rem;
}

.gallery-intro {
  max-width: 600px;
  margin-bottom: 2.5rem;
  font-size: 0.98rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.gallery-item {
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
}

.gallery-item.main {
  grid-row: 1 / 3;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.03);
}

.gallery-item figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.25rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: var(--color-white);
  font-size: 0.85rem;
}

/* Services */
.services {
  padding: 5rem 0;
}

.services h2 {
  margin-bottom: 2.5rem;
}

.services-grid {
  display: flex;
  gap: 2rem;
}

.service-card {
  flex: 1;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.service-card:hover {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.service-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  border-radius: var(--radius);
  color: var(--color-primary);
  margin-bottom: 1.25rem;
}

.service-card h3 {
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
}

.service-card p {
  font-size: 0.92rem;
}

/* CTA */
.cta {
  padding: 5rem 0;
  background: var(--color-accent);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  color: var(--color-white);
  margin-bottom: 1rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius);
  transition: all 0.2s ease;
}

.btn-white {
  background: var(--color-white);
  color: var(--color-primary);
}

.btn-white:hover {
  background: var(--color-surface);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .petrolium-hero {
    padding: 2rem 0 3rem;
  }

  .about {
    padding: 3rem 0;
  }

  .about-grid {
    flex-direction: column;
    gap: 2rem;
  }

  .gallery {
    padding: 3rem 0;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item.main {
    grid-row: auto;
  }

  .services {
    padding: 3rem 0;
  }

  .services-grid {
    flex-direction: column;
  }

  .cta {
    padding: 3rem 0;
  }
}
</style>
