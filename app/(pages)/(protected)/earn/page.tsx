'use client';
import React, { useState } from 'react';
import { Copy, Gift, Users } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import {
  useGetReferralEarnings,
  useGetReferralLink,
  useGetReferralStat
} from '@/app/features/bootcamp/bootcampService';
import { FadeLoader } from 'react-spinners';
import ReferralGuideCard from './components/ReferralGuideCard';
import ReferralTableList from './components/ReferralTableList';
import { Referral } from '@/app/features/bootcamp/bootcamp.interface';

const Earn: React.FC = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const { data, isLoading: isGetReferralLinkLoading } = useGetReferralLink();
  const { data: referralStats, isLoading: isGetReferralStatLoading } = useGetReferralStat();
  useGetReferralEarnings();

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const totalReferrals = referralStats?.data?.totalReferrals as number;
  const totalEarnings = referralStats?.data?.totalEarnings as number;
  const referralLink = data?.data?.referralLink as string;
  const referralDetails = referralStats?.data?.referrals?.$values as Referral[];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isGetReferralLinkLoading && isGetReferralStatLoading) {
    return (
      <div className="items-center justify-center h-full w-full flex">
        <FadeLoader color="#684DF4" aria-label="Loading Spinner" data-testid="loader" />
      </div>
    );
  }
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
            <p className="text-3xl font-bold text-green-500">#{totalEarnings}.00</p>
            {totalReferrals && totalReferrals > 0 ? (
              <p className="text-sm text-gray-400 mt-2">From {totalReferrals} successful referrals</p>
            ) : (
              <p className="text-sm text-gray-400 mt-2">No referrals yet</p>
            )}
          </div>

          <div className={`${bgColor} w-full rounded-lg p-6 border ${borderColor}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Total Referrals</h3>
              <Users className="text-yellow-500" size={24} />
            </div>
            <p className="text-3xl font-bold text-yellow-500">{totalReferrals}</p>
            {totalReferrals && totalReferrals > 0 ? (
              <p className="text-sm text-gray-400 mt-2">{totalReferrals} successful referrals</p>
            ) : (
              <p className="text-sm text-gray-400 mt-2">No pending referrals</p>
            )}
          </div>

          <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Available Balance</h3>
              <Gift className="text-indigo-500" size={24} />
            </div>
            <p className="text-3xl font-bold text-indigo-500">#{totalEarnings}.00</p>
            <p className="text-sm text-gray-400 mt-2">Ready to withdraw</p>
          </div>
        </div>
        {/* Referral Link */}
        <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
          <h3 className="text-lg font-medium mb-4">Your Referral Link</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-700 dark:border-gray-600 border-gray-300 rounded-lg px-4 py-2 text-sm"
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
        <ReferralGuideCard />
        {/* Referral History */}
        <ReferralTableList data={referralDetails} />
      </div>
    );
};

export default Earn;
