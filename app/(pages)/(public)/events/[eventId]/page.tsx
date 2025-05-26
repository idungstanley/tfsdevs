import EventDetails from '@/app/components/events/EventDetails';
import React from 'react';

interface PageProps {
  params: Promise<{ eventId: string }>; // Or the appropriate type for your route
}

export default async function EventDetailsPage({ params }: PageProps) {
  const { eventId } = await params;

  return <EventDetails eventId={eventId} />;
};
