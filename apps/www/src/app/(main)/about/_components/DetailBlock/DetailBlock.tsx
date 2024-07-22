type Props = { children: React.ReactNode };

export const DetailBlock = ({ children }: Props) => {
  return <div className='p-8'>{children}</div>;
};
