import { Project } from '~/@types';
import { MiniIcon, SlugIcon, WeebnIcon } from '~/components/icons';
import DuckDuckGo from '~/components/icons/ddg';

import {
  headlessui,
  nextjs,
  prisma,
  radixui,
  tailwindcss,
  trpc,
  typescript,
} from './tools';

const projects: Project[] = [
  {
    logo: <WeebnIcon css={{ h: '$12', color: '$backgroundColor' }} />,
    title: 'weebn',
    description:
      'Level up your Notion with light weight weeb widgets fully cuztomizable and ready to use.',
    tools: [nextjs, tailwindcss, headlessui],
    live: 'https://weebn.codingcodax.dev/',
    repo: 'https://github.com/codingcodax/weebn/',
    featured: false,
  },
  {
    logo: <SlugIcon css={{ h: '$12', color: '$backgroundColor' }} />,
    title: 'Slug',
    description:
      'slug is an open source link managment platform to short your links made for devs.',
    tools: [nextjs, tailwindcss, typescript, trpc, prisma],
    live: 'https://slug.codingcodax.dev/',
    repo: 'https://github.com/codingcodax/slug/',
    featured: true,
  },
  {
    logo: <MiniIcon css={{ h: '$12', color: '$backgroundColor' }} />,
    title: 'mini',
    description:
      'An awesome collection of buttons, loaders, inputs and more built with tailwindcss, you can copy the source and open in tailwindcss playgroud.',
    tools: [nextjs, tailwindcss],
    live: 'https://mini.codingcodax.dev/',
    repo: 'https://github.com/codingcodax/mini/',
    featured: true,
  },
  {
    logo: <DuckDuckGo css={{ h: '$12', color: '$backgroundColor' }} />,
    title: 'DDG Themes',
    description:
      'Customize DuckDuckGo with your favorite theme, choose from a number of themes and install it.',
    tools: [nextjs, tailwindcss, radixui],
    live: 'https://ddg.codingcodax.dev/',
    repo: 'https://github.com/codingcodax/ddg-themes/',
    featured: false,
  },
];

export default projects;
