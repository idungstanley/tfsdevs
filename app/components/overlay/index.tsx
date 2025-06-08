import { Clock, HomeIcon } from 'lucide-react';
import React from 'react';
import Button from '../button/Button';
import { useRouter } from 'next/navigation';

const Overlay = () => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="max-w-md w-full mx-4 p-8 rounded-2xl text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-[#684DF4]/20 dark:bg-[#684DF4]/50">
            <Clock className="w-8 h-8 text-[#684DF4]" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Coming Soon</h2>

        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          We&apos;re working hard to bring you an amazing course experience. Stay tuned!
        </p>

        <div className="text-sm text-gray-500 dark:text-gray-400">Expected launch: 20th of July, 2025</div>
        <Button
          bgColor="#684DF4"
          width="w-fit"
          type="submit"
          customClasses="px-4 py-2 bg-[#684DF4] text-white rounded-lg hover:bg-[#684DF4]/80 transition-colors mt-6 flex items-center justify-center gap-2 cursor-pointer"
          buttonStyle="custom"
          iconPosition="left"
          label="Back to dashboard"
          onClick={() => router.push('/')}
          icon={<HomeIcon size={16} />}
        />
      </div>
    </div>
  );
};

export default Overlay;
