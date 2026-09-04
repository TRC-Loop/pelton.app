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
    // the invite is behind our own URL so it can be rotated in one place if it
    // ever expires or has to be revoked. Everything on the site and in the
    // repositories points here rather than at discord.gg directly.
    '/discord': 'https://discord.gg/UzPNGZYy6V',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/imprint') &&
        !page.includes('/privacy') &&
        !page.includes('/2026-4') &&
        !page.includes('/discord'),
    }),
  ],
})
