import { OrbitControls, useCubeTexture, useTexture } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { FC, Suspense, useRef, useState } from 'react';
import {
  CubeTextureLoader,
  DoubleSide,
  LinearSRGBColorSpace,
  MeshBasicMaterial,
  SphereGeometry,
  Vector2,
} from 'three';
import left from './left.jpeg';
import right from './right.jpeg';
import up from './up.jpeg';
import bottom from './bottom.jpeg';
import back from './back.jpeg';
import front from './front.jpeg';
import { RouterBasename } from '@/constants';

const VR: FC = () => {
  return (
    <div className="h-full w-full">
      <Canvas gl={{ outputColorSpace: LinearSRGBColorSpace }}>
        <color attach="background" args={[0x000000]} />
        <axesHelper args={[100]} />
        <ambientLight intensity={1} />
        <cubeCamera />
        {/* <perspectiveCamera position={[0, 0, 0.1]} fov={90} near={0.1} far={100} /> */}
        <OrbitControls enablePan={false} minDistance={1} maxDistance={5} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

const urls = [left, right, up, bottom, back, front];

const Scene = () => {
  // 通过 useLoader 加载六张图片
  const envMap = useCubeTexture(
    ['right.jpeg', 'left.jpeg', 'up.jpeg', 'bottom.jpeg', 'front.jpeg', 'back.jpeg'],
    {
      path: `${RouterBasename}/textures/vr-skybox/`,
    },
  );
  console.log(envMap);
  const textures = useTexture(urls);
  const materials = textures.map((texture, index) => {
    if (index === 2 || index === 3) {
      texture.rotation = Math.PI;
      texture.center = new Vector2(0.5, 0.5);
    }

    return new MeshBasicMaterial({ map: texture });
  });

  return (
    <mesh position={[0, 0, 0]} material={new MeshBasicMaterial({ envMap })}>
      <boxGeometry args={[6, 6, 6]} />
    </mesh>
  );
};

export default VR;
