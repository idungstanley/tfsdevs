import { faqData } from '@/app/constants/faq';
import React from 'react';

const FaqTab = ({
  setActiveTab,
  activeTab
}: {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}) => {
  return (
    <div className="flex gap-4 py-4 overflow-y-auto">
      {faqData.map((item) => (
        <li
          key={item.id}
          className={`${
            activeTab === item.id ? 'bg-[#684DF4]' : 'border border-white text-white'
          } h-10 w-fit p-2 px-4 list-none rounded-full cursor-pointer transition-all text-nowrap duration-75 ease-in-out delay-75`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.title}
        </li>
      ))}
    </div>
  );
};

export default FaqTab;
