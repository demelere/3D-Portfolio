import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';

const ISS = () => {
    const meshRef = useRef<Mesh>(null);
    console.log('meshRef: ', meshRef)
    console.log('Type of meshRef:', typeof meshRef);
    console.log('Type of Mesh:', typeof Mesh);

    useFrame(() => {
        if (!meshRef.current) {
            console.log('meshRef.current is null')
            return;
        }

        console.log('meshRef.current: ', meshRef.current)
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial color="blue"/>
        </mesh>
      );
  };

  export default ISS;