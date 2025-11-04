
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Laptop, Milestone, Feather, Globe, Users, Award, Briefcase, Bot, Megaphone, Search, HeartHandshake, Calendar, Clock, School, Gift, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Faq from '@/components/faq';

const aboutIcons = [
    { icon: Laptop, text: 'Learning' },
    { icon: HeartHandshake, text: 'Mentorship' },
    { icon: Award, text: 'Certificate' },
    { icon: Globe, text: 'Community' },
    { icon: DollarSign, text: 'No stipend', description: "This is an unpaid, learning-focused internship." },
];

const domains = [
    { icon: Briefcase, title: 'Tech & Development', description: 'Web development, coding, and AI projects.' },
    { icon: Bot, title: 'Creative & Design', description: 'UI/UX, graphic design, and brand creation.' },
    { icon: Megaphone, title: 'Content & Social Media', description: 'Content strategy, writing, and social campaigns.' },
    { icon: Users, title: 'Community & Events', description: 'Event planning and community engagement.' },
    { icon: Search, title: 'Research & Growth', description: 'Market research and growth hacking.' },
];

const gains = [
    { icon: Laptop, title: 'Hands-on Learning', description: 'Work on real-world projects.' },
    { icon: HeartHandshake, title: 'Mentorship Support', description: 'Guidance from industry experts.' },
    { icon: Award, title: 'Completion Certificate', description: 'Official recognition of your work.' },
    { icon: Calendar, title: 'Access to Events', description: 'Join exclusive online & live events.' },
    { icon: Users, title: 'Lifetime Community', description: 'Become part of our Sangini Circle.' },
];

export default function InternshipPage() {
    const heroImage = PlaceHolderImages.find((p) => p.id === 'internship-hero');
    const communityImage = PlaceHolderImages.find((p) => p.id === 'internship-community');
    const certificateImage = PlaceHolderImages.find((p) => p.id === 'internship-certificate');

    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="relative h-96 w-full">
                    {heroImage && (
                        <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto px-4 text-center text-foreground">
                            <Badge variant="secondary" className="mb-4 text-sm">Our Internship Program will start soon!</Badge>
                            <h1 className="font-headline text-4xl font-extrabold tracking-tight drop-shadow-md sm:text-5xl md:text-6xl">
                                Learn. Grow. Contribute. Shine. 🌸
                            </h1>
                            <p className="mt-6 max-w-3xl mx-auto text-lg font-medium drop-shadow-sm md:text-xl">
                                Empowering Women Through Learning & Experience.
                            </p>
                             <p className="mt-2 max-w-2xl mx-auto text-base text-foreground/80 drop-shadow-sm">
                                Gain real-world skills, mentorship, and certification — no stipend, just growth and guidance.
                            </p>
                            <Button asChild size="lg" className="mt-8" disabled>
                                <Link href="#">Apply for Internship</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        <section className="bg-secondary rounded-lg p-12">
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="font-headline text-3xl font-bold">About the Internship</h2>
                                <p className="mt-4 text-lg text-foreground/80">
                                    Our training-based internship is designed to give you hands-on experience by working on real projects. You’ll receive dedicated mentorship, a certificate of completion, and become a lifetime member of the SheCodesHerWay community.
                                </p>
                                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                                    {aboutIcons.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center gap-2">
                                            <div className="rounded-full bg-background p-4 text-primary">
                                                <item.icon className="h-8 w-8" />
                                            </div>
                                            <p className="font-semibold text-foreground/90">{item.text}</p>
                                            {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="text-center mb-12">
                                <h2 className="font-headline text-3xl font-bold">Internship Domains</h2>
                                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">Choose a path that aligns with your passion and career goals.</p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {domains.map((domain) => (
                                    <Card key={domain.title} className="group transform transition-transform hover:-translate-y-2 duration-300 overflow-hidden text-center shadow-md">
                                        <CardContent className="p-8 flex flex-col items-center">
                                            <div className="rounded-full bg-accent/50 p-4 text-accent-foreground mb-4 transition-colors group-hover:bg-accent">
                                                <domain.icon className="h-8 w-8" />
                                            </div>
                                            <h3 className="text-xl font-bold font-headline">{domain.title}</h3>
                                            <p className="mt-2 text-foreground/80 text-sm">{domain.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                                {domains.length % 3 === 2 && <div className="hidden lg:block"></div>}
                            </div>
                        </section>
                        
                        <Separator />

                        <section>
                            <div className="text-center mb-12">
                                <h2 className="font-headline text-3xl font-bold">What You’ll Gain</h2>
                                 <p className="mt-4 font-body text-lg italic text-primary">“We don’t pay in stipends — we invest in growth, skills, and opportunities.”</p>
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
                        </section>
                        
                        <Separator />

                        <section>
                             <div className="grid lg:grid-cols-3 gap-8">
                                <Card className="flex flex-col items-center justify-center p-6 text-center bg-secondary">
                                    <Calendar className="h-10 w-10 text-primary mb-2"/>
                                    <h3 className="font-bold text-lg">Duration</h3>
                                    <p className="text-foreground/80">4–8 weeks (Flexible)</p>
                                </Card>
                                <Card className="flex flex-col items-center justify-center p-6 text-center bg-secondary">
                                    <Laptop className="h-10 w-10 text-primary mb-2"/>
                                    <h3 className="font-bold text-lg">Mode</h3>
                                    <p className="text-foreground/80">Fully Online</p>
                                </Card>
                                <Card className="flex flex-col items-center justify-center p-6 text-center bg-secondary">
                                    <Clock className="h-10 w-10 text-primary mb-2"/>
                                    <h3 className="font-bold text-lg">Time Commitment</h3>
                                    <p className="text-foreground/80">5–6 hours per week</p>
                                </Card>
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
                        
                        <section className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="text-center md:text-left">
                                <h2 className="font-headline text-3xl font-bold">Join our Sangini Circle</h2>
                                <p className="mt-4 text-lg text-foreground/80">Become part of a digital sisterhood of learners and leaders, where you can connect, collaborate, and grow. Participate in exclusive events like the annual Udaan Summit.</p>
                                <div className="flex justify-center md:justify-start gap-4 mt-6">
                                    <span className="font-semibold font-headline text-lg text-primary">Udaan Summit</span>
                                    <span className="font-semibold font-headline text-lg text-primary">Sangini Udaan</span>
                                </div>
                            </div>
                            {communityImage && (
                                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                    src={communityImage.imageUrl}
                                    alt={communityImage.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={communityImage.imageHint}
                                    />
                                </div>
                            )}
                        </section>
                        
                        <Separator />

                        <section className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="text-center md:text-left order-last md:order-first">
                                <h2 className="font-headline text-3xl font-bold">Get Certified</h2>
                                <p className="mt-4 text-lg text-foreground/80">Receive an official SheCodesHerWay Internship Certificate recognizing your valuable learning and contributions to our mission.</p>
                            </div>
                            {certificateImage && (
                                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                    src={certificateImage.imageUrl}
                                    alt={certificateImage.description}
                                    fill
                                    className="object-cover object-center"
                                    data-ai-hint={certificateImage.imageHint}
                                    />
                                </div>
                            )}
                        </section>

                        <Separator />

                         <div id="faq">
                            <Faq />
                        </div>

                        <Separator />

                        <section className="text-center max-w-3xl mx-auto">
                             <p className="font-body text-2xl italic text-primary">“This internship is not about earning — it’s about becoming.”</p>
                             <h2 className="font-headline text-3xl font-bold mt-8">Ready to Start Your Journey?</h2>
                             <Button asChild size="lg" className="mt-6" disabled>
                                <Link href="#">Join as an Intern Today!</Link>
                             </Button>
                        </section>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
