'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function PartnerPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">Join Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Join our core team or collaborate with us to help shape the future of women in tech and creative fields.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Card className="max-w-3xl mx-auto shadow-2xl bg-gradient-to-br from-background via-accent/10 to-background">
                <CardHeader className="text-center p-8 md:p-12">
                    <CardTitle className="font-headline text-3xl md:text-4xl">
                      Early Core Contributor Application | SheCodesHerWay
                    </CardTitle>
                    <CardDescription className="text-lg pt-4 text-foreground/80">
                       Join the founding circle of SheCodesHerWay. We are looking for passionate individuals—including students, freshers, and working professionals—to join us as Early Core Contributors on a part-time basis.
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-8 md:px-12">
                    <div className="prose dark:prose-invert max-w-none text-foreground/90">
                        <p>
                            In this role, you will take full ownership of high-impact modules, building specialized tools, creative assets, and strategic systems from the ground up. As a Core Contributor, you will work independently in a dedicated local environment, contributing your expertise to help scale our mission.
                        </p>
                        <p className="font-semibold text-primary">
                            This is a unique opportunity to lead "zero-to-one" development and shape the future of our platform.
                        </p>
                    </div>
                     <div className="mt-8 text-center">
                        <Button asChild size="lg">
                            <Link href="https://docs.google.com/document/d/1yycVFW7TiH2P-KCBuvHyNLg03mOqATPS/edit?usp=sharing&ouid=104571785946165056965&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                                <FileText className="mr-2 h-5 w-5" />
                                Learn More & Apply
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
