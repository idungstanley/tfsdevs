import Navbar from './components/navBar';
import Hero from './components/hero';
import Features from './components/features';
import WhatMakesUsUnique from './components/what-makes-us-unique';
import CoursesWeOffers from './components/what-we-offer';
import Reviews from './components/reviews';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#F7F5FF] w-full">
      <div
        className="bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-img.webp')",
          backgroundPosition: '100 center',
          backgroundSize: '100 100'
        }}
      >
        <div
          className="px-10 pt-10"
        >
          <Navbar />
        </div>
        <Hero />
      </div>
      <div className="flex flex-col flex-1">
        <Features />
        <WhatMakesUsUnique />
        <CoursesWeOffers />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}
