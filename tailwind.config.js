/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Biomimicry Organic Tech + Gold Chrome Luxe
        cream: {
          DEFAULT: '#F7F3EC',
          warm: '#EEE7D8',
          deep: '#E4D9C4',
        },
        charcoal: {
          DEFAULT: '#1A1C18',
          deep: '#0E0E0A',
        },
        olive: '#7A7860',
        sage: {
          DEFAULT: '#4A5E4F',
          light: '#6B8C72',
          mist: '#C2D8C6',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C97A',
        },
        chrome: {
          DEFAULT: '#9EACAC',
          light: '#C8D4D4',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'bungee': ['Bungee Hairline', 'cursive'],
      },
      letterSpacing: {
        'organic': '0.25em',
        'wide-organic': '0.3em',
      },
      borderRadius: {
        'organic': '60% 40% 55% 45% / 45% 55% 45% 55%',
        'organic-alt': '45% 55% 40% 60% / 55% 45% 55% 45%',
        'seed': '70% 30% 65% 35% / 35% 65% 35% 65%',
        'water': '50% 50% 50% 50% / 60% 60% 40% 40%',
      },
      animation: {
        'breathe': 'breathe 8s ease-in-out infinite',
        'breathe-slow': 'breathe-slow 12s ease-in-out infinite',
        'breathe-float': 'breathe-float 10s ease-in-out infinite',
        'organic-pulse': 'organic-pulse 6s ease-in-out infinite',
        'cell-divide': 'cell-divide 8s ease-out infinite',
      },
      keyframes: {
        'breathe': {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.03) translateY(-8px)' },
        },
        'breathe-slow': {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.05) translate(10px, -15px)' },
        },
        'breathe-float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '0.6' },
        },
        'organic-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.08)' },
        },
        'cell-divide': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'scale(1.2)', opacity: '0' },
        },
      },
      transitionDuration: {
        'organic': '700ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'organic': 'ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
