import React from 'react';
import Button from '../button/Button';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import InfoCard from '../card/InfoCard';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="md:px-20 p-6 pt-20 flex items-center">
      <div className="flex flex-col gap-3 md:w-1/2 w-full">
        <h1 className="font-[700] text-black md:text-[50px] text-[35px]">
          Stay on top of your <span className="text-[#b49aeb]">Learning</span>
        </h1>
        <p className="text-[16px]">
          Track your progress, access expert resources, and master new skills at your own pace. keep your educational
          journey moving forward.
        </p>
        <Button
          label="Get Started"
          width="w-fit"
          buttonStyle="custom"
          height="h-[36px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-white bg-[#b49aeb] px-2 rounded-full"
          icon={<BsArrowUpRightCircleFill className="text-white text-[20px]" />}
          iconPosition="right"
        />
        <InfoCard
          title="Top Qualified Tutors"
          description="Industry standard courses"
          buttonText="Explore more"
          number="15"
        />
      </div>
      <div className="w-1/2 md:block hidden">
        <Image src="/hero.png" alt="heroimg" width={1000} height={1000} />
      </div>
    </section>
  );
};

export default Hero;
