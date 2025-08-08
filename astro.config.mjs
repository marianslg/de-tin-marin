
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: '/de-tin-marin/',
  // fuerza rutas relativas (quita la barra inicial de todas las assets)
  buildOptions: {
    assets: 'relative',
  },
});