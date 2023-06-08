import { ModelLoader } from '@/components/ModelLoader';
import { RouterBasename } from '@/constants';
import {Cloud, Html, OrbitControls, useFBX, useTexture} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { FC, PropsWithChildren, Suspense, useEffect, useRef, useState } from 'react';
import { NearestFilter, LinearSRGBColorSpace, Vector3, Group, Spherical } from 'three';
import { countries } from './config';
import { HtmlProps } from '@react-three/drei/web/Html';
import './style.less';

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
        gl={{
          outputColorSpace: LinearSRGBColorSpace,
          shadowMap: { enabled: true },
          useLegacyLights: false,
        }}
        camera={{
          position: new Vector3(-3.5144962914904503, 12.125153694245794, 17.779874662069513),
          fov: 45,
          near: 1,
          far: 1000,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

// Let's make the marker into a component so that we can abstract some shared logic
const Marker: FC<PropsWithChildren<HtmlProps>> = ({ children, position, ...props }) => {
  const ref = useRef<any>(null);
  // This holds the local occluded state
  const [isOccluded, setOccluded] = useState();
  const [isInRange, setInRange] = useState<boolean>();
  const isVisible = isInRange && !isOccluded;
  // Test distance
  const vec = new Vector3();
  //
  useFrame((state) => {
    if (!position) return;
    //
    const meshDistance = state.camera.position.distanceTo(position);
    const spriteDistance = state.camera.position.distanceTo(position);
    const show = spriteDistance >  meshDistance - 20;
    const vector = new Vector3(position.x, position.y, position.z);
    vector.project(state.camera);
    ref.current.style.top = vector.y  + "px"; //80
    ref.current.style.left = vector.x  + "px";
    // console.log(show)
  });

  console.log(ref)
  
  return (
      <Html
        ref={ref}
        // 3D-transform contents
        // transform
        sprite
        // Hide contents "behind" other meshes
        occlude
        // Tells us when contents are occluded (or not)
        // onOcclude={setOccluded}
        // We just interpolate the visible state into css opacity and transforms
        style={{
          transition: 'all 0.2s',
          // opacity: !isInRange ? 1 : 0,
          // transform: `scale(${!isInRange ? 1 : 0.25})`,
        }}
        {...props}
      >
        {children}
      </Html>
  );
};

const Scene: FC = () => {
  return (
    <>
      <axesHelper args={[6.4]} />
      <OrbitControls enableDamping enablePan={false} rotateSpeed={0.5} panSpeed={0.5} />
      <fog attach="fog" args={[0xffffff, 10, 90]} />
      <ambientLight color={0xffffff} intensity={2.8} />
      <Suspense fallback={<ModelLoader />}>
        <Earth />
      </Suspense>
      <group>
        {countries.map((country) => (
          <Marker key={country.name} position={createPosition(country.position, 6.4)}>
            <div
              className="maker"
              style={{ backgroundImage: `url(${RouterBasename}/images/panda/${country.img})` }}
            ></div>
          </Marker>
        ))}
      </group>
    </>
  );
};

const Earth: FC = () => {
  const fbx = useFBX(`${RouterBasename}/models/diqiu.fbx`);
  const diqiuTexture = useTexture(`${RouterBasename}/models/diqiu.jpeg`);

  useEffect(() => {
    fbx.traverse((child) => {
      if (child.isMesh) {
        diqiuTexture.magFilter = NearestFilter;
        diqiuTexture.minFilter = NearestFilter;
        diqiuTexture.anisotropy = 16;
        child.material.map = diqiuTexture;
        child.material.color.convertLinearToSRGB();
      }
    });
  }, []);

  return <primitive object={fbx} />;
};

//转换经纬度
function createPosition(lnglat: number[], radius: number) {
  const spherical = new Spherical();
  spherical.radius = radius; // 31.5
  const lng = lnglat[0] - 205; // -200 经度
  const lat = lnglat[1] - 2; // -36 纬度
  const theta = (lng + 90) * (Math.PI / 180);
  const phi = (90 - lat) * (Math.PI / 180);
  spherical.phi = phi;
  spherical.theta = theta;
  const position = new Vector3();
  position.setFromSpherical(spherical);
  return position;
}

export default Panda;
