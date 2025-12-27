
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const post = {
    id: '2',
    title: 'From Imposter to Innovator: Overcoming Self-Doubt',
    author: 'Community Voice',
    authorAvatar: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8fDE3NjIxNTQzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'July 28, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'feature-community'),
};

export default function BlogPostPage2() {
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
                    <div className="absolute bottom-0 left-0 p-8 md:p-12">
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
                    <p className="lead">
                        Imposter syndrome is a silent career killer, especially for women in competitive fields. It's that nagging feeling that you're not as competent as others perceive you to be. If you've ever felt this way, you're not alone.
                    </p>
                    <p>
                        Many high-achieving women experience this self-doubt, but the key is to not let it define you.
                    </p>

                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>Recognizing the Signs</h2>
                        <p>
                            Imposter syndrome can manifest in several ways: perfectionism, fear of failure, downplaying your accomplishments, and feeling like your success is just a matter of luck. Recognizing these patterns is the first step toward overcoming them. Start by acknowledging your feelings without judgment. Simply telling yourself, "I'm feeling like an imposter right now, and that's okay," can be incredibly powerful.
                        </p>
                    </section>
                    
                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>Practical Strategies to Reclaim Your Confidence</h2>
                        <blockquote>Let go of perfectionism. Done is often better than perfect. Focus on progress, not perfection.</blockquote>
                        <ul>
                            <li><strong>Track Your Accomplishments:</strong> Keep a running list of your successes, no matter how small. When self-doubt creeps in, review this list to remind yourself of your capabilities.</li>
                            <li><strong>Reframe Your Thoughts:</strong> Challenge negative self-talk. Instead of thinking, "I don't deserve this," try, "I worked hard for this, and I'm proud of what I've achieved."</li>
                            <li><strong>Seek Out Support:</strong> Talk to mentors, peers, or a career coach. Sharing your experiences can help you realize that you're not alone and gain valuable perspective.</li>
                        </ul>
                    </section>

                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>Your Journey at SheCodesHerWay</h2>
                        <p>
                            At SheCodesHerWay, we understand that overcoming imposter syndrome is a journey, not a destination. Our programs are designed to provide a supportive and encouraging environment where you can build not only your skills but also your confidence. Through mentorship and community, we help you see your own potential and step into your power as an innovator.
                        </p>
                        <p>
                            Ready to start your journey from imposter to innovator? Join us and find the community and support you need to thrive.
                        </p>
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
