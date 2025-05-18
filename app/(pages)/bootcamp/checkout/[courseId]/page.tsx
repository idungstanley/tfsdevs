import CheckoutCourse from '../component/Checkout';

interface PageProps {
  params: Promise<{ courseId: number }>; // Or the appropriate type for your route
}

export default async function CheckoutPage({ params }: PageProps) {
  const { courseId } = await params;
  console.log('Course ID:', courseId);

  return <CheckoutCourse courseId={courseId} />;
};
