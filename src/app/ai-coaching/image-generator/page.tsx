
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ImageGeneratorPage() {
    const pageImage = PlaceHolderImages.find((p) => p.id === 'feature-workshops');
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <ImageIcon className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">AI Image Generator</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    This feature is currently under development.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto text-center shadow-lg">
                <CardHeader>
                    {pageImage && (
                        <div className="relative h-48 w-full rounded-t-lg overflow-hidden mb-4">
                            <Image
                                src={pageImage.imageUrl}
                                alt={pageImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={pageImage.imageHint}
                            />
                        </div>
                    )}
                    <CardTitle>Coming Soon!</CardTitle>
                    <CardDescription>
                        We're working hard to bring you a powerful AI image generator. Stay tuned for updates!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-6 text-foreground/80">
                        Soon you'll be able to create stunning visuals and graphics for your projects with simple text prompts. From social media posts to presentation slides, our AI will help you bring your ideas to life instantly.
                    </p>
                    <Button asChild variant="outline">
                        <Link href="/ai-coaching">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to AI Tools
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
