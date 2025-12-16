
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/home/hero';
import MissionVision from '@/components/home/mission-vision';
import ProgramOverview from '@/components/home/program-overview';
import AboutFounder from '@/components/home/about-founder';
import ImpactGoals from '@/components/home/impact-goals';
import CoreActivities from '@/components/home/core-activities';
import Roadmap from '@/components/home/roadmap';
import JoinUs from '@/components/home/join-us';
import { Separator } from '@/components/ui/separator';
import Faq from '@/components/faq';
import ExecutiveSummaryGenerator from '@/components/home/executive-summary-generator';
import WhatWeOffer from '@/components/home/what-we-offer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-24">
            <div id="mission">
              <MissionVision />
            </div>
            <Separator />
            <WhatWeOffer />
            <Separator />
            <div id="program">
              <ProgramOverview />
            </div>
            <Separator />
            <AboutFounder />
            <Separator />
            <div id="impact">
              <ImpactGoals />
            </div>
            <Separator />
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-12">
              <CoreActivities />
              <Roadmap />
            </div>
            <Separator />
            <div id="ai-tools">
              <ExecutiveSummaryGenerator />
            </div>
            <Separator />
            <div id="faq">
                <Faq />
            </div>
            <Separator />
            <div id="partner-with-us">
              <JoinUs />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
