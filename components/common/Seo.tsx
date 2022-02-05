import { FC } from 'react';
import { NextSeo } from 'next-seo';

import { domain } from 'next-seo.config';

interface SeoProps {
  name: string;
  path: string;
}

const Seo: FC<SeoProps> = ({ name, path }) => {
  const title = `${name} | Alexis Guzman`;
  const url = `${domain}${path}`;

  return <NextSeo title={title} canonical={url} openGraph={{ url, title }} />;
};

export default Seo;
