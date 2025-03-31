import Navbar from './components/navBar';
import Features from './components/features';
import WhatMakesUsUnique from './components/what-makes-us-unique';
import CoursesWeOffers from './components/what-we-offer';
import Reviews from './components/reviews';
import Footer from './components/footer';
import HeroSection from './components/hero';
import ContactInfo from './components/contact-info';
import ScrollingLogos from './components/ScrollingLogos';
import StatsCounter from './components/StatsCounter';

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
        <div className="md:px-10 px-4 md:pt-10 pt-4">
          <Navbar />
        </div>
        <HeroSection />
        <Features />
      </div>
      <WhatMakesUsUnique />
      <div className="flex flex-col flex-1">
        <StatsCounter/>
        <CoursesWeOffers />
        <ScrollingLogos />
        <Reviews />
      </div>
      <ContactInfo />
      <Footer />
    </div>
  );
}
