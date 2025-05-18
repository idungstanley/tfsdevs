'use client';
import { CheckoutForm } from '@/app/components/checkout/CheckoutForm';
import { Bootcamp } from '@/app/features/bootcamp/bootcamp.interface';
import { useGetAllBootCamps } from '@/app/features/bootcamp/bootcampService';
import React, { useMemo } from 'react';
import { FadeLoader } from 'react-spinners';

const CheckoutCourse = ({ courseId }: { courseId: number }) => {
  const { data, isLoading } = useGetAllBootCamps({});
  const bootcamps = data?.data?.$values;

  
  const course = useMemo(() => {
    console.log('Bootcamps:->', bootcamps?.[0]?.bootcampId);
    return bootcamps?.find((c) => c?.bootcampId == courseId);
  }, [bootcamps, courseId]);
  console.log('Bootcamps:', bootcamps);
  console.log('Course:', course, courseId);

  if (isLoading) {
    return (
      <div className="text-white flex flex-col items-center justify-center min-h-screen w-full gap-3">
        <p>Retriving course details, hold on. . .</p>
        <FadeLoader aria-label="Loading Spinner" color="#684DF4" loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background md:p-20 p-6 pt-28 text-white w-full">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <h1 className="text-xl font-bold mb-8">Course: {course?.title}</h1>
        <CheckoutForm course={course as Bootcamp} />
      </div>
    </div>
  );
};

export default CheckoutCourse;
