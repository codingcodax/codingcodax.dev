type Props = { children: React.ReactNode };

export const Project = ({ children }: Props) => {
  return (
    <div className='group relative grid grid-cols-3 border-b border-grey-line'>
      {children}
    </div>
  );
};
