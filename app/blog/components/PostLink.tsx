'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BlogPost } from '@/app/blog/page';

export const BlogLink = ({ post, key }: { post: BlogPost; key: string }) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/blog/${post.id}`}
      key={key}
      className={`${pathname.endsWith(post.id) ? 'text-green-600' : ''}`}
    >
      {post.title}
    </Link>
  );
};
