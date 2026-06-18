// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
    site: 'https://inertiaorg.github.io',
    base: '/starlight-docs',
  integrations: [

      starlight({
          plugins: [
              starlightSidebarTopics([
                  {
                      label: 'Inertia',
                      link: '/inertia/development/introduction',
                      icon: 'open-book',
                      items: ['inertia/development/introduction'],
                  },
                  {
                      label: 'Our Story',
                      link: '/ourstory/spigotforumpage',
                      icon: 'information',
                      items: ['ourstory/spigotforumpage'],
                  },
              ]),

          ],
          title: 'Inertia Documentation',
          components: {
              Footer: './src/components/overrides/Footer.astro',
              Banner: './src/components/overrides/Banner.astro',
              Sidebar: './src/components/Sidebar.astro',
          },
          editLink: {
              baseUrl: 'https://github.com/InertiaOrg/starlight-docs/tree/master/',
          },
          tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 3 },
          customCss: [
              // Path to your Tailwind base styles:
              './src/styles/global.css',
              './src/fonts/font-face.css',
          ],
          logo: {
          src: './src/assets/houston.webp',
          },
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/InertiaOrg/starlight-docs' }],

      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});