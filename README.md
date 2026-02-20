# React Legal Firm Application (Kazakhstan)

A modern, multi-page React application built for a premium legal firm operating in the Republic of Kazakhstan. The application is designed with a strict, minimalist light theme, emphasizing professionalism, trust, and deep expertise in local jurisprudence.

## Technology Stack

*   **Core:** React 18, TypeScript
*   **Build Tool:** Vite
*   **Routing:** React Router DOM v6
*   **Styling:** Custom CSS (CSS Variables) with Light/Dark mode support
*   **Animations:** Framer Motion
*   **Internationalization (i18n):** i18next, react-i18next
*   **Icons:** Lucide React (SVG-based, no emojis)

## Key Features

1.  **Multi-page Architecture:**
    *   **Home:** Hero section, statistical achievements, service overview, and client testimonials.
    *   **About Us:** Company history, detailed profiles of managing partners, and an interactive FAQ section with accordion logic.
    *   **Practices (Services):** Comprehensive breakdown of legal services (Corporate Law, Tax Disputes, Asset Protection).
    *   **Cases:** A dedicated portfolio page highlighting successful legal defenses structured as Problem -> Solution -> Result.
    *   **Blog:** A knowledge base for publishing articles regarding changes in the tax code, labor law, etc.
    *   **Contact:** Detailed contact form, mapping details (Almaty), and precise local contact numbers.

2.  **Kazakhstan Localization:**
    *   Tailored specifically for the KZ market.
    *   Addresses and phone numbers follow local formats (+7 727, +7 701, Almaty, Esentai Tower).
    *   Legal terminology uses local abbreviations (SMES, DGD, TOO, AO).
    *   Currency logic utilizes the Kazakhstani Tenge (KZT).

3.  **Advanced UI/UX:**
    *   **Theme Context:** Global state management for switching between Light and Dark modes. Dark mode features a sophisticated graphite background with gold accents.
    *   **Framer Motion Integration:** Smooth page transitions and scroll-triggered animations for service cards and hero elements.
    *   **WhatsApp Integration:** A fixed, floating widget allowing instant communication via WhatsApp with pre-filled messages.
    *   **Legal Fee Calculator:** An interactive tool to estimate legal fees and state duties based on the type of service and the scale of the client's business.

4.  **Internationalization Ready:**
    *   Configured with `react-i18next`.
    *   Includes a functional language switcher (RU / KZ).
    *   The navigation and hero sections demonstrate live, zero-refresh translation. The architecture is fully prepared for a complete site translation.

## Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Despention/Legal.git
    cd Legal
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open `http://localhost:5173` in your browser.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate an optimized bundle in the `dist` directory, ready to be deployed to any static hosting service (Vercel, Netlify, Nginx, etc.).

## Project Structure

```text
src/
├── components/       # Reusable UI components (Layout, ThemeToggle, WhatsAppWidget)
├── context/          # React Context providers (ThemeContext)
├── i18n/             # Localization configuration and JSON dictionaries
├── pages/            # Top-level route components (Home, About, Cases, etc.)
├── App.tsx           # Main application shell and routing configuration
├── index.css         # Global styles, variables, and typography rules
└── main.tsx          # Application entry point
```

## Design Philosophy

The design strictly avoids the use of typical emojis, opting instead for professional SVG icons from the `lucide-react` library. The primary color palette was chosen to evoke stability and authority:
*   **Primary:** Graphite / Deep Black (#1A1A1A)
*   **Accent:** Crimson Red (#8B0000) for the light theme, Elegant Gold (#D4AF37) for the dark theme.
*   **Background:** Clean White (#FFFFFF) transitioning to Deep Grey (#121212) in dark mode.

## License

This project is proprietary and confidential.
