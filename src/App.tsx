import React from 'react';
import { Canvas } from 'react-three-fiber';
// import { PerspectiveCamera } from '@react-three/drei';
import ISS from './ISS.tsx';

function App() {
  return (
    <div className="App">
      <Canvas> 
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ISS />
      </Canvas>
    </div>
  );
}

export default App;
