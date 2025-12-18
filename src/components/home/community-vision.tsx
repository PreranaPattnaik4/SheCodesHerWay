
'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Sparkles, Target, TrendingUp, Route, Heart, Users, Milestone, Library, Eye } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const testimonials = [
    {
        quote: "I joined SheCodesHerWay because I wanted a safe space to restart my career without judgment.",
        author: "Community Member"
    },
    {
        quote: "What drew me here was the focus on confidence and growth, not just skills.",
        author: "Early Platform User"
    },
    {
        quote: "SheCodesHerWay feels like a place where women are understood, not rushed.",
        author: "Community Voice"
    }
];

const journeySteps = [
    {
        stage: "Before joining",
        description: "Confusion • isolation • lack of confidence • uncertainty about 'where to start'"
    },
    {
        stage: "During the journey",
        description: "Guidance • community • clarity • skill-building • emotional support"
    },
    {
        stage: "After the journey (our shared goal)",
        description: "Confidence • direction • skills • visibility • the courage to lead one’s own path"
    }
]

export default function CommunityVision() {
  return (
    <section className="w-full py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Voices, Vision & the Journey We’re Building</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    A look into our purpose, progress, and the path we're paving together.
                </p>
            </div>
            
            <Carousel opts={{
                align: "start",
                loop: false,
            }} 
            className="w-full"
            >
                <CarouselContent className="-ml-4">
                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 flex">
                        <Card className="h-full flex flex-col w-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Users className="h-6 w-6 text-primary"/>
                                    Early Community Voices
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between pt-4">
                                <div className="flex-grow flex items-center justify-center text-primary/30">
                                    <Quote className="h-24 w-24" />
                                </div>
                                <div className="space-y-4 mt-4">
                                    {testimonials.map(testimonial => (
                                        <blockquote key={testimonial.author} className="border-l-4 border-primary pl-4 italic text-sm">
                                            <p>"{testimonial.quote}"</p>
                                            <footer className="mt-1 text-xs text-foreground/80 not-italic">— {testimonial.author}</footer>
                                        </blockquote>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground mt-6">These are not results — they are intent, trust, and belief, and they matter deeply at the beginning.</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    
                     <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 flex">
                        <Card className="h-full flex flex-col w-full">
                           <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Sparkles className="h-6 w-6 text-primary"/>
                                     Why SheCodesHerWay Was Created
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col space-y-4 text-foreground/90 pt-4">
                                <div className="flex-grow flex items-center justify-center text-primary/30">
                                    <Library className="h-24 w-24" />
                                </div>
                                <p>SheCodesHerWay was created after witnessing talented, capable women stepping back from their dreams due to career breaks, lack of guidance, self-doubt, or life responsibilities.</p>
                                <p className="font-semibold text-primary">SheCodesHerWay exists to bridge that gap. Not with pressure, but with mentorship, community, and belief.</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 flex">
                        <Card className="h-full flex flex-col w-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Target className="h-6 w-6 text-primary"/>
                                     Our Impact — In Progress
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col space-y-4">
                                <div className="flex-grow flex items-center justify-center text-primary/30">
                                    <Milestone className="h-24 w-24" />
                                </div>
                                <p>We are currently preparing our first Sangini Udaan cohort. Our focus right now is not rapid scale, but strong foundations:</p>
                                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                                    <li>Listening deeply to our community</li>
                                    <li>Building thoughtfully designed journeys</li>
                                    <li>Creating meaningful early outcomes</li>
                                </ul>
                                <p className="font-semibold text-primary pt-2">We believe real impact grows from intention, patience, and care.</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 flex">
                        <Card className="h-full flex flex-col w-full">
                             <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <TrendingUp className="h-6 w-6 text-primary"/>
                                    Early Commitment Metrics
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col pt-4">
                                <div className="flex-grow flex items-center justify-center text-primary/30">
                                    <TrendingUp className="h-24 w-24" />
                                </div>
                                <p className="my-4 text-sm text-muted-foreground">While outcomes are still ahead, these early signals guide our direction:</p>
                                <ul className="space-y-2 list-disc list-inside text-sm">
                                    <li>Growing number of women signing up</li>
                                    <li>Active blog contributors sharing their voices</li>
                                    <li>Mentors expressing interest in guiding cohorts</li>
                                    <li>Community engagement through ideas &amp; goals</li>
                                </ul>
                                <p className="text-xs text-muted-foreground mt-6">These are not final results — they are proof of belief and participation.</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 flex">
                        <Card className="h-full flex flex-col w-full">
                           <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Route className="h-6 w-6 text-primary"/>
                                     The Journey We Enable
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col space-y-4 pt-4">
                                <div className="flex-grow flex items-center justify-center text-primary/30">
                                    <Route className="h-24 w-24" />
                                </div>
                                {journeySteps.map(step => (
                                    <div key={step.stage}>
                                        <h4 className="font-semibold">{step.stage}</h4>
                                        <p className="text-sm text-foreground/80">{step.description}</p>
                                    </div>
                                ))}
                                <p className="font-semibold text-primary pt-4">This is the transformation we are building towards — together.</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    
                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 flex">
                        <Card className="h-full flex flex-col bg-primary/5 border-primary/20 w-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Heart className="h-6 w-6 text-primary"/>
                                    A Note on Our Approach
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col items-center justify-center text-center space-y-4 pt-4">
                                <div className="flex-grow flex items-center justify-center text-primary/30">
                                    <Eye className="h-24 w-24" />
                                </div>
                               <p className="font-headline text-xl text-primary">"We believe honesty builds stronger platforms than hype."</p>
                               <div className="text-lg">
                                 <p>We are early. We are intentional. And we are building something real.</p>
                               </div>
                               <p className="font-semibold pt-4">If you’re here now, you’re not just witnessing the beginning — you’re part of it.</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
                <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
            </Carousel>
        </div>
    </section>
  );
}
