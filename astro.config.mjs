import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://MayssaEssid.github.io',
  // base: '/my-repo/',  // À supprimer ou commenter pour GitHub Pages personnalisé
  outDir: 'dist',
  build: {
    format: 'directory'
  }
})