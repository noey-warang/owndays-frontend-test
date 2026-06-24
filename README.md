# owndays-frontend-test

A frontend demo project built with Next.js and TypeScript, showcasing a product listing page and a lookbook-style carousel.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Embla Carousel
- Radix UI
- Axios
- lucide-react

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`

## Project Structure

- `app/page.tsx` - main application page
- `features/products/components/ProductGrid.tsx` - product list grid component
- `features/products/components/Lookbook.tsx` - lookbook carousel component
- `features/products/api/products.ts` - API client for loading product data
- `components/ui` - UI primitives such as carousel and button
- `lib/axios.ts` - Axios instance configuration


