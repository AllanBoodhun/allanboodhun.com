import React from "react";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Computer = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return (
    <>
      <mesh rotation={[0, -19.5, 0]} position={[ 0, -20, 0]}>
        <primitive object={gltf.scene} scale={5.5} />
      </mesh>
    </>
  );
};

export default Computer;