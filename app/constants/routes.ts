/**
 * An array of routes that are accessible to the public
 *
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  '/about',
  '/help-center',
  '/privacy-policy',
  '/pricing',
  '/',
  '/auth/signup'
];

/**
 * An array of routes that are used for authentication.
 *
 * These routes will redirect logged in users to /feeds
 * @type {string[]}
 */
export const authRoutes = [
  '/',
  '/auth/login',
  '/auth/enroll',
  '/about',
  '/courses',
  '/pricing', 
  '/api/auth/providers',
  '/faq',
  '/auth/forgot-password',
  '/auth/reset-password',
];

/**
 * The prefix for api authentication routes
 *
 * Routes that starts with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logging in and the account is verified
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard';

/**
 * The default redirect path for unauthenticated users
 * @type {string}
 */
export const DEFAULT_UNAUTHENTICATED_USER_REDIRECT = '/auth/login';