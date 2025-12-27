
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const post = {
    id: '5',
    title: '𝐌𝐲 𝐆𝐨𝐨𝐠𝐥𝐞 𝐒𝐭𝐚𝐫𝐭𝐮𝐩 𝐒𝐜𝐡𝐨𝐨𝐥: 𝐏𝐫𝐨𝐦𝐩𝐭 𝐭𝐨 𝐏𝐫𝐨𝐭𝐨𝐭𝐲𝐩𝐞 𝐉𝐨𝐮𝐫𝐧𝐞𝐲!',
    author: 'Prerana K.',
    authorAvatar: 'https://i.postimg.cc/HkLGWcM4/1718292767884.jpg',
    date: 'August 5, 2024',
    image: {
        imageUrl: "https://i.postimg.cc/1RqPqqfF/Banners3.png",
        description: "From Prompt to Prototype",
        imageHint: "startup journey",
    },
};

export default function BlogPostPage5() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <article>
            {post.image && (
                <header className="relative h-96 w-full">
                    <Image
                        src={post.image.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={post.image.imageHint}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-12 left-0 p-8 md:p-12">
                        <h1 className="font-headline text-4xl font-bold text-white drop-shadow-lg md:text-6xl max-w-4xl">
                            {post.title}
                        </h1>
                    </div>
                </header>
            )}
            <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-8">
                     <Avatar className="h-12 w-12">
                        <AvatarImage src={post.authorAvatar} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">Published on {post.date}</p>
                    </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead">Every startup begins with an idea. Mine began with a prompt.</p>
                    <p>I officially graduated from Google Startup School: Prompt to Prototype, but what stayed with me was far more valuable than a certificate. I walked away with a new way of thinking about building — not just products, but clarity, systems, and momentum.</p>
                    <p>This blog is a reflection of my startup-building journey with Google Startup School: Prompt to Prototype program! — how I moved from thinking about ideas to actually prototyping and shipping them, using Google’s AI ecosystem as a true collaborator.</p>
                    
                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>My Core Belief: Startups Are Thinking Systems Before Tech Systems</h2>
                        <blockquote>A startup is not code-first. It is clarity-first.</blockquote>
                        <p>Before this program, many of us — including me — rushed into: Features, Tools, UI, Code. Google Startup School flipped this approach. It taught me to slow down before building — and then move extremely fast once clarity was achieved. That shift alone changed how I see startups forever.</p>
                    </section>
                    
                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>The Shift: From “Learning AI” to “Building With AI”</h2>
                        <p>Before this experience, AI felt powerful — but abstract. After six intense days, AI became practical, structured, and actionable. The journey followed a clear arc that mirrored how real startups are built: Prompting → Research → Creativity → Prototyping → Developer Mode → Deployment. It wasn’t perfect or linear. It was fast, sometimes messy, deeply iterative — and grounded in real problems. AI stopped being something I explored and became something I built with.</p>
                    </section>

                    <Separator className="my-12" />

                    <section className="space-y-6">
                         <h2>My Prompt Writing Experience: How Thinking Became Building</h2>
                         <blockquote>Prompt writing isn’t about asking AI better questions — it’s about thinking better as a builder.</blockquote>
                         <p>At first, prompts felt like simple instructions. Very quickly, I understood something deeper: A prompt is a decision. Every prompt forced me to clarify: What exactly is the problem? Who is this for? What constraints matter? What outcome do I really want? If the prompt was unclear, the output was unclear. That feedback loop refined my thinking more than any checklist ever could.</p>
                         <p>One of the most powerful lessons I learned was the value of constraints. Instead of asking: “Build something amazing”, I learned to ask: With which user? In what context? Under what limitations? In which format? Constraints didn’t limit creativity — they guided it.</p>
                    </section>

                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>My Startup Vision: Building With Empathy, Speed & Responsibility</h2>
                        <p>I want to build products where: AI reduces friction, Users feel empowered, not overwhelmed, Technology feels invisible, yet impactful.</p>
                    </section>

                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>A Heartfelt Thank You</h2>
                        <p>I’m deeply grateful to: Google for Startups — for designing a program that truly understands modern builders, Scaler — for execution, structure, and clarity, The mentors, speakers, and Google team — for sharing real-world insights, not just theory. And to everyone who believes that AI should empower builders, not replace them — Thank you.</p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t">
                    <Button asChild>
                        <Link href="/blog">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Blogs
                        </Link>
                    </Button>
                </div>
            </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
