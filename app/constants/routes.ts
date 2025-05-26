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
  '/events',
  '/',
  '/auth/signup',
  '/bootcamp',
  'verify-payment',
  '/bootcamp/frontend',
  '/bootcamp/backend',
  '/bootcamp/checkout/[courseId]',
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
  '/pricing',
  '/api/auth/providers',
  '/faq',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/bootcamp/frontend',
  '/bootcamp/backend',
  '/verify-payment'
];

export const openRoutes = [
  '/bootcamp/checkout/:courseId*',
  '/events/:eventId*',
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


/**
 * Checks if the given pathname matches any of the defined open routes,
 * supporting dynamic segments like ":eventId*", ":courseId*", etc.
 *
 * @param openRoutes - List of open route patterns (e.g., "/events/:eventId*")
 * @param pathname - The current pathname to check (e.g., "/events/1234/details")
 * @returns true if matched, false otherwise
 */
export function isDynamicRouteMatch(openRoutes: string[], pathname: string): boolean {
  return openRoutes.some((route) => {
    // Check for dynamic segments like ":something*"
    const dynamicMatch = route.match(/:([a-zA-Z0-9]+)\*/);
    if (dynamicMatch) {
      const baseRoute = route.replace(dynamicMatch[0], '');
      return pathname.startsWith(baseRoute);
    }
    // Exact match
    return route === pathname;
  });
}