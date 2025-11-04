
import ForumList from '@/components/community/forum-list';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import JoinUs from '@/components/home/join-us';
import { Separator } from '@/components/ui/separator';

export default function CommunityPage() {
  const forumBanner = PlaceHolderImages.find(p => p.id === 'forum-banner');

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative h-64 w-full bg-secondary">
          {forumBanner && (
             <Image
                src={forumBanner.imageUrl}
                alt={forumBanner.description}
                fill
                className="object-cover"
                data-ai-hint={forumBanner.imageHint}
              />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-headline text-4xl font-bold md:text-6xl">Community Forum</h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Connect, collaborate, and grow with peers and mentors.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="space-y-24">
                <ForumList />
                <Separator />
                <div id="partner-with-us">
                    <JoinUs />
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
