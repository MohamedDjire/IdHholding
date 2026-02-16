<template>
  <div class="groupe-page">
    <!-- Header -->
    <section class="page-header">
      <div class="container">
        <p class="page-label">Notre Ecosysteme</p>
        <h1>Le Groupe</h1>
        <p class="page-description">
          ID Holding International federe des entreprises partenaires dans les secteurs
          du transport, de la logistique et de l'energie. Ensemble, nous construisons
          des solutions industrielles completes.
        </p>
      </div>
    </section>

    <!-- Companies Grid -->
    <section class="companies">
      <div class="container">
        <div class="companies-grid">

          <!-- SADA SARL -->
          <article class="company-card">
            <div class="company-badge">Partenaire</div>
            <div class="company-info">
              <h2>SADA SARL</h2>
              <p class="company-domain">sadasarl.com</p>
              <p class="company-description">
                SADA SARL est une entreprise partenaire du groupe ID Holding International,
                active dans le secteur industriel. Elle contribue a la force du groupe
                par son expertise et son ancrage local.
              </p>
              <div class="company-status">
                <span class="status-dot online"></span>
                <span>En ligne</span>
              </div>
              <a
                href="https://sadasarl.com"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                Visiter le site
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3h7v7M13 3L3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- ID Petrolium -->
          <article class="company-card">
            <div class="company-badge accent">Filiale</div>
            <div class="company-info">
              <h2>ID Petrolium</h2>
              <p class="company-domain">Stations-service et energie</p>
              <p class="company-description">
                ID Petrolium est la filiale du groupe specialisee dans la distribution
                de carburants et la gestion de stations-service. L'entreprise est en cours
                de developpement et s'apprete a devenir un acteur majeur du secteur.
              </p>
              <div class="company-status">
                <span class="status-dot building"></span>
                <span>En cours de lancement</span>
              </div>
              <router-link to="/groupe/id-petrolium" class="btn btn-accent">
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </router-link>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision">
      <div class="container">
        <div class="vision-content">
          <h2>Notre vision</h2>
          <p>
            Le groupe ID Holding International croit en la force du partenariat. En reunissant
            des entreprises complementaires, nous creons un ecosysteme capable de repondre
            aux defis du transport et de l'energie en Afrique.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Page Header */
.page-header {
  padding: 4rem 0 3rem;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.page-label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
}

.page-header h1 {
  margin-bottom: 1rem;
}

.page-description {
  max-width: 640px;
  font-size: 1.05rem;
}

/* Companies */
.companies {
  padding: 4rem 0;
}

.companies-grid {
  display: flex;
  gap: 2rem;
}

.company-card {
  flex: 1;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.company-card:hover {
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

.company-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background-color: var(--color-primary);
  color: var(--color-white);
}

.company-badge.accent {
  background-color: var(--color-accent);
}

.company-info {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.company-info h2 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.company-domain {
  font-size: 0.88rem;
  color: var(--color-text-light);
  margin-bottom: 1rem;
}

.company-description {
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
  flex: 1;
}

.company-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot.online {
  background-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
}

.status-dot.building {
  background-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(232, 133, 28, 0.2);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-size: 0.92rem;
  font-weight: 600;
  border-radius: var(--radius);
  transition: all 0.2s ease;
  align-self: flex-start;
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

/* Vision */
.vision {
  padding: 4rem 0;
  background-color: var(--color-primary);
}

.vision-content {
  max-width: 640px;
}

.vision-content h2 {
  color: var(--color-white);
  margin-bottom: 1rem;
}

.vision-content p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.05rem;
}

/* Responsive */
@media (max-width: 768px) {
  .page-header {
    padding: 3rem 0 2rem;
  }

  .companies {
    padding: 2.5rem 0;
  }

  .companies-grid {
    flex-direction: column;
  }

  .vision {
    padding: 3rem 0;
  }
}
</style>
