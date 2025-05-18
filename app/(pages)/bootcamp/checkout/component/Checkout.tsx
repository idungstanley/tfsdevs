'use client';
import { CheckoutForm } from '@/app/components/checkout/CheckoutForm';
import { Bootcamp } from '@/app/features/bootcamp/bootcamp.interface';
import { useGetAllBootCamps } from '@/app/features/bootcamp/bootcampService';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { FadeLoader } from 'react-spinners';

const CheckoutCourse = ({ courseId }: { courseId: number }) => {
  const { data, isLoading } = useGetAllBootCamps({});
  const bootcamps = data?.data?.$values;

  const course = useMemo(() => {
    return bootcamps?.find((c) => c?.bootcampId == courseId);
  }, [bootcamps, courseId]);

  if (isLoading) {
    return (
      <div className="text-white flex flex-col items-center justify-center min-h-screen w-full gap-3">
        <p>Retriving course details, hold on. . .</p>
        <FadeLoader aria-label="Loading Spinner" color="#684DF4" loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background md:p-20 p-6 pt-32 text-white w-full">
      <Link href="/">
        <div className="items-center justify-center w-full flex hover:text-[#684DF4]">
          <Image src="/iconpurple.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
          <Image src="/logotext.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
        </div>
      </Link>
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <h1 className="text-xl font-bold mb-8">Bootcamp: {course?.title}</h1>
        <CheckoutForm course={course as Bootcamp} />
      </div>
    </div>
  );
};

export default CheckoutCourse;
