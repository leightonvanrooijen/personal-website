import localFont from 'next/font/local';

export const chapeau = localFont({
  src: [
    {
      path: '../../public/fonts/Chapeau/Chapeau-Light.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Chapeau/Chapeau-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Chapeau/Chapeau-Regular.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/Chapeau/Chapeau-Bold.ttf',
      weight: '700',
    },
  ],
});