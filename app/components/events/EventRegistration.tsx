import React from 'react';
import CommandModal from '../modal/CommandModal';
import Button from '../button/Button';
// import { useEventRegistrationMutation } from '@/app/features/event/eventService';
import InputWithLabel from '../input/InputWithLabel';
import { EventRegistrationProps } from '@/app/features/event/event.interface';
import { eventRegistrationSchema } from '@/app/validationSchema';
import { useFormik } from 'formik';
import { UseMutateAsyncFunction } from '@tanstack/react-query';

const EventRegistration = ({
  setShowRegistrationModal,
  showRegistrationModal,
  eventId,
  eventTitle,
  mutateAsync,
  isPending
}: {
  eventId?: string;
  eventTitle?: string;
  isPending: boolean;
  mutateAsync: UseMutateAsyncFunction<unknown, Error, EventRegistrationProps, unknown>;
  showRegistrationModal: boolean;
  setShowRegistrationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const { isPending, mutateAsync } = useEventRegistrationMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: ''
    },
    validateOnBlur: true,
    validationSchema: eventRegistrationSchema,
    onSubmit: async (values: EventRegistrationProps) => {
      await mutateAsync({
        eventId: eventId,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone
      });
      setShowRegistrationModal(false);
      formik.resetForm();
    }
  });

  const handleCloseModal = () => {
    setShowRegistrationModal(false);
    formik.resetForm();
  };

  return (
    <CommandModal
      border_color="border-slate-900"
      maxHeight="lg:max-h-[600px] p-1"
      modalDefaultSize={576}
      commandVisible={showRegistrationModal}
      setPopup={setShowRegistrationModal}
      onCloseCommandModal={handleCloseModal}
      showHeaderBorder
      bg_color="bg-slate-900"
      showCloseIcon={true}
      headerText={`${eventTitle} Registration`}
    >
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 justify-center items-center w-full">
        <div className="flex flex-col gap-2 items-center justify-center w-full text-white">
          <InputWithLabel
            name="firstName"
            placeholder="Enter your first name"
            label="First Name"
            labelClasses="text-white"
            classes={`border px-2 text-[15px] text-white ${
              formik.errors.firstName && formik.touched.firstName
                ? 'border-red-400 text-red-400'
                : 'border border-slate-400'
            }`}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
          <InputWithLabel
            name="lastName"
            placeholder="Enter your last name"
            label="Last Name"
            labelClasses="text-white"
            classes={`border px-2 text-[15px] text-white ${
              formik.errors.lastName && formik.touched.lastName
                ? 'border-red-400 text-red-400'
                : 'border border-slate-400'
            }`}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
          <InputWithLabel
            name="email"
            placeholder="Enter your email to access you portal"
            label="Email"
            labelClasses="text-white"
            classes={`border px-2 text-[15px] text-white ${
              formik.errors.email && formik.touched.email ? 'border-red-400 text-red-400' : 'border border-slate-400'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
          <InputWithLabel
            name="phone"
            placeholder="Phone Number"
            label="Phone Number"
            labelClasses="text-white"
            classes={`border px-2 text-[15px] text-white ${
              formik.errors.phone && formik.touched.phone ? 'border-red-400 text-red-400' : 'border border-slate-400'
            }`}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-[40px] rounded-lg"
          />
        </div>
        <div className="flex items-center gap-8 justify-end w-full">
          <Button
            label="Cancel"
            onClick={handleCloseModal}
            labelSize="text-[16px]"
            buttonStyle="custom"
            height="h-[40px]"
            width="w-fit"
            customClasses="bg-white text-black cursor-pointer rounded-md"
          />
          <Button
            label="Register"
            width="w-fit"
            type="submit"
            loading={isPending}
            labelSize="text-[16px]"
            buttonStyle="custom"
            height="h-[40px]"
            customClasses="bg-[#684DF4] text-white cursor-pointer dark:text-base-dark rounded-md"
          />
        </div>
      </form>
    </CommandModal>
  );
};

export default EventRegistration;
