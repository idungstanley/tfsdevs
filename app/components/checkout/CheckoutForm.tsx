'use client';
import { CheckoutCourses } from '@/app/types/courses';
import { Button } from '@radix-ui/themes';
import { Download } from 'lucide-react';
import { Input } from '../ui/input';
import { useState } from 'react';

interface CheckoutFormProps {
  course: CheckoutCourses;
}

export function CheckoutForm({ course }: CheckoutFormProps) {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isApplying, setIsApplying] = useState(false);
  const [error, setError] = useState('');
  const discount_code = 'happy-coding';

  const handleCheckout = async () => {
    // Implement checkout logic here
    console.log('Checking out:', course.title);
  };

  const handleDownloadBrochure = () => {
    // Implement brochure download logic here
    window.open(course.brochureUrl, '_blank');
  };

  const handleApplyCoupon = async () => {
    if (!coupon.trim()) {
      setError('Please enter a coupon code');
      return;
    }
    setIsApplying(true);
    setError('');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (coupon === discount_code) {
        const discountAmount = Math.round(course.price * 0.1);
        setDiscount(discountAmount);
      }
    } catch (err) {
      console.log(err);
      setError('Failed to apply coupon');
    } finally {
      setIsApplying(false);
    }
  };

  const finalPrice = course.price - discount;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-slate-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Course Details</h2>
        <p className="text-muted-foreground mb-4">{course.description}</p>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Duration</h3>
            <p className="text-muted-foreground">{course.duration}</p>
          </div>

          <div>
            <h3 className="font-medium">What you&apos;ll learn</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              {course.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-900 rounded-lg h-fit">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Course Price</span>
            <span className="font-medium">#{course.price}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between items-center text-green-600">
              <span>Discount</span>
              <span>-${discount}</span>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 border ring-0 focus:ring-0 focus:outline-none border-slate-400 bg-transparent outline-none"
              />
              <Button size="3" onClick={handleApplyCoupon} disabled={isApplying}>
                {isApplying ? 'Applying...' : 'Apply'}
              </Button>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          <div className="border-t border-slate-400 pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>#{finalPrice}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button className="w-full cursor-pointer" size="3" onClick={handleCheckout}>
              Proceed to Payment
            </Button>

            <Button variant="outline" size="3" className="w-full cursor-pointer" onClick={handleDownloadBrochure}>
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
