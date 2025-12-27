
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Bot, Users, HeartHandshake, CheckCircle2, Rocket, BrainCircuit, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { brand } from '@/lib/brand';

const keyHighlights = [
    { icon: BrainCircuit, text: "Skill-building across tech, creativity, business, and leadership" },
    { icon: HeartHandshake, text: "Mentorship and guided support from industry experts" },
    { icon: Users, text: "A supportive, inclusive women-led community" },
    { icon: Bot, text: "AI-powered learning assistance to guide your journey" },
    { icon: Rocket, text: "A clear path from confusion to confidence and independence" },
];

const otherOfferings = [
    {
        icon: GraduationCap,
        title: "Courses",
        subtitle: "WHAT YOU WILL GET",
        description: "Big ideas. Beautifully simple. Timeless wisdom, curated into clear, actionable frameworks. Short lessons. Story-driven. AI-enhanced.",
        href: "/courses",
        cta: "Explore Courses"
    },
    {
        icon: Bot,
        title: "AI Coaching",
        subtitle: "WHAT YOU WILL GET",
        description: "Your teacher, On demand. Ask questions. Get voice answers. It's your own coach in your pocket, powered by AI.",
        href: "/ai-coaching",
        cta: "Discover AI Tools"
    },
    {
        icon: Users,
        title: "Community",
        subtitle: "WHAT YOU WILL GET",
        description: "Clarity, loves company. Join a community of thoughtful doers designing lives with purpose. Deep reflections. Honest feedback. Shared rituals.",
        href: "/community",
        cta: "Join the Community"
    }
]

export default function WhatWeOffer() {
    const cardImage = PlaceHolderImages.find((p) => p.id === 'feature-community');

    return (
        <section className="w-full">
             <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">What We Offer</h2>
            </div>
            <Card className="w-full max-w-6xl mx-auto shadow-lg overflow-hidden border-primary/20 bg-white mb-12">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div>
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Women Empowerment Program</p>
                            <h3 className="font-headline text-3xl md:text-4xl font-bold mt-2">
                                {brand.programName}
                            </h3>
                            <Badge className="mt-3">Sangini Udaan : EmpowerFly — Cohort 1— Launching Soon</Badge>
                             <p className="mt-4 text-lg text-foreground/90 font-semibold italic">
                                “{brand.programTagline}”
                            </p>
                            <p className="mt-4 text-foreground/80">
                                A supportive, women-led empowerment journey designed to help you rise with confidence and fly beyond limits.
                            </p>
                        </div>
                        <div className="mt-8 space-y-4">
                            {keyHighlights.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <p className="text-foreground/90">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Button asChild size="lg">
                                <Link href="/apply">Join the Founding Cohort</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative min-h-[300px] md:min-h-full">
                        {cardImage && (
                            <Image
                                src={cardImage.imageUrl}
                                alt="Women collaborating and empowering each other"
                                fill
                                className="object-cover"
                                data-ai-hint={cardImage.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent md:bg-gradient-to-r"></div>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {otherOfferings.map((offering) => (
                    <Card key={offering.title} className="text-center shadow-md transform transition-transform hover:-translate-y-2 duration-300 bg-white flex flex-col">
                        <CardHeader className="items-center">
                            <div className="rounded-full bg-primary/10 p-4 text-primary">
                                <offering.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="font-headline text-3xl pt-4">{offering.title}</CardTitle>
                            <CardDescription>{offering.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-foreground/80">{offering.description}</p>
                        </CardContent>
                        <CardFooter className="justify-center">
                            <Button asChild>
                                <Link href={offering.href}>{offering.cta}</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
