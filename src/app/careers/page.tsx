
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, Handshake, HeartHandshake, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const opportunities = [
    {
        icon: Briefcase,
        title: "Internship Program",
        description: "Gain real-world skills and hands-on experience by joining our training-based internship. Work on live projects, receive mentorship, and get certified.",
        cta: "Explore Internships",
        href: "/internship"
    },
    {
        icon: HeartHandshake,
        title: "Become a Mentor",
        description: "Are you a student or professional passionate about giving back? Guide and inspire the next generation of women leaders and creators.",
        cta: "Apply to be a Mentor",
        href: "/partner"
    },
    {
        icon: Handshake,
        title: "Partner with Us",
        description: "Collaborate with SheCodesHerWay to create a wider impact. We're looking for organizations that share our vision for empowering women.",
        cta: "Contact for Partnerships",
        href: "/contact"
    }
];

export default function CareersPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold md:text-6xl">Get Involved</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Join our mission to build a world where every woman has the opportunity to soar. Explore how you can contribute.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {opportunities.map((opp) => (
                    <Card key={opp.title} className="flex flex-col shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
                        <CardHeader className="items-center text-center">
                            <div className="bg-primary/10 text-primary p-4 rounded-full">
                                <opp.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="pt-4">{opp.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow text-center">
                            <p className="text-foreground/80">{opp.description}</p>
                        </CardContent>
                        <div className="p-6 pt-0 text-center">
                             <Button asChild>
                                <Link href={opp.href}>
                                    {opp.cta}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>

        <Separator />

        <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl font-bold">Don't see a fit?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                We're always open to new ideas and collaborations. If you have a different way you'd like to contribute, we'd love to hear from you.
            </p>
            <Button asChild variant="outline" className="mt-8">
                <Link href="/contact">Get in Touch</Link>
            </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
