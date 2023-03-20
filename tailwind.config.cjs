/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte}'],
  theme: {
    extend: {
      screens: {
        xs: '540px',
        '3xl': '1920px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
