<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-inner container">
      <div class="footer-brand">
        <img src="/logo.png" alt="ID Holding International" class="footer-logo" />
        <p class="footer-tagline">Transporter pour l'industrie</p>
      </div>

      <div class="footer-links">
        <h4>Navigation</h4>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/groupe">Groupe</router-link></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Groupe</h4>
        <ul>
          <li><a href="https://sadasarl.com" target="_blank" rel="noopener noreferrer">SADA SARL</a></li>
          <li><router-link to="/groupe/id-petrolium">ID Petrolium</router-link></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Contact</h4>
        <ul>
          <li>contact@idholding.com</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} ID Holding International. Tous droits reserves.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: var(--color-white);
  margin-top: auto;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 4rem 1.5rem 2rem;
}

.footer-brand {
  flex: 1 1 280px;
}

.footer-logo {
  height: 56px;
  width: auto;
  margin-bottom: 0.75rem;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.footer-links {
  flex: 1 1 160px;
}

.footer-links h4 {
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links li,
.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--color-accent-light);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1.25rem 0;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  text-align: center;
}

@media (max-width: 768px) {
  .footer-inner {
    gap: 2rem;
    padding: 2.5rem 1.5rem 1.5rem;
  }
}
</style>
