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
      <Canvas shadows dpr={[0, 1]} camera={{ position: [0, -10, 150], fov: 50 }}>
        <Html fullscreen position={[0, -50, 0]}>
        </Html>
        <Suspense fallback={null}>
          <Computer position={[0, 0, 0]} />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={0.1} enableRotate={true} rotateSpeed={0.05} enableZoom={false} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
      </Canvas>
    </div>
  );
}