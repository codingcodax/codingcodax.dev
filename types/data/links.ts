type Links = {
  name: string;
  href: string;
  isExternal: boolean;
  isActive: (actualRoute: string, href: string) => boolean;
}

export default Links;
