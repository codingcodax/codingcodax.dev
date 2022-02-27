import { Links } from "types"
import {RSSIcon} from '@/components/icons'

const isActive = (actualRoute: string, href: string) => actualRoute === href;
const blogIsActive = (actualRoute: string, href: string) => actualRoute === '/blog/uses' ? false : actualRoute.includes(href);

export const mainRoutes: Links[] = [
  { name: 'Home', href: '/', isExternal: false, isActive },
  { name: 'About', href: '/about', isExternal: false, isActive },
  { name: 'Projects', href: '/projects', isExternal: false, isActive },
  { name: 'Blog', href: '/blog', isExternal: false, isActive: blogIsActive },
  { name: 'CV', href: 'https://read.cv/codingcodax', isExternal: true, isActive },
  { icon: <>RSS <RSSIcon css={{ ml: '$2', h: '$5', display: 'inline' }} /></>, href: '/rss/feed.xml', isExternal: false, isActive }
]

export const subRoutes: Links[] = [
  { name: 'Snippets', href: '/snippets', isExternal: false, isActive },
  { name: 'Community', href: '/community', isExternal: false, isActive },
  { name: 'Uses', href: '/blog/uses', isExternal: false, isActive },
]
