import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { CourseCardProps } from '@/app/types/index.interface';
import { features } from '@/app/constants';
import { formatPrice } from '@/app/utils';
import { LOCALSTORAGE_KEY } from '@/app/constants/localStorage';

export const PricingCard: React.FC<CourseCardProps> = ({
  label,
  price,
  index,
  current,
  description,
  bootcampId,
  handleSlideClick
}) => {
  const slideRef = useRef<HTMLDivElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty('--x', `${x}px`);
      slideRef.current.style.setProperty('--y', `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const handleEnroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
    localStorage.setItem(LOCALSTORAGE_KEY.BOOTCAMPID, JSON.stringify(bootcampId));
  };

  return (
    <div
      ref={slideRef}
      className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out md:w-[300px] md:min-w-[400px] p-4 rounded-lg md:h-[400px] w-full bg-slate-900  h-full z-10 min-w-full"
      onClick={() => handleSlideClick?.(index as number)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: current !== index ? 'scale(0.98) rotateX(8deg)' : 'scale(1) rotateX(0deg)',
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transformOrigin: 'bottom'
      }}
    >
      <div
        className={`relative w-full h-full flex flex-col justify-between text-left transition-opacity duration-1000 ease-in-out ${
          current === index ? 'opacity-100 visible' : 'opacity-50'
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold uppercase">{label}</h3>
            <div className="my-4">
              <p className="text-4xl font-bold">Over 100 Lessons</p>
              <p className="text-sm text-gray-400">{formatPrice(price as number)}</p>
            </div>
          </div>

          <div className="text-neutral-200 relative z-20 text-left">
            <div className="md:w-full">
              <p className="line-clamp-3 text-gray-300 text-wrap text-sm">{description}</p>
            </div>
            <ul className="list-none mt-6">
              {features?.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <Step title={feature} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="/auth/signup" onClick={(e) => handleEnroll(e)} className="cursor-pointer mt-10 md:mt-4">
          <button className="w-full bg-[#684DF4]/90 hover:bg-[#684DF4] text-white py-2 rounded-lg transition-colors cursor-pointer">
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
