'use client'
import React, { useState } from 'react';
import { Copy, Gift, Users } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';

const Earn: React.FC = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  const referralLink = 'https://academy.thefullsnackdevs.com/auth/enroll?ref=john123';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Earn With Referrals</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${bgColor} w-full rounded-lg p-6 border ${borderColor}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Total Earnings</h3>
            <Gift className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-green-500">#0.00</p>
          {/* <p className="text-sm text-gray-400 mt-2">From 12 successful referrals</p> */}
          <p className="text-sm text-gray-400 mt-2">No referrals yet</p>
        </div>

        <div className={`${bgColor} w-full rounded-lg p-6 border ${borderColor}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Pending Rewards</h3>
            <Users className="text-yellow-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-yellow-500">#0.00</p>
          <p className="text-sm text-gray-400 mt-2">No pending referrals</p>
          {/* <p className="text-sm text-gray-400 mt-2">From 4 pending referrals</p> */}
        </div>
        {/* 
        <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Available Balance</h3>
            <Gift className="text-indigo-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-indigo-500">$160</p>
          <p className="text-sm text-gray-400 mt-2">Ready to withdraw</p>
        </div> */}
      </div>

      {/* Referral Link */}
      <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
        <h3 className="text-lg font-medium mb-4">Your Referral Link</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-sm"
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            {copied ? 'Copied!' : 'Copy'} <Copy size={16} />
          </button>
          {/* <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2">
            Share <Share2 size={16} />
          </button> */}
        </div>
      </div>

      {/* How it Works */}
      <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
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
    </div>
  );
};

export default Earn;
