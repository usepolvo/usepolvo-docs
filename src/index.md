---
layout: home

title: polvo
titleTemplate: API Integration Toolkit for Developers

hero:
  text: Simplify Your API Integrations
  tagline: A unified, asynchronous interface for seamless third-party API integrations
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started/overview
    - theme: alt
      text: View on GitHub
      link: https://github.com/usepolvo
  image:
    src: /hero.png
    alt: polvo

features:
  - icon: 🔗
    title: Unified Async API Interface
    details: Interact with all supported services using consistent, asynchronous methods.
  - icon: ⚡
    title: Universal Async Support
    details: Enjoy non-blocking I/O operations for all integrations, boosting performance.
  - icon: 🛡️
    title: Smart Authentication
    details: Automatic handling of various auth methods with secure token storage.
  - icon: 🚦
    title: Intelligent Rate Limiting
    details: Built-in rate limit handling and retry logic across all integrations.
  - icon: 📊
    title: Universal Pagination
    details: Consistent data retrieval methods, regardless of the API's native approach.
  - icon: 🔍
    title: Standardized Error Handling
    details: Common error types and handling across all integrations for easier debugging.
  - icon: 🔔
    title: Webhook Management
    details: Unified webhook handling with built-in security and reliability features.
  - icon: 🌐
    title: Open Source
    details: Benefit from community-driven development and transparency.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>