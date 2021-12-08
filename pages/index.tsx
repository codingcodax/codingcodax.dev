import type { NextPage } from 'next';

import Hero from '@/components/pages/home/hero';
import FeaturedProjects from '@/components/pages/home/FeaturedProjects';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
