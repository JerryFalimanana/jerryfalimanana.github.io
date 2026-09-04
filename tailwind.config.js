/** Chaque couleur passe par une variable CSS pour que le thème bascule
 *  sans dupliquer les utilitaires. Les canaux « R G B » gardent le
 *  support des modificateurs d'opacité (bg-brand-500/10, etc.). */
const channel = (name) => `rgb(var(${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Brand system: Emerald is the identity, Lime is the highlight.
        brand: {
          300: channel('--brand-300'),
          400: channel('--brand-400'),
          500: channel('--brand-500'),
          600: channel('--brand-600'),
          700: channel('--brand-700'),
          800: channel('--brand-800'),
          900: channel('--brand-900'),
        },
        accent: {
          300: channel('--accent-300'),
          400: channel('--accent-400'),
          500: channel('--accent-500'),
          600: channel('--accent-600'),
        },
        ink: {
          950: channel('--ink-950'),
          900: channel('--ink-900'),
          850: channel('--ink-850'),
          800: channel('--ink-800'),
          700: channel('--ink-700'),
        },
        content: {
          primary: channel('--content-primary'),
          secondary: channel('--content-secondary'),
          muted: channel('--content-muted'),
          disabled: channel('--content-disabled'),
        },
        // Bordures et voiles : l'alpha est porté par le thème, car un
        // liseré lisible sur fond sombre et sur fond clair n'a pas la
        // même opacité.
        line: {
          subtle: 'var(--line-subtle)',
          DEFAULT: 'var(--line)',
          strong: 'var(--line-strong)',
        },
        veil: {
          DEFAULT: 'var(--veil)',
          strong: 'var(--veil-strong)',
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'Outfit',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-brand': 'var(--shadow-glow-brand)',
        'glow-accent': 'var(--shadow-glow-accent)',
        'glow-subtle': 'var(--shadow-glow-subtle)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(var(--dot-line) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgb(var(--brand-500) / 0.20), transparent)',
      },
    },
  },
  plugins: [],
};
