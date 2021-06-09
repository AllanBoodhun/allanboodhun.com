import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from "drei";


function App() {
  return (
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Html fullscreen>
          <div className='container'>
            <h1 className='title'>Hello</h1>
          </div>
        </Html>
      </Canvas>
  );
}

export default App;
