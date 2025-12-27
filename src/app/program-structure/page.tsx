
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Award, BookOpen, Calendar, Clock, Disc, GitBranch, Goal, Heart, Lightbulb, Mic, Projector, Rocket, Sparkles, Star, Users, Zap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const scheduleDetails = [
    {
        title: "Total Program Duration",
        details: [
            "3 Months (12 Weeks)",
            "Common timeline for all tracks",
            "Skill depth varies by track, structure remains the same",
        ],
        icon: Clock,
    },
    {
        title: "Training Schedule (Weekly Format)",
        details: [
            "2–3 live training sessions per week",
            "Sessions include: Concept learning, Guided practice, Interactive discussions, Mentorship touchpoints",
            "Additional optional community sessions may be added",
        ],
        icon: Calendar,
    },
]

const months = [
    {
        title: "Month 1 — Foundations & Track Fundamentals",
        focus: "Core fundamentals of the selected track, Digital confidence & orientation, Responsible AI, prompt writing & vibe coding basics, Understanding tools, workflows, and expectations",
        sessions: "2–3 sessions per week, Track-specific fundamental course, Beginner-friendly, no prior experience required",
        outcome: "Strong conceptual foundation, Tool familiarity, Clear understanding of chosen track direction",
        icon: Rocket,
    },
    {
        title: "Month 2 — Advanced Learning & Demo Projects",
        focus: "Advanced concepts for each track, Real-world exposure, Applying skills through guided demo projects",
        sessions: "2 sessions per week, Hands-on learning with mentor guidance",
        projects: "One demo project per track, Step-by-step implementation, Feedback and improvement cycles",
        outcome: "Skill confidence, Practical application experience, Preparation for live projects",
        icon: Zap,
    },
    {
        title: "Month 3 — Live Projects, Innovation & Evaluation",
        focus: "Real-world collaboration with SheCodesHerWay, final course module, independent thinking, and problem-solving.",
        sessions: "Live project collaboration sessions, mentorship & review meetings.",
        icon: Star,
        projectStructure: {
            title: "Updated Project Structure for Month 3",
            description: "In the third month, every participant completes two distinct projects as part of the learning, training, and evaluation process.",
            project1: {
                title: "Project 1 — Live Training Project with SheCodesHerWay",
                duration: "15 days",
                nature: "Live training-based project",
                scope: "One live project is assigned per track. Participants work closely with the SheCodesHerWay team with guided execution, real-world exposure, and mentorship support.",
                purpose: "Practical application of learned skills, understanding teamwork, workflows, and delivery standards, and preparing participants for real project environments. This project is conducted with SheCodesHerWay as part of structured training."
            },
            project2: {
                title: "Project 2 — Independent Participant Project",
                description: "After completing the live training project, participants build their own independent project based on a defined theme, a clear problem statement, and prototype design, culminating in a final submission and presentation. This project reflects individual understanding, creativity and ownership, and application of skills aligned with the chosen track or foundation."
            },
            clarification: "Both projects are completed within Month 3. The two projects serve different purposes: one for guided live training and one for independent capability demonstration. Participants are not required to complete more than these two projects. This structure applies across all tracks, including the All-in-One Track, with project themes aligned to the learner’s selected foundation (Tech or Non-Tech)."
        },
        evaluation: {
            title: "Evaluation & Recognition",
            description: "Performance in both projects is considered for project examination and review, final evaluation, and ranking for recognition (Top 100 performers, Top 10 participants per track). Evaluation focuses on learning application, problem-solving approach, consistency and participation, and innovation and clarity of execution."
        },
        extensionNote: "Prototype submission may be extended by one month if needed, depending on team requirements. We will do our best to support you throughout this journey. This extension is a one-time option."
    },
]

export default function ProgramStructurePage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <GitBranch className="mx-auto h-12 w-12 text-primary" />
                        <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">Program Structure &amp; Timeline</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                            A detailed look at the 3-month journey of Sangini Udaan : EmpowerFly.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button asChild>
                                <Link href="/sangini-udaan">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Program Overview
                                </Link>
                            </Button>
                             <Button asChild variant="secondary">
                                <Link href="/program-syllabus">
                                    View Full Syllabus
                                    <BookOpen className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
                
                <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <Card className="text-center bg-accent/20 border-accent/30 shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-3xl">Sangini Udaan : EmpowerFly — Cohort 1</CardTitle>
                            </CardHeader>
                            <CardContent className="text-foreground/80 text-lg">
                                <p>A very warm welcome to all the participants and mentors joining our founding cohort! We are thrilled to have you on this journey of growth, learning, and empowerment. Together, we will build something truly special.</p>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-8">
                            {scheduleDetails.map(detail => (
                                <Card key={detail.title} className="shadow-lg">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                                            <detail.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle>{detail.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-inside space-y-2 text-foreground/80">
                                            {detail.details.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Separator />

                        <div className="space-y-12">
                             {months.map(month => (
                                <Card key={month.title} className="shadow-lg overflow-hidden">
                                    <CardHeader className="bg-muted/50">
                                        <CardTitle className="font-headline text-2xl flex items-center gap-3">
                                            <month.icon className="h-6 w-6 text-primary" />
                                            {month.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6 space-y-6">
                                        <div>
                                            <h4 className="font-semibold flex items-center gap-2 mb-2"><Goal size={18}/>Focus</h4>
                                            <p className="text-foreground/80">{month.focus}</p>
                                        </div>
                                        
                                        {month.sessions && (
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-semibold flex items-center gap-2 mb-2"><BookOpen size={18}/>Sessions</h4>
                                                    <p className="text-foreground/80">{month.sessions}</p>
                                                </div>
                                                {month.outcome && (
                                                    <div>
                                                        <h4 className="font-semibold flex items-center gap-2 mb-2"><Lightbulb size={18}/>Outcome</h4>
                                                        <p className="text-foreground/80">{month.outcome}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        
                                        {month.projectStructure && (
                                            <div>
                                                <h4 className="font-semibold flex items-center gap-2 mb-2"><Projector size={18}/>{month.projectStructure.title}</h4>
                                                <p className="text-foreground/80 italic mb-4">{month.projectStructure.description}</p>
                                                <div className="space-y-4">
                                                    <Card className="bg-background">
                                                        <CardHeader>
                                                            <CardTitle className="text-lg">{month.projectStructure.project1.title}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="text-sm space-y-2">
                                                            <p><strong>Duration:</strong> {month.projectStructure.project1.duration}</p>
                                                            <p><strong>Nature:</strong> {month.projectStructure.project1.nature}</p>
                                                            <p><strong>Scope:</strong> {month.projectStructure.project1.scope}</p>
                                                            <p><strong>Purpose:</strong> {month.projectStructure.project1.purpose}</p>
                                                        </CardContent>
                                                    </Card>
                                                    <Card className="bg-background">
                                                        <CardHeader>
                                                            <CardTitle className="text-lg">{month.projectStructure.project2.title}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="text-sm space-y-2">
                                                            <p>{month.projectStructure.project2.description}</p>
                                                        </CardContent>
                                                    </Card>
                                                    <div className="p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-r-lg">
                                                        <h5 className="font-semibold">Important Clarification</h5>
                                                        <p className="text-sm">{month.projectStructure.clarification}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {month.evaluation && month.evaluation.title && (
                                            <div>
                                                <h4 className="font-semibold flex items-center gap-2 mb-2"><Award size={18}/>{month.evaluation.title}</h4>
                                                <p className="text-foreground/80">{month.evaluation.description}</p>
                                            </div>
                                        )}

                                        {month.extensionNote && (
                                            <div className="p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 rounded-r-lg text-sm">
                                                <p>{month.extensionNote}</p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                             ))}
                        </div>

                        <Separator/>
                        
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Users size={24}/>Community &amp; Engagement Sessions</CardTitle>
                                <CardDescription>Additional 6 Special Sessions (Across 3 Months)</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>These sessions are designed for bonding, reflection, and growth. Topics include fun interactive activities, knowledge sharing with mentors, “Tell Us About Yourself” sessions, personal journeys &amp; challenges, future goals and career plans, open discussions and inspiration talks.</p>
                            </CardContent>
                        </Card>
                        
                        <Separator/>

                        <Card className="shadow-lg bg-green-50 border-green-200">
                             <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Sparkles size={24}/>End of Program Outcomes</CardTitle>
                            </CardHeader>
                             <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-green-800 font-medium">
                                    <li>Completion of structured learning journey</li>
                                    <li>Hands-on project experience</li>
                                    <li>Portfolio-ready work</li>
                                    <li>Certificates and recognition</li>
                                    <li>Strong community connections</li>
                                    <li>Clarity on next career or growth steps</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Separator/>
                        
                        <div>
                             <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl flex items-center gap-3"><Disc size={24}/>Soft Skills &amp; Interview Preparation (Program-Wide Policy)</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <Badge>Mandatory Foundation for All</Badge>
                                        <p className="mt-2">The Emotional, Personal &amp; Soft Skills Growth track is a compulsory core foundation for all Sangini Udaan : EmpowerFly participants, regardless of their primary learning track. This ensures every participant develops professional communication, confidence and leadership presence, emotional intelligence, and career and interview readiness.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold flex items-center gap-2"><Mic size={18}/>Interview Preparation — Included for All Participants</h4>
                                        <p className="mt-2">Interview preparation is fully integrated within the Soft Skills track and is mandatory for all participants, including those in tech, business, creative, non-tech, and all-in-one tracks. Coverage includes resume and profile guidance, interview communication skills, HR and behavioral interview practice, confidence building, and professional mindset.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold flex items-center gap-2"><Heart size={18}/>Track Enrollment Clarification</h4>
                                        <ul className="list-disc list-inside space-y-2 mt-2">
                                            <li>Every participant must complete the Soft Skills &amp; Interview Preparation foundation.</li>
                                            <li>Participants who want deep, specialized focus on emotional growth, leadership, communication, and interview mastery may choose “Emotional, Personal &amp; Soft Skills Growth” as their primary track.</li>
                                            <li>Participants who select other tracks will complete soft skills and interview preparation as a mandatory shared foundation, alongside their main track.</li>
                                        </ul>
                                    </div>
                                    <p className="font-semibold text-primary p-4 bg-primary/10 rounded-lg">Clear Participant Understanding Statement: Soft skills and interview preparation are compulsory for all Sangini Udaan : EmpowerFly participants. Learners seeking advanced depth in emotional intelligence, leadership, communication, and career readiness may choose the Emotional, Personal &amp; Soft Skills Growth track as their primary specialization.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
