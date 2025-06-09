'use client';
import React, { useRef, useState } from 'react';
import { User, Bell, Globe } from 'lucide-react';
import ChangePassword from './ChangePassword';
import AvatarWithImage from '@/app/components/Avatar/AvatarWithImages';
import { useAppSelector } from '@/app/store/store';
import { useUpdateUserInfoMutation } from '@/app/features/bootcamp/bootcampService';
import Button from '@/app/components/button/Button';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePictureBlob?: Blob;
  profilePictureUrl: string;
}

const Settings: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { selfDetails } = useAppSelector((state) => state.auth);
  const { mutateAsync, isPending } = useUpdateUserInfoMutation();

  const [profile, setProfile] = useState<UserProfile>({
    firstName: selfDetails?.firstName as string,
    lastName: selfDetails?.lastName as string,
    email: selfDetails?.email as string,
    phone: selfDetails?.phoneNumber as string,
    profilePictureUrl: selfDetails?.profilePictureUrl as string
  });

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
  await mutateAsync({
      FullName: `${profile.firstName} ${profile.lastName}`,
      Email: profile.email,
      PhoneNumber: profile.phone,
      ProfilePicture: profile.profilePictureBlob as Blob
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfile((prev) => ({
        ...prev,
        profilePictureUrl: URL.createObjectURL(file),
        profilePictureBlob: file
      }));
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 rounded-lg p-6 border">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-indigo-500" size={24} />
              <h3 className="text-lg font-medium">Profile Information</h3>
            </div>

            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <AvatarWithImage
                  isOnline={selfDetails?.isActive as boolean}
                  height="h-20"
                  width="w-20"
                  image_path={profile?.profilePictureUrl as string}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-700 cursor-pointer rounded-lg  transition-colors"
                >
                  Change Photo
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    value={profile.firstName}
                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                    className="w-full bg-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-700 rounded-lg px-4 py-2 border dark:border-gray-600 border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    value={profile.lastName}
                    onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                    className="w-full bg-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-700 rounded-lg px-4 py-2 border dark:border-gray-600 border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full bg-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-700 rounded-lg px-4 py-2 border dark:border-gray-600 border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full bg-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-700 rounded-lg px-4 py-2 border dark:border-gray-600 border-gray-300"
                  />
                </div>
              </div>
              <Button
                loading={isPending}
                type="submit"
                label=" Save Changes"
                width="w-full"
                buttonStyle="custom"
                height="h-[48px]"
                customClasses="bg-[#684DF4] hover:bg-base-light-hover text-white rounded-[8px] cursor-pointer"
                iconPosition="right"
              />
            </form>
          </div>
          <ChangePassword />
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 rounded-lg p-6 border">
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

          <div className="dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 rounded-lg p-6 border">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-indigo-500" size={24} />
              <h3 className="text-lg font-medium">Language & Region</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select className="w-full bg-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-700 dark:border-gray-600 border-gray-300 rounded-lg px-4 py-2 border">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time Zone</label>
                <select className="w-full bg-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-700 dark:border-gray-600 border-gray-300 rounded-lg px-4 py-2 border">
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
