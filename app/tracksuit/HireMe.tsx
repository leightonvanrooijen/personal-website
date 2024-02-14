import { FaArrowDown } from 'react-icons/fa';

export const HireMe = () => {
  return (
    <div className='flex min-h-screen flex-1 snap-start flex-col bg-purple-100 px-8 py-10'>
      <h1 className='mb-[5%] text-9xl after:text-purple-600 after:content-["_Tracksuit!"]'>
        Hey,
      </h1>
      <p className='text-5xl'>I think we will be a good fit!</p>
      <div className='mb-20 mt-auto flex text-5xl'>
        <p>{`Find out why`}</p>
        <FaArrowDown className='ml-2 mt-4 text-3xl' />
      </div>
    </div>
  );
};
