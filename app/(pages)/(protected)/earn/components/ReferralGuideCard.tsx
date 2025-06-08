import React from 'react';

const ReferralGuideCard = () => {
  return (
    <div className="dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 rounded-lg p-6 border">
      <h3 className="text-lg font-medium mb-4">How It Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto mb-4">
            1
          </div>
          <h4 className="font-medium mb-2">Share Your Link</h4>
          <p className="text-sm text-gray-400">Share your unique referral link with friends</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto mb-4">
            2
          </div>
          <h4 className="font-medium mb-2">Friends Join</h4>
          <p className="text-sm text-gray-400">When they enroll in any course using your link</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto mb-4">
            3
          </div>
          <h4 className="font-medium mb-2">Earn Rewards</h4>
          <p className="text-sm text-gray-400">Get 10% of their first purchase amount</p>
        </div>
      </div>
    </div>
  );
};

export default ReferralGuideCard;
