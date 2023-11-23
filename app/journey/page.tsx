'use client';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Center, OrbitControls, Text3D } from '@react-three/drei';

export default function MyJourney() {
  return (
    <div className='relative h-full w-full'>
      <div className='fixed bottom-0 h-[200px] w-full'>
        <Canvas camera={{ position: [0, 0, 1.7] }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 10]} />
          <TextModel />
        </Canvas>
      </div>
    </div>
  );
}

const TextModel = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [year, setYear] = useState('2019');
  const [springs, api] = useSpring(
    () => ({
      rotation: [rotation, 0, 0],
      config: { mass: 10, tension: 800, friction: 50, precision: 0.0001 },
    }),
    []
  );

  return (
    <animated.mesh
      // @ts-ignore
      rotation={springs.rotation}
    >
      <Center>
        <Text3D
          onClick={() => {
            setYear(year === '2019' ? '2020' : '2019');
            const nextPosition = [rotation + Math.PI * 2, 0, 0];
            api.start({
              // @ts-ignore
              rotation: nextPosition,
            });
            setRotation(nextPosition[0]);
          }}
          font={'./Inter_Bold.json'}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1}
        >
          <meshStandardMaterial color={'gray'} />
          {year}
        </Text3D>
      </Center>
    </animated.mesh>
  );
};
