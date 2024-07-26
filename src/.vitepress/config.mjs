import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Developers',
  description: '',

  dest: '../docs/',
  srcDir: './',
  base: '/usepolvo-docs/', //TODO: remove this when custom domain is set up

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    math: false,
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' }],
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
      '/reference/': { base: '/reference/', items: sidebarReference() }
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
      link: '/guide/introduction/overview',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/api/introduction',
      activeMatch: '/reference/'
    },
  ];
}
function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      link: '/introduction/overview',
      items: [
        {
          text: 'Overview',
          link: '/introduction/overview',
        },
        {
          text: 'Key Features',
          link: '/introduction/key-features',
        },
        {
          text: 'Getting Started',
          link: '/introduction/getting-started',
        },
      ],
    },
    {
      text: 'Installation',
      link: '/installation/prerequisites',
      items: [
        {
          text: 'Prerequisites',
          link: '/installation/prerequisites',
        },
        {
          text: 'Installing usepolvo',
          link: '/installation/installing-usepolvo',
        },
        {
          text: 'Configuration',
          link: '/installation/configuration',
        },
      ],
    },
  ];
}

function sidebarReference() {
  return [
    {
      text: 'API Documentation',
      link: '/api/introduction',
      items: [
        {
          text: 'Introduction to the API',
          link: '/api/introduction',
        },
        {
          text: 'Authentication',
          link: '/api/authentication',
        },
        {
          text: 'Endpoints',
          collapsed: true,
          items: [
            {
              text: 'General Endpoints',
              link: '/api/endpoints/general',
            },
            {
              text: 'Stripe Endpoints',
              link: '/api/endpoints/stripe',
            },
            {
              text: 'HubSpot Endpoints',
              link: '/api/endpoints/hubspot',
            },
            {
              text: 'Salesforce Endpoints',
              link: '/api/endpoints/salesforce',
            },
          ],
        },
        {
          text: 'Error Handling',
          link: '/api/error-handling',
        },
        {
          text: 'Rate Limiting',
          link: '/api/rate-limiting',
        },
      ],
    },
    {
      text: 'Python Client',
      link: '/python-client/introduction',
      items: [
        {
          text: 'Introduction to the Python Client',
          link: '/python-client/introduction',
        },
        {
          text: 'Installation',
          link: '/python-client/installation',
        },
        {
          text: 'Configuration',
          link: '/python-client/configuration',
        },
        {
          text: 'Usage',
          collapsed: true,
          items: [
            {
              text: 'Asynchronous Functions',
              link: '/python-client/usage/async-functions',
            },
            {
              text: 'Synchronous Functions',
              link: '/python-client/usage/sync-functions',
            },
          ],
        },
        {
          text: 'Example Code',
          link: '/python-client/example-code',
        },
        {
          text: 'Error Handling',
          link: '/python-client/error-handling',
        },
      ],
    },
    {
      text: 'CLI Tool',
      link: '/cli-tool/introduction',
      items: [
        {
          text: 'Introduction to the CLI Tool',
          link: '/cli-tool/introduction',
        },
        {
          text: 'Installation',
          link: '/cli-tool/installation',
        },
        {
          text: 'Configuration',
          link: '/cli-tool/configuration',
        },
        {
          text: 'Usage',
          collapsed: true,
          items: [
            {
              text: 'General Commands',
              link: '/cli-tool/usage/general-commands',
            },
            {
              text: 'Stripe Commands',
              link: '/cli-tool/usage/stripe-commands',
            },
            {
              text: 'HubSpot Commands',
              link: '/cli-tool/usage/hubspot-commands',
            },
            {
              text: 'Salesforce Commands',
              link: '/cli-tool/usage/salesforce-commands',
            },
          ],
        },
        {
          text: 'Example Commands',
          link: '/cli-tool/example-commands',
        },
        {
          text: 'Error Handling',
          link: '/cli-tool/error-handling',
        },
      ],
    },
    {
      text: 'Advanced Features',
      link: '/advanced-features/async-support',
      items: [
        {
          text: 'Asynchronous Support',
          link: '/advanced-features/async-support',
        },
        {
          text: 'Intelligent Rate Limiting',
          link: '/advanced-features/rate-limiting',
        },
        {
          text: 'Efficient Caching',
          link: '/advanced-features/caching',
        },
        {
          text: 'Robust Logging',
          link: '/advanced-features/logging',
        },
        {
          text: 'Secure Storage',
          link: '/advanced-features/secure-storage',
        },
      ],
    },
    {
      text: 'Contributing',
      link: '/contributing/how-to-contribute',
      items: [
        {
          text: 'How to Contribute',
          link: '/contributing/how-to-contribute',
        },
        {
          text: 'Code of Conduct',
          link: '/contributing/code-of-conduct',
        },
        {
          text: 'Reporting Issues',
          link: '/contributing/reporting-issues',
        },
        {
          text: 'Submitting Pull Requests',
          link: '/contributing/submitting-pull-requests',
        },
      ],
    },
    {
      text: 'FAQ',
      link: '/faq/general-questions',
      items: [
        {
          text: 'General Questions',
          link: '/faq/general-questions',
        },
        {
          text: 'Troubleshooting',
          link: '/faq/troubleshooting',
        },
      ],
    },
    {
      text: 'License',
      link: '/license/license-information',
      items: [
        {
          text: 'License Information',
          link: '/license/license-information',
        },
      ],
    },
    {
      text: 'Acknowledgments',
      link: '/acknowledgments/thanks-to-contributors',
      items: [
        {
          text: 'Thanks to Contributors',
          link: '/acknowledgments/thanks-to-contributors',
        },
      ],
    },
  ];
}