import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface BaseDropdownProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hasBaseStyles?: boolean;
  paddingClassName?: string;
  bgColorClassName?: string;
}

export default function BaseDropdown({
  children,
  className,
  hasBaseStyles = true,
  paddingClassName,
  bgColorClassName,
  ...props
}: BaseDropdownProps) {
  return (
    <div
      className={clsx('', className, paddingClassName, bgColorClassName, {
        'border border-solid border-brand-neutral-84 rounded-2xl shadow-dropdown': hasBaseStyles,
        'p-2': !paddingClassName && hasBaseStyles,
        'bg-brand-neutral-92': !bgColorClassName && hasBaseStyles
      })}
      {...props}
    >
      {children}
    </div>
  );
}
