import React, {useRef} from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PerspectiveCamera, AmbientLight, DirectionalLight } from 'three';

extend({ OrbitControls, PerspectiveCamera, AmbientLight, DirectionalLight });
// extend({ OrbitControls });

const OC = new OrbitControls();
const PC = new PerspectiveCamera();
const AL = new AmbientLight();
const DL = new DirectionalLight();

const CustomScene = () => {
    const { camera, gl } = useThree();
    const orbitControlsRef = useRef();

    useFrame(() => {
        orbitControlsRef.current.update();
      });

    useFrame(() => orbitControlsRef.current.update()); // Update the orbit controls in each frame

    return (
        <>
          {/* Lights */}
          <AL intensity={0.5} />
          <DL intensity={0.8} position={[2.5, 8, 5]} />
    
          {/* Objects */}
          {/* Add your 3D objects, models, and geometries here */}
    
          {/* Camera */}
          <PC makeDefault position={[0, 0, 5]} ref={camera} />
    
          {/* Controls */}
          {/* <OC ref={orbitControlsRef} args={[camera, gl.domElement]} /> */}
          {camera && (
              <OC
                ref={orbitControlsRef}
                args={[camera, gl.domElement]}
              />
            )}
        </>
      );
  };

  export default CustomScene;