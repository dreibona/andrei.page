/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte}'],
  theme: {
    colors: {
      'radical-red': {
        50: '#fff1f4',
        100: '#ffe4ea',
        200: '#ffccda',
        300: '#fea3bc',
        400: '#fd6f99',
        500: '#f62e6e',
        600: '#e41a64',
        700: '#c01055',
        800: '#a1104e',
        900: '#8a1148'
      },
      'hunter-green': {
        50: '#eefff2',
        100: '#d7ffe3',
        200: '#b1ffca',
        300: '#75ffa2',
        400: '#31f771',
        500: '#07e04f',
        600: '#00ba3d',
        700: '#03862f',
        800: '#09722d',
        900: '#0a5d28'
      },
      'eminence-purple': {
        50: '#faf6fe',
        100: '#f2eafd',
        200: '#e7d9fb',
        300: '#d4bbf7',
        400: '#ba8ff1',
        500: '#a065e7',
        600: '#8945d8',
        700: '#7131b8',
        800: '#632e9b',
        900: '#52267d'
      },
      'gainsboro-grey': {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
      },
      'moon-black': '#000000',
      'moon-white': '#ffffff'
    },
    extend: {
      screens: {
        xs: '540px',
        '3xl': '1920px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
