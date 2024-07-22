type Props = { children: React.ReactNode };

export const BlockContent = ({ children }: Props) => {
  return <div className='col-span-2 grid-cols-subgrid p-px'>{children}</div>;
};
