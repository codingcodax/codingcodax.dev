type Links = {
  name?: string;
  icon?: JSX.Element;
  href: string;
  isExternal: boolean;
  isActive: (actualRoute: string, href: string) => boolean;
}

export default Links;
