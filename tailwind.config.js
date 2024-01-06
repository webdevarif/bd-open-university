/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': 'var(--ff-primary)',
      'serif': 'var(--ff-primary)',
      'mono': 'var(--ff-primary)',
      'display': 'var(--ff-primary)',
      'body': 'var(--ff-primary)',
      'primary': 'var(--ff-primary)',
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "980px",
      xl: "1080px",
      "2xl": "1320px",
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      colors: {
        'primary': '#003A7E',
        'primary-light': '#225E9D',
        'primary-dark': '#00234B',
        'dark': '#232323',
      },
    },
  },
  plugins: [],
}
