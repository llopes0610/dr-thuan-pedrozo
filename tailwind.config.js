/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grafite: "var(--color-grafite)",
        "grafite-light": "var(--color-grafite-light)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        gold: "var(--color-gold)",
        "gold-soft": "var(--color-gold-soft)",
        "gold-muted": "var(--color-gold-muted)",
      },
      spacing: {
        section: "var(--space-section)",
        "section-sm": "var(--space-section-sm)",
        gap: "var(--space-gap)",
      },
      fontSize: {
        h1: "var(--font-size-h1)",
        h2: "var(--font-size-h2)",
        h3: "var(--font-size-h3)",
        h4: "var(--font-size-h4)",
        body: "var(--font-size-body)",
        small: "var(--font-size-small)",
      },
      borderRadius: {
        soft: "var(--radius-soft)",
        medium: "var(--radius-medium)",
        card: "var(--radius-card)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        gold: "var(--shadow-gold)",
      },
      transitionTimingFunction: {
        soft: "var(--transition-soft)",
        smooth: "var(--transition-smooth)",
      },
    },
  },
  plugins: [],
};
