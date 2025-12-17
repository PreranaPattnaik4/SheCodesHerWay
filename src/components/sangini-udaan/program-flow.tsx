
import { CheckCircle2 } from "lucide-react";

const timelineContent = [
    {
        title: "Confidence & Leadership Training",
        description: "Workshops focused on building confidence, communication skills, and leadership qualities for personal and professional growth."
    },
    {
        title: "Digital & Career Empowerment",
        description: "Practical sessions on technology, entrepreneurship, digital presence, self-branding, and real-world career readiness."
    },
    {
        title: "Mentorship Circles",
        description: "A guided mentorship network connecting participants with industry experts, women leaders, and peer learners."
    },
    {
        title: "Community Projects",
        description: "Hands-on collaborations where participants apply learning, lead initiatives, and create meaningful community impact."
    },
    {
        title: "Personal Development Pathways",
        description: "Programs covering emotional intelligence, public speaking, storytelling, and creative self-expression."
    }
];

const optionalPrograms = [
    "AI & Tech Learning Programs for beginners",
    "Open-Source Internships with real-world exposure",
    "Creative and Non-Tech Learning Tracks",
    "Inclusive Global Mentorship & Networking Circles"
];

export default function ProgramFlow() {
    return (
        <section className="bg-gradient-to-b from-primary/90 via-primary to-accent/80 py-20 px-4 rounded-2xl shadow-2xl">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl font-bold text-primary-foreground">
                        🚀 Flagship Program: Sangini Udaan – Women Empowerment Initiative
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto">
                        Sangini Udaan is the flagship program of SheCodesHerWay. It is a transformative women empowerment journey that helps women
                        discover confidence, leadership, technical skills, creativity,
                        and independence in the digital era.
                    </p>
                </div>

                <div className="relative">
                    {/* The vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary-foreground/20 hidden md:block" aria-hidden="true"></div>

                    <div className="space-y-12 md:space-y-0">
                        {timelineContent.map((item, index) => (
                            <div key={index} className="relative flex items-center md:items-start flex-col md:flex-row">
                                <div className="md:hidden absolute left-0 h-full w-0.5 bg-primary-foreground/20" aria-hidden="true"></div>
                                <div className="md:w-1/2 flex justify-start md:justify-end md:pr-8 order-1 md:order-none">
                                    {index % 2 === 0 && (
                                         <div className="w-full md:max-w-md p-6 bg-background/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl text-right">
                                            <h3 className="font-headline text-2xl text-primary-foreground">{item.title}</h3>
                                            <p className="mt-2 text-primary-foreground/80">{item.description}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-4 md:translate-y-0 h-8 w-8 rounded-full bg-background/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)] border-2 border-primary-foreground/50">
                                    <div className="h-3 w-3 rounded-full bg-primary-foreground"></div>
                                d_w-8iv>
                                <div className="md:hidden absolute left-0 -translate-y-4 h-8 w-8 rounded-full bg-background/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)] border-2 border-primary-foreground/50">
                                    <div className="h-3 w-3 rounded-full bg-primary-foreground"></div>
                                </div>

                                <div className="md:w-1/2 flex justify-start pl-8 order-2 mt-8 md:mt-0">
                                   {index % 2 !== 0 && (
                                        <div className="w-full md:max-w-md p-6 bg-background/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl">
                                            <h3 className="font-headline text-2xl text-primary-foreground">{item.title}</h3>
                                            <p className="mt-2 text-primary-foreground/80">{item.description}</p>
                                        </div>
                                   )}
                                   {/* Mobile-only card */}
                                   <div className="md:hidden w-full max-w-md p-6 bg-background/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl">
                                        <h3 className="font-headline text-2xl text-primary-foreground">{item.title}</h3>
                                        <p className="mt-2 text-primary-foreground/80">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-20">
                     <p className="font-headline text-2xl text-primary-foreground/90 italic max-w-3xl mx-auto">
                        “Every woman who joins Sangini Udaan embarks on a journey —
                        from learning and exploration to confidence, leadership, and independence.”
                    </p>
                </div>

                 <div className="mt-16 max-w-3xl mx-auto p-8 bg-black/20 rounded-lg">
                    <ul className="space-y-3">
                        {optionalPrograms.map((program, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                                <span className="text-primary-foreground/90">{program}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
