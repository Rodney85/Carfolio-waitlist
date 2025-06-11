/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#B76D68', // Indian red
          600: '#a25f5a', // Darker shade
        },
        dark: {
          900: '#121420', // Rich black
          800: '#2C2B3C', // Raisin black
          700: '#403F4C', // Onyx
          600: '#1B2432', // Gunmetal
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'grid-fade': {
          '0%': { opacity: 0.8 },
          '50%': { opacity: 0.4 },
          '100%': { opacity: 0.8 }
        }
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
        'grid-fade': 'grid-fade 8s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
