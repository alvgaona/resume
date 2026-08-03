import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://resume.alvgaona.com',
    output: 'static',
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'en',
    },
});
