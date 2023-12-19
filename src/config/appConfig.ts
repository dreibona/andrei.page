const d = new Date()
const z = (n: number) => (n < 10 ? '0' : '') + n
const year = d.getFullYear()
const date = `${z(d.getDate())}/${z(d.getMonth() + 1)}/${year}`
export { date, year }

export const head = {
  url: 'https://andrei.page',
  title: 'Andrei Bonamin - UI Designer',
  description:
    "Explore the work of Andrei Bonamin's UI portfolio, showcasing creative design solutions and articles",
  author: 'Andrei Bonamin',
  keywords:
    'UI, UX, Digital Design, Product Design, Frontend, Motion, Portfolio, Articles, User Interface, User Experience',
  image: '../placeholder.jpg',
  locale: 'en',
  type: 'website',
  robot: true
}

export const navigation = [
  { label: 'Work', href: '/work/', ariaLabel: 'Work Page' },
  { label: 'Blog', href: '/blog/', ariaLabel: 'Blog Page' },
  { label: 'About', href: '/about/', ariaLabel: 'About Page' },
  { label: 'Contact', href: '/contact/', ariaLabel: 'Contact Page' }
]
