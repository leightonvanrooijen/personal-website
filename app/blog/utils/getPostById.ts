import { BlogPost } from '@/app/blog/layout';

export const db: Record<string, BlogPost> = {
  1: {
    id: '1',
    title: 'My first blog post',
    content: 'This is my first blog post',
  },
  2: {
    id: '2',
    title: 'My second blog post',
    content: 'This is my second blog post',
  },
};

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export const getPostById = async (id: string) => {
  await delay(1000);
  if (id === '1') {
    throw new Error('Error fetching post');
  } // shows that the error boundary works
  return Promise.resolve(db[id]);
};