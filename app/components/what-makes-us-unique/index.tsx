import React from 'react';
import Button from '../button/Button';
import { GrCertificate } from 'react-icons/gr';
import { MdOutlineRecordVoiceOver, MdOutlineSupportAgent } from 'react-icons/md';
import { PiChalkboardTeacherFill, PiStudentBold } from 'react-icons/pi';

const WhatMakesUsUnique = () => {
  return (
    <section className="w-full flex-col flex gap-4 bg-white md:p-20 p-6">
      <h1 className="font-[700] text-black md:text-[45px] text-[30px]">
        What Makes Us <span className="text-[#b49aeb]">Unique</span>
      </h1>
      <div className="flex flex-col md:flex-row w-full md:items-center gap-4 flex-wrap">
        <Button
          label="Certification"
          width="md:w-fit w-full"
          buttonStyle="custom"
          height="h-[36px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-gray-700 bg-[#F7F5FF] px-2 rounded-full"
          icon={<GrCertificate className="text-gray-700 text-[20px]" />}
          iconPosition="right"
        />
        <Button
          label="24/7 Support"
          width="md:w-fit w-full"
          buttonStyle="custom"
          height="h-[36px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-gray-700 bg-[#F7F5FF] px-2 rounded-full"
          icon={<MdOutlineSupportAgent className="text-gray-700 text-[20px]" />}
          iconPosition="right"
        />
        <Button
          label="Skilled Tutors"
          width="md:w-fit w-full"
          buttonStyle="custom"
          height="h-[36px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-gray-700 bg-[#F7F5FF] px-2 rounded-full"
          icon={<PiChalkboardTeacherFill className="text-gray-700 text-[20px]" />}
          iconPosition="right"
        />
        <Button
          label="Recorded Classes"
          width="md:w-fit w-full"
          buttonStyle="custom"
          height="h-[36px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-gray-700 bg-[#F7F5FF] px-2 rounded-full"
          icon={<MdOutlineRecordVoiceOver className="text-gray-700 text-[20px]" />}
          iconPosition="right"
        />
        <Button
          label="Guaranteed Internship"
          width="md:w-fit w-full"
          buttonStyle="custom"
          height="h-[36px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-gray-700 bg-[#F7F5FF] px-2 rounded-full"
          icon={<PiStudentBold className="text-gray-700 text-[20px]" />}
          iconPosition="right"
        />
      </div>
    </section>
  );
};

export default WhatMakesUsUnique;
