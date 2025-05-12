import { CheckoutForm } from '@/app/components/checkout/CheckoutForm';
import { checkoutCourses } from '@/app/constants/courses';

// // Make the export more explicit
// export const generateStaticParams = async () => {
//   return checkoutCourses.map((course) => ({
//     courseId: course.id
//   }));
// };

export default function CheckoutPage({ params }: { params: { id: string } }) {
  const course = checkoutCourses.find((c) => c.id === params.id);
  console.log(params);

  if (!course) {
    return <div>Course not found</div>;
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
