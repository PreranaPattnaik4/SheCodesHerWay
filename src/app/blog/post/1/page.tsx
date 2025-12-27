
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
    id: '1',
    title: 'The Power of Mentorship for Women in Tech',
    author: 'Prerana K.',
    authorAvatar: 'https://i.postimg.cc/HkLGWcM4/1718292767884.jpg',
    date: 'July 25, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'program-mentorship'),
};

export default function BlogPostPage() {
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
                        Mentorship can be a game-changer for women navigating the tech industry. In a field that is still largely male-dominated, having a mentor can provide the guidance, support, and advocacy needed to not just survive, but thrive.
                    </p>
                    <p>
                        In this post, we explore the profound impact of having a mentor and how it can accelerate your career growth and build confidence. A good mentor does more than just offer technical advice. They serve as a sounding board for ideas, a source of encouragement during tough times, and a champion for your work when you're not in the room. They can help you navigate office politics, identify opportunities for growth, and build a professional network that will serve you throughout your career.
                    </p>
                    
                    <Separator className="my-12" />

                    <section className="space-y-6">
                        <h2>Finding the Right Mentor</h2>
                        <p>
                            Finding the right mentor is a personal journey. Look for someone whose career path you admire, but also someone with whom you feel a genuine connection. It's important to find a mentor who is invested in your success and willing to dedicate time and energy to your development. Don't be afraid to reach out to potential mentors, even if they are senior to you. Many successful professionals are eager to give back to the next generation.
                        </p>
                    </section>

                    <Separator className="my-12" />
                    
                    <section className="space-y-6">
                        <h2>The Role of Community</h2>
                         <blockquote>At SheCodesHerWay, we believe that mentorship is most powerful when it's part of a larger community of support.</blockquote>
                        <p>
                            Our platform connects aspiring women in tech with experienced mentors and a vibrant peer network. Through our programs, you can find not just one, but a team of supporters who are invested in your success.
                        </p>
                        <p>
                            Ready to find a mentor and accelerate your career? Join the SheCodesHerWay community today and start building the connections that will help you achieve your goals.
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
