import { cn } from '@/app/lib/utils';

import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2
} from '@tabler/icons-react';

export function FeaturesSection() {
  const features = [
    {
      title: 'Built for the Fullsnack Developers',
      description: 'Built for dreamers, builders, and job-getters.',
      icon: <IconTerminal2 />
    },
    {
      title: 'Seamless Learning Experience',
      description:
        "Learning that feels smooth and natural. Like scrolling Twitter — but you're building skills instead of wasting time.",
      icon: <IconEaseInOut />
    },
    {
      title: 'Pricing like no other',
      description: 'Our prices are best in the market.',
      icon: <IconCurrencyDollar />
    },
    {
      title: 'Always On, Always There',
      description: 'Access your courses, projects, and mentorship 24/7, no downtimes.',
      icon: <IconCloud />
    },
    {
      title: 'Multi-Track Mastery',
      description: 'Frontend? Backend? DevOps? Choose your stack or go full-snack. One account, multiple tracks.',
      icon: <IconRouteAltLeft />
    },
    {
      title: '24/7 Customer Support',
      description:
        'We are available a 100% of the time, and real mentors are here day and night. Ask questions, get answers, and grow fast.',
      icon: <IconHelp />
    },
    {
      title: 'No-Risk Learning',
      description: "Don’t vibe with us? We’ll make it right. We're committed to making you love your learning journey.",
      icon: <IconAdjustmentsBolt />
    },
    {
      title: 'And everything else',
      description: 'Career prep, mock interviews, live projects — we’re just getting started. Stick around.',
      icon: <IconHeart />
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l border-neutral-800',
        index < 4 && 'lg:border-b border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};

export default Feature;
