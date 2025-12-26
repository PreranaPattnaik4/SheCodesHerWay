
'use client';

import {
  Rocket,
  Lightbulb,
  Heart,
  Briefcase,
  Users,
  Award,
  GraduationCap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { cn } from '@/lib/utils';

const timelinePhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation & Orientation',
    description:
      'Introduction to the Sangini Udaan journey, program values, learning expectations, responsible AI principles, and baseline skill assessment.',
    icon: Rocket,
  },
  {
    phase: 'Phase 2',
    title: 'Core Skill & AI Learning',
    description:
      'Track-specific technical and digital skills, AI fundamentals, tool exposure, and ethical technology practices aligned with industry standards.',
    icon: Lightbulb,
  },
  {
    phase: 'Phase 3',
    title: 'Personal Growth & Communication',
    description:
      'Confidence building, emotional intelligence, storytelling, public speaking, leadership basics, and professional mindset development.',
    icon: Heart,
  },
  {
    phase: 'Phase 4',
    title: 'Real-World Projects & Portfolio',
    description:
      'Hands-on problem-solving projects, guided implementation, collaboration, and creation of a showcase-ready portfolio.',
    icon: Briefcase,
  },
  {
    phase: 'Phase 5',
    title: 'Community Collaboration & Impact',
    description:
      'Team-based initiatives, social impact projects, leadership participation, and contribution to community-driven outcomes.',
    icon: Users,
  },
  {
    phase: 'Phase 6',
    title: 'Industry Guidance & Career Direction',
    description:
      'Mentorship, feedback, career path exploration, interview readiness, goal-setting, and next-step planning.',
    icon: GraduationCap,
  },
  {
    phase: 'Phase 7',
    title: 'Certificates & Participation Recognition',
    description:
      'Receive a Participation Announcement Template at joining. Earn Professional Certificates (Diamond, Platinum) for your contributions and achievements.',
    icon: Award,
  },
];

export default function ProgramFlow() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(143,188,143,0.1),transparent_70%)]"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-foreground">
            The Sangini Udaan : EmpowerFly Journey
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            A shared learning journey for holistic growth, real-world
            readiness, and long-term impact.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          ></div>

          {/* Vertical line for mobile */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:hidden"
            aria-hidden="true"
          ></div>

          <div className="space-y-12">
            {timelinePhases.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center"
              >
                {/* Timeline Marker */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 w-8 h-8 rounded-full bg-background flex items-center justify-center border-2 border-primary shadow-md -translate-x-1/2 z-10"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                </div>

                {/* Content Card */}
                <div className={cn(
                    "w-full pl-12 md:pl-0 md:w-1/2",
                    index % 2 === 0 ? 'md:pr-10' : 'md:ml-auto md:pl-10 md:text-left'
                )}>
                    <Card className="shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
                      <CardHeader>
                         <p className="text-sm font-semibold text-primary">
                          {item.phase}
                        </p>
                        <CardTitle className="font-headline text-2xl">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <Card className="bg-white p-6 shadow-md border-t-4 border-primary">
            <p className="text-foreground/80 italic">
              “All Sangini Udaan tracks follow a shared learning journey through
              a common timeline. While skill focus may vary by track, every
              participant progresses through the same structured phases
              designed for holistic growth, real-world readiness, and long-term
              impact.”
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
