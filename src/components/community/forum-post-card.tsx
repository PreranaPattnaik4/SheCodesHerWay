import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

type PostImage = {
    src: string;
    alt: string;
    hint: string;
}

type ForumPost = {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  timestamp: string;
  content: string;
  commentCount: number;
  image?: PostImage;
};

interface ForumPostCardProps {
  post: ForumPost;
}

export default function ForumPostCard({ post }: ForumPostCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl bg-card">
        <Link href={`/community/post/${post.id}`} className="block">
            <div className="grid md:grid-cols-3">
                <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={post.authorAvatar} alt={post.author} />
                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                        </div>
                    </div>
                    <h2 className="font-headline text-2xl font-bold hover:text-primary transition-colors">
                        {post.title}
                    </h2>
                    <p className="mt-4 text-foreground/80 line-clamp-3">
                        {post.content}
                    </p>
                    <div className="mt-6">
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments'}
                        </Button>
                    </div>
                </div>
                {post.image && (
                    <div className="relative min-h-[200px] md:min-h-full">
                        <Image
                            src={post.image.src}
                            alt={post.image.alt}
                            fill
                            className="object-cover"
                            data-ai-hint={post.image.hint}
                        />
                    </div>
                )}
            </div>
        </Link>
    </Card>
  );
}
