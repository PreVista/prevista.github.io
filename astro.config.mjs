import { defineConfig } from 'astro/config'

import icon from "astro-icon"
import compress from 'astro-compress'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    site: 'https://prevista.github.io',
    compressHTML: true,
    integrations: [
        icon(),
        compress(),
        tailwind(),
    ],
});