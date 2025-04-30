'use client'
import React from 'react';
import { Download } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';

interface Payment {
  id: string;
  courseName: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  invoiceUrl?: string;
}

const payments: Payment[] = [
  {
    id: '1',
    courseName: 'Modern Frontend Development',
    amount: 499,
    date: '2024-02-15',
    status: 'completed',
    invoiceUrl: '#'
  },
  {
    id: '2',
    courseName: 'Data Science Fundamentals',
    amount: 699,
    date: '2024-03-01',
    status: 'pending'
  },
  {
    id: '3',
    courseName: 'Cloud Engineering',
    amount: 599,
    date: '2024-01-10',
    status: 'failed'
  }
];

const PaymentHistory: React.FC = () => {
  const { theme } = useTheme();
  // const [isLoading, setIsLoading] = useState(false);

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-500/10';
      case 'failed':
        return 'text-red-500 bg-red-500/10';
      default:
        return 'text-yellow-500 bg-yellow-500/10';
    }
  };

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-[400px]">
  //       <Loader className="w-8 h-8 animate-spin text-indigo-500" />
  //     </div>
  //   );
  // }

  if (payments.length === 0) {
    return (
      <div className={`${bgColor} rounded-lg p-8 text-center border ${borderColor}`}>
        <h3 className="text-xl font-medium mb-2">No Payment History</h3>
        <p className="text-gray-500">You haven&rsquo;t made any payments yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Payment History</h2>

      <div className={`${bgColor} rounded-lg border ${borderColor} overflow-hidden`}>
        <table className="w-full">
          <thead>
            <tr className={`border-b ${borderColor}`}>
              <th className="text-left p-4">Course</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className={`border-b ${borderColor} hover:bg-gray-700/10`}>
                <td className="p-4">{payment.courseName}</td>
                <td className="p-4">${payment.amount}</td>
                <td className="p-4">{payment.date}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                  </span>
                </td>
                <td className="p-4">
                  {payment.invoiceUrl && (
                    <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                      <Download size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
