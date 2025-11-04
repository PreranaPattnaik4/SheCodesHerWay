import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { brand } from '@/lib/brand';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Code, Lightbulb, Users, Briefcase, Handshake } from 'lucide-react';
import Image from 'next/image';

const programComponents = [
    {
        icon: Code,
        title: "Skill Development",
        description: "Hands-on training in tech, design, and creative storytelling to build tangible skills.",
        image: PlaceHolderImages.find(p => p.id === "program-skill-dev")
    },
    {
        icon: Users,
        title: "Mentorship & Support",
        description: "Personalized guidance from industry experts and a strong peer support network.",
        image: PlaceHolderImages.find(p => p.id === "program-mentorship")
    },
    {
        icon: Briefcase,
        title: "Internship Opportunities",
        description: "Access to real-world projects and internship roles to build career readiness.",
        image: PlaceHolderImages.find(p => p.id === "program-internship")
    },
    {
        icon: Handshake,
        title: "Community Engagement",
        description: "Leadership sessions and community events to foster connection and confidence.",
        image: PlaceHolderImages.find(p => p.id === "program-community")
    }
]

export default function ProgramOverview() {
    return (
        <section>
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">{brand.programName}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-primary">
                    "{brand.programTagline}"
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-foreground/80">
                    Our flagship mentorship and empowerment program designed to build confidence, connection, and career readiness for women in technology and creative fields.
                </p>
            </div>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {programComponents.map((item) => (
                    <Card key={item.title} className="flex flex-col overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
                        {item.image && (
                            <div className="relative h-48 w-full">
                                <Image
                                    src={item.image.imageUrl}
                                    alt={item.image.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={item.image.imageHint}
                                />
                            </div>
                        )}
                        <CardHeader className="flex-row gap-4 items-center">
                            <div className="rounded-full bg-primary/10 p-3 text-primary">
                                <item.icon className="h-6 w-6" />
                            </div>
                             <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-foreground/80">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
