
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Bot, Users } from 'lucide-react';

const offers = [
    {
        icon: GraduationCap,
        title: "Courses",
        subtitle: "WHAT YOU WILL GET",
        description: "Big ideas. Beautifully simple. Timeless wisdom, curated into clear, actionable frameworks. Short lessons. Story-driven. AI-enhanced."
    },
    {
        icon: Bot,
        title: "AI Coaching",
        subtitle: "WHAT YOU WILL GET",
        description: "Your teacher, On demand. Ask questions. Get voice answers. It's your own coach in your pocket, powered by AI."
    },
    {
        icon: Users,
        title: "Community",
        subtitle: "WHAT YOU WILL GET",
        description: "Clarity, loves company. Join a community of thoughtful doers designing lives with purpose. Deep reflections. Honest feedback. Shared rituals."
    }
];

export default function WhatWeOffer() {
    return (
        <section>
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">What We Offer</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {offers.map((offer) => (
                    <Card key={offer.title} className="text-center bg-white transform transition-transform hover:-translate-y-2 duration-300 shadow-[0_10px_40px_-15px_rgba(143,188,143,0.8)] hover:shadow-[0_20px_50px_-20px_rgba(143,188,143,1)]">
                        <CardHeader>
                            <div className="mx-auto bg-muted rounded-full p-4 w-fit">
                                <offer.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-3xl pt-4">{offer.title}</CardTitle>
                            <CardDescription>{offer.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">{offer.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
