
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/home/hero';
import MissionVision from '@/components/home/mission-vision';
import ImpactGoals from '@/components/home/impact-goals';
import CoreActivities from '@/components/home/core-activities';
import Roadmap from '@/components/home/roadmap';
import JoinUs from '@/components/join-us';
import { Separator } from '@/components/ui/separator';
import Faq from '@/components/faq';
import WhatWeOffer from '@/components/home/what-we-offer';
import StartupSchool from '@/components/home/startup-school';
import Features from '@/components/home/features';
import { Github, Linkedin, Twitter, Handshake, Bot, Mail } from 'lucide-react';
import Link from 'next/link';
import { brand } from '@/lib/brand';
import CommunityVision from '@/components/home/community-vision';
import { Button } from '@/components/ui/button';
import AiPoweredSupport from '@/components/home/ai-powered-support';
import ProgramFlow from '@/components/sangini-udaan/program-flow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import LogoIcon from '@/components/logo-icon';

export default function Home() {
  const chatbotImage = PlaceHolderImages.find((p) => p.id === 'feature-palai');

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white shadow-xl my-12 rounded-lg">
          <div className="space-y-24">
            <div id="mission" className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
              <MissionVision />
            </div>
            <Separator />
            <div id="what-we-offer" className="rounded-xl py-12 relative overflow-hidden scroll-mt-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <WhatWeOffer />
            </div>
            <Separator />
            <div id="ai-support" className="rounded-xl py-12 relative overflow-hidden scroll-mt-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <AiPoweredSupport />
            </div>
            <Separator />
            <div id="startup-school" className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <StartupSchool />
            </div>
            <Separator />
             <div className="rounded-xl py-12 relative overflow-hidden">
                <ProgramFlow />
            </div>
            <Separator />
            <div className="rounded-xl py-12 relative overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                    <Card className="shadow-xl border-primary/20 bg-gradient-to-br from-background to-accent/20 h-full flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl md:text-4xl">How to Start Your Journey</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 flex-grow flex flex-col p-6">
                            <div>
                                <p className="font-semibold text-lg flex items-center gap-2"><Bot className="text-primary"/> Chat with {brand.appName}</p>
                                <p className="text-foreground/80 mt-2">
                                    Starting something new can feel overwhelming — and that’s okay. You don’t need to have everything figured out before you begin. {brand.appName} is here to help you take your first step.
                                </p>
                                <p className="text-foreground/80 mt-2">
                                    Start by simply interacting with our AI guide. You can ask anything related to this platform, programs, learning paths, or next steps — and she will gently guide you forward.
                                </p>
                                <p className="font-semibold text-primary italic mt-4">
                                    Always remember: You remain your own boss. The choices, pace, and direction are always yours.
                                </p>
                            </div>

                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="how-it-works">
                                    <AccordionTrigger className="font-semibold text-lg">How It Works</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2">
                                            <li>Start a conversation with EmpowerFly Assistant</li>
                                            <li>Ask what’s on your mind — no pressure, no judgment</li>
                                            <li>Receive guided suggestions and helpful resources</li>
                                            <li>Take time to read, reflect, and decide your next step</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="what-to-ask">
                                    <AccordionTrigger className="font-semibold text-lg">You Can Ask Things Like:</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2 italic">
                                            <li>“I’m returning to work after a break — where should I start?”</li>
                                            <li>“I want to learn tech but feel overwhelmed.”</li>
                                            <li>“Help me choose a learning path.”</li>
                                        </ul>
                                        <p className="text-foreground/80 mt-2">There are no right or wrong questions — only the ones that matter to you.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="important-note">
                                    <AccordionTrigger className="font-semibold text-lg">Important Note</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-foreground/80 mt-2">While EmpowerFly Assistant is designed to be supportive and informative, AI may sometimes make mistakes or offer incomplete information. We encourage you to:</p>
                                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2">
                                            <li>Take your time</li>
                                            <li>Read all information carefully</li>
                                            <li>Reflect on what feels right for you</li>
                                            <li>Make decisions based on your own judgment</li>
                                        </ul>
                                         <p className="text-foreground/80 mt-2 font-semibold">Your journey is yours — AI is here only to support, not decide for you.</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            
                            <div className="pt-4 space-y-4 mt-auto">
                                <div className="flex flex-wrap items-center gap-4">
                                     <Button asChild>
                                        <Link href="/chatbot">
                                            <LogoIcon className="mr-2 h-5 w-5"/> Start Chatting with EmpowerFly
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline">
                                        <Link href={`mailto:${brand.email}`}>
                                            <Mail className="mr-2"/> Contact Us
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="shadow-2xl overflow-hidden h-full">
                         {chatbotImage && (
                            <div className="relative w-full h-full min-h-[400px]">
                                <Image
                                    src={chatbotImage.imageUrl}
                                    alt={chatbotImage.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={chatbotImage.imageHint}
                                />
                            </div>
                         )}
                    </Card>
                </div>
            </div>
            <Separator />
            <div id="impact" className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
              <ImpactGoals />
            </div>
            <Separator />
            <div id="features" className="rounded-xl py-12 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <Features />
            </div>
            <Separator />
            <div id="join-us" className="rounded-xl py-12 relative overflow-hidden scroll-mt-24">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
              <JoinUs />
              <div className="text-center mt-16">
                <p className="font-headline text-2xl font-bold">{brand.name}</p>
                <p className="mt-2 text-foreground/80 max-w-md mx-auto">Follow our journey and join the conversation on social media.</p>
                <div className="mt-6 flex justify-center space-x-4">
                  <Link href="https://x.com/preranakailash4" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
                  </Link>
                  <Link href="https://www.linkedin.com/company/shecodesherway/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
                  </Link>
                  <Link href="https://github.com/PreranaPattnaik4/SheCodesHerWay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
                  </Link>
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-12 items-stretch">
             <div className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <CoreActivities />
              </div>
              <div className="rounded-xl py-12 relative overflow-hidden">
                 <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <Roadmap />
              </div>
            </div>
            <Separator />
            <div id="faq" className="rounded-xl py-12 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <Faq />
            </div>
          </div>
        </div>
        <CommunityVision />
        
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to Make an Impact?</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <p className="text-lg text-foreground/80">
                        Your experience and passion can inspire the next generation of women leaders. Join us as a mentor and help shape the future.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/mentor">
                        Become a Mentor
                        </Link>
                    </Button>
                </div>
                <div className="space-y-4">
                    <p className="text-lg text-foreground/80">
                        Passionate about our mission? Join the founding circle as an Early Core Contributor and help build our platform from the ground up.
                    </p>
                     <Button asChild size="lg" variant="secondary">
                        <Link href="/careers">
                        Join as a Contributor
                        </Link>
                    </Button>
                </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
