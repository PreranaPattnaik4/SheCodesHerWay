
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, UserCheck, HeartHandshake, Rocket, TrendingUp, CheckCircle, Lock, Info, Goal, Bot, BrainCircuit } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';

const SectionCard = ({ icon, title, description, children, badgeText }: { icon: React.ElementType, title: string, description?: string, children: React.ReactNode, badgeText?: string }) => (
    <Card className="shadow-lg">
        <CardHeader>
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <icon className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                        {description && <CardDescription className="mt-1">{description}</CardDescription>}
                    </div>
                </div>
                {badgeText && <Badge variant="secondary">{badgeText}</Badge>}
            </div>
        </CardHeader>
        <CardContent className="prose prose-stone dark:prose-invert max-w-none text-foreground/80">
            {children}
        </CardContent>
    </Card>
);

export default function ImpactEcosystemPage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="relative bg-secondary py-16 md:py-24">
                    <Image
                        src="https://i.postimg.cc/SNChpq4n/Brown-Neutral-Minimalist-Free-Download-Mockup-Banner.png"
                        alt="Impact and Ecosystem banner"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="container relative mx-auto px-4 text-center">
                        <Rocket className="mx-auto h-12 w-12 text-primary" />
                        <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">Impact & Ecosystem</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                            SheCodesHerWay: Team Structure, Program Capacity & Annual Impact Framework (Pre-Seed Stage | Final Version)
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-12">
                        
                        <SectionCard icon={Info} title="1. Organizational Structure Overview">
                            <p>SheCodesHerWay is a women-led, mission-driven startup operating at a pre-seed and pilot execution stage. Our organizational structure is intentionally designed to balance:</p>
                            <ul>
                                <li>Impact at scale</li>
                                <li>Operational sustainability</li>
                                <li>High-quality learning experiences</li>
                                <li>Long-term ecosystem building</li>
                            </ul>
                            <p>This document outlines the final structure of our Core Team, Contributors, Mentors, and Program Capacity for one operational year.</p>
                        </SectionCard>

                        <Separator />

                        <SectionCard icon={Users} title="2. Core Team Members" badgeText="4–6 Members">
                            <h4>Role of the Core Team</h4>
                            <p>Core Team Members are the strategic owners and long-term builders of SheCodesHerWay. They are responsible for:</p>
                            <ul>
                                <li>Vision and decision-making</li>
                                <li>Platform and program ownership</li>
                                <li>Strategic partnerships</li>
                                <li>Long-term growth and sustainability</li>
                            </ul>
                            <h4>Key Characteristics</h4>
                             <ul>
                                <li>Stable throughout the year</li>
                                <li>Actively involved in planning and execution</li>
                                <li>Represent the startup publicly</li>
                                <li>Hold accountability for outcomes</li>
                            </ul>
                            <p className="font-semibold text-primary border-l-4 border-primary pl-4">The Core Team size remains fixed and does not scale with program enrollment.</p>
                        </SectionCard>
                        
                        <Separator />

                        <SectionCard icon={UserCheck} title="3. Early Core Contributors" badgeText="~150 Annually">
                             <h4>Contributor Model</h4>
                            <p>SheCodesHerWay follows a rotational contributor model. Each program cycle is supported by ~50 Early Core Contributors. Contributors may continue across cycles or complete their contribution after one cycle. Across 3 program cycles, we collaborate with ~150 contributors annually.</p>
                            <h4>Nature of Contribution</h4>
                             <ul>
                                <li>Voluntary, non-employment collaboration</li>
                                <li>Learning-driven and experience-oriented</li>
                                <li>Time-bound (3–6 months)</li>
                                <li>Execution and support focused</li>
                            </ul>
                            <h4>Contributor Focus Areas</h4>
                            <ul>
                                <li>Community & program support</li>
                                <li>Content and documentation</li>
                                <li>Design, media, and visuals</li>
                                <li>Tech, no-code, and AI support</li>
                                <li>Marketing, outreach, and engagement</li>
                            </ul>
                             <p className="font-semibold text-primary border-l-4 border-primary pl-4">Contributors support execution but do not hold decision-making authority.</p>
                        </SectionCard>

                        <Separator />

                        <SectionCard icon={HeartHandshake} title="4. Mentors & Advisors" badgeText="30–50 Annually">
                             <h4>Mentor Engagement Model</h4>
                            <p>SheCodesHerWay operates a rotational mentor ecosystem, ensuring diversity of perspectives while respecting mentor availability. Mentors are not active simultaneously.</p>
                            <p><strong>Mentor Distribution Per Program Cycle:</strong> 10–15 mentors per cycle, across 3 program cycles per year, resulting in 30–45 mentors annually (with buffer capacity up to 50).</p>
                             <h4>Mentor Categories</h4>
                            <ol>
                                <li><strong>Primary Mentors (High-Engagement):</strong> 15–20 per year (Live sessions, office hours, project guidance).</li>
                                <li><strong>Guest Mentors / Speakers:</strong> 10–20 per year (One-time sessions, career talks, fireside chats).</li>
                                <li><strong>Advisory Mentors:</strong> 5–10 per year (Strategic guidance, quarterly involvement, startup advice).</li>
                            </ol>
                            <p className="font-semibold text-primary border-l-4 border-primary pl-4">Mentors guide and inspire; operational execution remains with the Core Team and Contributors.</p>
                        </SectionCard>
                        
                        <Separator />

                         <SectionCard icon={Rocket} title="5. Program Structure & Enrollment Capacity" badgeText="3 Programs/Year">
                            <p>SheCodesHerWay runs its flagship program in three structured cohorts annually.</p>
                            <p><strong>Program Enrollment Per Cycle:</strong> 150–300 women per program.</p>
                            
                            <h4>Annual Learning Impact</h4>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Program Cycles</TableHead>
                                        <TableHead>Learners</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow><TableCell>Cycle 1</TableCell><TableCell>150–300</TableCell></TableRow>
                                    <TableRow><TableCell>Cycle 2</TableCell><TableCell>150–300</TableCell></TableRow>
                                    <TableRow><TableCell>Cycle 3</TableCell><TableCell>150–300</TableCell></TableRow>
                                    <TableRow className="font-bold bg-muted/50"><TableCell>Total Annual Learners</TableCell><TableCell>~450–900 women</TableCell></TableRow>
                                </TableBody>
                            </Table>
                            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-r-lg">
                                <h5 className="font-semibold">Public Communication:</h5>
                                <p className="text-sm">“Nearly 1,000 women empowered annually through SheCodesHerWay programs.” This framing is honest, credible, and mission-aligned.</p>
                            </div>
                        </SectionCard>

                        <Separator/>
                        
                        <SectionCard icon={TrendingUp} title="6. Support & Sustainability Ratios">
                            <p>To maintain quality and prevent burnout, SheCodesHerWay follows healthy support ratios:</p>
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Role</TableHead>
                                        <TableHead>Approximate Ratio</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow><TableCell>1 Core Team Member</TableCell><TableCell>25–50 learners</TableCell></TableRow>
                                    <TableRow><TableCell>1 Contributor</TableCell><TableCell>5–6 learners</TableCell></TableRow>
                                    <TableRow><TableCell>Mentors</TableCell><TableCell>Strategic & group guidance (not per learner)</TableCell></TableRow>
                                </TableBody>
                            </Table>
                            <p className="mt-4">This ensures: a personalized support feel, scalable systems, and consistent program quality.</p>
                        </SectionCard>
                        
                         <Separator/>
                        
                        <SectionCard icon={Bot} title="7. AI Coaching & 24/7 Support">
                            <h4>AI Coaching with EmpowerFly Assistant</h4>
                            <p>EmpowerFly Assistant is SheCodesHerWay’s AI-powered coaching companion, designed to support learners anytime, anywhere.</p>
                            <p>While mentors and contributors guide learners through structured sessions, EmpowerFly Assistant fills the gaps between sessions, ensuring continuous momentum and confidence.</p>
                            
                            <h4 className="mt-4">🌟 What EmpowerFly Assistant Supports</h4>
                            <ul>
                                <li>24/7 learning guidance and doubt clarification</li>
                                <li>Career and confidence coaching prompts</li>
                                <li>Program navigation and next-step suggestions</li>
                                <li>Reflection, motivation, and progress check-ins</li>
                                <li>Safe space to ask questions—without hesitation</li>
                            </ul>
                            <p className="font-semibold text-primary border-l-4 border-primary pl-4 mt-4">EmpowerFly Assistant complements human mentors; it does not replace them.</p>

                            <h4 className="mt-6">🔁 How AI Coaching Fits Into the Ecosystem</h4>
                             <h5 className="mt-4">🧩 Support Stack (Human + AI)</h5>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Support Layer</TableHead>
                                        <TableHead>Role</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow><TableCell>Core Team</TableCell><TableCell>Strategy, program ownership</TableCell></TableRow>
                                    <TableRow><TableCell>Contributors</TableCell><TableCell>Day-to-day guidance & support</TableCell></TableRow>
                                    <TableRow><TableCell>Mentors</TableCell><TableCell>Expertise, inspiration, direction</TableCell></TableRow>
                                    <TableRow><TableCell>EmpowerFly Assistant (AI)</TableCell><TableCell>24/7 coaching & continuous support</TableCell></TableRow>
                                </TableBody>
                            </Table>
                            <p className="mt-4">This hybrid model ensures:</p>
                            <ul>
                                <li>No learner is stuck waiting</li>
                                <li>Support scales without burnout</li>
                                <li>Every learner feels guided—even outside sessions</li>
                            </ul>

                             <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-r-lg">
                                <h5 className="font-semibold flex items-center gap-2"><BrainCircuit size={20}/> Founder-Ready Explanation (Use Anywhere)</h5>
                                <blockquote className="border-l-0 pl-0 italic mt-2">“Our programs are supported by a hybrid ecosystem—human mentors, contributors, and our AI-powered EmpowerFly Assistant—ensuring learners receive guidance not just during sessions, but 24/7.”</blockquote>
                                <p className="mt-2 text-sm">This sounds: ✔ Thoughtful ✔ Scalable ✔ AI-responsible ✔ Future-ready</p>
                            </div>
                        </SectionCard>
                        
                        <Separator/>
                        
                         <SectionCard icon={CheckCircle} title="8. One-Year Impact Summary (Final)">
                             <h4>Annual Targets</h4>
                            <ul>
                                <li><strong>Core Team Members:</strong> 4–6</li>
                                <li><strong>Early Core Contributors:</strong> 150 per year</li>
                                <li><strong>Mentors & Advisors:</strong> 30–50 per year</li>
                                <li><strong>Programs Conducted:</strong> 3 per year</li>
                                <li><strong>Women Learners Impacted:</strong> ~1,000 annually</li>
                            </ul>
                        </SectionCard>

                         <Separator/>
                        
                        <SectionCard icon={Goal} title="9. Founder Statement (Official Use)">
                            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-foreground/90">
                                “SheCodesHerWay is intentionally designed for sustainable impact. We run three structured program cohorts each year, supported by a stable core team, rotating contributors, and a diverse mentor ecosystem. This model allows us to empower nearly 1,000 women annually while maintaining clarity, quality, and long-term vision.”
                            </blockquote>
                        </SectionCard>
                        
                        <Card className="bg-destructive/10 border-destructive/20 shadow-lg">
                            <CardHeader className="flex flex-row items-center gap-4">
                               <Lock className="h-6 w-6 text-destructive" />
                               <CardTitle className="text-xl text-destructive">Status: FINAL & LOCKED</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside text-destructive-foreground">
                                    <li>Founder-approved</li>
                                    <li>Scalable</li>
                                    <li>Investor-safe</li>
                                    <li>Ecosystem-ready</li>
                                </ul>
                            </CardContent>
                        </Card>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
