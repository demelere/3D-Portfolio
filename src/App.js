import React from 'react';
import { Canvas } from 'react-three-fiber';
import CustomScene from './Scene.js';

function App() {
  return (
    <div className="App">
      <Canvas>
        <CustomScene />
      </Canvas>
    </div>
  );
}

export default App;
