'use client';
import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { setVisibility } from '../features/general/prompt/promptSlice';
import { IoMdClose } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../store/store';

export interface matchedStatusProps {
  id: string | null;
  name: string;
}

export default function Prompt() {
  const dispatch = useAppDispatch();
  const { show, title, body, options } = useAppSelector((state) => state.prompt);
  const setShow = (state: boolean) => {
    dispatch(setVisibility(state));
  };

  interface optionsProps {
    label: string | null;
    style: string | null;
    callback: () => void;
  }

  return (
    <Transition show={show}>
      <Dialog
        as="div"
        className={`fixed bottom-0 left-0 right-0 z-[9999] flex items-center justify-center w-full h-full bg-black/20 backdrop-blur-sm transition-opacity duration-100 ease-out ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
        onClose={setShow}
      >
        <div className="flex items-center justify-center h-screen transition duration-300 ease-in">
          <div className="overflow-hidden text-left align-middle transition-all transform dark:bg-gray-700 bg-white dark:bg-brand-dark rounded-lg shadow-xl sm:my-8 relative md:w-[500px] w-full p-9 flex items-center flex-col gap-4">
            <span
              className="absolute top-3 right-3 text-xl cursor-pointer hover:rotate-270 transition-all ease-in-out text-gray-700 dark:text-white bg-gray-300 dark:bg-gray-500 size-8  justify-center items-center rounded-full lg:flex hidden"
              onClick={() => setShow(false)}
            >
              <IoMdClose />
            </span>
            <div className="mt-3 text-center sm:mt-0">
              <div className="text-lg font-medium leading-6 text-gray-700 dark:text-white">{title}</div>
              <div className="mt-2">
                <p className="text-sm text-gray-700 dark:text-white">{body}</p>
              </div>
            </div>
            <div className="justify-between items-center flex flex-row-reverse w-full gap-6">
              {options.map((option: optionsProps) => (
                <div key={option.label}>
                  {option.style === 'plain' && (
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-base font-medium text-primary-light dark:text-white bg-brand-active dark:bg-[#684DF4] dark:border-base-dark rounded-md shadow-sm cursor-pointer hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-light dark:focus:ring-base-dark sm:mt-0 sm:ml-3 lg:w-[180px] w-fit sm:text-sm"
                      onClick={option.callback}
                    >
                      {option.label}
                    </button>
                  )}
                  {option.style === 'warning' && (
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-yellow-500 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 lg:w-[180px] w-fit sm:text-sm"
                      onClick={option.callback}
                    >
                      {option.label}
                    </button>
                  )}
                  {option.style === 'base' && (
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-base font-medium hover:text-white text-[#684DF4] dark:text-white dark:text-default-light bg-white dark:bg-gray-700 hover:bg-red-500 hover:border-none border border-[#684DF4] dark:border-gray-600 rounded-md shadow-sm cursor-pointer focus:outline-none lg:w-[180px] w-fit sm:text-sm"
                      onClick={option.callback}
                    >
                      {option.label}
                    </button>
                  )}
                  {option.style === 'danger' && (
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 lg:w-[180px] w-fit sm:text-sm"
                      onClick={option.callback}
                    >
                      {option.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
