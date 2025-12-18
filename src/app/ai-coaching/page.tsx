
'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Bot, MessageSquare, Image as ImageIcon, Code, FileText, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const otherAiTools = [
    {
        icon: ImageIcon,
        title: "AI Image Studio",
        subtitle: "From Idea to Image",
        description: "Generate stunning, unique visuals for your projects, presentations, or social media. Simply describe what you want to see, and our AI will bring it to life.",
        features: [
            "Text-to-image generation",
            "Multiple art styles",
            "High-resolution outputs"
        ],
        href: "/ai-coaching/image-generator",
        isReady: false,
    },
    {
        icon: Code,
        title: "CodeCanvas Assistant",
        subtitle: "Your AI Coding Partner",
        description: "Accelerate your development process with an AI that can generate code snippets, explain complex concepts, and help you debug. Perfect for learning and building.",
        features: [
            "Generate code in multiple languages",
            "Get explanations for code blocks",
            "Assistance with debugging"
        ],
        href: "/ai-coaching/code-canvas",
        isReady: false,
    },
    {
        icon: FileText,
        title: "Executive Summary Generator",
        subtitle: "Craft the Perfect Pitch",
        description: "Distill your startup's vision into a concise, powerful executive summary. Our AI helps you structure your ideas for maximum impact on investors and partners.",
        features: [
            "Guided input fields",
            "Professional, structured output",
            "Instantly ready for your pitch deck"
        ],
        href: "/ai-tools",
        isReady: true,
    }
];

export default function AiCoachingPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'feature-ai-coaching');
  const coachImage = PlaceHolderImages.find((p) => p.id === 'feature-ai-coaching');

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative bg-secondary py-16 md:py-24">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="container relative mx-auto px-4 text-center">
                <Bot className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">AI Coaching &amp; Tools</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Explore our suite of AI-powered tools designed to help you learn, create, and grow with confidence.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="space-y-16">
                 <Card className="relative shadow-lg overflow-hidden min-h-[450px] flex items-center">
                    {coachImage && (
                        <Image
                            src={coachImage.imageUrl}
                            alt={coachImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={coachImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
                    <div className="relative p-8 md:p-12 md:w-3/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <MessageSquare className="h-7 w-7" />
                            </div>
                             <h2 className="font-headline text-3xl font-bold">EmpowerFly AI Coach</h2>
                        </div>
                       
                        <p className="text-foreground/80 mb-6 text-lg">
                            Your personal AI guide is here to help you navigate your journey. Ask questions about our programs, get advice on your career path, or brainstorm ideas for your next project. The EmpowerFly AI Coach is available 24/7 to provide support and guidance whenever you need it.
                        </p>
                        <Button asChild className="w-fit" size="lg">
                            <Link href="/chatbot">
                                Chat with the Coach
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Card>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {otherAiTools.map((tool) => (
                        <Card key={tool.title} className="flex flex-col shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <tool.icon className="h-7 w-7" />
                                    </div>
                                    {!tool.isReady && <Badge variant="outline">Coming Soon</Badge>}
                                </div>
                                <CardTitle className="pt-4">{tool.title}</CardTitle>
                                <CardDescription>{tool.subtitle}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <p className="text-foreground/80">{tool.description}</p>
                                <div>
                                    <h4 className="font-semibold mb-2">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {tool.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-foreground/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="outline" className="w-full" disabled={!tool.isReady}>
                                    <Link href={tool.isReady ? tool.href : '#'}>
                                        {tool.isReady ? 'Use Tool' : 'Coming Soon'}
                                        {tool.isReady && <ArrowRight className="ml-2 h-4 w-4" />}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                 <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
                 <h2 className="mt-4 font-headline text-3xl font-bold">Built with Care &amp; Responsibility</h2>
                 <p className="mt-4 text-lg text-foreground/80">
                    At SheCodesHerWay, we are committed to developing AI tools that are not only powerful but also ethical and responsible. Our goal is to empower you while ensuring fairness, transparency, and respect for privacy. We design our AI to assist, not replace, human creativity and potential.
                 </p>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
