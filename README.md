# Aniekan portfolio

React, Vite, Tailwind CSS v4, Hugeicons, and Motion foundation for the portfolio.

## Run

```sh
npm install
npm run dev
```

Use `npm run build` and `npm run lint` to check changes.

## Structure

- `src/components/layout/` — Hero navigation
- `src/components/ui/` — theme toggle; add other components when their designs are defined
- `src/sections/` — Hero and future portfolio sections
- `src/pages/` — future page compositions
- `src/data/` — portfolio content and shared data
- `src/hooks/` — reusable React hooks
- `src/assets/` — imported media assets
- `src/styles/` — theme tokens and global styles

`src/styles/tokens.css` defines the light and dark colors, typography, and responsive spacing. The Hero and navigation are styled with Tailwind utilities; `src/styles/global.css` contains only document-level styles. The theme follows the system preference until the visitor toggles it; the choice is then saved in local storage. `MotionConfig` respects reduced motion preferences.

The app currently contains the Hero and its responsive navigation. The About, Case Studies, Expertise, and Contact links are anchors for sections that have yet to be built. Add the remaining portfolio sections and other UI components after their designs are defined.
