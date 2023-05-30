import { FC, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import styles from './style.module.less';

const STARS = new Array(500).fill(1).map((_, index) => ({
  id: index,
  radius: Math.random() * 2,
  detail: 0,
  color: 0xeeeeee,
  position: [(Math.random() - 0.5) * 700, (Math.random() - 0.5) * 700, (Math.random() - 0.5) * 700],
  rotation: [Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI],
}));

const Base: FC = () => {
  return (
    <div className={styles.base}>
      <Canvas camera={{ fov: 40, far: 1000, position: [20, 100, 450] }}>
        <Core />
      </Canvas>
    </div>
  );
};

const Core: FC = () => {
  const rot = useRef(0);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const planet = useRef<THREE.Mesh>(null!);
  const ring = useRef<THREE.Mesh>(null!);
  const satellite = useRef<THREE.Mesh>(null!);
  const stars = useRef<THREE.Group>(null!);

  useFrame(() => {
    // 给网格模型添加一个转动动画
    rot.current += Math.random() * 0.8;
    const radian = (rot.current * Math.PI) / 180;

    // 星球位置动画
    if (planet.current) {
      planet.current.rotation.y += 0.005;
    }

    // 星球轨道环位置动画
    if (ring.current) {
      ring.current.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 400);
    }

    if (satellite.current) {
      satellite.current.position.x = 250 * Math.sin(radian);
      satellite.current.position.y = 100 * Math.cos(radian);
      satellite.current.position.z = -100 * Math.cos(radian);
      satellite.current.rotation.x += 0.005;
      satellite.current.rotation.y += 0.005;
      satellite.current.rotation.z -= 0.005;
    }

    if (stars.current) {
      stars.current.rotation.y += 0.0009;
      stars.current.rotation.z -= 0.0003;
    }
  });

  return (
    <>
      <color attach="background" args={[0x1a1a1a]} />
      <fog attach="fog" args={[0x1a1a1a, 1, 1000]} />
      <OrbitControls enableDamping />
      <ambientLight color={0xdeedff} intensity={1.5} />

      <mesh ref={planet}>
        <meshLambertMaterial color={0x03c03c} wireframe />
        <sphereGeometry args={[80, 32, 32]} />
      </mesh>

      <mesh ref={ring} rotation={[Math.PI / 2, -0.1 * (Math.PI / 2), 0]}>
        <meshLambertMaterial color={0x40a9ff} wireframe />
        <torusGeometry args={[150, 8, 2, 120]} />
      </mesh>

      <mesh ref={satellite}>
        <icosahedronGeometry args={[16, 0]} />
        <meshToonMaterial color={0xfffc00} />
      </mesh>

      <group ref={stars}>
        {STARS.map((star) => (
          <mesh
            name={star.id.toString()}
            key={star.id}
            rotation={[star.rotation[0], star.rotation[1], star.rotation[2]]}
            position={[star.position[0], star.position[1], star.position[2]]}
          >
            <icosahedronGeometry args={[star.radius, 0]} />
            <meshToonMaterial color={star.color} />
          </mesh>
        ))}
      </group>
    </>
  );
};

export default Base;
