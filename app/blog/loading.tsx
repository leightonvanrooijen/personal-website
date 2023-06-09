// this is the default loading page for the route
// This will not display on server side rendering as the entire content is returned
export default function Loading() {
  return (
    <div className='flex animate-pulse space-x-4'>
      <p className='text-5xl'>LOADING</p>
    </div>
  );
}
