type Props = { children: React.ReactNode };

export const BlockContent = ({ children }: Props) => {
  return (
    <div className='col-span-2 grid-cols-subgrid divide-y divide-dashed divide-grey-line bg-grey-base pl-px md:bg-transparent'>
      {children}
    </div>
  );
};
