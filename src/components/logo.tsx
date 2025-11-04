import { brand } from '@/lib/brand';
import React from 'react';
import Link from 'next/link';

const LogoIcon = ({ className }: { className?: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 1.5C12 1.5 6.5 6 3 9C1 11 3 17 6 19C9 21 12 22.5 12 22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22.5C12 22.5 17.5 21 21 18C23 16 21 10 18 8C15 6 12 1.5 12 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 9C3 9 7 10.5 12 12C17 13.5 21 15 21 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label={`${brand.name} homepage`}>
    <LogoIcon className="text-primary"/>
    <span className="font-headline text-xl font-bold text-foreground">
      {brand.name}
    </span>
  </Link>
);

export default Logo;
