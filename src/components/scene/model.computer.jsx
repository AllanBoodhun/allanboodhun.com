import React, { useRef } from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber'

const Computer = () => {
  const gltf = useLoader(GLTFLoader, "./interface.gltf");
  const dino = useLoader(GLTFLoader, "./dino.gltf");
  const cam = useLoader(GLTFLoader, "./camera.gltf");
  const cloud = useLoader(GLTFLoader, "./cloud.gltf");
  const plant = useLoader(GLTFLoader, "./plant.gltf");
  return (
    <>
      <group>
        <mesh position={[7, -30, 25]}
          rotation={[1.3, -1.5, 1]}>
          <primitive object={gltf.scene} scale={20} />
        </mesh>

        <mesh position={[20, -27, 15]}
          rotation={[0.5, -1.1, 0]}>
          <primitive object={dino.scene} scale={65} />
        </mesh>

        <mesh position={[-20, 10, 10]}
          rotation={[-6.2, 0, 0]}>
          <primitive object={cloud.scene} scale={0.2} />
        </mesh>
        

        <mesh position={[23, 3, 11]}
          rotation={[0.6, -0.1, -0.2]}>
          <primitive object={cam.scene} scale={0.8} />
        </mesh>

        <mesh position={[-10, -32, 25]}
          rotation={[0.5, 0.1, 0]}>
          <primitive object={plant.scene} scale={2.5} />
        </mesh>

      </group>
    </>
  );
};


export default Computer;