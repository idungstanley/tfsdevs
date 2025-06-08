import { Referral } from '@/app/features/bootcamp/bootcamp.interface';
import { formatDateTime } from '@/app/utils';
import React from 'react';

const ReferralTableList = ({ data }: { data: Referral[] }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Referral History</h2>

      <div className=" dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 rounded-lg border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b dark:border-gray-700 border-gray-200">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Signup Date</th>
              <th className="text-left p-4">Referral Bonus</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((referral) => {
              const { date, time } = formatDateTime(referral.joinedAt);

              return (
                <tr key={referral.$id} className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-700/10`}>
                  <td className="p-4">{referral.name}</td>
                  <td className="p-4">{referral.email}</td>
                  <td className="p-4">
                    <div>{`${date}, ${time}`}</div>
                  </td>
                  <td className="p-4">#{referral.earningFromReferral}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralTableList;
