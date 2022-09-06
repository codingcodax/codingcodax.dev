import { ReactNode } from 'react';

type Links = {
  name?: string;
  icon?: ReactNode;
  href: string;
  isExternal: boolean;
  isActive: (actualRoute: string, href: string) => boolean;
};

export default Links;
