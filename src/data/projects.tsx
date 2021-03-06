import { Project } from '~/@types';
import {
  FirebaseIcon,
  LitreekIcon,
  Logo,
  MDXIcon,
  ReexJSIcon,
} from '~/components/icons';

import {
  chakraui,
  firebase,
  mdx,
  nextjs,
  nodejs,
  reactjs,
  sass,
  storybook,
} from './tools';

const projects: Project[] = [
  {
    logo: <LitreekIcon css={{ h: '$12', color: '$backgroundColor' }} />,
    title: 'Litreek',
    description:
      'Tree links app free 🤯, fast 😎, open-source 💪 and easy to customize 👌.',
    tools: [nextjs, sass],
    live: 'https://litreek.vercel.app/',
    repo: 'https://github.com/codingcodax/litreek/',
    featured: false,
  },
  {
    logo: <MDXIcon css={{ h: '$12', color: '$backgroundColor' }} />,
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
    logo: <FirebaseIcon css={{ h: '$12', color: '$backgroundColor' }} />,
    title: 'Superchat',
    description:
      'Simple real-time chat app built with React JS ⚛️ and Firebase 🔥.',
    tools: [reactjs, firebase, sass],
    live: 'https://fosion-demos.web.app/',
    repo: 'https://github.com/codingcodax/superchat/',
    featured: false,
  },
];

export default projects;
