import React, { useState } from 'react';
import CommandModal from '../modal/CommandModal';
import Button from '../button/Button';
import InputWithLabel from '../input/InputWithLabel';
import { EventRegistrationProps } from '@/app/features/event/event.interface';
import { eventRegistrationSchema } from '@/app/validationSchema';
import { useFormik } from 'formik';
import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { Bootcamp } from '@/app/features/bootcamp/bootcamp.interface';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { SOCIALS } from '@/app/constants/socials';

const EventRegistration = ({
  setShowRegistrationModal,
  showRegistrationModal,
  eventId,
  eventTitle,
  mutateAsync,
  isPending,
  bootcamps
}: {
  eventId?: string;
  eventTitle?: string;
  isPending: boolean;
  bootcamps: Bootcamp[];
  mutateAsync: UseMutateAsyncFunction<unknown, Error, EventRegistrationProps, unknown>;
  showRegistrationModal: boolean;
  setShowRegistrationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedInterest, setSelectedInterest] = useState<string>('');
  const [experienceLevel, setExperienceLevel] = useState<string>('');
  const [paidProgramInterest, setPaidProgramInterest] = useState<string>('');
  const [socialMediaFollow, setSocialMediaFollow] = useState<string>('');

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
        phone: values.phone,
        metaData: {
          selectedInterest: selectedInterest,
          experienceLevel: experienceLevel,
          paidProgramInterest: paidProgramInterest,
          socialMediaFollow: socialMediaFollow
        }
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
      maxHeight="lg:max-h-[600px] p-1"
      modalDefaultSize={576}
      commandVisible={showRegistrationModal}
      setPopup={setShowRegistrationModal}
      onCloseCommandModal={handleCloseModal}
      showHeaderBorder
      showCloseIcon={true}
      headerText={`${eventTitle} Registration`}
    >
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 justify-center items-center w-full">
        <div className="flex flex-col gap-2 items-center justify-center w-full text-white">
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="flex flex-col gap-2 w-full">
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
                  formik.errors.email && formik.touched.email
                    ? 'border-red-400 text-red-400'
                    : 'border border-slate-400'
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
                  formik.errors.phone && formik.touched.phone
                    ? 'border-red-400 text-red-400'
                    : 'border border-slate-400'
                }`}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                height="h-[40px] rounded-lg"
              />
            </div>
          </div>

          {/* Programming Interests */}
          <div className="flex flex-col gap-4 w-full mt-2">
            <h3 className="text-lg font-semibold">Program Interest</h3>
            <div className="flex flex-col gap-4 w-full">
              <div className="space-y-3 w-full">
                <Label style={{ fontSize: '15px' }}>What aspect are you interested in?</Label>
                <RadioGroup
                  defaultValue=""
                  value={selectedInterest}
                  onValueChange={(value) => setSelectedInterest(value)}
                  className="grid grid-cols-1 gap-2"
                >
                  {bootcamps?.map((bootcamp) => (
                    <div key={bootcamp.bootcampId} className="flex items-center space-x-2">
                      <RadioGroupItem value={bootcamp.title} id={bootcamp.bootcampId} />
                      <Label htmlFor={bootcamp.bootcampId}>{bootcamp.title}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="space-y-3 w-full mt-2">
                <Label htmlFor="experience">Level of Experience in Selected Area</Label>
                <Select value={experienceLevel} onValueChange={(value) => setExperienceLevel(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                    <SelectItem value="expert">Expert (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3 w-full">
                <Label>Will you be interested in learning more about our paid program?</Label>
                <RadioGroup
                  value={paidProgramInterest}
                  onValueChange={(value) => setPaidProgramInterest(value)}
                  className="grid grid-row-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="paid-yes" />
                    <Label htmlFor="paid-yes">Yes, I&apos;m interested</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="paid-no" />
                    <Label htmlFor="paid-no">Not at this time</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Social Media Follow */}
          <div className="space-y-4 mt-4 w-full">
            <h3 className="text-lg font-semibold">Stay Connected</h3>

            <div className="space-y-3">
              <Label>Are you following us on social media?</Label>
              <RadioGroup
                value={socialMediaFollow}
                onValueChange={(value) => setSocialMediaFollow(value)}
                className="grid grid-row-2 gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="following" id="following-yes" />
                  <Label htmlFor="following-yes">Yes, I follow you</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-following" id="following-no" />
                  <Label htmlFor="following-no">No, but I&apos;d like to</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="space-y-3 w-full mt-4">
            <p className="text-sm text-muted-foreground">
              Follow us on social media for updates, tips, and community discussions:
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                label="Twitter"
                onClick={() => window.open(SOCIALS.TWITTER, '_blank', 'noopener,noreferrer')}
                labelSize="text-[16px]"
                buttonStyle="custom"
                height="h-[40px]"
                width="w-fit"
                iconPosition="left"
                icon={<Twitter className="h-4 w-4" />}
                customClasses="border hover:border-white cursor-pointer rounded-md"
              />
              <Button
                label="LinkedIn"
                onClick={() => window.open(SOCIALS.LINKEDIN, '_blank', 'noopener,noreferrer')}
                labelSize="text-[16px]"
                buttonStyle="custom"
                height="h-[40px]"
                width="w-fit"
                iconPosition="left"
                icon={<Linkedin className="h-4 w-4" />}
                customClasses="border hover:border-white cursor-pointer rounded-md"
              />
              <Button
                label="Instagram"
                onClick={() => window.open(SOCIALS.INSTAGRAM, '_blank', 'noopener,noreferrer')}
                labelSize="text-[16px]"
                buttonStyle="custom"
                height="h-[40px]"
                width="w-fit"
                iconPosition="left"
                icon={<Instagram className="h-4 w-4" />}
                customClasses="border hover:border-white cursor-pointer rounded-md"
              />
            </div>
          </div>
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
