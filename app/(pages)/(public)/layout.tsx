import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navBar';
import React, { ReactNode } from 'react';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#080F1C] w-full">
      <div className="md:px-10 px-4 md:pt-10 pt-4">
        <Navbar />
      </div>
      <div className="grow flex-1 h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
