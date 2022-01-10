import { Project } from 'types';

import {
  chakraui,
  css,
  firebase,
  html,
  javascript,
  mdx,
  nextjs,
  nodejs,
  reactjs,
  sass,
  storybook,
} from './tools';
import {
  FirebaseIcon,
  HtmlIcon,
  JavaScriptIcon,
  LitreekIcon,
  Logo,
  MDXIcon,
  ReexJSIcon,
} from '@/components/icons';

const projects: Project[] = [
  {
    logo: LitreekIcon,
    title: 'Litreek',
    description:
      'Tree links app free 🤯, fast 😎, open-source 💪 and easy to customize 👌.',
    tools: [nextjs, sass],
    live: 'https://litreek.vercel.app/',
    repo: 'https://github.com/codingcodax/litreek/',
    featured: false,
  },
  {
    logo: MDXIcon,
    title: 'MDX Blog Kit',
    description:
      'Blog kit for developers 👨‍💻 built with Next JS, SEO optimized, light 🪶, and easy to customize 👌.',
    tools: [nextjs, chakraui, mdx],
    live: 'https://nextjs-mdx-blog-kit-nu.vercel.app/',
    repo: 'https://github.com/codingcodax/nextjs-mdx-blog-kit/',
    featured: false,
  },
  {
    logo: <ReexJSIcon css={{ h: '$12', color: '$backgroundColor' }} />,
    title: 'ReexJs CLI',
    description:
      'An interactive CLI automation tool 🛠️ for creating react.js and next.js projects most fast and efficiently. ⚛️',
    tools: [nodejs],
    site: 'https://codingcodax.github.io/reexjs-cli/',
    repo: 'https://github.com/codingcodax/reexjs-cli/',
    featured: true,
  },
  {
    logo: <Logo css={{ h: '$12', color: '$backgroundColor' }} />,
    title: 'Portfolio V1',
    description:
      'Personal website 🌐 built with Next JS and Chakra UI with my own blog 🖊️ and newsletter 📰.',
    tools: [nextjs, storybook, chakraui],
    live: 'https://codaxx.ml/',
    repo: 'https://github.com/codingcodax/portfolio-v1/',
    featured: true,
  },
  {
    logo: FirebaseIcon,
    title: 'Superchat',
    description:
      'Simple real-time chat app built with React JS ⚛️ and Firebase 🔥.',
    tools: [reactjs, firebase, sass],
    live: 'https://fosion-demos.web.app/',
    repo: 'https://github.com/codingcodax/superchat/',
    featured: false,
  },
  {
    logo: JavaScriptIcon,
    title: 'Calculator',
    description:
      'Simple calculator neumorphism design with pure JavaScript add SASS.',
    tools: [html, sass, javascript],
    live: 'https://codingcodax.github.io/neumorphism-calculator/',
    repo: 'https://github.com/codingcodax/neumorphism-calculator/',
    featured: false,
  },
  {
    logo: HtmlIcon,
    title: 'Fries Page',
    description:
      'Simple responsive website 🌐 for an imaginary fries restaurant 🍟 with only HTML and CSS.',
    tools: [html, css],
    live: 'https://codingcodax.github.io/fries-page/',
    repo: 'https://github.com/codingcodax/fries-page/',
    featured: false,
  },
];

export default projects;
