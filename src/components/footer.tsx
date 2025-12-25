
import { Github, Linkedin, Twitter } from 'lucide-react';
import Logo from './logo';
import { brand } from '@/lib/brand';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* About Section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Logo />
            <p className="mt-4 max-w-md text-sm text-secondary-foreground/80">
              {brand.mission}
            </p>
             <p className="mt-4 text-xs text-secondary-foreground/60">
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center lg:text-left">
            <p className="font-semibold">Quick Links</p>
            <nav className="mt-4 grid grid-cols-2 gap-2 text-sm text-secondary-foreground/80">
              <Link href="/about" className="transition-colors hover:text-primary">About Us</Link>
              <Link href="/sangini-udaan" className="transition-colors hover:text-primary">Our Program</Link>
              <Link href="/internship" className="transition-colors hover:text-primary">Internships</Link>
              <Link href="/careers" className="transition-colors hover:text-primary">Careers</Link>
              <Link href="/community" className="transition-colors hover:text-primary">Community</Link>
              <Link href="/faq" className="transition-colors hover:text-primary">FAQs</Link>
              <Link href="/terms" className="transition-colors hover:text-primary">Terms of Service</Link>
              <Link href="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
            </nav>
          </div>

          {/* Contact and Socials Section */}
          <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
            <p className="font-semibold">Get in Touch</p>
            <a href={`mailto:${brand.email}`} className="mt-4 text-sm text-secondary-foreground/80 transition-colors hover:text-primary">
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
      </div>
    </footer>
  );
}
