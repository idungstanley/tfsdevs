import { useCallback, useRef, useState, useEffect } from 'react';
import { cl } from '../utils';

interface UseResizeProps {
  dimensions: { min: number; max: number };
  storageKey: string;
  direction: 'XL' | 'YB' | 'XR';
  defaultSize?: number;
}

export function useResize({ dimensions, direction, defaultSize, storageKey }: UseResizeProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const [isResize, setIsResize] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const [isMouseUp, setIsMouseUp] = useState(false);
  const { min, max } = dimensions;

  // Retrieve and validate initial size from localStorage
  const getInitialSize = () => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (typeof parsed === 'number' && parsed >= min && parsed <= max) {
          return parsed;
        }
      }
      return defaultSize ?? min;
    } catch {
      return defaultSize ?? min;
    }
  };

  const [size, setSize] = useState(getInitialSize);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (blockRef.current) {
      blockRef.current.style[direction === 'YB' ? 'height' : 'width'] = `${size}px`;
    }
  }, [size, direction]);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!blockRef.current) return;

      setIsDrag(true);
      setIsResize(true);

      const updateSize = () => {
        if (!blockRef.current) return;

        const rect = blockRef.current.getBoundingClientRect();
        let newSize: number;

        if (direction === 'XL') {
          // Resize from left (expand rightward)
          const mouseX = e.clientX;
          const widthFromLeft = rect.left;
          const currentWidth = rect.width;
          newSize = widthFromLeft - mouseX + currentWidth;
        } else if (direction === 'XR') {
          // Resize from right (expand leftward)
          const mouseX = e.clientX;
          const widthFromRight = rect.right;
          newSize = mouseX - (widthFromRight - rect.width);
        } else {
          const mouseY = e.clientY;
          const heightFromTop = rect.top;
          newSize = mouseY - heightFromTop;
        }

        const adjustedSize = Math.max(min, Math.min(newSize, max));
        setSize(adjustedSize);
      };

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateSize);
    },
    [direction, min, max]
  );

  const handlePointerUp = useCallback(() => {
    document.body.style.pointerEvents = '';
    document.body.style.userSelect = '';

    if (blockRef.current) {
      const isXDirection = direction === 'XL' || direction === 'XR';
      const newSize = isXDirection ? blockRef.current.offsetWidth : blockRef.current.offsetHeight;
      setSize(newSize);
      localStorage.setItem(storageKey, JSON.stringify(newSize));
      setIsDrag(false);
      setIsResize(false);
      setIsMouseUp(true);
    }

    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, [direction, storageKey, handlePointerMove]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      document.body.style.pointerEvents = 'none';
      document.body.style.userSelect = 'none';
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
      setIsMouseUp(false);
    },
    [handlePointerMove, handlePointerUp]
  );

  function Dividers() {
    const params = {
      XL: {
        root: 'top-0 w-2 -left-1.5 h-full',
        firstDivider: 'top-0 left-0.5 w-0.5 h-full',
        secondDivider: 'top-0 right-0 w-0.5 h-full'
      },
      YB: {
        root: 'h-2 -bottom-1 w-full right-0',
        firstDivider: 'top-0 left-0 h-0.5 w-full',
        secondDivider: 'bottom-0 left-0 h-0.5 w-full'
      },
      XR: {
        root: 'top-0 w-2 -right-0.5 h-full',
        firstDivider: 'top-0 left-0 w-0.5 h-full',
        secondDivider: 'top-0 right-0 w-0.5 h-full'
      }
    };

    return (
      <div
        style={{
          cursor: direction === 'YB' ? 'row-resize' : 'col-resize',
          willChange: 'transform',
          transition: 'background-color 0.2s ease'
        }}
        onPointerDown={handlePointerDown}
        className={cl('z-10 absolute group transition-all duration-200', params[direction].root)}
      >
        <div
          className={cl(
            size === max ? 'opacity-0' : 'group-hover:opacity-100',
            'absolute transition-all duration-200 w-0.5 h-full opacity-0 bg-primary-300',
            params[direction].firstDivider
          )}
        />
        <div
          className={cl(
            size === min ? 'opacity-0' : 'group-hover:opacity-100',
            'absolute transition-all duration-200 w-0.5 h-full opacity-0 bg-primary-300',
            params[direction].secondDivider
          )}
        />
      </div>
    );
  }

  return {
    blockRef,
    Dividers,
    size,
    isDrag,
    isMouseUp,
    isResize
  };
}
