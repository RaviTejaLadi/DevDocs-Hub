import { useEffect, useState } from 'react';

export function useSandpackEditorHeight() {
  const [height, setHeight] = useState(640);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setHeight(280);
      else if (w < 1024) setHeight(440);
      else setHeight(680);
    };

    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return height;
}
