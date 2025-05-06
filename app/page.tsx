import Navbar from './components/navBar';
import Features from './components/features';
import WhatMakesUsUnique from './components/what-makes-us-unique';
// import CoursesWeOffers from './components/what-we-offer';
import Reviews from './components/reviews';
import Footer from './components/footer';
import HeroSection from './components/hero';
// import ContactInfo from './components/contact-info';
// import ScrollingLogos from './components/ScrollingLogos';
import { RemoteWorldMap } from './components/remote-map';
import Integrations from './components/Integrations';
import { FeaturesSection } from './components/what-makes-us-unique/Features';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#111111] w-full">
      <div className="bg-cover bg-no-repeat">
        <div className="md:px-10 px-4 pt-4">
          <Navbar />
        </div>
        <HeroSection />
        <Features />
      </div>
      <RemoteWorldMap />
      <WhatMakesUsUnique />
      <div className="flex flex-col flex-1">
        <FeaturesSection />
        {/* <CoursesWeOffers /> */}
        {/* <ScrollingLogos /> */}
        <Integrations />
        <Reviews />
      </div>
      {/* <ContactInfo /> */}
      <Footer />
    </div>
  );
}
