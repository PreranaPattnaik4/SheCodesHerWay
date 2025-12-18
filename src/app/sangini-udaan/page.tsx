
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Laptop, HeartHandshake, Award, Calendar, Users, School, Gift, Linkedin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { programFaqData } from '@/lib/program-faq-data';
import ProgramFlow from '@/components/sangini-udaan/program-flow';
import { brand } from '@/lib/brand';
import { Badge } from '@/components/ui/badge';

const specializedPaths = [
    {
        title: "For Women in Tech Journeys",
        description: "Learn coding, digital tools, and AI basics to build career confidence in technology. Includes mentorship, internships, and job-readiness sessions.",
        cta: "Learn More",
        href: "/apply",
    },
    {
        title: "For Women Aspiring to Start Startups or Businesses",
        description: "Build your dream startup or personal brand. Covers business modeling, entrepreneurship bootcamps, and funding preparation.",
        cta: "Explore Startup Bootcamps",
        href: "/apply",
    },
    {
        title: "For Creative & Content Entrepreneurs",
        description: "Express and earn through creativity — blogging, book publishing, Canva editing, art creation, and WordPress website design.",
        cta: "Discover Creative Paths",
        href: "/apply",
    },
    {
        title: "For Emotional, Personal & Soft Skills Growth",
        description: "Develop confidence, leadership, communication, and emotional intelligence for both life and work.  Soft skills and emotional strength are included in every track as a core foundation for growth.",
        cta: "Grow Your Soft Skills",
        href: "/apply",
    }
]

const gains = [
    { icon: Laptop, title: 'Hands-on Learning', description: 'Work on real-world projects.' },
    { icon: HeartHandshake, title: 'Mentorship Support', description: 'Guidance from industry experts.' },
    { icon: Award, title: 'Completion Certificate', description: 'Official recognition of your work.' },
    { icon: Calendar, title: 'Access to Events', description: 'Join exclusive online & live events.' },
    { icon: Users, title: 'Lifetime Community', description: 'Become part of our Sangini Circle.' },
    { icon: Gift, title: 'Growth Investment', description: 'We invest in your skills and opportunities.' },
];

export default function SanginiUdaanPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'program-community');
    const image1 = PlaceHolderImages.find((p) => p.id === 'about-program-1');
    const image2 = PlaceHolderImages.find((p) => p.id === 'about-program-2');

    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1 bg-white">
                <section className="relative h-80 w-full bg-secondary">
                   {bannerImage && (
                        <Image
                            src={bannerImage.imageUrl}
                            alt="Inspiring banner for Sangini Udaan"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint="women learning"
                        />
                   )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto px-4 text-center text-foreground">
                            <h1 className="font-headline text-4xl font-extrabold tracking-tight drop-shadow-md sm:text-5xl md:text-6xl">
                                Sangini Udaan : EmpowerFly
                            </h1>
                            <p className="mt-2 text-2xl font-medium drop-shadow-sm md:text-3xl">Empower Her to Fly Beyond Limits.</p>
                            <p className="mt-6 max-w-3xl mx-auto text-lg font-medium drop-shadow-sm md:text-xl">
                                Welcome, Sangini! Every woman’s journey is unique — choose how you want to grow, learn, and lead with SheCodesHerWay.
                            </p>
                        </div>
                    </div>
                </section>
                
                <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
                    <div className="space-y-24">

                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-[450px]">
                                {image1 && (
                                    <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-2xl">
                                    <Image
                                        src={image1.imageUrl}
                                        alt={image1.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image1.imageHint}
                                    />
                                    </div>
                                )}
                                {image2 && (
                                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-lg overflow-hidden border-4 border-background shadow-2xl">
                                    <Image
                                        src={image2.imageUrl}
                                        alt={image2.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image2.imageHint}
                                    />
                                    </div>
                                )}
                                </div>
                                <div>
                                <h2 className="font-headline text-4xl font-bold">{brand.programName}</h2>
                                <p className="mt-4 text-2xl text-primary italic">
                                    “{brand.programTagline}”
                                </p>
                                <div className="w-24 h-1 bg-primary my-4"></div>
                                <div className="space-y-4 text-foreground/80 text-lg">
                                    <p>
                                    The flagship program of SheCodesHerWay, designed to help women rise with confidence, mentorship, and creativity — whether in tech or in art, innovation, or leadership.
                                    </p>
                                    <p className="font-semibold text-foreground/90 pt-4">
                                    Because when one woman takes flight, she inspires a thousand more to soar.
                                    </p>
                                </div>
                                </div>
                            </div>
                        </section>

                        <Separator />

                        <section className="text-center bg-accent/30 py-12 rounded-lg">
                            <Badge variant="secondary" className="mb-4">Starting Soon</Badge>
                            <h2 className="font-headline text-3xl font-bold">Sangini Udaan : EmpowerFly — Cohort 1</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                                A very warm welcome to all the participants and mentors joining our founding cohort! We are thrilled to have you on this journey of growth, learning, and empowerment. Together, we will build something truly special.
                            </p>
                             <p className="mt-6 text-foreground/80">
                                Stay updated with our latest announcements and follow our journey on social media!
                            </p>
                            <Button asChild className="mt-4">
                                <Link href="https://www.linkedin.com/company/shecodesherway/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4" />
                                    Follow us on LinkedIn
                                </Link>
                            </Button>
                        </section>

                        <section>
                            <div className="text-center mb-12">
                                <h2 className="font-headline text-3xl font-bold">What You’ll Gain From The Program</h2>
                                 <p className="mt-4 font-body text-lg italic text-primary">“This is not just a program — it's an investment in your future.”</p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {gains.map((gain) => (
                                    <Card key={gain.title} className="bg-muted border-0 flex items-start p-6 gap-4">
                                        <div className="text-primary pt-1">
                                            <gain.icon className="h-6 w-6"/>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{gain.title}</h3>
                                            <p className="text-foreground/80 text-sm">{gain.description}</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                            <Card className="mt-8 flex flex-col sm:flex-row items-center justify-center p-6 text-center bg-accent/50">
                                <School className="h-10 w-10 text-accent-foreground mb-4 sm:mb-0 sm:mr-4"/>
                                <div>
                                    <h3 className="font-bold text-lg">Who Can Apply?</h3>
                                    <p className="text-accent-foreground/90">Students, learners, and women restarting their careers are all welcome.</p>
                                </div>
                            </Card>
                        </section>

                        <Separator />

                        <section className="space-y-16">
                            <div>
                                <h2 className="text-center text-lg font-semibold text-primary"> Recommended:</h2>
                                <Card className="mt-4 max-w-3xl mx-auto shadow-lg transform transition-transform hover:scale-105 duration-300">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-3xl">Complete {brand.programName} Journey (All-in-One Track)</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-foreground/80">
                                            Experience the entire empowerment journey — tech learning, business building, creativity, and emotional growth — all in one full program.  Best for women who want holistic growth, independence, and leadership.
                                        </p>
                                        <Button asChild size="lg" className="mt-6">
                                            <Link href="/apply">Enroll in {brand.programName} All-in-One</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Other Specialized Paths:</h2>
                                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                                    {specializedPaths.map((path) => (
                                        <Card key={path.title} className="flex flex-col shadow-lg">
                                            <CardHeader>
                                                <CardTitle className="text-2xl">{path.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex-grow">
                                                <p className="text-foreground/80">{path.description}</p>
                                            </CardContent>
                                            <CardFooter>
                                                <Button asChild variant="outline">
                                                    <Link href={path.href}>{path.cta}</Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center mt-16">
                                <p className="font-headline text-2xl">
                                     Choose your path and begin your journey to learn, lead, and rise with SheCodesHerWay.
                                </p>
                            </div>
                        </section>
                        
                        <Separator />

                        <ProgramFlow />

                        <Separator />

                        <div id="faq">
                           <section>
                              <div className="text-center mb-10">
                                <h2 className="font-headline text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
                                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                                  Your questions about the {brand.programName} program, answered.
                                </p>
                              </div>
                              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                                {programFaqData.map((faq, index) => (
                                  <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-base text-foreground/80">
                                      {faq.answer}
                                    </AccordionContent>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </section>
                        </div>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}

    