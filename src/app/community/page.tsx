import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import ForumPostCard from '@/components/community/forum-post-card';

const forumPosts = [
  {
    id: '1',
    title: 'Seeking Advice: Best Strategies for Seed Funding?',
    author: 'Aisha Khan',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzYyMDB8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxODcyMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    timestamp: '2 days ago',
    content: "Hi everyone, my co-founder and I are in the early stages of our SaaS startup and we're planning our first seed funding round. It's our first time doing this and we want to make sure we approach it correctly. What are some of the most effective strategies you've used or seen for securing seed funding? We're particularly...",
    commentCount: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzYyMDB8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMGludGVydmlld3xlbnwwfHx8fDE3MTg3MjAzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'A notebook and pen on a desk during a meeting.',
      hint: 'notebook meeting'
    }
  },
  {
    id: '2',
    title: 'Show & Tell: Our new MVP for sustainable fashion tracking',
    author: 'Beatriz Costa',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzYyMDB8MHwxfHNlYXJjaHwzfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxODcyMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    timestamp: '5 days ago',
    content: "Excited to share the first look at our MVP! It's a web app that helps consumers track the sustainability score of their favorite fashion brands. We're using a mix of public data and user-submitted reviews to create a transparent rating system. Would love to get your feedback on the concept and UI!",
    commentCount: 8,
    image: {
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzYyMDB8MHwxfHNlYXJjaHwxfHxmYXNoaW9ufGVufDB8fHx8MTcxODcyMDI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'A person modeling a sustainable fashion outfit.',
      hint: 'fashion outfit'
    }
  }
];

export default function CommunityPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-secondary/30">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">Community Forum</h1>
                    <p className="mt-2 text-lg text-foreground/80">
                        Connect, share, and grow with peers and mentors.
                    </p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Start a Discussion
                </Button>
            </div>

            <div className="space-y-8">
                {forumPosts.map(post => (
                    <ForumPostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
