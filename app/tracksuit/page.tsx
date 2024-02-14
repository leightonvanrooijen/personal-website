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
          'flex h-screen flex-1 flex-col items-center justify-center xl:hidden'
        }
      >
        <p className='text-xl text-purple-500 md:text-4xl'>{`Uhh, hoped you wouldn't notice`}</p>
        <p className='before:content-["Visit_me_on_a_computer_:)"] md:text-2xl md:before:content-["Make_me_fullscreen_:)"]'></p>
      </div>
      <div className={'hidden flex-1 xl:block'}>
        <HireMe />
        <FitsIn />
        <Techies />
        <Product />
      </div>
    </div>
  );
}
