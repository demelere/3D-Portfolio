import React from 'react';
import { Canvas, useThree } from 'react-three-fiber';
// import { PerspectiveCamera } from '@react-three/drei';
import './App.css';
import ISS from './ISS.tsx';
import { OrbitControls } from '@react-three/drei';

function App() {
  // const { camera } = useThree();
  // camera.near = 0.1;
  // camera.far = 10000;

  return (
    <div className="App">
      <div className="container">
        <Canvas> 
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <OrbitControls autoRotate enableZoom={true} enablePan={true} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8} /> 
          <ISS />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
