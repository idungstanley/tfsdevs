import CheckoutCourse from '../component/Checkout';

interface PageProps {
  params: Promise<{ courseId: string }>; // Or the appropriate type for your route
}

export default async function CheckoutPage({ params }: PageProps) {
  const { courseId } = await params;

  return <CheckoutCourse courseId={courseId} />;
}
