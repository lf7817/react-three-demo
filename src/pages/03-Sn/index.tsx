import { ModelLoader } from '@/components/ModelLoader';
import { RouterBasename } from '@/constants';
import {
  AdaptiveDpr,
  MapControls,
  OrbitControls,
  Stats,
  useGLTF,
  useTexture,
} from '@react-three/drei';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { FC, Suspense } from 'react';
import { TextureLoader, RepeatWrapping, Texture, LinearFilter } from 'three';

const Panda: FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${RouterBasename}/textures/bg.jpeg)`,
        backgroundSize: '100% 100%',
      }}
      className={`h-full w-full bg-no-repeat`}
    >
      <Canvas
        shadows
        camera={{ position: [45, 45, 100], fov: 50, near: 1, far: 10000 }}
        gl={{ useLegacyLights: false }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

const Scene: FC = () => {
  return (
    <>
      <Stats />
      <axesHelper args={[100]} />
      <MapControls enableDamping />
      <ambientLight color={0xffffff} intensity={2} />
      <directionalLight position={[10, 10, 10]} color={0xffffff} intensity={3} />
      <Suspense fallback={<ModelLoader />}>
        <Suining />
      </Suspense>
    </>
  );
};

const Suining: FC = () => {
  const gltf = useGLTF(`${RouterBasename}/models/0606.5.glb`);
  gltf.scene.receiveShadow = true;
  gltf.scene.castShadow = true;
  return <primitive object={gltf.scene} />;
};

export default Panda;
