import type { Metadata } from 'next';
import './globals.css';
import CursorFollower from './components/CursorFollower';

export const metadata: Metadata = {
  title: 'Thefullsnacksdevs',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  },
  manifest: '/manifest.json',
  keywords: 'Thefullsnacksdevs, academy, learn software development, software development, courses, online courses, programming, coding, web development, mobile development, data science, cloud computing, cybersecurity, IT management, frontend development, best online learning platform, learn coding, learn programming, software engineering, software development courses, online learning, online education, learn software engineering, learn web development, learn mobile development, learn data science, learn cloud computing, learn cybersecurity, data analysis, UI/UX design, fullstack development, backend development, learn UI/UX design, learn fullstack development, learn backend development, learn data analysis, learn IT management, learn software development online, learn software development for free, learn software development in Africa, learn software development in Nigeria, learn software development in Kenya, learn software development in South Africa, learn software development in Ghana, learn software development in Uganda, learn software development in Tanzania',
  authors: [{ name: 'Thefullsnacksdevs', url: 'https://thefullsnacksdevs.com' }],
  creator: 'Thefullsnacksdevs',
  publisher: 'Thefullsnacksdevs',
  openGraph: {
    title: 'Thefullsnacksdevs',
    description: 'Building Africa’s Biggest Developer Community',
    url: 'https://thefullsnacksdevs.com',
    siteName: 'Thefullsnacksdevs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Thefullsnacksdevs'
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thefullsnacksdevs',
    description: 'Building Africa’s Biggest Developer Community',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Thefullsnacksdevs'
      }
    ],
    site: '@thefullsnacksdevs',
    creator: '@thefullsnacksdevs'
  },
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: 'https://thefullsnacksdevs.com',
    languages: {
      'en-US': 'https://thefullsnacksdevs.com',
      'es-ES': 'https://thefullsnacksdevs.com/es',
      'fr-FR': 'https://thefullsnacksdevs.com/fr',
      'de-DE': 'https://thefullsnacksdevs.com/de',
      'zh-CN': 'https://thefullsnacksdevs.com/zh'
    }
  },
  description: 'Building Africa’s Biggest Developer Community'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        {children}
        <CursorFollower />
      </body>
    </html>
  );
}
