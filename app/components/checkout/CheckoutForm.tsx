'use client';
import { Download } from 'lucide-react';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Bootcamp } from '@/app/features/bootcamp/bootcamp.interface';
import { formatPrice } from '@/app/utils';
import { LOCALSTORAGE_KEY } from '@/app/constants/localStorage';
import { useRouter } from 'next/navigation';

interface CheckoutFormProps {
  course: Bootcamp;
}

export function CheckoutForm({ course }: CheckoutFormProps) {
  const router = useRouter();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isApplying, setIsApplying] = useState(false);
  const [error, setError] = useState('');
  const discount_code = 'happy-coding';

  const checkoutLink = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY.PAYMENT_URL) ?? '');

  const handleCheckout = async () => {
    router.push(checkoutLink);
  };

  const handleDownloadBrochure = () => {
    // window.open(course.brochureUrl, '_blank');
  };

  const handleApplyCoupon = async () => {
    if (!coupon.trim()) {
      setError('Please enter a coupon code');
      return;
    }
    setIsApplying(true);
    setError('');
    try {
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

  const finalPrice = course?.price - discount;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-slate-900 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Bootcamp Details</h2>
        <p className="text-muted-foreground mb-4">{course?.description}</p>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Duration</h3>
            <p className="text-muted-foreground">{course?.startDate}</p>
          </div>

          <div>
            <h3 className="font-medium">What you&apos;ll learn</h3>
            {/* <ul className="list-disc list-inside text-muted-foreground">
              {course.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-900 rounded-lg h-fit">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Bootcamp Price</span>
            <span className="font-medium">{formatPrice(course?.price)}</span>
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
              <button
                className="w-fit px-2 cursor-pointer bg-blue-600 rounded-md h-10"
                onClick={handleApplyCoupon}
                disabled={isApplying}
              >
                {isApplying ? 'Applying...' : 'Apply'}
              </button>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          <div className="border-t border-slate-400 pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>#{finalPrice}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 w-full">
            <button className="w-full cursor-pointer bg-blue-600 rounded-md h-10" onClick={handleCheckout}>
              Proceed to Payment
            </button>

            <button
              className="w-full h-10 rounded-md border flex items-center justify-center gap-4 border-p cursor-pointer"
              onClick={handleDownloadBrochure}
            >
              <Download className="mr-2 h-4 w-4" />
              <p> Download Brochure</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
