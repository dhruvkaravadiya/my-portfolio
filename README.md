# Dhruv's Portfolio

A responsive personal portfolio built to present projects, technical skills, services, and ways to get in touch in one focused, interactive experience.

The site uses a clean visual system, animated UI details, responsive navigation, and reusable section components to keep the presentation polished on both large and small screens.

## Highlights

- Hero section introducing the portfolio and personal brand
- Project showcase with dedicated project cards
- Skills section for presenting the technology toolkit
- Services section describing areas of expertise
- Responsive top navigation and floating navigation on larger screens
- Animated marquee and motion effects powered by Framer Motion
- Reusable UI components styled with Tailwind CSS and NextUI

## Tech Stack

- [Next.js](https://nextjs.org/) 14 with the App Router
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextUI](https://nextui.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- Node.js 18.17 or newer
- npm, yarn, pnpm, or Bun

### Installation

Clone the repository, move into the project directory, and install dependencies:

```bash
git clone <your-repository-url>
cd my-portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will refresh automatically as you edit the source files.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm start` | Runs the production build locally |
| `npm run lint` | Runs the Next.js lint command |

## Project Structure

```text
src/
├── app/
│   ├── globals.css       # Global styles and Tailwind layers
│   ├── layout.tsx        # Root layout and metadata
│   └── page.tsx          # Portfolio page composition
├── assets/               # Local visual assets
└── components/
	├── sections/         # Hero, projects, skills, services, stats, and footer
	└── *.tsx             # Shared navigation and UI components
```

## Customization

Most portfolio content can be updated in the components under [`src/components/sections`](src/components/sections). The main page composition and section anchors live in [`src/app/page.tsx`](src/app/page.tsx). Global colors, typography, spacing, and responsive styles are defined in [`src/app/globals.css`](src/app/globals.css) and the Tailwind configuration.

Before deploying, update the metadata in [`src/app/layout.tsx`](src/app/layout.tsx), replace placeholder links or project details, and add your own repository URL above.

## Production Build

Verify the application locally with a production build:

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to [Vercel](https://vercel.com/), the platform created by the Next.js team. Import the repository, keep the detected Next.js settings, and deploy. Other hosts that support Node.js can run the same `npm run build` and `npm start` commands.

## License

This portfolio is a personal project. Add a license here if you plan to distribute or reuse the source code.
