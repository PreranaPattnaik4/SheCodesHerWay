
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
    id: '1',
    title: 'The Power of Mentorship for Women in Tech',
    author: 'Prerana K.',
    date: 'July 25, 2024',
    excerpt: 'Mentorship can be a game-changer for women navigating the tech industry. In this post, we explore the profound impact of having a mentor and how it can accelerate your career growth and build confidence.',
    image: PlaceHolderImages.find((p) => p.id === 'program-mentorship'),
    href: '/blog/post/1'
  },
  {
    id: '2',
    title: 'From Imposter to Innovator: Overcoming Self-Doubt',
    author: 'Community Voice',
    date: 'July 22, 2024',
    excerpt: 'Imposter syndrome is a silent career killer, especially for women in competitive fields. Learn practical strategies to overcome self-doubt and embrace your inner innovator.',
    image: PlaceHolderImages.find((p) => p.id === 'feature-community'),
    href: '#'
  },
    {
    id: '3',
    title: 'Building Your First Web App: A Beginner\'s Guide',
    author: 'Tech Team',
    date: 'July 18, 2024',
    excerpt: 'Diving into web development can be daunting. This guide breaks down the essential steps to build your first web application, from choosing the right tools to deploying your project.',
    image: PlaceHolderImages.find((p) => p.id === 'feature-workshops'),
    href: '#'
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
