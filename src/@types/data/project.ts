import { ReactNode } from 'react';

import { Tool } from '~/@types';

type Project = {
  logo: ReactNode;
  title: string;
  description: string;
  tools: Tool[];
  live?: string;
  site?: string;
  repo: string;
  featured: boolean;
};

export default Project;
