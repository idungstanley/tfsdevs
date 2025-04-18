import { cl } from '@/app/utils';
import React from 'react';
import toast from 'react-hot-toast';
import { BsExclamationCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { FaRegCircleCheck } from 'react-icons/fa6';

interface ToastProps {
  title: string;
  body?: string | null;
  type: string;
  showClose?: boolean;
  toastId?: string;
}

export default function Toast({ type = 'success', title, body, showClose = true, toastId }: ToastProps) {
  if (title === 'Query data cannot be undefined' || !title) {
    return null;
  }

  return (
    <div aria-live="assertive" className="inset-0 flex items-end pointer-events-none z-[1000000] max-w-[400px] w-full">
      <div className="w-full flex flex-col items-center space-y-4">
        <div
          className={cl(
            'w-full flex items-center shadow-lg rounded-[8px] pointer-events-auto h-[60px] ring-1 ring-black ring-opacity-5 overflow-hidden border-l-4',
            type === 'success' ? 'bg-white border-brand-green-100' : 'bg-white border-brand-warning'
          )}
        >
          <div className="p-2 flex items-start justify-between w-full px-4">
            <div className="flex-shrink-0" style={{ width: '10%' }}>
              {type === 'success' && <FaRegCircleCheck className="text-[16px] text-brand-green-100" />}
              {type === 'error' && (
                <BsExclamationCircle className="text-[16px] text-brand-warning" aria-hidden="true" />
              )}
            </div>
            <div style={{ width: '80%' }}>
              <div>
                <p className="text-black gap-1 text-[14px] leading-5">
                  {type === 'success' ? (
                    <span className="text-brand-green-100 pr-[2px]">Congratulations:</span>
                  ) : (
                    <span className="text-brand-warning pr-[2px]">Error:</span>
                  )}

                  <span className="italic">{title}</span>
                </p>
                {body != null && body !== '' && <p className="font-semibold text-black  my-1">{body}</p>}
              </div>
            </div>
            {showClose && (
              <div className="flex pt-0.5 " style={{ width: '10%' }}>
                <button type="button" onClick={() => toast.remove(toastId)}>
                  <CgClose className="text-[16px]" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
