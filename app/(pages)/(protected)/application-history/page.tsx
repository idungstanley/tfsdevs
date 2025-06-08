'use client';
import React from 'react';
import { useGetApplicationHistory } from '@/app/features/bootcamp/bootcampService';
import { FadeLoader } from 'react-spinners';
import { formatDateTime, getPaymentStatusColor, getStatusColor } from '@/app/utils';


const ApplicationHistory: React.FC = () => {
  const { data, isLoading } = useGetApplicationHistory();

  if (isLoading) {
    return (
      <div className="items-center justify-center h-full w-full flex">
        <FadeLoader color="#684DF4" aria-label="Loading Spinner" data-testid="loader" />
      </div>
    );
  }

  if (data?.data?.$values?.length === 0) {
    return (
      <div className="dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 rounded-lg p-8 text-center border">
        <h3 className="text-xl font-medium mb-2">No Applications Yet</h3>
        <p className="text-gray-500 mb-4">You haven&lsquo;t applied to any courses yet.</p>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          Browse Courses
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Application History</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          New Application
        </button>
      </div>

      <div className="dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 rounded-lg border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b dark:border-gray-700 border-gray-200">
              <th className="text-left p-4">Course</th>
              <th className="text-left p-4">Applied Date</th>
              <th className="text-left p-4">Registration Status</th>
              <th className="text-left p-4">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.$values?.map((app) => {
              const { date, time } = formatDateTime(app.signUpDate);

              return (
                <tr
                  key={app.$id}
                  className="border-b dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 hover:bg-gray-700/10"
                >
                  <td className="p-4">{app.bootcampTitle}</td>
                  <td className="p-4 flex items-center gap-2">
                    <div>{`${date}, ${time}`}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status || '-'}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(
                        app.paymentStatus
                      )}`}
                    >
                      {app.paymentStatus || '-'}
                    </span>
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

export default ApplicationHistory;
