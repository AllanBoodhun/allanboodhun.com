import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { Suspense } from 'react';
import './scene.style.css';


import Computer from './model.computer';


export default function Scene() {
  return (
    <div className="Scene">
      <Canvas shadows dpr={[0, 2]} camera={{ position: [0, 0, 150], fov: 50 }}>
        <Html fullscreen position={[0, -100, 0]}>
        </Html>
        <Suspense fallback={null}>
          <Computer position={[0, 0, 0]} />
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
      </Canvas>
    </div>
  );
}