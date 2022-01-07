import { Grid } from '@/components/ui';

import { Tool } from 'types';

import * as tools from '@/data/tools';

import Item from './Item';

const Skills = () => {
  const skills = Object.values(tools);

  return (
    <Grid
      as='ul'
      css={{
        gap: '$6',
        gridTemplateColumns: 'repeat(2, 1fr)',
        '@bp1': { gridTemplateColumns: 'repeat(3, 1fr)' },
        '@bp2': { gridTemplateColumns: 'repeat(4, 1fr)' },
      }}
    >
      {skills.map((skill: Tool) => (
        <Item key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </Grid>
  );
};

export default Skills;
