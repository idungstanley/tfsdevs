import { InputDataTypes } from '@/app/types/index.interface';
import React from 'react';

function InputWithLabel({
  label,
  placeholder,
  hint,
  cornerHint,
  required,
  name,
  type = 'text',
  autoComplete,
  value,
  onChange,
  leadingIcon,
  trailingIcon,
  trailingClick,
  bgColor,
  borderRadius,
  height = 'h-12',
  classes,
  onBlur,
  styles,
  trailingIconClasses,
  width = 'w-full',
  labelClasses,
  isError,
  errorMessage,
  disabled,
  keyDownFunc
}: InputDataTypes) {

  const handleTrailingIconClick = () => {
    if (trailingClick) {
      trailingClick();
    }
  };

  return (
    <div className=" w-full lg:text-[16px] text-[14px]">
      <div className={`relative rounded-[16px] ${bgColor}`}>
        {leadingIcon && (
          <div
            className={`absolute inset-y-0 left-0 flex items-center pl-1.5 pointer-events-none ${trailingIconClasses}`}
          >
            {leadingIcon}
          </div>
        )}
        {label && (
          <div className="flex justify-between">
            <label htmlFor={name} className={`z-10 text-[14px] ${labelClasses}`}>
              {label} {required && <span className="ml-1 text-red-500">*</span>}
            </label>
            {cornerHint && <span className="text-gray-500">{cornerHint}</span>}
          </div>
        )}
        <div
          className={`flex relative flex-col gap-1 items-start justify-center ${width} appearance-none block ${
            leadingIcon && 'pl-8'
          } ${trailingIcon && 'pr-10'} ${trailingIcon && 'pr-10'} 
          ${bgColor} ${height} dark:bg-brand-dark-base relative focus:border-[#684DF4] focus:outline-base ${
            !isError && 'focus-within:ring-2 focus-within:ring-[#684DF4] focus-within:border-none'
          } ${classes}`}
        >
          <input
            maxLength={2000}
            type={type}
            id={name}
            onKeyDown={keyDownFunc}
            required={required}
            name={name}
            disabled={disabled}
            autoComplete={autoComplete}
            className={`${
              borderRadius ? borderRadius : name === 'search' && !borderRadius ? 'rounded-md py-0.5' : ''
            } bg-transparent outline-none focus:outline-none w-full`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            style={{ ...styles }}
          />
        </div>
        {trailingIcon && (
          <div
            className={`absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ${trailingIconClasses}`}
            onClick={handleTrailingIconClick}
          >
            {trailingIcon}
          </div>
        )}
      </div>
      {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
      {isError && <p className="text-red-500 text-[14px]">{errorMessage}</p>}
    </div>
  );
}

export default InputWithLabel;
