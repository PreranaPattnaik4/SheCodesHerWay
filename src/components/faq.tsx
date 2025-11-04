
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData, type FAQ } from "@/lib/faq-data"
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Faq() {
  // Show only the first 4 FAQs on other pages
  const faqsToShow = faqData.slice(0, 4);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Find answers to common questions about our programs, mentorship, and how to get involved.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqsToShow.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-8">
        <p className="text-foreground/80">
          Have more questions? Visit our <Link href="/about" className="text-primary hover:underline">About</Link> page or see our full FAQ section.
        </p>
        <Button asChild variant="outline" className="mt-4">
            <Link href="/faq">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
      </div>
    </section>
  )
}
