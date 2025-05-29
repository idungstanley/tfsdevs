'use client';
import React, { useState } from 'react';
import { User, Bell, Globe } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import ChangePassword from './ChangePassword';
import { useGetSelf } from '@/app/features/auth/authService';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

const Settings: React.FC = () => {
  const { theme } = useTheme();
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Stanley Sunday',
    email: 'sundaystanley56@example.com',
    phone: '+1 234 567 8900',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  });
  const { data } = useGetSelf();

  console.log("data", data);

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-6">
              <User className="text-indigo-500" size={24} />
              <h3 className="text-lg font-medium">Profile Information</h3>
            </div>

            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <img src={profile.avatar} alt={profile.name} className="w-20 h-20 rounded-full object-cover" />
                <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                  Change Photo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 border border-gray-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Save Changes
              </button>
            </form>
          </div>
          <ChangePassword />
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-indigo-500" size={24} />
              <h3 className="text-lg font-medium">Notifications</h3>
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox text-indigo-500" />
                <span>Email notifications</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox text-indigo-500" />
                <span>Push notifications</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox text-indigo-500" />
                <span>SMS notifications</span>
              </label>
            </div>
          </div>

          <div className={`${bgColor} rounded-lg p-6 border ${borderColor}`}>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-indigo-500" size={24} />
              <h3 className="text-lg font-medium">Language & Region</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-2 border border-gray-600">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time Zone</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-2 border border-gray-600">
                  <option>UTC-05:00 Eastern Time</option>
                  <option>UTC-08:00 Pacific Time</option>
                  <option>UTC+00:00 GMT</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
