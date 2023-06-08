import { OrbitControls, useTexture } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { FC, Suspense } from 'react';
import { DoubleSide, MeshBasicMaterial, SphereGeometry } from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import vrImg from './vr.png';
import { RouterBasename } from '@/constants';

const VR: FC = () => {
  return (
    <div className="h-full w-full">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Scene = () => {
  const hdr = useLoader(RGBELoader, `${RouterBasename}/textures/10xiangxi-1.hdr`);
  // 或
  // const texture = useTexture(vrImg);
  const material = new MeshBasicMaterial({ map: hdr, side: DoubleSide });
  const geometry = new SphereGeometry(5, 32, 32);

  return (
    <>
      <color attach="background" args={[0x000000]} />
      <perspectiveCamera fov={90} near={0.1} far={100} />
      <OrbitControls enablePan={false} minDistance={1} maxDistance={2} autoRotate />
      <mesh material={material} geometry={geometry} />
    </>
  );
};

export default VR;
