
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Milestone, ShieldCheck, UserCheck, Zap, Info, Clock, GraduationCap, Award, BookOpen, GitBranch } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const SectionCard = ({ icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
    <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
                <icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-stone dark:prose-invert max-w-none text-foreground/80">
            {children}
        </CardContent>
    </Card>
);

export default function AllInOneTrackPage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <GitBranch className="mx-auto h-12 w-12 text-primary" />
                        <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">How the All-in-One Track Works</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                            A clear explanation for learners on our guided rotation model.
                        </p>
                        <Button asChild className="mt-8">
                            <Link href="/sangini-udaan">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Program Overview
                            </Link>
                        </Button>
                    </div>
                </section>
                
                <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-12">

                        <SectionCard icon={Info} title="Important Clarification">
                            <p className="lead">The All-in-One Track does NOT mean learning everything at the same time. It means:</p>
                            <ul>
                                <li>One structured journey</li>
                                <li>With rotational focus</li>
                                <li>And guided prioritization</li>
                            </ul>
                            <p className="font-semibold text-primary">All-in-One Track = Guided Rotation Model</p>
                        </SectionCard>

                        <Separator />

                        <SectionCard icon={Clock} title="Learning Structure">
                            <p>All-in-One participants follow the same 3-month timeline as other tracks, but their learning is layered to prevent overload and build confidence.</p>
                            
                            <h4 className="flex items-center gap-2 mt-6"><Milestone size={20} />Month 1 — Core Foundation + Primary Focus</h4>
                            <p>Everyone completes the mandatory Soft Skills & Responsible AI foundation. All-in-One learners then select ONE primary focus for the month (e.g., Tech, Business, or Creative) to build a strong base.</p>

                            <h4 className="flex items-center gap-2 mt-6"><Zap size={20} />Month 2 — Secondary Exposure + Demo Projects</h4>
                            <p>Learners rotate into a SECOND focus area and work on ONE demo project aligned with that area. Other tracks are introduced as awareness modules or tool walkthroughs, not deep assignments, to protect time.</p>

                            <h4 className="flex items-center gap-2 mt-6"><GraduationCap size={20} />Month 3 — Live Project + Personal Vision Project</h4>
                            <p>Participants collaborate on ONE live project with SheCodesHerWay and build ONE independent final project. This final project can combine skills from different domains and is based on a single problem statement.</p>

                            <p className="mt-6 text-sm text-muted-foreground p-4 bg-muted/50 rounded-lg"><strong>Evaluation Note:</strong> All-in-One learners are evaluated on growth consistency, project clarity, and cross-skill integration—not on becoming an expert in every single track.</p>
                        </SectionCard>

                        <Separator />

                        <SectionCard icon={UserCheck} title="Track Focus Selection After Admission">
                             <p>For learners in the All-in-One Track, the primary focus area is selected <strong>after</strong> final admission via a dedicated form. This ensures you can make an informed decision with clarity. You will choose one primary foundation:</p>
                             <div className="grid md:grid-cols-2 gap-6 mt-4">
                                <Card className="p-4">
                                    <h5 className="font-semibold">Tech Foundation</h5>
                                    <p className="text-sm">Learners receive the complete Tech and Non-Tech syllabi for broad exposure and adaptability.</p>
                                </Card>
                                 <Card className="p-4">
                                    <h5 className="font-semibold">Non-Tech Digital Confidence Foundation</h5>
                                    <p className="text-sm">Learners receive the Non-Tech syllabus only. No coding or technical learning is required, ensuring a confidence-first experience.</p>
                                </Card>
                             </div>
                             <p className="mt-6 font-semibold text-primary">This structure respects diverse backgrounds, prevents pressure, and aligns with inclusive, human-centered learning standards.</p>
                        </SectionCard>

                        <Separator/>

                        <div className="text-center space-y-4">
                            <h2 className="font-headline text-3xl">Ready to Start Your Journey?</h2>
                             <p className="!mt-4 text-xl font-semibold text-primary">"The All-in-One track is about holistic growth, not simultaneous overload."</p>
                            <Button asChild size="lg" className="!mt-8">
                                <Link href="/apply">Apply to the All-in-One Track</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
