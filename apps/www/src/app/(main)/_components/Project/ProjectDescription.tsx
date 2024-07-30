type Props = { children: React.ReactNode };

export const ProjectDescription = ({ children }: Props) => {
  return <p className='text-sm text-grey-text'>{children}</p>;
};
