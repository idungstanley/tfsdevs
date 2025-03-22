import React from 'react';
import InfoCardWithIcon from '../card/InfoCardWithIcon';
import { MdOfflineBolt } from 'react-icons/md';
import { FaGlobeAfrica } from 'react-icons/fa';
import { CgTrack } from 'react-icons/cg';

const Features = () => {
  return (
    <section className="md:px-20 md:py-6 pb-10 p-6 flex flex-col gap-4">
      <div className="md:w-1/2 w-full flex flex-col gap-2">
        <h1 className="font-[700] text-black md:text-[45px] text-[30px]">
          A simple way to <span className="text-[#b49aeb]">Become and Discover</span> your potential
        </h1>
        <p className="text-[16px]">
          Track your progress, access expert resources, and master new skills at your own pace. keep your educational
          journey moving forward.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row md:items-center justify-start gap-6">
        <InfoCardWithIcon
          styledHeading={
            <h1 className="text-xl font-bold text-black">
              Simplified <span className="text-[#b49aeb]">Learning Experience</span>
              <span></span>
            </h1>
          }
          description="We offer a streamlined, easy-to-use platform that simplifies the process of becoming a student and finding expert instructors."
          buttonText="Explore more"
          number="15"
          icon={<MdOfflineBolt className="text-[40px] text-[#7655CD]" />}
        />
        <InfoCardWithIcon
          styledHeading={
            <h1 className="text-xl font-bold text-black">
              Global <span className="text-[#b49aeb]"> Access to Certified </span>
              Tutors
            </h1>
          }
          description="Our platform connects learners with certified educators from around the world, providing diverse perspectives"
          buttonText="Explore more"
          number="15"
          icon={<FaGlobeAfrica className="text-[40px] text-[#7655CD]" />}
        />
        <InfoCardWithIcon
          styledHeading={
            <h1 className="text-xl font-bold text-black">
              Track your <span className="text-[#b49aeb]"> Learning Progress</span>
            </h1>
          }
          description="Stay on top of your educational step with tools that help you monitor your progress and stay focused on your goals"
          buttonText="Explore more"
          number="15"
          icon={<CgTrack className="text-[40px] text-[#7655CD]" />}
        />
      </div>
    </section>
  );
};

export default Features;
