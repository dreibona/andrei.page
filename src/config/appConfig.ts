const x = new Date()
const d = x.getDate() + 1 < 10 ? '0' + (x.getDate() + 1) : x.getDate() + 1
const m = x.getMonth() + 1 < 10 ? '0' + (x.getMonth() + 1) : x.getMonth() + 1
const year = x.getFullYear()
const date = d + '/' + m + '/' + year
export { date, year }

export const head = {
  url: 'https://andrei.page',
  title: 'Andrei Bonamin - UI Designer',
  description:
    "Explore the work of Andrei Bonamin's UI portfolio, showcasing creative design solutions and articles",
  author: 'Andrei Bonamin',
  keywords:
    'UI, UX, Digital Design, Product Design, Frontend, Motion, Portfolio, Articles, User Interface, User Experience',
  image: '/cover.jpg',
  locale: 'en',
  type: 'website',
  robot: true
}

export const nav = [
  { linkName: 'Work', linkPath: '/work/', ariaLabel: 'Work Page' },
  { linkName: 'Blog', linkPath: '/blog/', ariaLabel: 'Blog Page' },
  { linkName: 'About', linkPath: '/about/', ariaLabel: 'About me Page' },
  { linkName: 'Contact', linkPath: '/contact/', ariaLabel: 'Contact me Page' }
]
