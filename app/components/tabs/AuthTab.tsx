'use client';

import { useRouter, usePathname } from 'next/navigation';

const AuthTabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex md:hidden w-full max-w-sm bg-gray-900 rounded-lg p-1">
      {/* Sign In Tab */}
      <button
        onClick={() => router.push('/auth/login')}
        className={`flex-1 py-2 text-center cursor-pointer rounded-lg transition-all ${
          pathname === '/auth/login' ? 'bg-white shadow-md font-semibold text-black' : 'text-white'
        }`}
      >
        Sign In
      </button>

      {/* Sign Up Tab */}
      <button
        onClick={() => router.push('/auth/signup')}
        className={`flex-1 py-2 cursor-pointer text-center rounded-lg transition-all ${
          pathname === '/auth/signup' ? 'bg-white shadow-md font-semibold text-black' : 'text-white'
        }`}
      >
        Signup
      </button>
    </div>
  );
};

export default AuthTabs;
