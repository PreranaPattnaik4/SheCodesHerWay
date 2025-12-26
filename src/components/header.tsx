
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';
import UserAuth from './auth/user-auth';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sangini-udaan', label: 'Our Program' },
  { href: '/program-syllabus', label: 'Program Syllabus' },
  { href: '/ai-coaching', label: 'AI Coaching' },
  { href: '/chatbot', label: 'EmpowerFly Assistant' },
  { href: '/community', label: 'Community' },
  { href: '/blog', label: 'Our Blogs' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center space-x-6 font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
           <div className="hidden sm:flex">
             <UserAuth />
           </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full h-full bg-background/60 backdrop-blur">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <Logo />
                 <div className="sm:hidden">
                  <UserAuth />
                </div>
                <nav className="flex flex-col gap-4 text-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
