
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GraduationCap, Users, Bot, Rocket, HeartHandshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const whoIsItFor = [
    "Students & beginners exploring career paths",
    "Women returning to work",
    "Aspiring tech professionals & creators",
    "Early-stage founders & entrepreneurs",
]

const whatWeOffer = [
    { icon: GraduationCap, text: "Skill-based learning (Tech, AI, Design, Business)" },
    { icon: HeartHandshake, text: "Mentorship & community support" },
    { icon: Bot, text: "Career & startup guidance" },
    { icon: Rocket, text: "Project-based, outcome-driven journeys" },
    { icon: Users, text: "Confidence, leadership & personal growth" },
]

export default function StartupSchool() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "feature-live-events");
  return (
    <section>
       <div className="max-w-6xl mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl font-bold">Sangini Udaan — Flagship Program</h2>
            <p className="mt-4 text-2xl text-primary italic">
              Empower Her to Fly Beyond Limits
            </p>
            <p className="mt-6 text-lg text-foreground/80">
              Sangini Udaan is the soul of SheCodesHerWay — a guided mentorship and growth journey crafted to help women build skills, confidence, and clarity across technology, creativity, business, and leadership.
            </p>

            <div className="mt-8 space-y-6">
                <Card className="bg-muted/50 border-0">
                    <CardHeader>
                        <CardTitle className="text-xl">What is Sangini Udaan?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>A holistic, women-centric program designed to nurture learners into leaders and creators into founders — with real guidance, real projects, and real growth.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-muted/50 border-0">
                    <CardHeader>
                        <CardTitle className="text-xl">Who is it for?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 list-disc list-inside">
                            {whoIsItFor.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            </div>
          </div>
          <div className="relative">
            {heroImage && (
              <div className="rounded-lg shadow-2xl overflow-hidden aspect-video">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
             <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="text-xl">What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {whatWeOffer.map(item => (
                            <li key={item.text} className="flex items-start gap-3">
                                <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1"/>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            
          </div>
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
            <h3 className="font-headline text-3xl font-bold text-primary">The Impact</h3>
            <p className="mt-4 text-xl">Women don’t just learn — they launch, lead, and grow with purpose.</p>
             <div className="mt-8 flex items-center justify-center gap-4">
                <Button asChild size="lg">
                <Link href="/apply">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                <Link href="/sangini-udaan">Learn More</Link>
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
}
