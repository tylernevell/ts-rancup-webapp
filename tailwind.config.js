module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-0.25em',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
      },
      colors: {
        primary: {
          hover: 'var(--primary-400)',
          default: 'var(--primary-500)',
          active: 'var(--primary-600)',
          focus: 'var(--primary-700)',
          selected: {
            hover: 'var(--primary-500)',
            default: 'var--primary-600)',
            active: 'var(--primary-700)',
            focus: 'var(--primary-800)',
          },
        },
        secondary: {
          hover: 'var(--secondary-400)',
          default: 'var(--secondary-500)',
          active: 'var(--secondary-600)',
          focus: 'var(--secondary-700)',
          selected: {
            hover: 'var(--secondary-500)',
            default: 'var--secondary-600)',
            active: 'var(--secondary-700)',
            focus: 'var(--secondary-800)',
          },
        },
        tertiary: {
          hover: 'var(--tertiary-400)',
          default: 'var(--tertiary-500)',
          active: 'var(--tertiary-600)',
          focus: 'var(--tertiary-700)',
          selected: {
            hover: 'var(--tertiary-500)',
            default: 'var--tertiary-600)',
            active: 'var(--tertiary-700)',
            focus: 'var(--tertiary-800)',
          },
        },
        accentA: {
          hover: 'var(--accentA-400)',
          default: 'var(--accentA-500)',
          active: 'var(--accentA-600)',
          focus: 'var(--accentA-700)',
          selected: {
            hover: 'var(--accentA-500)',
            default: 'var--accentA-600)',
            active: 'var(--accentA-700)',
            focus: 'var(--accentA-800)',
          },
        },
        accentB: {
          hover: 'var(--accentB-400)',
          default: 'var(--accentB-500)',
          active: 'var(--accentB-600)',
          focus: 'var(--accentB-700)',
          selected: {
            hover: 'var(--accentB-500)',
            default: 'var--accentB-600)',
            active: 'var(--accentB-700)',
            focus: 'var(--accentB-800)',
          },
        },
        on: {
          primary: {
            hover: 'var(--secondary-400)',
            default: 'var(--secondary-500)',
            active: 'var(--secondary-600)',
            focus: 'var(--secondary-700)',
            selected: {
              hover: 'var(--secondary-500)',
              default: 'var--secondary-600)',
              active: 'var(--secondary-700)',
              focus: 'var(--secondary-800)',
            },
          },
          secondary: {
            hover: 'var(--primary-400)',
            default: 'var(--primary-500)',
            active: 'var(--primary-600)',
            focus: 'var(--primary-700)',
            selected: {
              hover: 'var(--primary-500)',
              default: 'var--primary-600)',
              active: 'var(--primary-700)',
              focus: 'var(--primary-800)',
            },
          },
          tertiary: {
            hover: 'var(--primary-400)',
            default: 'var(--primary-500)',
            active: 'var(--primary-600)',
            focus: 'var(--primary-700)',
            selected: {
              hover: 'var(--primary-500)',
              default: 'var--primary-600)',
              active: 'var(--primary-700)',
              focus: 'var(--primary-800)',
            },
          },
          accentA: {
            hover: 'var(--primary-400)',
            default: 'var(--primary-500)',
            active: 'var(--primary-600)',
            focus: 'var(--primary-700)',
            selected: {
              hover: 'var(--primary-500)',
              default: 'var--primary-600)',
              active: 'var(--primary-700)',
              focus: 'var(--primary-800)',
            },
          },
          accentB: {
            hover: 'var(--primary-400)',
            default: 'var(--primary-500)',
            active: 'var(--primary-600)',
            focus: 'var(--primary-700)',
            selected: {
              hover: 'var(--primary-500)',
              default: 'var--primary-600)',
              active: 'var(--primary-700)',
              focus: 'var(--primary-800)',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
