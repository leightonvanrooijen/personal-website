import { BLOG_POSTS } from '@/app/blog/mockdata/BLOG_POSTS';

export type BlogPost = {
  id: string;
  title: string;
  content: string;
};

const fetchBlogPosts = async () => Promise.resolve(Object.values(BLOG_POSTS));

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return <div></div>;
}
