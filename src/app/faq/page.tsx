
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/lib/faq-data"

export default function FAQPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold md:text-6xl">Frequently Asked Questions</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Find answers to your questions about SheCodesHerWay, our programs, and how to get involved.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-foreground/80">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
