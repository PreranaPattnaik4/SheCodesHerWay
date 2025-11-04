import { Github, Linkedin, Twitter } from 'lucide-react';
import Logo from './logo';
import { brand } from '@/lib/brand';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <div className="sm:self-start self-center">
            <Logo />
          </div>
          <p className="mt-2 max-w-md text-sm text-secondary-foreground/80">
            {brand.mission}
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-end">
          <p className="font-semibold">Contact Us</p>
          <a href={`mailto:${brand.email}`} className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary">
            {brand.email}
          </a>
          <div className="mt-4 flex space-x-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-secondary-foreground/80 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-secondary-foreground/80 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 text-secondary-foreground/80 transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-4">
        <p className="text-center text-sm text-secondary-foreground/60">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
