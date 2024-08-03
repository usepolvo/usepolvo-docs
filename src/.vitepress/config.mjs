import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Developers',
  description: '',

  dest: '../docs/',
  srcDir: './',

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    math: false,
  },

  /* prettier-ignore */
  head: [
    
    // Existing favicon configurations
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],

    // Additional configurations for the other files
    ['link', { rel: "icon", type: "image/x-icon", href: "/assets/favicons/favicon.ico"}],
    ['link', { rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/favicons/android-chrome-192x192.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "512x512", href: "/assets/favicons/android-chrome-512x512.png"}],

    ['meta', { name: 'theme-color', content: '#1255FE' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'usepolvo devs' }],
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: { light: '/logo.png', dark: '/logo-dark.png'},
    siteTitle: false,
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      // '/reference/': { base: '/reference/', items: sidebarReference() }
    },
    nav: navMenu(),
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Made with 💜 in Brazil © 2024 usepolvo',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/usepolvo' }
    ],
  },

  theme: './theme', // point to the theme directory
})

function navMenu() {
  return [
    {
      text: 'Guide',
      link: '/guide/getting-started/overview',
      activeMatch: '/guide/'
    },
    // {
    //   text: 'Reference',
    //   link: '/reference/python-client/introduction',
    //   activeMatch: '/reference/'
    // },
  ];
}

function sidebarGuide() {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/getting-started/overview' },
        { text: 'Installation', link: '/getting-started/installation' },
        { text: 'Quick Start Guide', link: '/getting-started/quick-start' },
      ]
    },
    {
      text: 'Core Concepts',
      collapsed: false,
      items: [
        { text: 'Unified API Interface', link: '/core-concepts/unified-api' },
        { text: 'Asynchronous Operations', link: '/core-concepts/async-operations' },
        { text: 'Authentication', link: '/core-concepts/authentication' },
        { text: 'Rate Limiting', link: '/core-concepts/rate-limiting' },
        { text: 'Pagination', link: '/core-concepts/pagination' },
        { text: 'Error Handling', link: '/core-concepts/error-handling' },
        { text: 'Webhooks', link: '/core-concepts/webhooks' },
      ]
    },
    // {
    //   text: 'Advanced Topics',
    //   collapsed: false,
    //   items: [
    //     { text: 'Performance Optimization', link: '/advanced-topics/performance' },
    //     { text: 'Security Best Practices', link: '/advanced-topics/security' },
    //     { text: 'Handling API Changes', link: '/advanced-topics/api-changes' },
    //     { text: 'Custom Integrations', link: '/advanced-topics/custom-integrations' },
    //   ]
    // },
    // {
    //   text: 'Tutorials',
    //   collapsed: false,
    //   items: [
    //     { text: 'E-commerce Integration', link: '/tutorials/ecommerce-integration' },
    //     { text: 'CRM Sync', link: '/tutorials/crm-sync' },
    //   ]
    // },
    {
      text: 'Troubleshooting',
      collapsed: false,
      items: [
        { text: 'Common Issues', link: '/troubleshooting/common-issues' },
        { text: 'Debugging Tips', link: '/troubleshooting/debugging-tips' },
        { text: 'FAQ', link: '/troubleshooting/faq' },
      ]
    },
  ];
}

function sidebarReference() {
  return [
    {
      text: 'Python Client',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/python-client/introduction' },
        { text: 'Client Setup', link: '/python-client/setup' },
        { text: 'Configuration', link: '/python-client/configuration' },
        { text: 'Basic Usage', link: '/python-client/basic-usage' },
        { text: 'Advanced Usage', link: '/python-client/advanced-usage' },
        { text: 'Best Practices', link: '/python-client/best-practices' },
      ]
    },
    {
      text: 'Integrations',
      collapsed: false,
      items: [
        {
          text: 'Stripe',
          collapsed: true,
          items: [
            { text: 'Authentication', link: '/integrations/stripe/authentication' },
            { text: 'Customers', link: '/integrations/stripe/customers' },
            { text: 'Payments', link: '/integrations/stripe/payments' },
            { text: 'Subscriptions', link: '/integrations/stripe/subscriptions' },
          ]
        },
        {
          text: 'HubSpot',
          collapsed: true,
          items: [
            { text: 'Authentication', link: '/integrations/hubspot/authentication' },
            { text: 'Contacts', link: '/integrations/hubspot/contacts' },
            { text: 'Deals', link: '/integrations/hubspot/deals' },
          ]
        },
      ]
    },
    {
      text: 'API Reference',
      collapsed: false,
      items: [
        { text: 'Client API', link: '/api-reference/client-api' },
        { text: 'Stripe API', link: '/api-reference/stripe-api' },
        { text: 'HubSpot API', link: '/api-reference/hubspot-api' },
      ]
    },
    {
      text: 'Contributing',
      collapsed: false,
      items: [
        { text: 'How to Contribute', link: '/contributing/how-to-contribute' },
        { text: 'Development Setup', link: '/contributing/development-setup' },
        { text: 'Coding Standards', link: '/contributing/coding-standards' },
        { text: 'Testing', link: '/contributing/testing' },
      ]
    },
    {
      text: 'Changelog',
      collapsed: false,
      items: [
        { text: 'Version History', link: '/changelog/version-history' },
        { text: 'Migration Guides', link: '/changelog/migration-guides' },
      ]
    },
  ];
}