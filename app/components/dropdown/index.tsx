/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { TbSearch } from 'react-icons/tb';
import { useClickAway } from 'react-use';

interface SelectDropdownProps {
  options: any[];
  labelKey: string;
  activeKey?: string;
  selectedValue: string;
  onChange: (value: any) => void;
  placeholder: string;
  parentWidth?: string;
  width?: string;
  position?: string;
  label?: string;
  required?: boolean;
  labelClasses?: string;
  cornerHint?: string;
}

export const Dropdown: React.FC<SelectDropdownProps> = ({
  options,
  selectedValue,
  onChange,
  placeholder,
  labelKey,
  width = 'w-full',
  parentWidth = 'md:w-[200px] w-full',
  activeKey,
  label,
  cornerHint,
  required,
  labelClasses
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [positionAbove, setPositionAbove] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  useClickAway(dropdownRef, () => setOpen(false));

  const handleSelectOption = (value: any) => {
    onChange(value);
    setSearchTerm('');
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        if (dropdownRef.current && inputRef.current) {
          const dropdownHeight = dropdownRef.current.offsetHeight;
          const inputRect = inputRef.current.getBoundingClientRect();
          const spaceBelow = window.innerHeight - inputRect.bottom;
          const spaceAbove = inputRect.top;

          // If there is more space above than below, open above
          setPositionAbove(spaceBelow < dropdownHeight && spaceAbove > dropdownHeight);
        }
      }, 100); // Small delay to allow rendering
    }
  }, [open]);

  const filteredOptions = options?.filter((item) => item[labelKey].toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex w-full flex-col gap-1 relative overflow-visible">
      {label && (
        <div className="flex justify-between">
          <label className={`z-10 ${labelClasses} text-[#9E9E9E]`}>
            {label} {required && <span className="ml-1 text-red-500">*</span>}
          </label>
          {cornerHint && <span className="text-gray-500">{cornerHint}</span>}
        </div>
      )}
      <div className="relative" ref={inputRef}>
        <div
          className={`flex items-center justify-between border p-2 rounded-lg  bg-white text-gray-900 border-gray-200 appearance-none focus:outline-none ${parentWidth}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{selectedValue || placeholder}</span>
          <FaCaretDown className="text-[10px] text-gray-600" />
        </div>
        {open && (
          <div
            ref={dropdownRef}
            className={`p-2 rounded-lg shadow-custom bg-white border border-gray-200 z-[50] max-h-[200px] h-fit overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ${width} absolute left-0 ${
              positionAbove ? 'bottom-full mb-2' : 'top-full mt-2'
            }`}
          >
            <div className="relative mb-2">
              <TbSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-[8px] focus:outline-none text-gray-800"
              />
            </div>
            {filteredOptions?.length > 0 ? (
              filteredOptions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectOption(item)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                    item[activeKey || labelKey] === selectedValue
                      ? 'rounded-lg dark:bg-[#684DF4] text-white'
                      : 'rounded-lg dark:hover:bg-[#684DF4]/20'
                  } text-gray-700`}
                >
                  <p className="capitalize">{item[labelKey]}</p>
                </button>
              ))
            ) : (
              <div className="flex items-center justify-center">No items found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
