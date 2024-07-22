type Props = { children: React.ReactNode };

export const DateLabel = ({ children }: Props) => {
  return (
    <span className='p-8 font-mono text-sm text-grey-text'>{children}</span>
  );
};
