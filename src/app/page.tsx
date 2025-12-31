
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { brand } from '@/lib/brand';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/logo';

export default function PromotionalPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center text-center">
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
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <Logo />
        <h1 className="mt-8 font-headline text-5xl font-extrabold tracking-tight drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl">
          Coming Soon
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium drop-shadow-sm md:text-xl">
          Our new platform is currently under intensive development.
        </p>
        <div className="mt-10 rounded-lg bg-background/80 p-6 shadow-2xl backdrop-blur-sm">
            <h2 className="text-xl font-bold text-primary">Stay Tuned for the Launch!</h2>
            <p className="mt-2 text-foreground/80">
                We are working hard to bring you an empowering new experience. Until then, stay connected with us on social media for the latest updates.
            </p>
            <div className="mt-6 flex justify-center space-x-6">
                <Link href="https://x.com/preranakailash4" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
                </Link>
                <Link href="https://www.linkedin.com/company/shecodesherway/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
                </Link>
                <Link href="https://github.com/PreranaPattnaik4/SheCodesHerWay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-7 w-7 text-foreground/80 transition-colors hover:text-primary" />
                </Link>
            </div>
        </div>
      </div>
    </main>
  );
}
