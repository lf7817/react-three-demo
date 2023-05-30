import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { SoRouteObject } from './types';
import { AsyncComponent } from '@/components/AsyncComponent';

export const convertRoutes = (routes: SoRouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    const { element, children, asyncComponent, ...rest } = route;
    return {
      ...rest,
      element: asyncComponent ? <AsyncComponent component={lazy(asyncComponent)} /> : element,
      children: children ? convertRoutes(children) : [],
    } as RouteObject;
  });
};
