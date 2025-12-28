
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { BookOpen, BrainCircuit, Code, Cpu, Eye, FileText, Heart, Lightbulb, Lock, Pilcrow, Projector, Rocket, Scale, Sparkles, UserCheck, Users, Zap, Bell } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const tracks = [
    {
        title: "Track 1: Complete Sangini Udaan : EmpowerFly Journey",
        subtitle: "All-in-One Empowerment Track",
        focus: "A comprehensive empowerment pathway that brings together technology, AI, entrepreneurship, creativity, leadership, and emotional growth into one unified learning experience.",
        syllabus: [
            "Confidence & Leadership Foundations",
            "Digital Literacy & Productivity Skills",
            "Coding & Technical Fundamentals",
            "AI Literacy & Responsible AI Practices",
            "Entrepreneurship & Business Mindset",
            "Personal Branding & Digital Presence",
            "Creative Content & Digital Expression",
            "Emotional Intelligence & Self-Growth",
            "Real-World Projects & Community Impact",
        ],
        tools: "Google Workspace, Google Firebase, Google Cloud Platform (Fundamentals), Google Colab & NotebookLM, Visual Studio Code, GitHub, Figma, Jupyter Notebook, Google CLI, Low-code & No-code Platforms",
        outcomes: [
            "End-to-end digital confidence",
            "Leadership with technical awareness",
            "Strong multi-domain project portfolio",
            "Career, startup, and independent readiness",
        ]
    },
    {
        title: "Track 2: Women in Tech Journeys",
        subtitle: "Technology & Digital Careers Track",
        focus: "Designed for beginners and aspiring professionals entering the technology, AI, and software ecosystem.",
        syllabus: [
            "Introduction to Technology & Career Paths",
            "Web Development Fundamentals",
            "Programming Logic & Problem Solving",
            "Cloud-Based Application Development",
            "AI Basics & Applied AI Use Cases",
            "Version Control & Open-Source Contribution",
            "Cloud Deployment & Hosting",
            "Internship-Oriented Real-World Projects",
        ],
        tools: "HTML, CSS, JavaScript, Visual Studio Code, GitHub, Google Firebase (Authentication, Firestore, Hosting), Google Cloud Platform Services, Google Colab, Jupyter Notebook & NotebookLM, AI-Assisted Coding Tools",
        outcomes: [
            "Strong technical foundation",
            "Live deployed projects",
            "Open-source exposure",
            "Internship and job readiness",
        ]
    },
    {
        title: "Track 3: Women Aspiring to Start Startups or Businesses",
        subtitle: "Entrepreneurship & Startup Track",
        focus: "Empowers women founders to build startups, small businesses, and personal brands using technology and AI-assisted decision-making.",
        syllabus: [
            "Entrepreneurial Mindset & Leadership",
            "Idea Validation & Problem Identification",
            "Business Model Development",
            "Market Research & Customer Discovery",
            "Branding & Digital Marketing",
            "Financial Planning & Revenue Models",
            "Legal Awareness & Compliance Basics",
            "Pitching, Funding Readiness & Demo Days",
        ],
        tools: "Google Forms, Google Sheets, Google Analytics, Google Workspace, AI Tools for Ideation & Customer Insights, Pitch Deck Tools, Automation & Workflow Platforms",
        outcomes: [
            "Data-driven startup thinking",
            "Clear business roadmap",
            "Funding and pitch readiness",
            "Scalable growth strategies",
        ]
    },
    {
        title: "Track 4: Creative & Content Entrepreneurs",
        subtitle: "Creativity, Media & Digital Expression Track",
        focus: "Supports women creators in expressing ideas, building audiences, and generating income using digital and AI-powered creative tools.",
        syllabus: [
            "Creative Thinking & Storytelling",
            "AI-Assisted Writing & Content Creation",
            "Blogging & Digital Publishing",
            "Book Publishing Fundamentals",
            "Visual Branding & Design",
            "Website Creation & Portfolio Development",
            "Audience Growth & Monetization",
        ],
        tools: "Google Docs with AI Assistance, Canva (AI Design Features), Figma, WordPress, Google Photos & Media Tools, AI Tools for Content Optimization",
        outcomes: [
            "Professional creative portfolio",
            "Strong digital visibility",
            "Monetization readiness",
            "Confidence in creative self-expression",
        ]
    },
    {
        title: "Track 5: Confidence, Leadership & Emotional Intelligence",
        subtitle: "Personal & Soft Skills Growth Track",
        focus: "Focuses on inner growth, communication, emotional intelligence, leadership presence, and resilience—essential for every life and career stage.",
        syllabus: [
            "Self-Awareness & Emotional Intelligence",
            "Confidence & Mindset Building",
            "Communication & Public Speaking",
            "Leadership Skills & Decision Making",
            "Stress Management & Resilience",
            "Teamwork & Conflict Resolution",
            "Personal Goal Setting & Life Planning",
            "Professional Etiquette & Workplace Skills",
        ],
        tools: "Productivity & Planning Platforms, AI-Guided Reflection & Journaling Tools, Digital Habit-Building Systems, Video-Based Communication Practice Tools",
        outcomes: [
            "Emotional resilience",
            "Confident leadership presence",
            "Improved communication skills",
            "Balanced personal and professional growth",
        ]
    },
    {
        title: "Track 6: Non-Tech Users Empowerment",
        subtitle: "Digital Confidence & Career Readiness Track",
        focus: "Designed for non-technical learners seeking digital confidence, leadership skills, creativity, and independence—without learning coding.",
        idealFor: "Students, homemakers, career-return women, educators, social leaders, and first-time digital learners.",
        syllabus: [
            "Digital Literacy & Everyday Tech Skills",
            "AI Basics for Non-Tech Users",
            "Career & Workplace Readiness",
            "Personal Branding & Online Identity",
            "Creativity & Content Basics",
            "Productivity & Life Skills",
            "Emotional Intelligence & Leadership",
            "Real-World Applications & Community Projects",
        ],
        tools: "Google Workspace & Drive, Google Forms, Canva, AI Productivity Tools, Digital Planning & Communication Platforms",
        outcomes: [
            "Strong digital confidence without coding",
            "Career and workplace readiness",
            "Improved leadership and communication",
            "Creative self-branding and independence",
        ]
    }
];

export default function ProgramSyllabusPage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <BookOpen className="mx-auto h-12 w-12 text-primary" />
                        <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">Program Syllabus</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                            A deep dive into the learning tracks of Sangini Udaan : EmpowerFly.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <Card className="text-center bg-accent/20 border-accent/30 shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-3xl">Sangini Udaan : EmpowerFly</CardTitle>
                                <CardDescription className="text-lg text-accent-foreground/90">A Holistic Empowerment Ecosystem for Women</CardDescription>
                            </CardHeader>
                            <CardContent className="text-foreground/80">
                                <p>Sangini Udaan : EmpowerFly is a purpose-driven, multi-track empowerment initiative designed to support women across diverse life stages, backgrounds, and career aspirations. The program integrates digital skills, AI literacy, entrepreneurship, creativity, leadership, emotional intelligence, and ethical growth into clearly structured learning pathways. Participants may choose a focused specialization track or enroll in the complete empowerment journey, depending on their goals, readiness, and interests.</p>
                            </CardContent>
                        </Card>

                        <div>
                            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                                {tracks.map((track, index) => (
                                    <AccordionItem value={`item-${index}`} key={index}>
                                        <AccordionTrigger className="text-left hover:no-underline">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xl font-bold">{track.title}</span>
                                                <span className="text-sm text-primary font-semibold">{track.subtitle}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-4 space-y-6">
                                            <p><strong className="font-semibold">Program Focus:</strong> {track.focus}</p>
                                            {track.idealFor && <p><strong className="font-semibold">Ideal For:</strong> {track.idealFor}</p>}

                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Rocket className="h-5 w-5 text-primary" />Syllabus Overview</h4>
                                                <ul className="list-disc list-inside space-y-1 pl-4 text-foreground/80">
                                                    {track.syllabus.map(item => <li key={item}>{item}</li>)}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Cpu className="h-5 w-5 text-primary" />Technologies, AI & Industry Tools</h4>
                                                <p className="text-foreground/80">{track.tools}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" />Outcomes</h4>
                                                <ul className="list-disc list-inside space-y-1 pl-4 text-foreground/80">
                                                    {track.outcomes.map(item => <li key={item}>{item}</li>)}
                                                </ul>
                                            </div>
                                            <Separator />
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Projector className="h-5 w-5 text-primary" />Build Projects & Solve Real-World Problems</h4>
                                                <p className="text-foreground/80">Participants work on practical, impact-driven projects that address real-world challenges. This hands-on approach strengthens problem-solving skills, teamwork, innovation, and confidence while building a strong project portfolio.</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><UserCheck className="h-5 w-5 text-primary" />Industry Expert Guidance on Your Career Goals</h4>
                                                <p className="text-foreground/80">Direct guidance from industry professionals to help participants identify career paths, set goals, receive feedback, and make informed decisions aligned with their aspirations and strengths.</p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        
                        <Separator />
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-3xl">Vibe Coding, Prompt Writing & Responsible AI</CardTitle>
                                <CardDescription>Program-Wide Core Foundation</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Lightbulb className="h-5 w-5 text-primary"/>What This Means</h3>
                                    <p>Vibe Coding, Prompt Writing & Responsible AI are not separate tracks. They are core foundations integrated across all Sangini Udaan : EmpowerFly programs, adapted to each learner’s journey and background. These foundations are embedded across all tracks. While the depth and application vary, every participant learns how to work confidently, creatively, and ethically with AI.</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2"><Code className="h-5 w-5 text-primary"/>Vibe Coding Explained</h4>
                                        <p>Vibe Coding is an inclusive, human-centered approach to building with technology using: AI-assisted creation, natural language and intuition-driven problem solving, creativity and experimentation, and clear human intent, review, and judgment. This approach enables beginners, non-tech users, creators, and founders to build and experiment without fear of complex coding.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2"><Pilcrow className="h-5 w-5 text-primary"/>Prompt Writing as a Core Life Skill</h4>
                                        <p>Prompt writing is taught as a communication, thinking, and problem-solving skill, not just a technical concept. Participants learn: How AI interprets instructions, writing clear, structured, goal-oriented prompts, context setting and iterative refinement, and using prompts for content, creativity, learning, planning, and building. Human originality, review, and validation remain central throughout.</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-primary"/>Responsible AI Foundation</h4>
                                    <p>Responsible AI is a mandatory foundation across all tracks. Key principles include: human-centered AI usage, transparency and explainability, bias awareness and fairness, data privacy and consent, understanding AI limitations and risks, and accountability and human oversight. Ethical AI practices are applied through real projects and scenarios, not taught only in theory.</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-left hover:no-underline bg-destructive/10 px-4 rounded-md border-destructive/20 border">
                                    <div className="flex items-center gap-3">
                                         <Bell className="h-6 w-6 text-destructive" />
                                        <span className="text-xl font-bold text-destructive">📢 Mandatory Core Curriculum Notice: Vibe Coding, Prompt Writing & Responsible AI</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 space-y-4 border-x border-b border-destructive/20 px-4 rounded-b-md">
                                    <h4 className="font-bold">Important Notice for All Participants</h4>
                                    <p>The Core Curriculum with a primary focus on <strong>Prompt Writing & Responsible AI is mandatory</strong> for all participants, irrespective of the selected track.</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>Technical participants</strong> will complete the full curriculum, including Vibe Coding, Prompt Writing & Responsible AI.</li>
                                        <li><strong>Non-technical participants</strong> will focus on Prompt Writing for non-technical applications, such as content creation, research support, documentation, workflow optimization, and digital productivity, along with Responsible AI practices.</li>
                                    </ul>
                                     <p><strong>Vibe Coding is optional for non-technical participants</strong> and may be skipped upon prior written intimation to the program team.</p>
                                    <p>Participants who do not inform in advance will be required to follow the complete curriculum by default.</p>
                                    <p className="font-semibold">Completion of the applicable mandatory core curriculum is required to continue and progress within the Sangini Udaan : EmpowerFly program.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        
                        <Separator />

                        <div className="text-center space-y-4">
                            <h2 className="font-headline text-3xl">Sangini Udaan : EmpowerFly</h2>
                             <p className="!mt-8 text-xl font-semibold text-primary">"Choose your path. Build with confidence. Lead with purpose. Grow responsibly."</p>
                            <Card className="!mt-8 text-sm text-muted-foreground p-4 bg-muted/50 text-left">
                                <p><strong className="text-foreground font-semibold">Program Assurance & Syllabus Evolution Note:</strong> All AI tools, digital platforms, and learning methodologies used in Sangini Udaan : EmpowerFly align with current industry standards and responsible AI principles. The program emphasizes ethical, inclusive, secure, and future-ready use of technology across all tracks. To stay aligned with evolving industry needs, ethical frameworks, and technological advancements, tools and technologies may be updated periodically. Such updates will be introduced thoughtfully, ensuring minimal disruption to learning outcomes, program values, and participant experience. Syllabus refinements during launch or early rollout phases may occur to better reflect real-world requirements and learner needs, without diluting the program’s core intent of confidence building, skill development, responsible AI awareness, and holistic empowerment.</p>
                            </Card>
                             <p className="!mt-8 text-xl font-semibold text-primary">"Choose your track. Build with confidence. Lead with purpose. Grow responsibly."</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
