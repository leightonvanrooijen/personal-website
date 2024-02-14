import { FaArrowDown } from 'react-icons/fa';

export const HireMe = () => {
  return (
    <div className='flex h-[calc(100dvh)] flex-1 snap-start flex-col bg-purple-100 px-4 py-5 sm:px-8 sm:py-10'>
      <h1 className='mb-[5%] text-7xl after:text-purple-600 after:content-["_Tracksuit!"] sm:text-9xl'>
        Hey,
      </h1>
      <p className='ml-2 mt-2 text-2xl sm:m-0 sm:text-5xl'>
        I think we will be a good fit!
      </p>
      <div className='mb-5 mt-auto flex text-2xl sm:mb-20 sm:text-5xl'>
        <p>{`Find out why`}</p>
        <FaArrowDown className='ml-2 mt-2 text-lg sm:mt-4 sm:text-3xl' />
      </div>
    </div>
  );
};
