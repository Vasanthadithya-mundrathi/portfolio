/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          darker: '#0a0a0f',
          dark: '#1a1a2e',
          light: '#2a2a3e',
          lighter: '#3a3a4e'
        },
        neon: {
          green: '#39FF14',
          blue: '#00ffff',
          pink: '#ff00ff',
          red: '#ff0000'
        }
      },
      fontFamily: {
        cyber: ['Share Tech Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif']
      },
      animation: {
        'glitch-skew': 'glitch 4s infinite linear alternate-reverse',
        'scanline': 'scanline 6s linear infinite',
        'matrix': 'matrix 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'cyber-spin': 'cyber-spin 10s linear infinite',
        'blink': 'blink 1s step-end infinite'
      },
      boxShadow: {
        'neon-green': '0 0 5px theme(colors.neon.green), 0 0 20px theme(colors.neon.green)',
        'neon-blue': '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
        'neon-pink': '0 0 5px theme(colors.neon.pink), 0 0 20px theme(colors.neon.pink)'
      },
      backgroundImage: {
        'cyber-grid': `radial-gradient(theme(colors.neon.green) 1px, transparent 1px)`,
        'cyber-grid-dense': `radial-gradient(theme(colors.neon.green) 0.5px, transparent 0.5px)`
      },
      backgroundSize: {
        'cyber-grid': '30px 30px',
        'cyber-grid-dense': '20px 20px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addBase, theme }) {
      addBase({
        'html': {
          backgroundColor: theme('colors.cyber.darker'),
          color: theme('colors.neon.green'),
          fontFamily: theme('fontFamily.cyber')
        }
      })
    }
  ]
}
