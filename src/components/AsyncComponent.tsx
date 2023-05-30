import { ErrorBoundary } from './ErrorBoundary';
import { ComponentType, FC, Suspense } from 'react';
import AppLoading from './AppLoading';

export const AsyncComponent: FC<{ component: ComponentType }> = (props) => {
  const { component: Component } = props;
  return (
    <ErrorBoundary>
      <Suspense fallback={<AppLoading />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};
