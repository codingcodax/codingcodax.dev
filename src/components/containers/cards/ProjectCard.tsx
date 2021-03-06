import { FC } from 'react';

import { Project } from '~/@types';
import { Box, Button, Center, Heading, Text } from '~/components/ui';
import { Link } from '~/components/atoms';

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
  return (
    <Box
      as='li'
      css={{
        maxWidth: '500px',
        bg: '$subtleBackground',
        border: '1px solid $normalBorder',
        borderRadius: '$sm',
        overflow: 'hidden',
      }}
    >
      <Center css={{ h: '$32', bg: '$highTextColor' }}>{logo}</Center>

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
            <Box key={tool.name} as='li' css={{ h: '$6' }}>
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
                rel='noopener noreferrer'
                target='_blank'
                variant='secondary'
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
                rel='noopener noreferrer'
                target='_blank'
                variant='secondary'
              >
                Live Preview
              </Button>
            </Link>
          )}

          <Link href={repo}>
            <Button
              as='a'
              css={{ textDecoration: 'none' }}
              rel='noopener noreferrer'
              target='_blank'
              variant='secondary'
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
