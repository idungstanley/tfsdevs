'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import Button from '../button/Button';
import { useGetEvents } from '@/app/features/event/eventService';
import Loading from '@/app/loading';
import { getTimeWithPeriod } from '@/app/utils';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Events: React.FC = () => {
  const { isLoading, data, isFetching } = useGetEvents();
  const router = useRouter()
  const [filter, setFilter] = useState<'all' | 'online' | 'offline'>('all');

  const events = data?.data?.$values || [];

  const filteredEvents = events.filter((event) => {
    if (filter === 'all') return true;
    return event.isOnline ? filter === 'online' : filter === 'offline';
  });

  const handleSelect = (id: string) => {
    history.pushState(null, "",`/events/${id}` )
    router.push(`/events/${id}`)
  }

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (
    <main className="pt-32 text-white">
      <section className="section">
        <div className="flex flex-col w-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 flex flex-col md:items-center w-full px-4 text-left md:text-center"
          >
            <h1 className="mb-6 text-2xl">
              Upcoming <span className="gradient-text">Events</span>
            </h1>
            <p className="text-gray-400 max-w-3xl text-lg">
              Join our workshops, webinars, and conferences to learn from industry experts and connect with fellow
              developers.
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#684DF4] text-white' : 'bg-slate-900  text-gray-400 hover:text-white'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('online')}
              className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                filter === 'online' ? 'bg-[#684DF4] text-white' : 'bg-slate-900  text-gray-400 hover:text-white'
              }`}
            >
              Online
            </button>
            <button
              onClick={() => setFilter('offline')}
              className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                filter === 'offline' ? 'bg-[#684DF4] text-white' : 'bg-slate-900  text-gray-400 hover:text-white'
              }`}
            >
              In Person
            </button>
          </div>

          {filteredEvents.length === 0 ? (
            <p className="text-xl w-full p-10 text-center">No events available for the category you selected!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20 px-4 w-full">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-900 rounded-lg p-4 overflow-hidden group cursor-pointer"
                  onClick={() => handleSelect(event.id)}
                >
                  <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
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

                  <h2 className="text-xl font-semibold mb-3 group-hover:text-[#684DF4] transition-colors">
                    {event.title}
                  </h2>

                  <p className="text-gray-400 mb-4 line-clamp-2">{event.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {new Date(event.startDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{getTimeWithPeriod(event.startDate)}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {event.isOnline ? `Online via ${event.location}` : event.location}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {event.registeredCount} / {event.maxAttendees} registered
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-primary-500">${event.price}</span>
                    <Link href={`/events/${event.id}`}>
                      <Button
                        label="View Details"
                        customClasses="rounded-lg cursor-pointer hover:bg-[#684DF4]/80 bg-[#684DF4]"
                        buttonStyle="custom"
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Events;
