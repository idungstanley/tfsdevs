'use client';
import { faqData } from '@/app/constants/faq';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import FaqTab from './faqTab';
import Accordion from '@/app/components/Accordion';
import Link from 'next/link';
import { MdAlternateEmail } from 'react-icons/md';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  const activeElement = useMemo(() => {
    return faqData.find((element) => element.id === activeTab);
  }, [activeTab]);

  return (
    <div className="w-full md:p-20 p-8 text-white flex flex-col gap-6">
      <div className="flex flex-col items-center">
        <Image src="/question.svg" alt="faq" width={200} height={200} className="h-16 w-16" />
        <h1 className="md:text-[50px] text-[35px] font-[700]">Frequently Asked Questions</h1>
        <p>Select an area from the navigation, or check out some frequently asked questions.</p>
      </div>
      <FaqTab setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeElement && (
        <div className="mt-6">
          {activeElement.questions.map((faq, index) => (
            <Accordion key={index} title={faq.question} content={faq.answer} />
          ))}
        </div>
      )}
      <div className="md:h-24 p-4 h-fit w-full rounded-md bg-gray-900">
        <span className="flex items-center gap-2 h-full justify-center md:flex-row flex-col">
          <MdAlternateEmail className="text-[#684DF4] text-[24px]" />
          For quick reach, send us an email at:{' '}
          <Link href="mailto:info@thefullsnacksdevs.com" className="text-[#684DF4] underline">
            info@thefullsnacksdevs.com
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FAQ;
