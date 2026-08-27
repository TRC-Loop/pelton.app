import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://pelton.app',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: {
    enabled: false,
  },
  // short links to a release tag, so the URL can be shared before the release
  // is cut. The target 404s on GitHub until the tag exists; that is the point,
  // the link is meant to be handed out ahead of the build. Static output turns
  // these into a small meta-refresh page, so they work on plain asset hosting
  // with no _redirects file.
  redirects: {
    '/2026-4': 'https://github.com/TRC-Loop/Pelton/releases/tag/v2026.4',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/imprint') && !page.includes('/privacy') && !page.includes('/2026-4'),
    }),
  ],
})
