
'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const categories = [
  { id: 'all-features', name: 'All Features' },
  { id: 'ai-coaching', name: 'AI Coaching' },
  { id: 'mentorship', name: 'Mentorship' },
  { id: 'community', name: 'Community' },
  { id: 'workshops', name: 'Workshops' },
  { id: 'internships', name: 'Internships' },
  { id: 'hackathons', name: 'Hackathons' },
  { id: 'live-events', name: 'LIVE Events!' },
  { id: 'our-program', name: 'Our Program' },
  { id: 'our-blogs', name: 'Our Blogs' },
  { id: 'resources', name: 'Resources' },
];

const features = [
  {
    id: 'feature-mentors',
    title: 'Find high-quality mentors',
    image: PlaceHolderImages.find((p) => p.id === 'feature-mentors'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-2',
    href: '/partner',
    category: 'mentorship',
    height: 'h-96 md:h-full',
  },
  {
    id: 'feature-community',
    title: 'Join a vibrant community',
    image: PlaceHolderImages.find((p) => p.id === 'feature-community'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    href: '/community',
    category: 'community',
    height: 'h-64',
  },
  {
    id: 'feature-ai-coaching',
    title: 'Get personalized AI Coaching',
    image: PlaceHolderImages.find((p) => p.id === 'feature-ai-coaching'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    href: '/chatbot',
    category: 'ai-coaching',
    height: 'h-64',
    isBeta: true,
  },
  {
    id: 'feature-workshops',
    title: 'Explore interactive workshops',
    image: PlaceHolderImages.find((p) => p.id === 'feature-workshops'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    href: '/sangini-udaan',
    category: 'workshops',
    height: 'h-64',
  },
  {
    id: 'feature-internships',
    title: 'Apply for hands-on internships',
    image: PlaceHolderImages.find((p) => p.id === 'feature-internships'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    href: '/internship',
    category: 'internships',
    height: 'h-64',
    comingSoon: true,
  },
  {
    id: 'feature-hackathon',
    title: 'Participate in Hackathons',
    image: PlaceHolderImages.find((p) => p.id === 'feature-hackathon'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    href: '#',
    category: 'hackathons',
    height: 'h-64',
    comingSoon: true,
  },
  {
    id: 'feature-live-events',
    title: 'Join LIVE Events!',
    image: PlaceHolderImages.find((p) => p.id === 'feature-live-events'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    href: '#',
    category: 'live-events',
    height: 'h-64',
    comingSoon: true,
  },
  {
    id: 'our-program',
    title: 'Our Program',
    image: PlaceHolderImages.find((p) => p.id === 'program-community'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    href: '/sangini-udaan',
    category: 'our-program',
    height: 'h-64',
  },
  {
    id: 'our-blogs',
    title: 'Our Blogs',
    image: {
        imageUrl: "https://i.postimg.cc/1RqPqqfF/Banners3.png",
        description: "From Prompt to Prototype",
        imageHint: "startup journey",
    },
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    href: '/blog',
    category: 'our-blogs',
    height: 'h-64',
  },
  {
    id: 'resources',
    title: 'Resources',
    image: PlaceHolderImages.find((p) => p.id === 'feature-workshops'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    href: '/resources',
    category: 'resources',
    height: 'h-64',
  },
];

export default function Features() {
  const [activeCategory, setActiveCategory] = useState('all-features');

  const filteredFeatures =
    activeCategory === 'all-features'
      ? features
      : features.filter((feature) => feature.category === activeCategory);

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">The Features You Need, The Community You Want</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          All the tools and resources to help you learn, lead, and grow.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ul className="space-y-2 sticky top-24">
            {categories.map((category) => (
              <li key={category.id}>
                <Button
                  variant={activeCategory === category.id ? 'secondary' : 'ghost'}
                  className="w-full justify-start text-lg"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFeatures.map((feature) => (
               <Link href={feature.href} key={feature.id} className={cn('group relative block', feature.colSpan, feature.rowSpan, feature.height)}>
                <Card className={cn('overflow-hidden h-full w-full shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl')}>
                  {feature.image && (
                    <Image
                      src={feature.image.imageUrl}
                      alt={feature.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={feature.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    {feature.comingSoon && <Badge variant="secondary">Launching Soon</Badge>}
                    {feature.isBeta && <Badge variant="outline">Beta</Badge>}
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{feature.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-background/80 text-foreground rounded-full p-2 opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
