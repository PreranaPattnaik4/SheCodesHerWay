

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData, type FaqCategory } from "@/lib/faq-data"
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Separator } from "./ui/separator";
import { homeFaqData } from "@/lib/home-faq-data";

interface FaqProps {
  showAll?: boolean;
}

export default function Faq({ showAll = false }: FaqProps) {
  const faqsToShow = showAll ? faqData : [];

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Find answers to common questions about our programs, mentorship, and how to get involved.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-12">
        {showAll ? (
            faqsToShow.map((category, catIndex) => (
                <div key={catIndex}>
                    <h3 className="text-2xl font-bold font-headline mb-6 text-center">{category.title}</h3>
                    <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                        <AccordionItem value={`item-${catIndex}-${index}`} key={index}>
                        <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-foreground/80">
                            {faq.answer}
                        </AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                    {catIndex < faqsToShow.length - 1 && <Separator className="my-12" />}
                </div>
            ))
        ) : (
             <Accordion type="single" collapsible className="w-full">
              {homeFaqData.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        )}
      </div>

      {!showAll && (
        <div className="text-center mt-8">
            <p className="text-foreground/80">
            Have more questions? Visit our full FAQ section.
            </p>
            <Button asChild className="mt-4">
                <Link href="/faq">
                    View All FAQs
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      )}
    </section>
  )
}
