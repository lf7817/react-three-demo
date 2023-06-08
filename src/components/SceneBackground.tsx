import { useTexture } from '@react-three/drei';
import { FC } from 'react';

export const SceneBackground: FC<{ url: string }> = ({ url }) => {
  const sceneTexture = useTexture(url);

  return <primitive object={sceneTexture} attach="background" />;
};
