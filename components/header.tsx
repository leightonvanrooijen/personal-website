'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ text, href }: { text: string; href: string }) => {
  const pathname = usePathname();
  const selected = pathname.endsWith(href);

  return (
    <div className='w-fit'>
      <Link
        href={href}
        className={`focus:text-primary-600 inline-block rounded
       px-2  text-xl font-semibold leading-normal text-gray-500 hover:text-[21px] hover:text-gray-700 hover:underline
       focus:outline-none focus:ring-0 active:text-gray-700 ${
         selected ? 'px-0 text-gray-700 underline' : ''
       }`}
      >
        {text}
      </Link>
    </div>
  );
};

export const Header = () => {
  return (
    <nav className='flex h-16 w-full items-center justify-center shadow'>
      <NavLink text='Blog' href={'/blog'} />
      <NavLink text='About Me' href={'/about'} />
    </nav>
  );
};
