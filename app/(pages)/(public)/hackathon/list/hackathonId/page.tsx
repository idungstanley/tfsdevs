import HackathonDetails from '@/app/components/Hackathon/HackathonDetails';
import React from 'react';

interface PageProps {
  params: Promise<{ hackathonId: string }>; // Or the appropriate type for your route
}

export default async function HackathonDetailsPage({ params }: PageProps) {
  const { hackathonId } = await params;

  return <HackathonDetails hackathonId={hackathonId} />;
}
