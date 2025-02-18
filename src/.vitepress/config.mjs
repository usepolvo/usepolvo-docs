import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Polvo',
  description: 'Build Intelligent API Integrations',

  dest: '../docs/',
  srcDir: './',
  lastUpdated: false,
  cleanUrls: true,

  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['meta', { name: 'theme-color', content: '#1255FE' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Polvo' }],
  ],

  themeConfig: {
    logo: { light: '/logo.png', dark: '/logo-dark.png'},
    siteTitle: false,
    
    sidebar: {
      '/': { base: '/', items: mainSidebar() }
    },
    
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/usepolvo'
      }
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: `Made with 💜 in Brazil © ${new Date().getFullYear()} polvo`,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/usepolvo' }
    ],
  }
})

function mainSidebar() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'Installation', link: '#installation' }
      ]
    },
    {
      text: 'Core Concepts',
      items: [
        { text: 'Brain System', link: '#brain-system' },
        { text: 'Tentacle Framework', link: '#tentacle-framework' },
        { text: 'Built-in Features', link: '#built-in-features' }
      ]
    },
    {
      text: 'Examples',
      items: [
        { text: 'Traditional Integration', link: '#traditional-integration' },
        { text: 'AI-Powered Integration', link: '#ai-powered-integration' },
        { text: 'Custom Tentacles', link: '#custom-tentacles' }
      ]
    },
    {
      text: 'Setup & Help',
      items: [
        { text: 'Environment Setup', link: '#environment-setup' },
        { text: 'Next Steps', link: '#next-steps' },
        { text: 'Troubleshooting', link: '#troubleshooting' }
      ]
    }
  ]
}