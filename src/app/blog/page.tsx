
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { brand } from '@/lib/brand';
import Link from 'next/link';
import { Award, BrainCircuit, Briefcase, CheckCircle, Handshake, Heart, Linkedin, Rocket, Sparkles, Star, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const sanginiUdaanTracks = [
    {
        title: "Complete Sangini Udaan Journey (All-in-One Track)",
        description: "A holistic blend of tech, business, creativity, leadership, and emotional empowerment."
    },
    {
        title: "Women in Tech Path",
        description: "Coding, AI, web development, digital tools, and tech confidence."
    },
    {
        title: "Women in Business Path",
        description: "Entrepreneurship, startup building, branding, and growth strategy."
    },
    {
        title: "Creative & Content Entrepreneurs Path",
        description: "Blogging, storytelling, Canva design, content creation, and publishing."
    },
    {
        title: "Emotional, Personal & Soft Skills Growth Path",
        description: "Confidence, communication, emotional intelligence, and leadership."
    }
];

const impactGoals = [
    "Train 1,000+ women",
    "Build a network of 100+ mentors",
    "Collaborate with 10+ organizations",
    "Grow a community of 5,000+ women"
];

export default function BlogPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                        SheCodesHerWay: Where Women Build Their Path, Lead Their Way, and Leave Their Mark
                    </h1>
                    <p className="mt-4 text-muted-foreground text-lg">Published on: December 26, 2025</p>
                </header>

                <div className="relative w-full h-96 rounded-lg overflow-hidden mb-12 shadow-lg">
                    <Image
                        src="https://i.postimg.cc/1RqPqqfF/Banners3.png"
                        alt="SheCodesHerWay banner"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose lg:prose-xl dark:prose-invert max-w-none mx-auto text-foreground/80 space-y-8">
                    <p className="lead">
                        Every movement begins with a spark — a spark of courage, vision, and hope. SheCodesHerWay was born from such a spark. A dream to create a space where women don’t just learn skills, but rise with confidence. Where they don’t simply follow paths — they build their own.
                    </p>
                    <p>
                        Today, SheCodesHerWay is officially stepping into a bold new chapter as a women-led digital empowerment platform, designed to uplift, guide, and inspire women to learn, lead, and rise together — across India and beyond.
                    </p>
                    <p className="font-semibold text-primary text-2xl text-center">
                        This is more than a platform. It is a movement. It is a community. It is a shared rise.
                    </p>
                    
                    <Separator />

                    <section>
                        <h2 className="font-headline text-3xl flex items-center gap-3"><Sparkles/> Our Core Message</h2>
                        <blockquote className="border-l-4 border-primary pl-4 text-2xl italic font-semibold">
                            Build Your Path. Lead Your Way. Leave Your Mark.
                        </blockquote>
                        <p>This message represents:</p>
                        <ul>
                            <li><strong>Independence</strong> — owning your journey</li>
                            <li><strong>Leadership</strong> — guiding yourself and others</li>
                            <li><strong>Legacy</strong> — creating impact that lasts</li>
                        </ul>
                        <p>Because every woman deserves a space where she can explore, grow, and shine — a place that reminds her of her strength, her voice, and her wings.</p>
                    </section>
                    
                    <Separator />

                    <section>
                        <h2 className="font-headline text-3xl flex items-center gap-3"><Rocket/> {brand.programName} — Our Flagship Program</h2>
                        <p className="text-xl italic text-primary">“{brand.programTagline}”</p>
                        <p>
                            At the heart of SheCodesHerWay lies {brand.programName}, our flagship women-led empowerment journey. It is designed to help women rise with confidence, clarity, and purpose through mentorship, guided learning, community support, and real-world exposure.
                        </p>
                        <p>
                            Whether a woman dreams of a career in tech, wants to build a business, hopes to grow as a creator, or is rediscovering her potential after a career break — Sangini Udaan is her runway to flight.
                        </p>
                        <p className="font-semibold">Because when one woman takes flight, she inspires a thousand more to soar.</p>

                        <Card className="mt-8 bg-accent/30 border-accent/50">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Sangini Udaan : EmpowerFly — Cohort 1</CardTitle>
                                <Badge variant="secondary" className="w-fit">Starting Soon</Badge>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Sangini Udaan: EmpowerFly — Cohort 1 is a supportive, women-led empowerment journey designed to help women rise with confidence and fly beyond limits. Rooted in mentorship, structured learning, and community support, this founding cohort empowers women to develop skills, strengthen self-belief, and move forward at their own pace — on their own terms.
                                </p>
                                <p className="font-semibold mt-4">This is more than a program. It is a shared rise — where women learn together, grow together, and fly beyond limits.</p>
                                <p className="mt-4 flex items-center gap-2"><Heart className="text-primary"/> A very warm welcome to all the participants and mentors joining our founding cohort. We are truly thrilled to have you on this journey of growth, learning, and empowerment. Together, we will build something meaningful, impactful, and lasting. Stay connected for upcoming announcements and follow our journey on social media as we take flight — together.</p>
                            </CardContent>
                        </Card>
                    </section>
                    
                    <Separator />

                     <section>
                        <h3 className="font-headline text-3xl">Choose Your Sangini Udaan Journey</h3>
                        <p>Women can choose from five powerful learning and growth tracks:</p>
                        <div className="grid md:grid-cols-2 gap-4 not-prose">
                            {sanginiUdaanTracks.map(track => (
                                <Card key={track.title}>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{track.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{track.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <p className="mt-4">Each path is designed to meet women where they are — and help them move forward with clarity and confidence.</p>
                    </section>
                    
                    <Separator />
                    
                    <section>
                        <h2 className="font-headline text-3xl flex items-center gap-3"><Users /> The Sangini Network — Our Community</h2>
                        <p>Every woman who joins SheCodesHerWay becomes a Sangini — a friend, a sister, a changemaker. Our community is built on:</p>
                        <ul>
                            <li>Women supporting women</li>
                            <li>Shared learning and mentorship</li>
                            <li>Collaboration over competition</li>
                            <li>Growth that is celebrated together</li>
                        </ul>
                        <p className="font-semibold">Empowerment is never a solo flight — it is a shared rise.</p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="font-headline text-3xl flex items-center gap-3"><Briefcase /> What We Do at SheCodesHerWay</h2>
                        <p>SheCodesHerWay offers a complete digital ecosystem to support women from learning → leadership → launch.</p>
                        <h3 className="font-semibold">Key Platform Features:</h3>
                        <ul className="list-disc list-inside">
                            <li>{brand.programName} Program</li>
                            <li>Mentorship Application & Partner Portal</li>
                            <li>Community & Collaboration Hub</li>
                            <li>Training-Based Internships & Career Pathways</li>
                            <li>AI-Enabled Support Tools for clarity and growth</li>
                            <li>Secure user access for a personalized experience</li>
                        </ul>
                        <p>Every feature is built with purpose, responsibility, and long-term impact in mind.</p>
                    </section>

                    <Separator />
                    
                    <section>
                        <h2 className="font-headline text-3xl flex items-center gap-3"><Star /> New Updates — Grow With SheCodesHerWay</h2>
                        <p className="text-xl italic text-primary">Where Passion Meets Purpose to Build Something Meaningful Together</p>
                        <p>Join our mission to build a world where every woman has the opportunity to soar. Grow With SheCodesHerWay invites passionate individuals to contribute their skills, creativity, and commitment toward building an inclusive, women-led empowerment ecosystem. This is your chance to grow alongside a purpose-driven platform — while creating real, meaningful impact.</p>
                        
                        <Card className="mt-8 bg-muted/50">
                             <CardHeader>
                                <CardTitle className="font-headline text-2xl">Early Core Contributor Application | SheCodesHerWay</CardTitle>
                                <CardContent className="pt-4 px-0">
                                    <p>Join the Founding Circle! We are inviting students, freshers, and working professionals to join SheCodesHerWay as Early Core Contributors on a part-time collaboration basis.</p>
                                    <h4 className="font-semibold mt-4">As an Early Core Contributor, you will:</h4>
                                    <ul>
                                        <li>Take ownership of high-impact modules</li>
                                        <li>Build specialized tools, creative assets, and strategic systems</li>
                                        <li>Lead zero-to-one development in your domain</li>
                                        <li>Work independently in a dedicated local environment</li>
                                        <li>Help shape the future direction of the platform</li>
                                    </ul>
                                    <p>This is a rare opportunity to lead, contribute, and grow while directly supporting a women-led mission.</p>
                                    <p className="text-sm mt-4">⚖️ <strong>Important Collaboration Note:</strong> This is a voluntary, unpaid, and non-employment collaboration, designed for impact-driven contribution, hands-on learning, and skill-building.</p>
                                     <Button asChild variant="link" className="px-0">
                                        <Link href="/collaboration-policy">Learn More & Apply to become part of the founding circle.</Link>
                                    </Button>
                                </CardContent>
                             </CardHeader>
                        </Card>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="font-headline text-3xl flex items-center gap-3"><Award /> Our Impact Goals (2025–2026)</h2>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                           {impactGoals.map(goal => (
                             <li key={goal} className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> {goal}</li>
                           ))}
                        </ul>
                        <p>Our success is measured not only in numbers — but in confidence built, voices found, and lives transformed.</p>
                    </section>
                    
                    <Separator />

                    <section>
                         <h2 className="font-headline text-3xl flex items-center gap-3"><Heart /> A Note of Gratitude to Our Founder</h2>
                         <p className="font-semibold">{brand.founder.name}</p>
                         <p>SheCodesHerWay exists because of a belief — that every woman deserves the opportunity to rise. As the founder and developer, Prerana Kailash Pattnaik built more than a platform. She built a community, a vision, and a pathway for women to discover their strength, skills, and wings.</p>
                         <p>From idea to impact, her dedication transformed a dream into a living ecosystem of empowerment.</p>
                    </section>

                    <Separator />
                    
                    <section className="text-center">
                        <h2 className="font-headline text-3xl">Our Mission & Vision</h2>
                        <p className="mt-4 text-xl font-semibold text-primary">Mission: {brand.mission}</p>
                        <p className="mt-2 text-foreground/80">{brand.vision}</p>
                    </section>

                    <Separator />
                    
                    <section className="text-center">
                        <h2 className="font-headline text-3xl">Join Us — Let’s Build a Future Where Women Rise Higher</h2>
                        <p>SheCodesHerWay is more than a platform. It is a movement of confidence, creativity, and courage. Whether you join as a learner, mentor, or contributor, you become part of a story bigger than yourself — a story where women rise, lead, and inspire.</p>
                        <p className="text-2xl font-bold mt-4">Because when one woman rises…<br/>the world rises with her.</p>
                    </section>
                    
                    <Separator />
                    
                    <section>
                         <h2 className="font-headline text-3xl text-center flex items-center justify-center gap-3"><Heart className="text-primary"/>Connect With Us</h2>
                         <div className="text-center mt-4 space-y-1 not-prose">
                            <p><strong>Website:</strong> <Link href="https://shecodesherways.com" className="text-primary hover:underline">https://shecodesherways.com</Link></p>
                            <p><strong>Email:</strong> <a href={`mailto:${brand.email}`} className="text-primary hover:underline">{brand.email}</a></p>
                            <p><strong>Instagram:</strong> @shecodesherway</p>
                            <p><strong>LinkedIn:</strong> <Link href="https://www.linkedin.com/company/shecodesherway/" className="text-primary hover:underline">SheCodesHerWay</Link></p>
                         </div>
                    </section>

                </div>
            </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
