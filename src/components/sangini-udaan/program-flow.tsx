'use client';

import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    const [lineHeight, setLineHeight] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const { top, height } = timelineRef.current.getBoundingClientRect();
                const screenHeight = window.innerHeight;

                // Start animating when the top of the section is a bit into the viewport
                const start = Math.max(0, screenHeight - top);
                const scrollableHeight = height + screenHeight;
                
                const progress = Math.min(1, start / scrollableHeight);
                setLineHeight(progress * height);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="bg-background py-20 px-4 rounded-2xl">
            <div className="container mx-auto" ref={timelineRef}>
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl font-bold text-foreground">
                        🚀 Flagship Program: Sangini Udaan – Women Empowerment Initiative
                    </h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                        Sangini Udaan is the flagship program of SheCodesHerWay. It is a transformative women empowerment journey that helps women
                        discover confidence, leadership, technical skills, creativity,
                        and independence in the digital era.
                    </p>
                </div>

                <div className="relative">
                    {/* The vertical background line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
                    {/* The animated vertical line */}
                    <div 
                        className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-primary hidden md:block"
                        style={{ height: `${lineHeight}px` }}
                        aria-hidden="true"
                    ></div>

                    <div className="space-y-12 md:space-y-0">
                        {timelineContent.map((item, index) => (
                            <div key={index} className="relative flex items-center md:items-start flex-col md:flex-row">
                                <div className="md:hidden absolute left-0 h-full w-0.5 bg-border" aria-hidden="true"></div>
                                <div className="md:w-1/2 flex justify-start md:justify-end md:pr-8 order-1 md:order-none">
                                    {index % 2 === 0 && (
                                         <div className="w-full md:max-w-md p-6 bg-card border rounded-lg shadow-lg">
                                            <h3 className="font-headline text-2xl text-foreground">{item.title}</h3>
                                            <p className="mt-2 text-foreground/80">{item.description}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-4 md:translate-y-0 h-8 w-8 rounded-full bg-background flex items-center justify-center border-2 border-primary shadow-md">
                                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                                </div>
                                <div className="md:hidden absolute left-0 -translate-y-4 h-8 w-8 rounded-full bg-background flex items-center justify-center border-2 border-primary shadow-md">
                                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                                </div>

                                <div className="md:w-1/2 flex justify-start pl-8 order-2 mt-8 md:mt-0">
                                   {index % 2 !== 0 && (
                                        <div className="w-full md:max-w-md p-6 bg-card border rounded-lg shadow-lg">
                                            <h3 className="font-headline text-2xl text-foreground">{item.title}</h3>
                                            <p className="mt-2 text-foreground/80">{item.description}</p>
                                        </div>
                                   )}
                                   {/* Mobile-only card */}
                                   <div className="md:hidden w-full max-w-md p-6 bg-card border rounded-lg shadow-lg">
                                        <h3 className="font-headline text-2xl text-foreground">{item.title}</h3>
                                        <p className="mt-2 text-foreground/80">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-20">
                     <p className="font-headline text-2xl text-primary italic max-w-3xl mx-auto">
                        “Every woman who joins Sangini Udaan embarks on a journey —
                        from learning and exploration to confidence, leadership, and independence.”
                    </p>
                </div>

                 <div className="mt-16 max-w-3xl mx-auto p-8 bg-muted rounded-lg">
                    <ul className="space-y-3">
                        {optionalPrograms.map((program, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-foreground/90">{program}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
