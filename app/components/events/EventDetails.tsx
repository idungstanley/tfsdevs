'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Button from '../button/Button';
import { useEventRegistrationMutation, useGetSingleEvent } from '@/app/features/event/eventService';
import Loading from '@/app/loading';
import { formatPrice, getTimeWithPeriod } from '@/app/utils';
import EventRegistration from './EventRegistration';
import { BsPatchCheckFill } from 'react-icons/bs';
import { useGetAllBootCamps } from '@/app/features/bootcamp/bootcampService';
import { Bootcamp } from '@/app/features/bootcamp/bootcamp.interface';

const EventDetails = ({ eventId }: { eventId: string }) => {
  const navigate = useRouter();
  const { isPending, mutateAsync, isSuccess } = useEventRegistrationMutation();
  const { data: bootCampData } = useGetAllBootCamps({});

  const { data, isLoading, isFetching } = useGetSingleEvent({ eventId });
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const event = data?.data;
  const bootcamps = bootCampData?.data.$values;

  if (!event) return null;

  const handleRegister = () => {
    setShowRegistrationModal(true);
  };

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (
    <main className="pt-32 px-4 md:px-20 text-white">
      <section className="section">
        <div className="container">
          <button
            onClick={() => navigate.push('/events')}
            className="flex items-center text-gray-400 hover:text-primary-500 transition-colors mb-8 md:hidden"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Events
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        event.isOnline ? 'bg-[#684DF4] text-primary-500' : 'bg-slate-700 text-secondary-500'
                      }`}
                    >
                      {event.isOnline ? 'Online Event' : 'In Person'}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-orange-500 text-primary-500">
                      {event.category}
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold mb-6 text-[#684DF4]">{event.title}</h1>
                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-gray-300 whitespace-pre-line">{event.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Topics to be Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {event?.bulletPoints?.map((topic, index) => (
                      <span key={index} className="bg-slate-900 px-4 py-2 rounded-full text-sm text-gray-300">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card sticky top-24">
                <div className="text-3xl font-bold mb-6">
                  <span className="gradient-text">{formatPrice(event.price)}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-primary-500" />
                    <span>
                      {new Date(event.startDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-primary-500" />
                    <span>{getTimeWithPeriod(event.startDate)}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-primary-500" />
                    <span>{event.isOnline ? 'Online' : event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-3 text-primary-500" />
                    <span>
                      {event.registeredCount} / {event.maxAttendees} registered
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {isSuccess ? (
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill className="text-[#684DF4] animate-bounce text-4xl" />
                      <p>Thank you for joining the event, check your email for more information about the event!</p>
                    </div>
                  ) : (
                    <Button
                      bgColor="#684DF4"
                      width="w-fit"
                      customClasses="rounded-lg cursor-pointer"
                      buttonStyle="custom"
                      label={event.registeredCount >= event.maxAttendees ? 'Event Full' : 'Register Now'}
                      onClick={handleRegister}
                      disabled={event.registeredCount >= event.maxAttendees}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <EventRegistration
        bootcamps={bootcamps as Bootcamp[]}
        mutateAsync={mutateAsync}
        isPending={isPending}
        eventTitle={event.title}
        setShowRegistrationModal={setShowRegistrationModal}
        showRegistrationModal={showRegistrationModal}
        eventId={eventId}
      />
    </main>
  );
};

export default EventDetails;
