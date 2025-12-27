
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const blogPosts = [
  {
    id: '5',
    title: '𝐌𝐲 𝐆𝐨𝐨𝐠𝐥𝐞 𝐒𝐭𝐚𝐫𝐭𝐮𝐩 𝐒𝐜𝐡𝐨𝐨𝐥: 𝐏𝐫𝐨𝐦𝐩𝐭 𝐭𝐨 𝐏𝐫𝐨𝐭𝐨𝐭𝐲𝐩𝐞 𝐉𝐨𝐮𝐫𝐧𝐞𝐲!',
    author: 'Prerana K.',
    date: 'August 5, 2024',
    excerpt: 'Every startup begins with an idea. Mine began with a prompt. This blog is a reflection of my startup-building journey — how I moved from thinking about ideas to actually prototyping and shipping them...',
    image: {
        imageUrl: "https://i.postimg.cc/1RqPqqfF/Banners3.png",
        description: "From Prompt to Prototype",
        imageHint: "startup journey",
    },
    href: '/blog/post/5'
  },
  {
    id: '4',
    title: 'SheCodesHerWay: Where Women Build Their Path, Lead Their Way, and Leave Their Mark',
    author: 'Prerana K.',
    date: 'August 1, 2024',
    excerpt: 'Every movement begins with a spark — a spark of courage, vision, and hope. SheCodesHerWay was born from such a spark. A dream to create a space where women don’t just learn skills, but rise with confidence.',
    image: PlaceHolderImages.find((p) => p.id === 'hero-background'),
    href: '/blog/post/4'
  },
  {
    id: '2',
    title: 'From Imposter to Innovator: Overcoming Self-Doubt',
    author: 'Community Voice',
    date: 'July 28, 2024',
    excerpt: 'Imposter syndrome is a silent career killer, especially for women in competitive fields. Learn practical strategies to overcome self-doubt and embrace your inner innovator.',
    image: PlaceHolderImages.find((p) => p.id === 'feature-community'),
    href: '/blog/post/2'
  },
  {
    id: '6',
    title: 'Next-Gen Creativity: Trending AI Tools for Images, Infographics & Video in 2025',
    author: 'Prerana K.',
    date: 'August 6, 2024',
    excerpt: 'The digital content landscape is evolving faster than ever. AI no longer just writes text — it generates stunning visuals, infographics, and cinematic videos...',
    image: {
        imageUrl: "https://i.postimg.cc/3wc105jw/Whats-App-Image-2025-12-02-at-3-55-38-PM.jpg",
        description: "AI tools banner",
        imageHint: "AI tools",
    },
    href: '/blog/post/6'
  },
  {
    id: '1',
    title: 'The Power of Mentorship for Women in Tech',
    author: 'Prerana K.',
    date: 'July 25, 2024',
    excerpt: 'Mentorship can be a game-changer for women navigating the tech industry. In this post, we explore the profound impact of having a mentor and how it can accelerate your career growth and build confidence.',
    image: PlaceHolderImages.find((p) => p.id === 'program-mentorship'),
    href: '/blog/post/1'
  },
    {
    id: '3',
    title: 'Building Your First Web App: A Beginner\'s Guide',
    author: 'Tech Team',
    date: 'July 18, 2024',
    excerpt: 'Diving into web development can be daunting. This guide breaks down the essential steps to build your first web application, from choosing the right tools to deploying your project.',
    image: PlaceHolderImages.find((p) => p.id === 'feature-workshops'),
    href: '/blog/post/3'
  }
];

export default function BlogPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-secondary/30">
      <Header />
      <main className="flex-1">
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Blogs</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                    Insights, stories, and advice from the SheCodesHerWay community.
                </p>
            </div>
        </section>
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                    <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                       {post.image && (
                         <div className="relative h-48 w-full">
                           <Image
                             src={post.image.imageUrl}
                             alt={post.title}
                             fill
                             className="object-cover"
                             data-ai-hint={post.image.imageHint}
                           />
                         </div>
                       )}
                       <CardHeader>
                           <CardTitle className="font-headline text-2xl h-20">{post.title}</CardTitle>
                           <CardDescription>
                            By {post.author} on {post.date}
                           </CardDescription>
                       </CardHeader>
                       <CardContent className="flex-grow">
                           <p className="text-foreground/80 line-clamp-3">{post.excerpt}</p>
                       </CardContent>
                       <CardFooter>
                           <Button asChild variant="link" className="p-0">
                               <Link href={post.href}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                               </Link>
                           </Button>
                       </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
