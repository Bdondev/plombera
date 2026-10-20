// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	build: {
		// Keep the small static site’s critical styles in the HTML so they do not
		// become separate render-blocking requests on the initial page load.
		inlineStylesheets: 'always'
	},
  vite: {
    plugins: [tailwindcss()]
  }
});
