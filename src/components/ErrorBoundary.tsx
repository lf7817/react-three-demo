import { Component, ReactNode } from 'react';

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error('[ErrorBoundary]: ', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <FallbackComponent />;
    }

    return this.props.children;
  }
}

const FallbackComponent = () => {
  return (
    <div className="flex h-full w-full">
      <div className="m-auto flex w-80 flex-col text-center text-2xl">
        <h1>
          应用出错了
          <br /> o(╥﹏╥)o
        </h1>
        <button onClick={() => window.location.reload()}>重新打开</button>
      </div>
    </div>
  );
};
