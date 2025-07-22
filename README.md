
# Rare Clothing – E‑commerce Frontend

Single‑page web shop for the Rare Clothing brand. Goals: ultra‑fast build times with **Vite** + **Tailwind**, atomic styling, and API‑ready components for any headless backend (Strapi, Shopify, etc.).

| Section | Details |
|---------|---------|
| **Goal** | PWA‑ready shop (catalog + cart); open API layer for any backend (Strapi, Shopify, etc.). |
| **Stack** | Vite + React, TailwindCSS, HeroIcons, GitHub Actions (CI) → ACR, Helm chart → AKS Dev. |
| **Status** | MVP (product grid + cart) |

## Roadmap 🚀
- [x] Product listing & cart context  
- [x] GitHub Actions CI (lint, unit tests)  
- [ ] Dockerfile multistage + push to ACR  
- [ ] Helm chart & Ingress (dev namespace)  
- [ ] Stripe checkout integration  
- [ ] Lighthouse score > 95 mobile  

## Quick start
```bash
git clone https://github.com/mcapostol/Rare-Clothing-Web
npm i
npm run dev            # http://localhost:5173
```

![CodeQL](https://github.com/mcapostol/Rare-Clothing-Web/actions/workflows/codeql.yml/badge.svg)
