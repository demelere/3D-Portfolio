import React, { useRef, useLayoutEffect } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';
// import * as THREE from 'three';

const ISS = () => {
    const meshRef = useRef<Mesh>(null);

    const { scene } = useGLTF(process.env.PUBLIC_URL + '/ISS_2016.gltf');

    useFrame(() => {
        if (!meshRef.current) {
            console.log('meshRef.current is null')
            return;
        }
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
    });

    return (
        // <mesh ref={meshRef}>
        //     <boxGeometry args={[2,2,2]}/>
        //     <meshStandardMaterial color="blue"/>
        // </mesh>

        <primitive object={scene} ref={meshRef}/>
      );
  };

  export default ISS;