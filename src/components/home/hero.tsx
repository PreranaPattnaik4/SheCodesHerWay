import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { brand } from '@/lib/brand';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-foreground">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl">
            {brand.name}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg font-medium drop-shadow-sm md:text-xl">
            {brand.mission}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#program">
                Explore Sangini Udaan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/80">
              <Link href="#partner-with-us">
                Partner with Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
