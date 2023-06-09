import { notFound } from 'next/navigation';
import { db, getPostById } from '@/app/blog/utils/getPostById';
import { BlogPost } from '@/app/blog/page';

const BlogPage = async ({ params }: { params: Pick<BlogPost, 'id'> }) => {
  const blog = await getPostById(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <article>
      <div className='flex h-2'>
        <p>{blog.title}</p>
      </div>
    </article>
  );
};

export async function generateStaticParams() {
  const books = await Promise.resolve(Object.values(db));

  return books.map(({ id }) => ({
    id,
  }));
}

export default BlogPage;
