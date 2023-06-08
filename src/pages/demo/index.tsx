import React, { useRef } from 'react';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { RouterBasename } from '@/constants';
import { Canvas } from '@react-three/fiber';

function Model(props: any) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    `${RouterBasename}/models/zha_animate.glb`,
  ) as any;
  const { actions } = useAnimations(animations, group);
  console.log(actions);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Collection" position={[0.2, 0, 0]}>
          <mesh
            name="立方体023"
            castShadow
            receiveShadow
            geometry={nodes.立方体023.geometry}
            material={materials['材质.073']}
            position={[-0.19, 1.62, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体001"
            castShadow
            receiveShadow
            geometry={nodes.立方体001.geometry}
            material={materials['Material__53.019']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体002"
            castShadow
            receiveShadow
            geometry={nodes.立方体002.geometry}
            material={materials['材质.070']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体003"
            castShadow
            receiveShadow
            geometry={nodes.立方体003.geometry}
            material={materials['Material__58.019']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体004"
            castShadow
            receiveShadow
            geometry={nodes.立方体004.geometry}
            material={materials['Material__62.019']}
            position={[-0.44, 3.49, 0.01]}
            rotation={[0.25, 0, -Math.PI]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体005"
            castShadow
            receiveShadow
            geometry={nodes.立方体005.geometry}
            material={materials['材质.071']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体006"
            castShadow
            receiveShadow
            geometry={nodes.立方体006.geometry}
            material={materials['19_-_Default.019']}
            position={[-0.48, 3.38, 0.1]}
            rotation={[0.25, 0, Math.PI]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体007"
            castShadow
            receiveShadow
            geometry={nodes.立方体007.geometry}
            material={materials['材质.072']}
            position={[-0.47, 2.84, 0.01]}
            rotation={[0.25, 0, Math.PI]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体008"
            castShadow
            receiveShadow
            geometry={nodes.立方体008.geometry}
            material={materials['Material__55.010']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体009"
            castShadow
            receiveShadow
            geometry={nodes.立方体009.geometry}
            material={materials['Material__56.010']}
            position={[-0.44, 3.52, 0.01]}
            rotation={[0.25, 0, Math.PI]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体010"
            castShadow
            receiveShadow
            geometry={nodes.立方体010.geometry}
            material={materials['Material__59.019']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体011"
            castShadow
            receiveShadow
            geometry={nodes.立方体011.geometry}
            material={materials['Material__62.020']}
            position={[-0.44, 3.49, 0.01]}
            rotation={[0.25, 0, -Math.PI]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体012"
            castShadow
            receiveShadow
            geometry={nodes.立方体012.geometry}
            material={materials['Material__58.020']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体013"
            castShadow
            receiveShadow
            geometry={nodes.立方体013.geometry}
            material={materials['09 - Default.019']}
            position={[-0.44, 3.33, -0.05]}
            rotation={[0.25, 0, Math.PI]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体014"
            castShadow
            receiveShadow
            geometry={nodes.立方体014.geometry}
            material={materials['抛光_银.010']}
            position={[-0.44, 3.36, 0.14]}
            rotation={[0.25, 0, Math.PI]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体015"
            castShadow
            receiveShadow
            geometry={nodes.立方体015.geometry}
            material={materials['19_-_Default.020']}
            position={[-0.31, 3.46, 0.01]}
            rotation={[0.25, 0, -Math.PI]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体016"
            castShadow
            receiveShadow
            geometry={nodes.立方体016.geometry}
            material={materials['09 - Default.020']}
            position={[-0.19, 1.56, 0.14]}
            rotation={[2.9, 0, 0]}
            scale={[-0.06, -0.03, 0]}
          />
          <mesh
            name="立方体017"
            castShadow
            receiveShadow
            geometry={nodes.立方体017.geometry}
            material={materials['Material__53.020']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体018"
            castShadow
            receiveShadow
            geometry={nodes.立方体018.geometry}
            material={nodes.立方体018.material}
            position={[-0.66, 0.95, -0.13]}
            rotation={[0.25, 0, -Math.PI]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体019"
            castShadow
            receiveShadow
            geometry={nodes.立方体019.geometry}
            material={materials['Material #16.010']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体020"
            castShadow
            receiveShadow
            geometry={nodes.立方体020.geometry}
            material={materials['Material__59.020']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体021"
            castShadow
            receiveShadow
            geometry={nodes.立方体021.geometry}
            material={materials['18_-_Default.010']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
          <mesh
            name="立方体022"
            castShadow
            receiveShadow
            geometry={nodes.立方体022.geometry}
            material={materials['08 - Default.010']}
            position={[-0.19, 1.61, 0.1]}
            rotation={[2.9, 0, 0]}
            scale={[-0.05, -0.03, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(`${RouterBasename}/models/zha_animate.glb`);

export default () => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
};
