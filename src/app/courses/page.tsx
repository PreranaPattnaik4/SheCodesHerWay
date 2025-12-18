
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CoursesPage() {
  const pageImage = PlaceHolderImages.find((p) => p.id === 'feature-workshops');

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative bg-secondary py-20 md:py-32">
             {pageImage && (
                <Image
                    src={pageImage.imageUrl}
                    alt={pageImage.description}
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint={pageImage.imageHint}
                />
            )}
            <div className="container relative mx-auto px-4 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">Our Courses</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    This feature is currently under development.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto text-center shadow-lg">
                <CardHeader>
                    <CardTitle>Coming Soon!</CardTitle>
                    <CardDescription>
                        We are busy creating inspiring courses on tech, creativity, and leadership. Stay tuned!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <p className="mb-6 text-foreground/80">
                        Our course catalog will feature guided learning paths, hands-on projects, and expert-led workshops designed to help you grow at your own pace.
                    </p>
                    <Button asChild variant="outline">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
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
