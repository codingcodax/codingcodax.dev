import { FC } from 'react';
import { NextSeo } from 'next-seo';

import { description as defaultDescription, domain } from 'next-seo.config';

interface SeoProps {
  name: string;
  path: string;
  description?: string;
  ogImage?: string;
}

const Seo: FC<SeoProps> = ({
  name,
  path,
  description = defaultDescription,
  ogImage = domain + '/og.png',
}) => {
  const title = `${name} | Alexis Guzman`;
  const url = `${domain}${path}`;

  return (
    <NextSeo
      canonical={url}
      description={description}
      openGraph={{
        url,
        title,
        description,
        images: [{ url: ogImage, alt: title, height: 720, width: 1280 }],
      }}
      title={title}
    />
  );
};

export default Seo;
