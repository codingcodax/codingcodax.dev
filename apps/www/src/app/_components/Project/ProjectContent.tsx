type Props = { children: React.ReactNode };

export const ProjectContent = ({ children }: Props) => {
  return (
    <div className='flex flex-col justify-center gap-2 p-8'>{children}</div>
  );
};
