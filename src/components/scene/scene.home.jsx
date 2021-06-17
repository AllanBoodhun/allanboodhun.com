import * as THREE from 'three'
import React from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { ContactShadows } from '@react-three/drei'
import { Suspense, useRef } from 'react';
import './scene.style.css';


import Computer from './model.computer';

function Rig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 70, 0.1)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 70, 0.1)
  })
  return <group ref={ref}>{children}</group>
}

export default function Scene() {
  return (
    <div className="Scene">
      <Canvas camera={{ position: [-10, -15, 65], fov: 50 }} dpr={[1, 2]}>
        <pointLight position={[100, 100, 100]} intensity={0.52} />
        <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.5} />
        <Suspense fallback={null}>
          <group position={[-9, 10, -5]}>
            <Rig>
              <Computer/>
            </Rig>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[9, -29, 0]}
              opacity={0.2}
              width={100}
              height={100}
              blur={3}
              far={20}
            />
          </group>
        </Suspense>
      </Canvas>
      <div className="overlay">

        <h2 className="title" >
          <span>Développeur</span> 
          <br />
          <span>Graphiste</span>
        </h2>
      </div>
    </div>
  );
}