
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Briefcase } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold md:text-6xl">Join Our Team</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Help us build a world where every woman has the opportunity to soar.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Card className="shadow-lg">
                    <CardHeader className="text-center">
                        <Building className="mx-auto h-12 w-12 text-primary" />
                        <CardTitle className="mt-4">We're Growing!</CardTitle>
                        <CardDescription>
                            We are always looking for passionate individuals to join our mission.
                            Currently, there are no open positions, but we encourage you to check back soon.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-foreground/80 mb-6">
                            In the meantime, consider joining our internship program to gain valuable experience and contribute to our community.
                        </p>
                        <Button asChild>
                            <Link href="/internship">
                                <Briefcase className="mr-2 h-4 w-4" />
                                Explore Internships
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
