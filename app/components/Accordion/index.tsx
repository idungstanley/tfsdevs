import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type AccordionProps = {
  title: string;
  content: string;
};

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-t border-gray-700 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } px-4`}
      >
        <p className="py-2 text-gray-300 mb-2">{content}</p>
      </div>
    </div>
  );
}
