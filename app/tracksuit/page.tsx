import { HireMe } from '@/app/tracksuit/HireMe';
import { chapeau } from '@/components/font/chapeau';
import { FitsIn } from '@/app/tracksuit/FitsIn';
import { Techies } from '@/app/tracksuit/Techies';

export default function TracksuitPleaseHireMe() {
  return (
    <div className={`flex-1 ${chapeau.className}`}>
      <HireMe />
      <FitsIn />
      <Techies />
    </div>
  );
}
