import Link from 'next/link';
import Logo from './components/sidebar/Logo';

export const metadata = {
  title: 'Page Not Found || TheFullSnackDevs',
  description: 'TheFullSnackDevs - Page not found'
};

const Notfound = () => {
  return (
    <>
      <div
        className="relative flex items-center justify-center h-screen px-4 text-center bg-center bg-no-repeat bg-cover dark:text-white bg-white dark:bg-brand-dark"
        data-aos="fade"
      >
        <div className="content">
          <div className="fixed transform -translate-x-1/2 top-4 left-1/2">
            <Logo expanded />
          </div>
          {/* End logo */}
          <h1 className="font-black text-[125px] leading-none tracking-wider md:text-[80px]">404!</h1>
          <p className="text-lg font-medium my-7">The page you are looking for could not be found.</p>
          <Link
            className="bg-brand-base text-white transition duration-200 ease-out hover:text-black relative text-center rounded-lg px-[35px] py-[18px]"
            href="/feeds"
          >
            BACK TO HOME
          </Link>
        </div>
        {/* End .content */}
      </div>
    </>
  );
};

export default Notfound;
