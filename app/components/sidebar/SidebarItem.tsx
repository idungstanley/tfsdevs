import { LOCALSTORAGE_KEY } from '@/app/constants/localStorage';
import { displayPrompt, setVisibility } from '@/app/features/general/prompt/promptSlice';
import { SignOut } from '@/app/lib/signOut';
import { useAppDispatch } from '@/app/store/store';
import { storageManager } from '@/app/utils/storageManager';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { startTransition } from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  expanded?: boolean;
  route?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, expanded = true, route }) => {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const isActive = pathname === `/${route || ''}`;

  const handleRouteToLogout = () => {
    history.pushState(null, '', '/auth/login');
    router.push('/auth/login');
  };

  const handleLogoutModal = () => {
    dispatch(
      displayPrompt('Sure you want to logout', 'Are you sure you want to logout this account?', [
        {
          label: 'Yes, Logout',
          style: 'base',
          callback: async () => {
            storageManager.removeItem(LOCALSTORAGE_KEY.TOKEN)
            await SignOut();
            startTransition(() => {
              handleRouteToLogout();
              dispatch(setVisibility(false));
            });
          }
        },
        {
          label: 'No, cancel',
          style: 'plain',
          callback: () => {
            dispatch(setVisibility(false));
          }
        }
      ])
    );
  };

  if (route === 'logout') {
    return (
      <div
        onClick={handleLogoutModal}
        className={`flex items-center cursor-pointer p-2 rounded-md transition-colors duration-200 
          ${
            isActive
              ? 'bg-[#684DF4] text-white'
              : 'text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white'
          } ${expanded ? 'justify-start' : 'justify-center'}`}
      >
        <span className="flex-shrink-0">{icon}</span>
        {expanded && <span className="ml-3 whitespace-nowrap">{text}</span>}
      </div>
    );
  }

  return (
    <Link
      href={`/${route || ''}`}
      className={`flex items-center cursor-pointer p-2 rounded-md transition-colors duration-200 
          ${
            isActive
              ? 'bg-[#684DF4] text-white'
              : 'text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-white'
          } ${expanded ? 'justify-start' : 'justify-center'}`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {expanded && <span className="ml-3 whitespace-nowrap">{text}</span>}
    </Link>
  );
};

export default SidebarItem;
