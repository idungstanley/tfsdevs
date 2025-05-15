import { CheckoutForm } from '@/app/components/checkout/CheckoutForm';
import { checkoutCourses } from '@/app/constants/courses';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

// Generates static paths for all course IDs
export async function generateStaticParams() {
  return checkoutCourses.map((course) => ({
    id: course.id // Note: The key must match the dynamic segment [id]
  }));
}

export default function CheckoutPage({ params }: Props) {
  const course = checkoutCourses.find((c) => c.id === params.id);

  if (!course) {
    // This triggers Next.js to show the 404 page
    notFound();
  }

  return (
    <div className="min-h-screen bg-background p-20 pt-28 text-white w-full">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <h1 className="text-xl font-bold mb-8">Course: {course.title}</h1>
        <CheckoutForm course={course} />
      </div>
    </div>
  );
}
