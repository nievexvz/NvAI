/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: [
          "Space Grotesk",
          "Montserrat",
          "Inter",
          "Segoe UI",
          "sans-serif"
        ],
        inter: [
          'Inter', 
          "-apple-system", 
          "BlinkMacSystemFont", 
          "sans-serif"
        ]
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        dark: {
          100: '#1e1e2e',
          200: '#181825',
          300: '#11111b',
          400: '#0a0a0f'
        },
        primary: {
          100: '#89b4fa',
          200: '#74c7ec',
          300: '#89dceb',
          400: '#94e2d5'
        },
        text: {
          light: '#cdd6f4',
          muted: '#a6adc8'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
