'use client'
import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
// import { Loader } from 'lucide-react';

interface Application {
  id: string;
  courseName: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedDate: string;
  decision?: string;
}

const applications: Application[] = [
  {
    id: '1',
    courseName: 'Modern Frontend Development',
    status: 'approved',
    appliedDate: '2024-02-15',
    decision: 'Accepted on 2024-02-20'
  },
  {
    id: '2',
    courseName: 'Data Science Fundamentals',
    status: 'pending',
    appliedDate: '2024-03-01'
  },
  {
    id: '3',
    courseName: 'Cloud Engineering',
    status: 'rejected',
    appliedDate: '2024-01-10',
    decision: 'Not eligible for this course level'
  }
];

const ApplicationHistory: React.FC = () => {
  const { theme } = useTheme();
  // const [isLoading, setIsLoading] = useState(false);

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-500 bg-green-500/10';
      case 'rejected':
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

  if (applications.length === 0) {
    return (
      <div className={`${bgColor} rounded-lg p-8 text-center border ${borderColor}`}>
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

      <div className={`${bgColor} rounded-lg border ${borderColor} overflow-hidden`}>
        <table className="w-full">
          <thead>
            <tr className={`border-b ${borderColor}`}>
              <th className="text-left p-4">Course</th>
              <th className="text-left p-4">Applied Date</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Decision</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className={`border-b ${borderColor} hover:bg-gray-700/10`}>
                <td className="p-4">{app.courseName}</td>
                <td className="p-4">{app.appliedDate}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </td>
                <td className="p-4 text-gray-400">{app.decision || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationHistory;
