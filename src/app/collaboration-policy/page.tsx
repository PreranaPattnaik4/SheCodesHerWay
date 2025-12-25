
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Handshake, Clock, Wrench, CheckCircle2, Star, Award, Gem, GraduationCap, Rocket, PartyPopper, ClipboardList, Construction, Lock, Scale, DollarSign, Briefcase, RefreshCw, FileText, Verified, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const SectionCard = ({ icon, title, badgeText, children }: { icon: React.ElementType, title: string, badgeText?: string, children: React.ReactNode }) => (
    <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
                <icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            {badgeText && <Badge variant="secondary" className="ml-auto">{badgeText}</Badge>}
        </CardHeader>
        <CardContent className="prose prose-stone dark:prose-invert max-w-none text-foreground/80">
            {children}
        </CardContent>
    </Card>
);


export default function CollaborationPolicyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold md:text-6xl">Collaboration Policy & Guidelines</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Pre-Seed Startup Stage
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
                
                <SectionCard icon={Sparkles} title="1. COLLABORATION">
                    <h3>About This Collaboration</h3>
                    <p>SheCodesHerWay is a women-led, mission-driven platform currently at pre-seed stage. We invite passionate, purpose-aligned individuals to collaborate in building, shaping, and growing the platform. This collaboration is designed for individuals motivated by impact, learning, shared purpose, and real-world experience, rather than immediate monetary compensation.</p>
                    
                    <h4 className="flex items-center gap-2"><Handshake size={20} /> Nature of Engagement</h4>
                    <ul>
                        <li>Voluntary collaboration – not employment</li>
                        <li>Participants are Collaborators / Contributors, not employees</li>
                        <li>No employer–employee relationship is created</li>
                        <li>“Part-time” refers only to time involvement, not salary</li>
                    </ul>

                    <h4 className="flex items-center gap-2"><Clock size={20} /> Duration of Collaboration</h4>
                     <ul>
                        <li>Initial collaboration period: 6 months</li>
                        <li>After 6 months, contributors may:
                            <ul>
                                <li>Continue for an additional 6 months (optional)</li>
                                <li>Conclude the collaboration</li>
                            </ul>
                        </li>
                        <li>Participation beyond the initial period is optional</li>
                    </ul>

                    <h4 className="flex items-center gap-2"><Wrench size={20} /> Six-Month Collaboration Plan (Initial Phase)</h4>
                    <p><strong>Phase 1 – Orientation & Alignment (Month 1):</strong> Introduction to platform’s vision, mission, and goals. Role clarity & expectation setting. Tool, workflow, and communication overview. Initial task assignments based on skills and interests.</p>
                    <p><strong>Phase 2 – Contribution & Execution (Months 2–4):</strong> Active role-specific tasks. Hands-on contribution to initiatives or projects. Collaboration with founder and other contributors. Skill development through real-world application. Periodic informal feedback and check-ins.</p>
                    <p><strong>Phase 3 – Growth, Review & Closure (Months 5–6):</strong> Increased ownership of tasks or initiatives. Review of contributions and overall participation. Experience reflection and learning outcomes. Collaboration closure or optional continuation discussion. Issuance of Certificate of Contribution.</p>

                    <h4 className="flex items-center gap-2"><CheckCircle2 size={20} /> Evaluation Criteria (Non-Employment)</h4>
                     <ul>
                        <li>Consistency of participation</li>
                        <li>Quality of contributions</li>
                        <li>Communication and collaboration</li>
                        <li>Alignment with platform values</li>
                    </ul>
                    <p>⚠️ <strong>Important:</strong> This six-month plan is not a training program, internship, or employment contract. It is a voluntary, experience-based collaboration framework.</p>

                    <h4 className="flex items-center gap-2"><Star size={20} /> Top Contributor Recognition</h4>
                    <p>Contributors who demonstrate dedicated, consistent, and high-impact contributions will be recognized prominently on the SheCodesHerWay platform. Their names, roles, and achievements will appear at the top of every relevant section, program, or initiative, celebrating their exceptional commitment.</p>
                    <p>💡 This ensures high-performing contributors are visibly celebrated, motivating continued excellence and inspiring the community.</p>

                </SectionCard>

                <Separator />
                
                <SectionCard icon={Award} title="2. WHAT YOU WILL GET / BENEFITS">
                    <h3 className="flex items-center gap-2"><Star size={20} /> Recognition & Visibility</h3>
                    <p>During collaboration, contributors’ names and roles may appear in promotional videos, programs, campaigns, or events (at organization’s discretion). Public acknowledgment titles include "Early Core Contributor" and "Core First Contributor".</p>

                    <h3 className="flex items-center gap-2"><Award size={20} /> Certificates & Participation Recognition</h3>
                    <h4>At Joining – Participation Recognition</h4>
                    <p>Receive a Participation / Collaboration Announcement Template (image/PPT). Optional LinkedIn sharing is encouraged.</p>
                    
                    <h4>Professional Certificate / Recognition Tiers</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>Tier</th>
                                    <th>Duration</th>
                                    <th>Description</th>
                                    <th>Symbol</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Diamond</td>
                                    <td>3 months</td>
                                    <td>Recognizes early commitment, meaningful participation, and high-quality contribution</td>
                                    <td><Gem size={16} /></td>
                                </tr>
                                <tr>
                                    <td>Platinum</td>
                                    <td>6 months</td>
                                    <td>Recognizes full-term achievement, consistent high-level contribution, and significant impact</td>
                                    <td><Award size={16} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                     <p><strong>Notes on Tiers:</strong> Diamond tier recognizes early momentum. Platinum tier symbolizes excellence and high achievement. Selection is at the discretion of the Core Team.</p>

                    <h4 className="flex items-center gap-2"><GraduationCap size={20} /> After 6 Months – Certificate of Contribution</h4>
                    <p>Contributors will receive a Role-Based Certificate based on role, duration, and participation level. Certificates will mention the collaborative nature of the engagement, not employment.</p>

                    <h3 className="flex items-center gap-2"><Rocket size={20} /> Professional & Career Benefits</h3>
                    <p>Add experience to LinkedIn and professional portfolios. Recommended format: Role Title: Early Core Contributor – [Role], Employment Type: Part-time. Description: Voluntary, unpaid, collaboration-based role during pre-seed stage.</p>
                    
                    <h3 className="flex items-center gap-2"><PartyPopper size={20} /> Onboarding Participation Announcement (Optional)</h3>
                    <p>Celebrate joining with the provided template. Add your photo, role, and optionally tag SheCodesHerWay on LinkedIn.</p>
                </SectionCard>

                <Separator />
                
                <SectionCard icon={ClipboardList} title="3. ROLES & RESPONSIBILITIES / WORK PROCESS">
                    <h3 className="flex items-center gap-2"><Construction size={20} /> Roles & Responsibilities</h3>
                    <ul>
                        <li>Contribute responsibly to assigned initiatives.</li>
                        <li>Communicate clearly and professionally.</li>
                        <li>Work with integrity, ownership, and accountability.</li>
                        <li>Uphold mission, values, and ethics of SheCodesHerWay.</li>
                        <li>Flexible hours; contributors manage their own time.</li>
                    </ul>

                    <h3 className="flex items-center gap-2"><Lock size={20} /> Confidentiality & Intellectual Property</h3>
                    <p>Internal discussions, strategies, and materials are confidential. Work created belongs to SheCodesHerWay. Portfolio showcase allowed with prior written permission.</p>

                    <h3 className="flex items-center gap-2"><Scale size={20} /> Code of Conduct</h3>
                    <p>We maintain a safe, inclusive, and respectful environment with zero tolerance for harassment, discrimination, or unethical behavior. Brand misuse is prohibited.</p>
                </SectionCard>

                <Separator />
                
                <SectionCard icon={Scale} title="4. LEGAL TERMS & CONDITIONS">
                    <h3 className="flex items-center gap-2"><DollarSign size={20} /> Compensation & Financial Disclaimer</h3>
                    <p>No salary, stipend, or monetary benefit during the initial 6 months. Collaboration is based on learning and contribution, and participation is unpaid and voluntary.</p>

                    <h3 className="flex items-center gap-2"><Briefcase size={20} /> Future Paid Role Consideration (If Applicable)</h3>
                    <p>After 1 year, contributors may be considered for a paid part-time role, subject to performance evaluation, review of past contributions, a formal interview, and company growth/funding. Paid roles are not guaranteed.</p>

                    <h3 className="flex items-center gap-2"><RefreshCw size={20} /> Flexibility & Exit Policy</h3>
                    <p>Contributors may exit at any time without penalty. The organization may also conclude collaboration with communication. No notice period is required.</p>

                    <h3 className="flex items-center gap-2"><FileText size={20} /> Legal Status Clarification</h3>
                    <p>Collaboration does not create an employer-employee, contractor, or internship relationship. Participation is non-binding and non-contractual.</p>

                    <h3 className="flex items-center gap-2"><Verified size={20} /> Acknowledgment</h3>
                    <p>By participating, contributors confirm they understand the unpaid nature of the engagement, accept the voluntary, non-employment status, and agree to all outlined terms.</p>
                </SectionCard>

                <Separator />
                
                 <SectionCard icon={Heart} title="5. FINAL DISCLAIMER & FOUNDER’S NOTE">
                     <p>Participation is voluntary and non-binding. All recognition, certificates, and announcements are for acknowledgment purposes only. SheCodesHerWay is built on trust, collaboration, and shared purpose. Every contributor plays a meaningful role in empowering women.</p>
                     
                     <h4>Connect With Us</h4>
                     <p>
                        <strong>Website:</strong> <Link href="https://shecodesherways.com" target="_blank" rel="noopener noreferrer">shecodesherways.com</Link><br/>
                        <strong>Email:</strong> <a href="mailto:contact@shecodesherway.com">contact@shecodesherway.com</a><br/>
                        <strong>Instagram:</strong> @shecodesherway<br/>
                        <strong>LinkedIn:</strong> SheCodesHerWay
                     </p>
                </SectionCard>

            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
