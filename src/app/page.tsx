
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/home/hero';
import MissionVision from '@/components/home/mission-vision';
import ProgramOverview from '@/components/home/program-overview';
import ImpactGoals from '@/components/home/impact-goals';
import CoreActivities from '@/components/home/core-activities';
import Roadmap from '@/components/home/roadmap';
import JoinUs from '@/components/home/join-us';
import { Separator } from '@/components/ui/separator';
import Faq from '@/components/faq';
import ExecutiveSummaryGenerator from '@/components/home/executive-summary-generator';
import WhatWeOffer from '@/components/home/what-we-offer';
import AboutProgram from '@/components/home/about-program';
import StartupSchool from '@/components/home/startup-school';
import Features from '@/components/home/features';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { brand } from '@/lib/brand';
import CommunityVision from '@/components/home/community-vision';

export default function Home() {
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
            <div className="rounded-xl py-12 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <WhatWeOffer />
            </div>
            <Separator />
            <div id="about-program" className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <AboutProgram />
            </div>
            <Separator />
            <div id="startup-school" className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <StartupSchool />
            </div>
            <Separator />
            <div id="program" className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
              <ProgramOverview />
            </div>
            <Separator />
            <div id="features" className="rounded-xl py-12 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <Features />
            </div>
            <Separator />
            <div id="partner-with-us" className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
              <JoinUs />
              <div className="text-center mt-16">
                <p className="font-headline text-2xl font-bold">{brand.name}</p>
                <p className="mt-2 text-foreground/80 max-w-md mx-auto">Follow our journey and join the conversation on social media.</p>
                <div className="mt-6 flex justify-center space-x-4">
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
                  </Link>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
                  </Link>
                  <Link href="#" aria-label="GitHub">
                    <Github className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
                  </Link>
                </div>
              </div>
            </div>
            <Separator />
            <div id="impact" className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
              <ImpactGoals />
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
            <div id="ai-tools" className="rounded-xl py-12 relative overflow-hidden">
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
              <ExecutiveSummaryGenerator />
            </div>
            <Separator />
            <div id="faq" className="rounded-xl py-12 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                <Faq />
            </div>
          </div>
        </div>
        <CommunityVision />
      </main>
      <Footer />
    </div>
  );
}
