import './globals.css';

export const metadata = {
  title: 'Leightons Portfolio',
  description: 'About me',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en '>
      <body className='flex h-[100dvh] w-full flex-col bg-gray-100'>
        {/*<Header />*/}
        {children}
      </body>
    </html>
  );
}
