import { FC, useEffect, useRef, useState } from 'react';
import { Canvas, MeshProps, useThree } from '@react-three/fiber';
import { Group, Intersection, Mesh, Object3D, Raycaster, Vector2, Vector3, Event } from 'three';
import { OrbitControls, useTexture } from '@react-three/drei';
import { RouterBasename } from '@/constants';
import { useMemoizedFn } from 'ahooks';

const Page: FC = () => {
  return (
    <div className={'h-full w-full'}>
      <Canvas
        gl={{ antialias: true }}
        camera={{
          near: 1,
          far: 10000,
          fov: 45,
          position: [500, 800, 1300],
        }}
      >
        <Scene />
      </Canvas>
      <div className={'absolute left-[50px] top-[50px]'}>提示：左键添加，右键删除</div>
    </div>
  );
};

interface CubeListItem {
  position: Vector3;
  id: string;
}

function Scene() {
  const state = useThree();
  const pointer = useRef(new Vector2());
  const raycaster = useRef(new Raycaster());
  const rollOverMesh = useRef<Mesh>(null);
  const group = useRef<Group>(null);
  const [cubes, setCubes] = useState<CubeListItem[]>([]);
  const pushCube = useMemoizedFn((item: CubeListItem) => setCubes([...cubes, item]));
  const deleteCube = useMemoizedFn((id: string) => {
    cubes.splice(
      cubes.findIndex((item) => item.id === id),
      1,
    );
    setCubes([...cubes])
  });

  useEffect(() => {
    const getIntersects = (event: PointerEvent) => {
      pointer.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      );
      raycaster.current.setFromCamera(pointer.current, state.camera);
      return raycaster.current.intersectObjects(group.current!.children, false);
    };

    const getPosition = (intersect: Intersection<Object3D<Event>>) => {
      const position = new Vector3()
        .copy(intersect.point)
        .add(intersect.face!.normal)
        .divideScalar(50)
        .floor()
        .multiplyScalar(50)
        .addScalar(25);
      return position.setY(Math.abs(position.y));
    };

    const moveEvent = (event: PointerEvent) => {
      const intersects = getIntersects(event);

      if (intersects.length > 0) {
        const position = getPosition(intersects[0]);
        rollOverMesh.current?.position.copy(position);
      }
    };

    const downEvent = (event: PointerEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const intersects = getIntersects(event);

      if (intersects.length > 0) {
        const intersect = intersects[0]; 
        if (event.button === 0) {
          // 左键添加
          pushCube({
            id: Date.now().toString(),
            position: getPosition(intersects[0]),
          });
        } else if (event.button === 2) {
          // 右键删除
          if (intersect.object.name === 'plane') return;
          deleteCube(intersect.object.name);
        }
      }
    };

    document.addEventListener('pointermove', moveEvent);
    document.addEventListener('pointerdown', downEvent);

    return () => {
      document.removeEventListener('pointermove', moveEvent);
      document.removeEventListener('pointerdown', downEvent);
    };
  }, []);

  return (
    <>
      <axesHelper args={[10000]} />
      <gridHelper args={[1000, 20]} />
      <ambientLight color={0x606060} />
      <directionalLight color={0xffffff} position={[1, 0.75, 0.5]} />
      <color args={[0xf0f0f0]} attach={'background'} />
      <OrbitControls />

      <mesh ref={rollOverMesh} name={'roll-over'}>
        <boxGeometry args={[50, 50, 50]} />
        <meshBasicMaterial color={0xff0000} opacity={0.5} transparent />
      </mesh>

      <group ref={group}>
        <mesh name={'plane'} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1000, 1000]} />
          <meshBasicMaterial visible={false} color={0x00ff00} />
        </mesh>
        {cubes.map((cube) => (
          <Cube key={cube.id} name={cube.id.toString()} position={cube.position} />
        ))}
      </group>
    </>
  );
}

const Cube: FC<MeshProps> = (props) => {
  const texture = useTexture(`${RouterBasename}/textures/square-outline-textured.png`);

  return (
    <mesh {...props}>
      <boxGeometry args={[50, 50, 50]} />
      <meshLambertMaterial map={texture} color={0xfeb74c} />
    </mesh>
  );
};

export default Page;
