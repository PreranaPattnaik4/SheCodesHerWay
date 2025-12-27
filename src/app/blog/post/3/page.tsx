
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
    id: '3',
    title: 'Building Your First Web App: A Beginner\'s Guide',
    author: 'Tech Team',
    authorAvatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx0ZWFtJTIwYXZhdGFyfGVufDB8fHx8fDE3NjU4OTg4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'July 18, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'feature-workshops'),
};

export default function BlogPostPage3() {
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
                        Diving into web development can be daunting. This guide breaks down the essential steps to build your first web application, from choosing the right tools to deploying your project.
                    </p>
                    <p>
                        We'll cover the basics of HTML, CSS, and JavaScript, and introduce you to modern frameworks like React and Next.js, which power the SheCodesHerWay platform itself.
                    </p>

                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>1. Setting Up Your Development Environment</h2>
                        <p>
                            Before you write a single line of code, you need a place to write it and a way to see it run. This is your development environment. At a minimum, you'll need a good code editor (like VS Code) and a modern web browser (like Chrome or Firefox). We'll also walk you through installing Node.js, which is essential for running modern web development tools.
                        </p>
                    </section>
                    
                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>2. The Building Blocks: HTML, CSS, & JavaScript</h2>
                        <blockquote>Every website is built on these three pillars.</blockquote>
                        <ul>
                            <li><strong>HTML (HyperText Markup Language):</strong> Provides the structure and content of your page.</li>
                            <li><strong>CSS (Cascading Style Sheets):</strong> Adds styling, layout, and visual appeal. We use Tailwind CSS at SheCodesHerWay for its utility-first approach.</li>
                            <li><strong>JavaScript:</strong> Makes your page interactive and dynamic.</li>
                        </ul>
                    </section>

                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>3. Choosing a Framework: Why We Use Next.js</h2>
                        <p>
                            While you can build websites with just HTML, CSS, and JS, frameworks make the process much faster and more organized. We use Next.js, a React framework that offers a great developer experience, server-side rendering for performance, and a robust ecosystem. We'll explain why it's a fantastic choice for beginners and pros alike.
                        </p>
                    </section>
                    
                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>4. Your First Deployment</h2>
                        <p>
                            Building an app is one thing; sharing it with the world is another. We'll guide you through deploying your first application using services like Vercel or Firebase Hosting, making your project live on the internet for anyone to see.
                        </p>
                        <p>
                            Ready to start building? Our 'Sangini Udaan : EmpowerFly' program includes detailed tracks on web development to guide you every step of the way.
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
