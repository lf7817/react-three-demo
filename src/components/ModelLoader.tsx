import { Html, useProgress } from '@react-three/drei';

export function ModelLoader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
