'use client';
import { useEffect, useState } from 'react';
import { RESOLUTION_RELATIVE_WIDTH, RESOLUTION_TYPES } from '../constants/resolution';

const useResolution = () => {
  const [resolution, setResolution] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateResolution = () => {
      const width = window.innerWidth;
      if (width <= RESOLUTION_RELATIVE_WIDTH.MOBILE) {
        setResolution(RESOLUTION_TYPES.MOBILE);
      } else if (width <= RESOLUTION_RELATIVE_WIDTH.TABLET) {
        setResolution(RESOLUTION_TYPES.TABLET);
      } else {
        setResolution(RESOLUTION_TYPES.LAPTOP);
      }
    };

    updateResolution();
    window.addEventListener('resize', updateResolution);

    return () => window.removeEventListener('resize', updateResolution);
  }, []);

  return resolution;
};

export default useResolution;
