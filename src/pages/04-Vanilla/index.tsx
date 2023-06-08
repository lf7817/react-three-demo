import { useEffect, useRef } from 'react';

import { initThree } from './init';

export default function Vanilla() {
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    initThree(canvas.current!);
  }

  return <div className="h-full w-full" ref={canvas}></div>;
}
