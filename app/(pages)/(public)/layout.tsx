import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navBar';
import React, { ReactNode } from 'react';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#080F1C] w-full">
      <div>
        <div className="md:px-10 px-4 md:pt-10 pt-4">
          <Navbar sticky />
        </div>
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
