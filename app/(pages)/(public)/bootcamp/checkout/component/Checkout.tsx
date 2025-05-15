import { CheckoutForm } from '@/app/components/checkout/CheckoutForm';
import { checkoutCourses } from '@/app/constants/courses';
import { CheckoutCourses } from '@/app/types/courses';
import React from 'react';

const CheckoutCourse = ({ courseId }: { courseId: string }) => {
  const course = checkoutCourses.find((c) => c.id === courseId);

  return (
    <div className="min-h-screen bg-background p-20 pt-28 text-white w-full">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <h1 className="text-xl font-bold mb-8">Course: {course?.title}</h1>
        <CheckoutForm course={course as CheckoutCourses} />
      </div>
    </div>
  );
};

export default CheckoutCourse;
