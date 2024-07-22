type Props = { children: React.ReactNode };

export const Block = ({ children }: Props) => {
  return <div className='grid grid-cols-3'>{children}</div>;
};
