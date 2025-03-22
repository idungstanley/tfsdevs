import Navbar from './components/navBar';
import Hero from './components/hero';
import Features from './components/features';
import WhatMakesUsUnique from './components/what-makes-us-unique';
import CoursesWeOffers from './components/what-we-offer';
import Reviews from './components/reviews';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-[#F7F5FF] w-full">
      <Navbar />
      <div className="flex flex-col flex-1">
        <Hero />
        <Features />
        <WhatMakesUsUnique />
        <CoursesWeOffers />
        <Reviews />
      </div>
      <Footer/>
    </div>
  );
}
