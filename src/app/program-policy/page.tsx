
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Scale, Clock, Award, Star, CheckCircle, GitBranch, Lightbulb, Users, Heart, Briefcase, GraduationCap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

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

export default function ProgramPolicyPage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <Scale className="mx-auto h-12 w-12 text-primary" />
                        <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">Program Policies</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                            Duration, Flexibility, Evaluation & Assessment Policies for Sangini Udaan : EmpowerFly.
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

                        <SectionCard icon={Clock} title="Program Duration Flexibility & Extension Policy">
                            <p>The standard duration of Sangini Udaan : EmpowerFly is <strong>3 months (12 weeks)</strong>.</p>
                            <p>However, <strong>Month 1 (Foundations & Track Fundamentals)</strong> may be extended if required, based on:</p>
                            <ul>
                                <li>Team readiness</li>
                                <li>Learning pace of the cohort</li>
                                <li>Program-level requirements</li>
                                <li>Situations where additional foundational support is beneficial</li>
                            </ul>
                            <p>This extension is not automatic and will be decided solely by the SheCodesHerWay team, keeping participant growth and learning quality as the priority.</p>
                            <h4 className="font-semibold mt-6">Important Clarifications</h4>
                             <ul>
                                <li>The extension, if granted, will be limited to <strong>Month 1 only</strong>.</li>
                                <li>Allowed only <strong>once</strong>. Multiple or repeated extensions are not permitted.</li>
                                <li>No other months are extendable under this policy.</li>
                            </ul>
                            <p className="mt-4 p-4 bg-primary/10 rounded-lg text-primary-foreground font-semibold">SheCodesHerWay is committed to doing its best to support every participant throughout the journey, while maintaining program structure, fairness, and professionalism.</p>
                        </SectionCard>

                        <Separator />

                        <SectionCard icon={Award} title="Evaluation & Assessment Policy">
                            <p className="lead">The evaluation process of Sangini Udaan : EmpowerFly is designed to be holistic, fair, growth-oriented, and contribution-based, ensuring that every participant is assessed beyond just technical output.</p>
                            <p>Evaluation focuses on learning progress, application, consistency, and leadership readiness, not comparison alone.</p>

                            <h4 className="font-semibold mt-6">Evaluation Scope</h4>
                            <p>Evaluation applies to all participants, across all specialized tracks, the All-in-One Track, and both Tech and Non-Tech foundations. Evaluation is conducted throughout the program, with final assessment in Month 3.</p>

                            <h4 className="font-semibold mt-6">What Is Evaluated</h4>
                            <p>Participants are evaluated on the following core areas:</p>
                            <ol>
                                <li><strong>Learning Progress & Consistency:</strong> Attendance, participation, effort, improvement, and engagement.</li>
                                <li><strong>Skill Application:</strong> Understanding of concepts, ability to apply learning, and problem-solving approach.</li>
                                <li><strong>Project Performance (Month 3):</strong>
                                    <ul>
                                        <li><strong>Project 1 (Live Training with SheCodesHerWay):</strong> Team collaboration, task responsibility, timely execution, and adaptability.</li>
                                        <li><strong>Project 2 (Independent Participant Project):</strong> Clarity of theme, prototype quality, creativity, and final presentation.</li>
                                    </ul>
                                </li>
                                <li><strong>Communication & Soft Skills (Mandatory for All):</strong> Communication clarity, confidence, presentation skills, and interview readiness.</li>
                                <li><strong>Ethical Learning & Responsible AI Usage:</strong> Ethical use of AI, transparency, originality, and responsible decision-making.</li>
                            </ol>

                             <h4 className="font-semibold mt-6">Evaluation Method</h4>
                            <p>Evaluation is conducted through mentor observations, project reviews, participation records, submission quality, and presentation assessment. There are no traditional written exams unless explicitly mentioned for a specific track.</p>
                            
                            <h4 className="font-semibold mt-6">Ranking & Recognition Policy</h4>
                            <p>Based on overall evaluation, Top 100 performers and Top 10 participants per track are highlighted. Ranking is recognition-based, not elimination-based.</p>

                            <h4 className="font-semibold mt-6">Certificates & Recognition Levels</h4>
                            <p>Certificates (Participation, Diamond, Platinum) are awarded based on completion, contribution quality, and evaluation outcomes. Decisions are made by the SheCodesHerWay evaluation team.</p>

                            <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-400 text-red-800 rounded-r-lg">
                                <h5 className="font-semibold">Important Evaluation Clarifications</h5>
                                <ul className="list-disc list-inside text-sm">
                                    <li>All participants are evaluated fairly and transparently.</li>
                                    <li>Criteria apply equally to Tech and Non-Tech learners.</li>
                                    <li>All-in-One Track participants are evaluated based on their chosen foundation.</li>
                                    <li>Evaluation decisions by the SheCodesHerWay team are final.</li>
                                </ul>
                            </div>
                            
                            <p className="mt-6 font-semibold text-primary">Program Integrity Statement: The evaluation process exists to encourage growth, recognize effort, support leadership, and maintain program credibility. SheCodesHerWay commits to ensuring a respectful, motivating, and empowering evaluation experience.</p>
                        </SectionCard>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
