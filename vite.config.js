import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// Place le CSS de l'app avant le JS dans le build pour éviter le layout mélangé en prod
function cssBeforeScript() {
  return {
    name: 'css-before-script',
    transformIndexHtml(html) {
      const linkMatch = html.match(/<link[^>]+href="[^"]*\/assets\/[^"]*"[^>]*>/)
      const scriptMatch = html.match(/<script[^>]+src="[^"]*\/assets\/[^"]*"[^>]*><\/script>/)
      if (linkMatch && scriptMatch) {
        const [linkTag] = linkMatch
        const [scriptTag] = scriptMatch
        html = html.replace(scriptTag, '').replace(linkTag, '')
        html = html.replace('</title>', `</title>\n    ${linkTag}\n    ${scriptTag}`)
      }
      return html
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssBeforeScript()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  base: '/',
  publicDir: 'public'
})
