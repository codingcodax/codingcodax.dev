import CurrentlyBuilding from '@/components/common/CurrentlyBuilding';
import { Heading, Text } from '@/components/ui';

const Projects = () => {
  return (
    <CurrentlyBuilding>
      <Heading>Projects 🎲</Heading>
      <Text>
        This page will contain a list of projects I&apos;ve made or have worked
        on.
      </Text>

      <Text>
        Each project will contain a summary, live link (if applicable) and a
        link to the project repository.
      </Text>
    </CurrentlyBuilding>
  );
};

export default Projects;
