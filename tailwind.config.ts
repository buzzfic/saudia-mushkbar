import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from the live WordPress site's Elementor global kit
 * (wp-content/uploads/elementor/css/post-41.css). Colours and the type scale
 * are the site's own — nothing here is invented.
 *
 * The palette is deliberately narrow: one hue family (brand teal) carries
 * structure and text, one warm accent (peach) provides contrast, and red is
 * reserved for the call-the-office action. The kit's olive-gold and mint were
 * dropped — with teal, peach and red already in play they made a fourth and
 * fifth hue competing on the same screen.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        /** #2F4749 — deep teal, the primary brand colour. */
        brand: {
          DEFAULT: "#2F4749",
          50: "#F2F6F6",
          100: "#DFE9E9",
          200: "#BFD2D2",
          300: "#93B0B1",
          400: "#628788",
          500: "#446365",
          600: "#2F4749",
          700: "#273B3D",
          800: "#1F2E30",
          900: "#182324",
        },
        /**
         * #F7C99B — the single warm accent. `soft` tints panels, `strong` is
         * the readable end of the same family, used for rating stars and small
         * decorative marks.
         */
        accent: {
          DEFAULT: "#F7C99B",
          soft: "#FEF1E9",
          strong: "#EBA96B",
        },
        /**
         * #EA292D — reserved. The original site set the Medicare announcement
         * headline in this red; here it also marks the one action that matters
         * most, calling the office. Nothing else uses it.
         */
        alert: "#EA292D",
        cream: "#FCF7ED",
        ink: "#272626",
        body: "#625A53",
        canvas: "#FDFCFA",
        hairline: "#EAE6DF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Cambria", "serif"],
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Fluid heading scale matching the WordPress kit's desktop sizes
        // (h1 76px, h2 60px, h3 46px, h4 32px) with sensible mobile floors.
        "display-1": ["clamp(2.25rem, 1.35rem + 4.5vw, 4.75rem)", { lineHeight: "1.06", letterSpacing: "-0.01em" }],
        "display-2": ["clamp(1.875rem, 1.2rem + 3.4vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-3": ["clamp(1.625rem, 1.2rem + 2.1vw, 2.875rem)", { lineHeight: "1.15" }],
        "display-4": ["clamp(1.375rem, 1.1rem + 1.1vw, 2rem)", { lineHeight: "1.25" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.14em" }],
      },
      borderRadius: {
        card: "0.5rem",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(39, 38, 38, 0.04), 0 8px 24px -12px rgba(47, 71, 73, 0.18)",
        "card-hover": "0 2px 4px rgba(39, 38, 38, 0.05), 0 18px 40px -18px rgba(47, 71, 73, 0.28)",
        lift: "0 24px 60px -30px rgba(47, 71, 73, 0.45)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "overlay-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "overlay-out": { from: { opacity: "1" }, to: { opacity: "0" } },
        "sheet-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "sheet-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "overlay-in": "overlay-in 0.2s ease-out",
        "overlay-out": "overlay-out 0.15s ease-in",
        "sheet-in": "sheet-in 0.28s cubic-bezier(0.32, 0.72, 0, 1)",
        "sheet-out": "sheet-out 0.2s cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
