type Props = { children: React.ReactNode };

export const Project = ({ children }: Props) => {
  return (
    <div className='relative grid grid-cols-3 border-b border-grey-line'>
      {children}
    </div>
  );
};
