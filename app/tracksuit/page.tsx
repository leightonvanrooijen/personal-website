import { HireMe } from '@/app/tracksuit/HireMe';
import { chapeau } from '@/components/font/chapeau';
import { FitsIn } from '@/app/tracksuit/FitsIn';
import { Techies } from '@/app/tracksuit/Techies';
import { Product } from '@/app/tracksuit/Product';

export default function TracksuitPleaseHireMe() {
  return (
    <div className={`flex-1 ${chapeau.className}`}>
      <div
        className={
          'hidden h-[calc(100dvh)] flex-1 flex-col items-center justify-center sm:flex xl:hidden'
        }
      >
        <p className='text-xl text-purple-500 md:text-4xl'>{`Uhh, hoped you wouldn't notice`}</p>
        <p className='mt-3 sm:before:content-["Make_me_fullscreen"] md:text-2xl'></p>
        <p className='sm:before:content-["or_come_on_your_phone_:)"] '></p>
      </div>
      <div className={'block flex-1 sm:hidden xl:block'}>
        <HireMe />
        <FitsIn />
        <Techies />
        <Product />
      </div>
    </div>
  );
}
