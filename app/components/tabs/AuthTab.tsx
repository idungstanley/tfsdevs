'use client';

import { useRouter, usePathname } from 'next/navigation';

const AuthTabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex w-full max-w-sm bg-gray-900 rounded-lg p-1">
      {/* Sign In Tab */}
      <button
        onClick={() => router.push('/auth/login')}
        className={`flex-1 py-2 text-center rounded-lg transition-all ${
          pathname === '/auth/login' ? 'bg-white shadow-md font-semibold text-black' : 'text-white'
        }`}
      >
        Sign In
      </button>

      {/* Sign Up Tab */}
      <button
        onClick={() => router.push('/auth/enroll')}
        className={`flex-1 py-2 text-center rounded-lg transition-all ${
          pathname === '/auth/enroll' ? 'bg-white shadow-md font-semibold text-black' : 'text-white'
        }`}
      >
        Signup
      </button>
    </div>
  );
};

export default AuthTabs;
