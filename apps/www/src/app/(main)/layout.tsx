import { Footer } from './_components/Footer';
import { Header } from './_components/Header';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className='relative flex flex-col rounded-3xl border border-grey-line bg-grey-base'>
      <div className='absolute left-0 top-[68px] h-px w-full bg-grey-line' />

      <Header />

      <div className='relative mx-auto w-full max-w-screen-lg'>
        <div className='absolute -left-px top-0 h-full w-px bg-grey-line' />
        <div className='absolute left-1/3 top-0 h-full w-px border border-dashed border-grey-bg-hover' />
        <div className='absolute right-1/3 top-0 h-full w-px border border-dashed border-grey-bg-hover' />
        <div className='absolute -right-px top-0 h-full w-px bg-grey-line' />

        {children}
        <Footer />
      </div>

      <div className='absolute bottom-[68px] left-0 h-px w-full bg-grey-line' />
    </div>
  );
};

export default Layout;
