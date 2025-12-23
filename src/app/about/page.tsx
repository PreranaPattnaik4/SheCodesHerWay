
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
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const coreValues = [
    { value: "Empowerment", meaning: "Helping women find their voice and independence" },
    { value: "Innovation", meaning: "Merging technology with creativity and purpose" },
    { value: "Community", meaning: "Building sisterhood through support and shared growth" },
    { value: "Inclusivity", meaning: "Every woman is welcome, regardless of background" },
    { value: "Courage", meaning: "Encouraging women to dream, lead, and take flight" },
]

const teamMembers = [
    { name: "Prerana", role: "Lead Developer", image: PlaceHolderImages.find((p) => p.id === 'founder-portrait') },
    { name: "Sanjana M.", role: "Community Manager", image: PlaceHolderImages.find((p) => p.id === 'team-member-2')},
    { name: "Rhea S.", role: "Marketing & Growth Lead", image: PlaceHolderImages.find((p) => p.id === 'team-member-3')},
    { name: "Priya V.", role: "Program Coordinator", image: PlaceHolderImages.find((p) => p.id === 'team-member-4')},
]

export default function AboutPage() {
    const image1 = PlaceHolderImages.find((p) => p.id === 'about-program-1');
    const image2 = PlaceHolderImages.find((p) => p.id === 'about-program-2');

    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-muted/30 py-20 md:py-28 flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <div className="relative grid md:grid-cols-2 gap-8 md:gap-4 items-center">
                            {/* Card 1: Content */}
                            <Card className="z-10 rounded-xl shadow-lg bg-background/80 backdrop-blur-sm p-6 md:p-10">
                                <h1 className="text-sm uppercase text-primary font-semibold tracking-wider">About Us</h1>
                                <p className="font-headline text-4xl md:text-5xl font-bold mt-2">{brand.name}</p>
                                <p className="mt-2 text-lg text-foreground/80 italic">"{brand.mission}"</p>
                                <p className="mt-6 text-foreground/90">
                                    We are a women-led startup dedicated to building a world where every woman has the opportunity, resources, and confidence to fly beyond limits.
                                </p>
                                <div className="mt-8 flex items-center space-x-4">
                                    <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Linkedin className="h-6 w-6" />
                                    </Link>
                                    <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Github className="h-6 w-6" />
                                    </Link>
                                    <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Twitter className="h-6 w-6" />
                                    </Link>
                                    <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Instagram className="h-6 w-6" />
                                    </Link>
                                </div>
                            </Card>

                            {/* Card 2: Image */}
                            <div className="relative flex items-center justify-center md:justify-start">
                                <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] group">
                                     {/* Ambient glow effect */}
                                     <div className="absolute inset-0 bg-yellow-300/20 rounded-full blur-3xl transition-opacity duration-500 opacity-70 group-hover:opacity-100"></div>

                                     {/* Image card with shadow and fog */}
                                     <Card className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
                                        <Image
                                            src="https://i.postimg.cc/9M28bVsy/final.png"
                                            alt="Abstract illustration representing technology and innovation"
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Fog effect */}
                                        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50 pointer-events-none"></div>
                                     </Card>
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
                                </div>
                            </div>
                        </section>
                        
                        <Separator/>

                        <section className="bg-muted/50 p-8 rounded-lg">
                             <h2 className="font-headline text-3xl font-bold text-center">Our Team</h2>
                             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {teamMembers.map((member) => (
                                    <Card key={member.name} className="text-center shadow-lg">
                                        <CardContent className="p-4">
                                            {member.image && (
                                                <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                                                    <Image
                                                        src={member.image.imageUrl}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover"
                                                        data-ai-hint={member.image.imageHint}
                                                    />
                                                </div>
                                            )}
                                            <h3 className="text-lg font-bold">{member.name}</h3>
                                            <p className="text-sm text-primary">{member.role}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
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

    