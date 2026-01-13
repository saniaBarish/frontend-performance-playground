import { useEffect, useRef } from 'react';

export const useRenderCounter = (label?: string) => {
  const renders = useRef(0);

  useEffect(() => {
    renders.current++;

    if (label) {
      console.log(`${label} render:`, renders.current);
    }
  });

  return renders;
};
