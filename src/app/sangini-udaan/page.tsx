
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Linkedin, BrainCircuit, Code, Pilcrow, Lightbulb, Scale, Clock, RefreshCw, CalendarCheck2, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { programFaqData } from '@/lib/program-faq-data';
import ProgramFlow from '@/components/sangini-udaan/program-flow';
import { brand } from '@/lib/brand';
import { Badge } from '@/components/ui/badge';
import JoinUs from '@/components/join-us';

const specializedPaths = [
    {
        title: "For Women in Tech Journeys",
        description: "Learn coding, digital tools, and AI basics to build career confidence in technology. Includes mentorship, internships, and job-readiness sessions.",
        cta: "View Syllabus",
        href: "/program-syllabus",
    },
    {
        title: "For Women Aspiring to Start Startups or Businesses",
        description: "Build your dream startup or personal brand. Covers business modeling, entrepreneurship bootcamps, and funding preparation.",
        cta: "View Syllabus",
        href: "/program-syllabus",
    },
    {
        title: "For Creative & Content Entrepreneurs",
        description: "Express and earn through creativity — blogging, book publishing, Canva editing, art creation, and WordPress website design.",
        cta: "View Syllabus",
        href: "/program-syllabus",
    },
    {
        title: "For Emotional, Personal & Soft Skills Growth",
        description: "Develop confidence, leadership, communication, and emotional intelligence for both life and work.  Soft skills and emotional strength are included in every track as a core foundation for growth.",
        cta: "View Syllabus",
        href: "/program-syllabus",
    },
    {
        title: "For Non-Tech Users Empowerment",
        description: "Digital Confidence & Career Readiness Track. Designed for non-technical learners seeking digital confidence, leadership skills, creativity, and independence—without learning coding.",
        cta: "View Syllabus",
        href: "/program-syllabus",
    }
]

export default function SanginiUdaanPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'program-community');
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
                            <p className="mt-2 text-2xl font-medium drop-shadow-sm md:text-3xl">The Pathway From Learning to Leadership</p>
                            <p className="mt-6 max-w-3xl mx-auto text-lg font-medium drop-shadow-sm md:text-xl">
                                Welcome, Sangini! Every woman’s journey is unique — choose how you want to grow, learn, and lead with SheCodesHerWay.
                            </p>
                        </div>
                    </div>
                </section>
                
                <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
                    <div className="space-y-24">

                        <section className="text-center bg-accent/30 py-12 rounded-lg">
                            <Badge variant="secondary" className="mb-4">Starting Soon</Badge>
                            <h2 className="font-headline text-3xl font-bold">Sangini Udaan : EmpowerFly — Cohort 1</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                                A very warm welcome to all the participants and mentors joining our founding cohort! We are thrilled to have you on this journey of growth, learning, and empowerment. Together, we will build something truly special.
                            </p>
                             <p className="mt-6 text-foreground/80">
                                Stay updated with our latest announcements and follow our journey on social media!
                            </p>
                            <Button asChild>
                                <Link href="https://www.linkedin.com/company/shecodesherway/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4" />
                                    Follow us on LinkedIn
                                </Link>
                            </Button>
                        </section>
                        
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-[450px]">
                                
                                    <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://i.postimg.cc/1tVR2cbZ/Sangini-Udaan-students-post.png"
                                        alt="A group of Sangini Udaan students"
                                        fill
                                        className="object-cover"
                                        data-ai-hint="women students"
                                    />
                                    </div>
                                
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

                        <section className="space-y-16">
                            <div className="text-center mb-12">
                                <h2 className="font-headline text-3xl font-bold md:text-4xl">What You’ll Gain From The Program</h2>
                                <p className="mt-4 font-body text-lg italic text-primary">“This is not just a program — it's an investment in your future.”</p>
                            </div>
                            <div>
                                <Card className="mt-4 max-w-3xl mx-auto shadow-lg transform transition-transform hover:scale-105 duration-300">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-3xl">Complete {brand.programName} Journey (All-in-One Track)</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-foreground/80">
                                            Experience the entire empowerment journey — tech learning, business building, creativity, and emotional growth — all in one full program.  Best for women who want holistic growth, independence, and leadership.
                                        </p>
                                        <div className="flex flex-wrap gap-4 mt-6">
                                            <Button asChild size="lg">
                                                <Link href="/apply">Enroll in {brand.programName} All-in-One</Link>
                                            </Button>
                                            <Button asChild size="lg" variant="secondary">
                                                <Link href="/program-syllabus">View Syllabus</Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Other Specialized Paths:</h2>
                                <p className="text-center mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                                    Choose your path and begin your journey to learn, lead, and rise with SheCodesHerWay.
                                </p>
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
                                                <Button asChild>
                                                    <Link href={path.href}>{path.cta}</Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="mt-16">
                                <div className="text-center mb-12">
                                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Core Program Foundations</h2>
                                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                                        These principles are integrated into every learning path to ensure a holistic, modern, and ethical growth experience.
                                    </p>
                                </div>
                                <Card className="max-w-4xl mx-auto shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-3xl">Vibe Coding, Prompt Writing & Responsible AI</CardTitle>
                                        <CardDescription>Program-Wide Core Foundation</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-8">
                                        <div>
                                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Lightbulb className="h-5 w-5 text-primary"/>What This Means</h3>
                                            <p>Vibe Coding, Prompt Writing & Responsible AI are not separate tracks. They are core foundations integrated across all Sangini Udaan : EmpowerFly programs, adapted to each learner’s journey and background.</p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Code className="h-5 w-5 text-primary"/>Vibe Coding Explained</h4>
                                                <p className="text-sm text-foreground/80">An inclusive, human-centered approach to building with technology using AI-assisted creation, natural language, and intuition-driven problem-solving. It enables beginners and non-tech users to build and experiment without fear of complex code.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Pilcrow className="h-5 w-5 text-primary"/>Prompt Writing as a Core Life Skill</h4>
                                                <p className="text-sm text-foreground/80">Taught as a communication and problem-solving skill, not just a technical concept. Participants learn to write clear, goal-oriented prompts for content, creativity, learning, and planning, while keeping human originality central.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-primary"/>Responsible AI Foundation</h4>
                                            <p className="text-sm text-foreground/80">A mandatory foundation covering human-centered AI usage, transparency, bias awareness, data privacy, and accountability. Ethical AI practices are applied through real projects and scenarios.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <Separator />
                        
                        <section>
                            <div className="text-center mb-12">
                                <h2 className="font-headline text-3xl font-bold md:text-4xl">Sangini Udaan : EmpowerFly — Program Duration & Structure</h2>
                                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                                    Understanding the time commitment and journey structure.
                                </p>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-8 items-start">
                                <Card className="shadow-lg h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2"><Clock className="h-6 w-6 text-primary"/>Program Duration & Structure</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p>The program is structured into two main phases to ensure a deep and impactful learning experience.</p>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li><strong>Initial Phase:</strong> A focused 3-month period covering core curriculum, foundational skills, and project work.</li>
                                            <li><strong>Advanced Phase:</strong> An optional 3-month extension for deeper specialization, leadership roles, and advanced project contribution.</li>
                                        </ul>
                                        <Button asChild variant="link" className="p-0 h-auto mt-4">
                                            <Link href="/program-structure">
                                                See Detailed Structure <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                                <Card className="shadow-lg lg:col-span-2 h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2"><BrainCircuit className="h-6 w-6 text-primary"/>How the Complete Sangini Udaan : EmpowerFly Journey (All-in-One Track) Works</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p>This track uses a guided rotation model—not simultaneous learning. Participants build a strong foundation and explore multiple domains through structured phases, completing one demo, one live, and one final project.</p>
                                        <Button asChild variant="link" className="p-0 h-auto mt-4">
                                            <Link href="/sangini-udaan/all-in-one-track">
                                                Learn How It Works <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                                <Card className="shadow-lg lg:col-span-3">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2"><RefreshCw className="h-6 w-6 text-primary"/>Program Duration Flexibility & Extension Policy</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="font-semibold flex items-center gap-2"><CalendarCheck2 /> For Specialized Tracks:</h4>
                                                <p>Learners in specialized tracks (Tech, Business, etc.) complete the initial 3-month phase. After this, you may reapply to enter the advanced 3-month phase to deepen your expertise or explore another domain.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold flex items-center gap-2"><Lightbulb /> Our Philosophy:</h4>
                                                <p>This phased approach ensures that all learners receive a strong foundational experience, while also providing the flexibility to extend their journey based on their performance, commitment, and evolving goals. Selection for the second phase is based on a review of your participation and contributions.</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <Separator />

                        <ProgramFlow />
                        
                        <Separator />

                        <section className="max-w-3xl mx-auto text-center">
                            <Card className="!mt-8 text-sm text-muted-foreground p-6 bg-red-50 border-red-200 text-left shadow-lg">
                                <h3 className="font-bold text-red-800 flex items-center gap-2"><Scale className="h-5 w-5" />Important Notice: Legal Status Clarification</h3>
                                <p className="mt-2 text-red-700">Collaboration does not create an employer-employee, contractor, or internship relationship. Participation is non-binding and non-contractual.</p>
                            </Card>
                        </section>

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
                        
                        <Separator />

                        <div id="join-us" className="rounded-xl py-12 relative overflow-hidden">
                           <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-white/0 to-white/0"></div>
                            <JoinUs />
                        </div>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}

    
