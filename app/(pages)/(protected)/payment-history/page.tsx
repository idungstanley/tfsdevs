'use client';
import React from 'react';
import { Download } from 'lucide-react';
import { useGetPaymentHistory } from '@/app/features/bootcamp/bootcampService';
import { FadeLoader } from 'react-spinners';
import { formatDateTime, getStatusColor } from '@/app/utils';
import { useRouter } from 'next/navigation';

const PaymentHistory: React.FC = () => {
  const { data, isLoading } = useGetPaymentHistory();
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="items-center justify-center h-full w-full flex">
        <FadeLoader color="#684DF4" aria-label="Loading Spinner" data-testid="loader" />
      </div>
    );
  }

  if (data?.data?.$values?.length === 0) {
    return (
      <div className="dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 rounded-lg p-8 text-center border ">
        <h3 className="text-xl font-medium mb-2">No Payment history found.</h3>
        <p className="text-gray-500 mb-4">You haven&rsquo;t made any payments yet.</p>
        <button
          className="px-4 py-2 cursor-pointer bg-[#684DF4] text-white rounded-md hover:bg-[#684DF4]/80 transition-colors"
          onClick={() => router.push('/courses/all')}
        >
          Browse Courses
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Payment History</h2>

      <div className="dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 rounded-lg border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b dark:border-gray-700 border-gray-200">
              <th className="text-left p-4">Course</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.$values?.map((payment) => {
              const { date, time } = formatDateTime(payment.signUpDate);

              return (
                <tr
                  key={payment.$id}
                  className="border-b dark:border-gray-700 border-gray-200 hover:bg-gray-700/10"
                >
                  <td className="p-4">{payment.bootcampTitle}</td>
                  <td className="p-4">${payment.paymentAmount}</td>
                  <td className="p-4">
                    <div>{`${date}, ${time}`}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4">
                    {payment.paymentStatus === 'Completed' && (
                      <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                        <Download size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
