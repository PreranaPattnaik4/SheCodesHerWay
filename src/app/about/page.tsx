
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
import { Award, Check, FileText, Github, Heart, Instagram, Linkedin, Star, Twitter, Users, Zap, HeartHandshake } from 'lucide-react';

const coreValues = [
    { value: "Empowerment", meaning: "Helping women find their voice and independence" },
    { value: "Innovation", meaning: "Merging technology with creativity and purpose" },
    { value: "Community", meaning: "Building sisterhood through support and shared growth" },
    { value: "Inclusivity", meaning: "Every woman is welcome, regardless of background" },
    { value: "Courage", meaning: "Encouraging women to dream, lead, and take flight" },
]

export default function AboutPage() {
    const aboutHeroImage = PlaceHolderImages.find((p) => p.id === 'about-hero-team');
    const image1 = PlaceHolderImages.find((p) => p.id === 'about-program-1');
    const image2 = PlaceHolderImages.find((p) => p.id === 'about-program-2');
    const founderImage = PlaceHolderImages.find((p) => p.id === 'founder-portrait');

    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-primary/10 py-20 md:py-28 flex items-center justify-center">
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
                                    <Link href="#" className="hover:text-primary">Solutions</Link>
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
                                        <h1 className="font-headline text-7xl md:text-8xl font-bold text-foreground">
                                            About
                                            <br />
                                            Us
                                        </h1>
                                        <div className="absolute top-1/2 -right-4 w-2/3 h-1/2 bg-primary/10 -z-0 blur-3xl"></div>
                                    </div>
                                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                                        <Image
                                            src="https://i.postimg.cc/VLnm9Pvt/Generated_Image_November_05_2025_8_01AM_Copy.png"
                                            alt="About illustration"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                 <div className="mt-8 md:mt-0 md:pt-8">
                                    <div className="text-6xl font-bold text-foreground/80">{brand.name}</div>
                                    <p className="text-lg text-foreground/80 mt-4">
                                        Hello. We’re a women-led startup agency for a better tomorrow.
                                    </p>
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
                                        <p className="text-lg text-foreground/80">To create a world where every woman has the resources, the opportunities, and the confidence to rise beyond barriers and step into her fullest potential.</p>
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
                                {image1 && (
                                    <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-2xl">
                                    <Image
                                        src={image1.imageUrl}
                                        alt={image1.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image1.imageHint}
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
                                    <p className='italic text-muted-foreground'>Founder & Developer | SheCodesHerWay</p>
                                    <p className="mt-4 text-foreground/80">A visionary committed to building a world where women can rise with confidence. She believes in equal opportunities, creativity, innovation, emotional empowerment, and community-driven learning. Her leadership blends compassion, courage, and creativity—the true essence of SheCodesHerWay.</p>
                                    <div className="mt-4 flex items-center gap-4">
                                        <Link href="https://www.linkedin.com/in/prerana-pattnaik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={20}/></Link>
                                        <Link href="https://medium.com/@preranakailashpattnaik" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-muted-foreground hover:text-primary"><FileText size={20}/></Link>
                                        <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20}/></Link>
                                    </div>
                                    <p className="mt-4 text-foreground/80 font-semibold italic">Note of Gratitude: It takes a village to build a vision. This platform is a result of the efforts of our incredible early team members, mentors, and community voices who believed in this idea from day one. Their passion and dedication are the foundation of SheCodesHerWay.</p>
                                </div>
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
                                        <p className="text-sm mt-2"><span className="font-bold">Important:</span> This is voluntary, unpaid, and non-employment collaboration, designed for impact, learning, and skill-building.</p>
                                        <Button asChild variant="link" className="mt-2">
                                            <Link href="https://docs.google.com/document/d/1aGJ6ldythh6hwnUa-zz-mr23x-hSPRlzuJKA2qIXZR0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
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

                        <Separator />

                        <section>
                            <div className="text-center mb-10">
                                <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Core Values</h2>
                            </div>
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

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
