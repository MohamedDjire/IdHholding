<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content container">
        <div class="hero-text">
          <p class="hero-label">ID Holding International</p>
          <h1 class="hero-title">Transporter pour l'industrie</h1>
          <p class="hero-description">
            Un groupe industriel au service du transport, de l'energie et de la logistique.
            Nous federons des entreprises partenaires pour offrir des solutions completes a nos clients.
          </p>
          <div class="hero-actions">
            <router-link to="/groupe" class="btn btn-primary">Decouvrir le Groupe</router-link>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/logo.png" alt="ID Holding International" class="hero-logo" />
        </div>
      </div>
    </section>

    <!-- Strengths Section -->
    <section class="strengths">
      <div class="container">
        <p class="section-label">Nos atouts</p>
        <h2 class="section-title">Une approche globale pour un modele d'avenir</h2>

        <div class="strengths-grid">
          <div class="strength-card">
            <div class="strength-number">1</div>
            <h3>Transport Industriel</h3>
            <p>
              Solutions de transport adaptees aux besoins de l'industrie : matiere premiere,
              conteneurs, produits petroliers.
            </p>
          </div>
          <div class="strength-card">
            <div class="strength-number">2</div>
            <h3>Partenariat Strategique</h3>
            <p>
              Un reseau d'entreprises partenaires pour couvrir l'ensemble de la chaine logistique
              et energetique.
            </p>
          </div>
          <div class="strength-card">
            <div class="strength-number">3</div>
            <h3>Energie et Carburant</h3>
            <p>
              Distribution de produits petroliers et gestion de stations-service
              a travers notre filiale ID Petrolium.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Group CTA -->
    <section class="group-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Un groupe, des expertises</h2>
          <p>
            ID Holding International reunit des entreprises complementaires pour creer
            de la valeur a chaque etape de la chaine industrielle.
          </p>
          <router-link to="/groupe" class="btn btn-accent">Voir nos entreprises</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.hero {
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-background) 100%);
  padding: 5rem 0 4rem;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.hero-text {
  flex: 1;
}

.hero-visual {
  flex: 0 0 320px;
  display: flex;
  justify-content: center;
}

.hero-logo {
  width: 280px;
  height: auto;
  filter: drop-shadow(0 8px 32px rgba(30, 58, 110, 0.12));
}

.hero-label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  text-wrap: balance;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 540px;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(30, 58, 110, 0.25);
}

.btn-accent {
  background-color: var(--color-accent);
  color: var(--color-white);
}

.btn-accent:hover {
  background-color: var(--color-accent-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(232, 133, 28, 0.25);
}

/* Strengths */
.strengths {
  padding: 5rem 0;
}

.section-label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
}

.section-title {
  margin-bottom: 3rem;
  max-width: 600px;
}

.strengths-grid {
  display: flex;
  gap: 2rem;
}

.strength-card {
  flex: 1;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.strength-card:hover {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.strength-number {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.strength-card h3 {
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.strength-card p {
  font-size: 0.92rem;
}

/* Group CTA */
.group-cta {
  padding: 5rem 0;
  background-color: var(--color-primary);
}

.cta-content {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.cta-content h2 {
  color: var(--color-white);
  margin-bottom: 1rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }

  .hero-content {
    flex-direction: column-reverse;
    gap: 2rem;
    text-align: center;
  }

  .hero-visual {
    flex: none;
  }

  .hero-logo {
    width: 180px;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .strengths {
    padding: 3rem 0;
  }

  .strengths-grid {
    flex-direction: column;
  }

  .group-cta {
    padding: 3rem 0;
  }
}
</style>
