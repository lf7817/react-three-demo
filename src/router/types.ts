import { ComponentType } from 'react';
import { NonIndexRouteObject, IndexRouteObject } from 'react-router-dom';

type AsyncComponent = () => Promise<{ default: ComponentType }>;

interface SoNonIndexRouteObject extends NonIndexRouteObject {
  asyncComponent?: AsyncComponent;
  children?: SoRouteObject[];
}

interface SoIndexRouteObject extends IndexRouteObject {
  asyncComponent?: AsyncComponent;
}

export type SoRouteObject = SoIndexRouteObject | SoNonIndexRouteObject;
