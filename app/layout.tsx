import type { Metadata } from 'next';
import './globals.css';
import CursorFollower from './components/CursorFollower';
import { Providers } from './store/Provider';

export const metadata: Metadata = {
  title: 'TheFullSnackDevs, Build. Learn. Grow.',
  description:
    'Join Africa’s fastest-growing tech community. Learn software development, build projects, and grow your career.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  },
  keywords:
    'thefullsnackdevs, academy, learn software development, software development, courses, online courses, programming, coding, web development, mobile development, data science, cloud computing, cybersecurity, IT management, frontend development, best online learning platform, learn coding, learn programming, software engineering, software development courses, online learning, online education, learn software engineering, learn web development, learn mobile development, learn data science, learn cloud computing, learn cybersecurity, data analysis, UI/UX design, fullstack development, backend development, learn UI/UX design, learn fullstack development, learn backend development, learn data analysis, learn IT management, learn software development online, learn software development for free, learn software development in Africa, learn software development in Nigeria, learn software development in Kenya, learn software development in South Africa, learn software development in Ghana, learn software development in Uganda, learn software development in Tanzania',
  authors: [{ name: 'thefullsnackdevs', url: 'https://tfsdevs.vercel.app/' }],
  creator: 'thefullsnackdevs',
  publisher: 'thefullsnackdevs',
  openGraph: {
    title: 'TheFullSnackDevs – Build. Learn. Grow.',
    description: 'Building Africa’s Biggest Developer Community',
    url: 'https://thefullsnackdevs.com',
    siteName: 'TheFullSnackDevs',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'thefullsnackdevs',
    description: 'Building Africa’s Biggest Developer Community',
    site: '@thefullsnackdevs',
    creator: '@thefullsnackdevs'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: 'https://tfsdevs.vercel.app/',
    languages: {
      'en-US': 'https://tfsdevs.vercel.app/',
      'es-ES': 'https://tfsdevs.vercel.app//es',
      'fr-FR': 'https://tfsdevs.vercel.app//fr',
      'de-DE': 'https://tfsdevs.vercel.app//de',
      'zh-CN': 'https://tfsdevs.vercel.app//zh'
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative text-white">
        <Providers>
          {children}
          <CursorFollower />
        </Providers>
      </body>
    </html>
  );
}
