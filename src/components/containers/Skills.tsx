import { Tool } from '~/@types';
import * as tools from '~/data/tools';
import { Grid } from '~/components/ui';
import { Skill } from '~/components/atoms';

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
        <Skill key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </Grid>
  );
};

export default Skills;
