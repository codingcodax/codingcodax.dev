import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/components/icons';

const Socials = [
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
];

export default Socials;
