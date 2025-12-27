
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BrainCircuit } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const post = {
    id: '6',
    title: 'Next-Gen Creativity: Trending AI Tools for Images, Infographics & Video in 2025',
    author: 'Prerana K.',
    authorAvatar: 'https://i.postimg.cc/HkLGWcM4/1718292767884.jpg',
    date: 'August 6, 2024',
    image: {
        imageUrl: "https://i.postimg.cc/3wc105jw/Whats-App-Image-2025-12-02-at-3-55-38-PM.jpg",
        description: "AI tools banner",
        imageHint: "AI tools",
    },
};

export default function BlogPostPage6() {
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
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
                    
                    <p className="lead">The digital content landscape is evolving faster than ever. AI no longer just writes text — it generates <strong>stunning visuals, infographics, and cinematic videos</strong>.</p>
                    <p>From marketers to solo creators, AI tools now allow anyone to turn ideas into polished content in minutes. The latest stack of trending tools—<strong>DALL·E, Veo, Sora, Nano Banana, Imagen, ChatGPT, and Gemini</strong>—are leading the charge.</p>

                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>1. DALL·E — The Creative Image Generator</h2>
                        <p><strong>DALL·E</strong>, developed by OpenAI, is one of the most popular AI text-to-image models. It can transform <strong>any text prompt into unique, imaginative images</strong>.</p>
                        <h3>Why it’s trending:</h3>
                        <ul>
                            <li>Generates highly creative and stylistic images from text prompts</li>
                            <li>Perfect for digital art, social media visuals, and concept illustrations</li>
                            <li>Supports variations, edits, and inpainting for refining details</li>
                        </ul>
                    </section>

                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>2. Nano Banana — The AI Image Powerhouse</h2>
                        <p><strong>Nano Banana</strong> (Gemini 2.5) and <strong>Nano Banana Pro</strong> (Gemini 3 Pro) are Google’s state-of-the-art image-generation models.</p>
                        <h3>Why it’s trending:</h3>
                        <ul>
                            <li>Photorealistic images with fine detail and style consistency</li>
                            <li>Ideal for social media graphics, product visuals, and infographics</li>
                            <li>Advanced text-to-image prompts with style and composition control</li>
                        </ul>
                    </section>
                    
                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>3. Veo & Sora — AI-Driven Video from Text</h2>
                        <blockquote>Generates natural motion sequences and storytelling visuals</blockquote>
                        <p><strong>Veo</strong> and <strong>Sora</strong> transform prompts or static images into <strong>short cinematic videos</strong>, complete with realistic motion and audio. They are perfect for social media reels, short stories, or product showcases.</p>
                    </section>
                    
                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>4. ChatGPT & Gemini — The Brains Behind the Operation</h2>
                        <p><strong>ChatGPT and Gemini</strong> are the <strong>idea engines</strong> for AI content creation. Use them for:</p>
                        <ul>
                            <li>Crafting prompts for image and video generation</li>
                            <li>Generating scripts, captions, and storyboard text</li>
                            <li>Ideation for infographics and social media campaigns</li>
                        </ul>
                    </section>

                    <Separator className="my-12" />
                    
                    <section className="space-y-6">
                        <h2>Conclusion</h2>
                        <blockquote>The future of content creation isn’t just digital — it’s <strong>AI-powered, interactive, and infinitely scalable.</strong> 🚀</blockquote>
                        <p>The 2025 AI creative ecosystem is <strong>all about speed, realism, and cross-media integration</strong>. By combining these tools, creators can go from concept to <strong>fully polished images, infographics, and videos in record time</strong>.</p>
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
