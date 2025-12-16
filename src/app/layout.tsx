import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import Chatbot from '@/components/chatbot/chatbot';

export const metadata: Metadata = {
  title: 'EmpowerFly by SheCodesHerWay',
  description: 'Build Your Path. Lead Your Way. Leave Your Mark.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background text-foreground font-body antialiased')} suppressHydrationWarning>
        <FirebaseClientProvider>
          {children}
          <Chatbot />
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
