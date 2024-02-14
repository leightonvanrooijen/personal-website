import { FaArrowDown } from 'react-icons/fa';


export const HireMe = () => {
  return (
    <div className="flex flex-1 min-h-screen bg-purple-100 py-10 px-8 flex-col">
      <h1 className='text-9xl after:text-purple-600 mb-[5%] after:content-["_Tracksuit!"]'>
        Hey,
      </h1>
      <p className="text-5xl">
        I think we will be a good fit!
      </p>
      <div className="text-5xl mt-auto mb-20 flex">
        <p >
          {`Find out why`}
        </p>
        <FaArrowDown className='mt-4 ml-2 text-3xl' />
      </div>
    </div>
  );
};