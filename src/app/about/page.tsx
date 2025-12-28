
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { brand } from '@/lib/brand';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Award, Check, FileText, Github, Heart, Instagram, Linkedin, Star, Twitter, Users, Youtube, Zap, HeartHandshake, UserPlus, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import CoreActivities from '@/components/home/core-activities';
import Roadmap from '@/components/home/roadmap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import LogoIcon from '@/components/logo-icon';
import Logo from '@/components/logo';

const coreValues = [
    { value: "Empowerment", meaning: "Helping women find their voice and independence" },
    { value: "Innovation", meaning: "Merging technology with creativity and purpose" },
    { value: "Community", meaning: "Building sisterhood through support and shared growth" },
    { value: "Inclusivity", meaning: "Every woman is welcome, regardless of background" },
    { value: "Courage", meaning: "Encouraging women to dream, lead, and take flight" },
]

const teamMembers = [
    {
        name: brand.founder.name,
        role: "Head of Platform Development",
        description: "Sole developer responsible for platform architecture, full-stack development, and AI integration.",
        image: PlaceHolderImages.find((p) => p.id === 'founder-portrait'),
        socials: [
            { href: "https://www.linkedin.com/in/prerana-pattnaik/", icon: Linkedin },
            { href: "https://medium.com/@preranakailashpattnaik", icon: FileText },
            { href: "https://x.com/preranakailash4", icon: Twitter },
        ]
    },
    {
        name: brand.founder.name,
        role: "Program Head – Sangini Udaan (EmpowerFly)",
        description: "Leads the vision, curriculum, and execution of the flagship Sangini Udaan program, ensuring it aligns with the mission to empower women.",
        image: PlaceHolderImages.find((p) => p.id === 'founder-portrait'),
        socials: [
            { href: "https://www.linkedin.com/in/prerana-pattnaik/", icon: Linkedin },
            { href: "https://medium.com/@preranakailashpattnaik", icon: FileText },
            { href: "https://x.com/preranakailash4", icon: Twitter },
        ]
    },
    {
        name: "Hiring Soon",
        role: "Operations & Program Coordinator",
        description: "Will manage program logistics, coordinate cohorts, and ensure a seamless learning experience for all members.",
        image: PlaceHolderImages.find((p) => p.id === 'team-member-1'),
        hiringSoon: true,
    },
    {
        name: "Hiring Soon",
        role: "Community & Engagement Lead",
        description: "Will foster a vibrant, supportive community, manage forums, and organize engaging events for our members.",
        image: PlaceHolderImages.find((p) => p.id === 'team-member-3'),
        hiringSoon: true,
    },
    {
        name: "Hiring Soon",
        role: "Growth & Marketing Strategist",
        description: "Will drive our growth, manage marketing campaigns, and build strategic partnerships to expand our reach.",
        image: PlaceHolderImages.find((p) => p.id === 'team-member-4'),
        hiringSoon: true,
    },
    {
        name: "Hiring Soon",
        role: "Social Media & Digital Presence Manager",
        description: "Will craft our digital voice, manage social channels, and create compelling content to grow our online presence.",
        image: PlaceHolderImages.find((p) => p.id === 'team-member-5'),
        hiringSoon: true,
    },
    {
        name: "Hiring Soon",
        role: "Graphics Designer",
        description: "Creates visual assets including platform graphics, banners, social media creatives, and brand materials.",
        image: PlaceHolderImages.find((p) => p.id === 'team-member-6'),
        hiringSoon: true,
    },
    {
        name: "Hiring Soon",
        role: "Video Editor & Motion Designer",
        description: "Edits promotional videos, reels, program explainers, and storytelling content for digital platforms.",
        image: PlaceHolderImages.find((p) => p.id === 'team-member-7'),
        hiringSoon: true,
    },
    {
        name: "Hiring Soon",
        role: "User Support & Community Care Lead",
        description: "Will assist users, answer inquiries, and ensure a positive and supportive community experience for all members.",
        image: PlaceHolderImages.find((p) => p.id === 'team-member-8'),
        hiringSoon: true,
    }
];


export default function AboutPage() {
    const aboutHeroImage = PlaceHolderImages.find((p) => p.id === 'about-hero-team');
    const image1 = PlaceHolderImages.find((p) => p.id === 'about-program-1');
    const image2 = PlaceHolderImages.find((p) => p.id === 'about-program-2');
    const founderImage = PlaceHolderImages.find((p) => p.id === 'founder-portrait');

    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-primary/10 py-12 flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                            {/* Card Header */}
                            <div className="flex items-center justify-between p-4 border-b">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-green-400"></span>
                                </div>
                                <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-foreground/70">
                                    <Link href="/" className="hover:text-primary">Solutions</Link>
                                    <Link href="/about" className="text-primary font-semibold relative">
                                        About Us
                                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
                                    </Link>
                                    <Link href="/contact" className="hover:text-primary">Contact</Link>
                                </div>
                                <div className="w-16"></div>
                            </div>
                            
                            {/* Card Content */}
                            <div className="p-8 md:p-12">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="relative">
                                        <h1 className="font-headline text-8xl md:text-9xl font-bold text-foreground">
                                            About
                                            <br />
                                            Us
                                        </h1>
                                        <div className="absolute top-1/2 -right-4 w-2/3 h-1/2 bg-primary/10 -z-0 blur-3xl"></div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-[32rem] h-[32rem]">
                                            <Image
                                                src="https://i.postimg.cc/VLnm9Pvt/Generated_Image_November_05_2025_8_01AM_Copy.png"
                                                alt="SheCodesHerWay logo"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                 <div className="mt-8">
                                    <div className="text-2xl sm:text-4xl font-bold text-foreground/80 break-words">{brand.name}</div>
                                    <p className="font-headline text-lg text-foreground/80 mt-2">{brand.mission}</p>
                                    <p className="text-lg text-foreground mt-4">
                                        SheCodesHerWay is officially stepping into a new chapter as a purpose-driven, women-led empowerment platform. Built to inspire, uplift, and guide women, the platform supports them in learning, leading, and rising—together.
                                    </p>
                                     <div className="mt-6 flex items-center gap-4">
                                        <Link href="https://www.linkedin.com/company/shecodesherway/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={24}/></Link>
                                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary"><Youtube size={24}/></Link>
                                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram size={24}/></Link>
                                        <Link href={`mailto:${brand.secondaryEmail}`} aria-label="Email" className="text-muted-foreground hover:text-primary"><Mail size={24}/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        <section className="max-w-4xl mx-auto">
                            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Our Purpose</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-6 text-center text-foreground/80">
                                <p>
                                    SheCodesHerWay is a women-led empowerment startup founded by {brand.founder.name} with a clear vision: to help women build their path, lead their way, and leave their mark. It is more than a platform—it is a movement, a community, and a guiding light for women who aspire to grow in technology, creativity, entrepreneurship, leadership, and emotional strength.
                                </p>
                                <p className="font-semibold text-foreground/90">
                                    Every woman deserves the tools, confidence, and support to rise with courage. SheCodesHerWay was created to provide exactly that—a safe, supportive, and inspiring ecosystem where women can learn, evolve, and soar beyond limits.
                                </p>
                            </div>
                        </section>

                        <Separator />

                        <section className="max-w-4xl mx-auto">
                            <div className="text-center">
                               <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Mission and Vision</h2>
                            </div>
                            <div className="mt-8 grid gap-8 md:grid-cols-2">
                                <Card className="shadow-lg bg-white">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-3xl">Mission</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-foreground/80">To empower women with digital learning, mentorship, leadership development, and emotional strength, while building a global community that celebrates creativity, collaboration, and courage.</p>
                                    </CardContent>
                                </Card>
                                <Card className="shadow-lg bg-white">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-3xl">Vision</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-foreground/80">To create a world where every woman has the resources, the opportunities, and the confidence to step into her fullest potential.</p>
                                    </CardContent>
                                </Card>
                            </div>
                             <p className="mt-8 text-center font-headline text-xl text-primary">"When one woman rises, she inspires thousands more to rise with her."</p>
                        </section>
                        
                        <Separator />

                        <section className="max-w-4xl mx-auto">
                            <div className="text-center">
                                <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Flagship Program: {brand.programName}</h2>
                                <p className="mt-4 text-2xl text-primary italic">“Empower Her to Fly Beyond Limits.”</p>
                                <p className="mt-6 text-lg text-foreground/80">
                                    Sangini Udaan : EmpowerFly is the heart of SheCodesHerWay—a guided mentorship and growth journey created to help women build skills, confidence, and clarity across technology, creativity, business, and leadership. This is more than a learning experience; it is a women-led, supportive journey where growth is intentional, guidance is genuine, and every woman is encouraged to move forward at her own pace.
                                </p>
                                <Button asChild size="lg" className="mt-8">
                                    <Link href="/sangini-udaan">Learn More About the Program</Link>
                                </Button>
                            </div>
                        </section>

                        <Separator />
                        
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative h-[450px]">
                                {founderImage && (
                                    <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-2xl">
                                    <Image
                                        src={founderImage.imageUrl}
                                        alt={founderImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={founderImage.imageHint}
                                    />
                                    </div>
                                )}
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
                                    <h2 className="font-headline text-3xl font-bold">Our Founder</h2>
                                    <p className="mt-2 text-xl font-semibold text-primary">{brand.founder.name}</p>
                                    <p className='italic text-muted-foreground'>Founder & Head of Platform Development | SheCodesHerWay</p>
                                    <p className="mt-4 text-foreground/80">A visionary committed to building a world where women can rise with confidence. She believes in equal opportunities, creativity, innovation, emotional empowerment, and community-driven learning. Her leadership blends compassion, courage, and creativity—the true essence of SheCodesHerWay.</p>
                                    <div className="mt-4 flex items-center gap-4">
                                        <Link href="https://www.linkedin.com/in/prerana-pattnaik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={20}/></Link>
                                        <Link href="https://medium.com/@preranakailashpattnaik" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-muted-foreground hover:text-primary"><FileText size={20}/></Link>
                                        <Link href="https://x.com/preranakailash4" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20}/></Link>
                                    </div>
                                    <p className="mt-4 text-foreground/80 font-semibold italic">Note of Gratitude: It takes a village to build a vision. This platform is a result of the efforts of our incredible early team members, mentors, and community voices who believed in this idea from day one. Their passion and dedication are the foundation of SheCodesHerWay.</p>
                                </div>
                            </div>
                        </section>

                        <Separator />

                        <section>
                            <div className="text-center mb-12">
                                <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Core Team</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {teamMembers.map((member, index) => (
                                    <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg">
                                        {member.image && (
                                            <Avatar className="w-32 h-32 border-4 border-primary/20">
                                                <AvatarImage src={member.image.imageUrl} alt={member.name} />
                                                <AvatarFallback>
                                                    {member.hiringSoon ? <UserPlus/> : member.name.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                        )}
                                        <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                                        <p className="text-primary font-semibold">{member.role}</p>
                                        {member.hiringSoon ? (
                                            <Badge variant="secondary" className="mt-2">Hiring Soon</Badge>
                                        ) : (
                                            <p className="mt-2 text-foreground/80 text-sm flex-grow">{member.description}</p>
                                        )}
                                        {member.socials && (
                                            <div className="mt-4 flex items-center gap-4">
                                                {member.socials.map((social, i) => (
                                                    <Link key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.icon.displayName} className="text-muted-foreground hover:text-primary">
                                                        <social.icon size={20}/>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                         {member.hiringSoon && (
                                            <Button size="sm" className="mt-4" asChild>
                                                <Link href="/careers">Learn More</Link>
                                            </Button>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        </section>
                        
                        <Separator />
                        
                        <section className="max-w-4xl mx-auto">
                           <Card className="bg-accent/20 border-accent/50 shadow-lg">
                                <CardHeader className="text-center">
                                    <CardTitle className="font-headline text-2xl md:text-3xl">
                                        Join SheCodesHerWay – Core Team Collaboration!
                                    </CardTitle>
                                    <CardContent className="text-lg text-accent-foreground/90 pt-4">
                                        We’re inviting passionate, purpose-driven individuals to collaborate with us at SheCodesHerWay, a women-led, mission-driven startup (pre-seed stage).
                                    </CardContent>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center mb-6">
                                        <h3 className="font-semibold text-xl text-primary flex items-center justify-center gap-2"><Zap size={20}/> What’s in it for you:</h3>
                                    </div>
                                    <ul className="space-y-3 max-w-2xl mx-auto text-foreground/80">
                                        <li className="flex items-start gap-3">
                                            <Users size={20} className="text-primary mt-1"/>
                                            <div><span className="font-bold">Participation Recognition:</span> Receive a Collaboration Template at joining.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Award size={20} className="text-primary mt-1"/>
                                            <div><span className="font-bold">Certificates:</span> 3-month Diamond & 6-month Platinum tiers for dedicated contributors.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Linkedin size={20} className="text-primary mt-1"/>
                                            <div><span className="font-bold">Career Visibility:</span> LinkedIn experience guidance and platform recognition.</div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Star size={20} className="text-primary mt-1"/>
                                            <div><span className="font-bold">Top Contributor Spotlight:</span> Exceptional contributors recognized at the top in every field.</div>
                                        </li>
                                    </ul>
                                    <div className="mt-8 text-center bg-background/50 p-4 rounded-lg">
                                        <p className="font-semibold text-lg">📝 Flexible, experience-driven collaboration – learn, contribute, and grow in a real startup environment.</p>
                                        <p className="text-sm mt-2"><span className="font-bold">⚖️ Important:</span> This is voluntary, unpaid, and non-employment collaboration, designed for impact, learning, and skill-building.</p>
                                        <Button asChild variant="link" className="mt-2">
                                            <Link href="/collaboration-policy">
                                                <FileText className="mr-2"/> Read the full Collaboration Guidelines here
                                            </Link>
                                        </Button>
                                    </div>
                                    <p className="text-center mt-8 font-semibold text-lg text-primary flex items-center justify-center gap-2">
                                        Let’s build, grow, and empower together! <Heart size={20} />
                                    </p>
                                </CardContent>
                            </Card>
                        </section>
                        
                        <Separator/>

                        <section className="max-w-4xl mx-auto text-center">
                            <h2 className="font-headline text-3xl font-bold md:text-4xl">Join the Movement</h2>
                            <p className="mt-4 text-lg text-foreground/80">
                                SheCodesHerWay isn’t just a startup — it’s a movement of women who dare to dream, build, and rise together. Whether you want to learn a new skill, start your career, or launch your own venture, we’re here to guide, mentor, and celebrate your journey.
                            </p>
                             <Button asChild size="lg" className="mt-8">
                                <Link href="/apply">Join Us - Let's Build Your Path</Link>
                            </Button>
                        </section>

                        <Separator />
                        
                        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-xl font-bold font-headline py-4">Our Inclusive Approach</AccordionTrigger>
                                <AccordionContent>
                                    <section className="bg-white py-10">
                                        <Card className="max-w-3xl mx-auto shadow-lg bg-accent/20">
                                            <CardHeader>
                                                <CardTitle>Inclusive Participation Policy</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-lg text-accent-foreground/90">
                                                <p>SheCodesHerWay welcomes both women and men to join us as Core Team Members, Early Core Contributors, and Mentors, contributing their skills, experience, and guidance to help build and grow the platform.</p>
                                                <p className="mt-4">However, our Women Empowerment Program — Sangini Udaan : EmpowerFly — is exclusively designed for women, and only women are eligible to enroll as participants in this program.</p>
                                                <p className="mt-4">As the platform evolves, we will be introducing Hackathons, Collaborative Projects, Community Events, and other platform activities that will be accessible to all genders, fostering an inclusive and collaborative learning ecosystem.</p>
                                            </CardContent>
                                        </Card>
                                    </section>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-xl font-bold font-headline py-4">Our Core Values</AccordionTrigger>
                                <AccordionContent>
                                     <section className="py-10">
                                        <Card className="max-w-2xl mx-auto shadow-lg bg-white">
                                            <CardContent className="pt-6">
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                        <TableHead className="w-1/3">Value</TableHead>
                                                        <TableHead>Meaning</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {coreValues.map((item) => (
                                                        <TableRow key={item.value}>
                                                            <TableCell className="font-medium">{item.value}</TableCell>
                                                            <TableCell>{item.meaning}</TableCell>
                                                        </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </CardContent>
                                        </Card>
                                    </section>
                                </AccordionContent>
                            </AccordionItem>

                             <AccordionItem value="item-3">
                                <AccordionTrigger className="text-xl font-bold font-headline py-4">Core Activities & Future Roadmap</AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start py-10">
                                        <CoreActivities />
                                        <Roadmap />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
