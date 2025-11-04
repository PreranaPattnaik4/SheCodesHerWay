
import Header from '@/components/header';
import Footer from '@/components/footer';
import ExecutiveSummaryGenerator from '@/components/home/executive-summary-generator';
import { Bot } from 'lucide-react';

export default function AiToolsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <Bot className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">AI-Powered Tools</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Leverage the power of AI to streamline your work and craft compelling narratives for your startup journey.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <ExecutiveSummaryGenerator />
        </section>
      </main>
      <Footer />
    </div>
  );
}
