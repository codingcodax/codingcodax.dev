import { Socials } from '@/types/';

import {
  GitHubIcon,
  LinkedInIcon,
  PolyworkIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/components/icons';

const socials: Socials[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/codingcodax/',
    icon: <GitHubIcon css={{ h: '$6' }} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codax/',
    icon: <LinkedInIcon css={{ h: '$6' }} />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/codingcodax',
    icon: <TwitterIcon css={{ h: '$6' }} />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ',
    icon: <YouTubeIcon css={{ h: '$6' }} />,
  },
  {
    name: 'Polywork',
    href: 'https://www.polywork.com/codingcodax',
    icon: <PolyworkIcon css={{ h: '$6' }} />,
  }
];

export default socials;
