
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

const coreValues = [
    { value: "Empowerment", meaning: "Helping women find their voice and independence" },
    { value: "Innovation", meaning: "Merging technology with creativity and purpose" },
    { value: "Community", meaning: "Building sisterhood through support and shared growth" },
    { value: "Inclusivity", meaning: "Every woman is welcome, regardless of background" },
    { value: "Courage", meaning: "Encouraging women to dream, lead, and take flight" },
]

export default function AboutPage() {
    const founderImage = PlaceHolderImages.find((p) => p.id === 'founder-portrait');
    const image1 = PlaceHolderImages.find((p) => p.id === 'about-program-1');
    const image2 = PlaceHolderImages.find((p) => p.id === 'about-program-2');

    return (
        <div className="flex min-h-dvh flex-col bg-white">
            <Header />
            <main className="flex-1">
                <section className="bg-secondary/50 py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-headline text-4xl font-bold md:text-6xl">About SheCodesHerWay</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                            Empowering Women to Learn, Lead, and Rise Together.
                        </p>
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
                                <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Flagship Program: Sangini Udaan</h2>
                                <p className="mt-4 text-2xl text-primary italic">“Empower Her to Fly Beyond Limits.”</p>
                                <p className="mt-6 text-lg text-foreground/80">
                                    Sangini Udaan is the heart of SheCodesHerWay—a guided mentorship and growth journey created to help women build skills, confidence, and clarity across technology, creativity, business, and leadership. This is more than a learning experience; it is a women-led, supportive journey where growth is intentional, guidance is genuine, and every woman is encouraged to move forward at her own pace.
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
                        
                        <section className="max-w-3xl mx-auto bg-muted/50 p-8 rounded-lg">
                             <h2 className="font-headline text-3xl font-bold text-center">A Note of Gratitude</h2>
                             <div className="prose dark:prose-invert max-w-none mx-auto mt-6">
                                <p>SheCodesHerWay stands today because of a dream—your dream, Prerana. You created a platform where women can discover their voice, build their skills, grow without fear, find a community, and spread their wings.</p>
                                <p>Your dedication transformed SheCodesHerWay and Sangini Udaan into symbols of hope, empowerment, and possibility. Your courage and innovation continue to inspire the women who join this movement every day.</p>
                                <p className="text-right italic">— The SheCodesHerWay Team</p>
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
