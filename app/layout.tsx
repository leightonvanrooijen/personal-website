import './globals.css';
import { Header } from '@/components/header';

export const metadata = {
  title: "Leighton's Portfolio",
  description: 'About me',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='snap-y snap-mandatory scroll-smooth'>
      <body className='flex h-screen w-full flex-col overflow-scroll bg-gray-100'>
        {children}
      </body>
    </html>
  );
}
