import { brand } from '@/lib/brand';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function AboutFounder() {
  const founderImage = PlaceHolderImages.find((p) => p.id === 'founder-portrait');

  return (
    <section>
      <Card className="overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full min-h-[300px]">
            {founderImage && (
              <Image
                src={founderImage.imageUrl}
                alt={founderImage.description}
                fill
                className="object-cover"
                data-ai-hint={founderImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="font-headline text-3xl font-bold">About the Founder</h2>
            <p className="mt-2 text-lg font-semibold text-primary">{brand.founder.name}</p>
            <p className="mt-4 text-foreground/80">{brand.founder.bio}</p>
            <Button asChild className="mt-6 w-fit" variant="outline">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
