import {
  HtmlIcon,
  CSSIcon,
  SASSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactJSIcon,
  NextJSIcon,
  NodeJSIcon,
  ChakraUIIcon,
  FirebaseIcon,
  StorybookIcon,
  MDXIcon,
  AlanAIIcon,
  FigmaIcon,
} from '@/components/icons';

import { Tool } from 'types';

export const html: Tool = {
  name: 'HTML5',
  icon: <HtmlIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const css: Tool = {
  name: 'CSS3',
  icon: <CSSIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const sass: Tool = {
  name: 'SASS',
  icon: <SASSIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const javascript: Tool = {
  name: 'JavaScript',
  icon: <JavaScriptIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const typescript: Tool = {
  name: 'TypeScript',
  icon: <TypeScriptIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const reactjs: Tool = {
  name: 'React JS',
  icon: <ReactJSIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const nextjs: Tool = {
  name: 'Next JS',
  icon: <NextJSIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const nodejs: Tool = {
  name: 'Node JS',
  icon: <NodeJSIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const chakraui: Tool = {
  name: 'Chakra UI',
  icon: <ChakraUIIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const firebase: Tool = {
  name: 'Firebase',
  icon: <FirebaseIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const storybook: Tool = {
  name: 'Storybook',
  icon: <StorybookIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const mdx: Tool = {
  name: 'MDX',
  icon: <MDXIcon css={{ color: '$headingColor' }} />,
};

export const alanai: Tool = {
  name: 'MDX',
  icon: <AlanAIIcon css={{ h: '$full', color: '$headingColor' }} />,
};

export const figma: Tool = {
  name: 'Figma',
  icon: <FigmaIcon css={{ h: '$full', color: '$headingColor' }} />,
};
