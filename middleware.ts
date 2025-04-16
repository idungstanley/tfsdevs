import { auth } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from '@/app/constants/routes';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = [...authRoutes, ...publicRoutes].includes(nextUrl.pathname);

  // Handle root route ('/')
  if (nextUrl.pathname === '/') {
    if (isLoggedIn) {
      // Redirect logged-in users to the dashboard
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    } else {
      // Redirect non-logged-in users to the login page
      return NextResponse.next();
    }
  }

  // Allow API authentication routes to proceed as normal
  if (isApiAuthRoute || isPublicRoute) {
    return NextResponse.next();
  }

  // If the route is an authentication route (e.g., login or signup)
  // Redirect logged-in users to the default login redirect (since they are already authenticated)
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next(); // Allow non-logged-in users to proceed
  }

  // For non-public and non-authentication routes, restrict access to logged-in users only
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/auth/login', nextUrl));
  }
  // If all checks pass, allow access
  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths (like static files)
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.$).*)']
};
