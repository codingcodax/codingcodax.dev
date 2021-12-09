import { FC } from 'react';
import { Box, Button, Center, Heading, Text } from '@/components/ui';

import { Project } from 'types';

import Link from '../Link';

interface ProjectCardProps extends Project {}

const ProjectCard: FC<ProjectCardProps> = ({
  logo,
  title,
  description,
  tools,
  live,
  site,
  repo,
}) => {
  console.log(logo);

  return (
    <Box
      as='li'
      css={{
        maxWidth: '500px',
        border: '1px solid $dividerColor',
        borderRadius: '$xs',
      }}
    >
      <Center css={{ h: '$32', bg: '$headingColor' }}>{logo}</Center>

      <Box
        css={{
          p: '$8',
          pt: '$16',
          display: 'grid',
          gridTemplateRows: 'auto 2fr auto 1fr',
          gridRowGap: '$4',
        }}
      >
        <Heading as='h3' size={{ '@initial': '3xl', '@bp1': '4xl' }}>
          {title}
        </Heading>
        <Text>{description}</Text>

        <Box
          as='ul'
          css={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridColumnGap: '$4',
            justifyContent: 'start',
          }}
        >
          {tools.map((tool) => (
            <Box as='li' key={tool.name}>
              {tool.icon}
            </Box>
          ))}
        </Box>

        <Box
          css={{
            display: 'grid',
            gridAutoFlow: 'column',
            justifyContent: 'start',
            gridColumnGap: '$2',
          }}
        >
          {site && (
            <Link href={site}>
              <Button
                as='a'
                css={{ textDecoration: 'none' }}
                variant='primary'
                outlined
                target='_blank'
                rel='noopener noreferrer'
              >
                Visit Site
              </Button>
            </Link>
          )}

          {live && (
            <Link href={live}>
              <Button
                as='a'
                css={{ textDecoration: 'none' }}
                variant='primary'
                outlined
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Preview
              </Button>
            </Link>
          )}

          <Link href={repo}>
            <Button
              as='a'
              css={{ textDecoration: 'none' }}
              outlined
              target='_blank'
              rel='noopener noreferrer'
            >
              View Code
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
