
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Bot, MessageSquare, Image as ImageIcon, Code, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aiTools = [
    {
        icon: MessageSquare,
        title: "EmpowerFly AI Coach",
        description: "Get personalized guidance on careers, learning, and more from our AI coach.",
        href: "/chatbot",
        isReady: true,
    },
    {
        icon: ImageIcon,
        title: "AI Image Generator",
        description: "Create stunning visuals and graphics for your projects with simple text prompts.",
        href: "/ai-coaching/image-generator",
        isReady: false,
    },
    {
        icon: Code,
        title: "CodeCanvas",
        description: "Generate code snippets, get debugging help, and accelerate your development.",
        href: "/ai-coaching/code-canvas",
        isReady: false,
    },
    {
        icon: FileText,
        title: "AI-Powered Executive Summary",
        description: "Craft a compelling executive summary for your startup pitch deck in minutes.",
        href: "/ai-tools",
        isReady: true,
    }
]

export default function AiCoachingPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'feature-ai-coaching');

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative bg-secondary py-16 md:py-24">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="container relative mx-auto px-4 text-center">
                <Bot className="mx-auto h-12 w-12 text-primary" />
                <h1 className="mt-4 font-headline text-4xl font-bold md:text-6xl">AI Coaching &amp; Tools</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Explore our suite of AI-powered tools designed to help you learn, create, and grow with confidence.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {aiTools.map((tool) => (
                    <Card key={tool.title} className="flex flex-col shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="bg-primary/10 text-primary p-3 rounded-full">
                                    <tool.icon className="h-7 w-7" />
                                </div>
                                {!tool.isReady && <Badge variant="outline">Coming Soon</Badge>}
                            </div>
                            <CardTitle className="pt-4">{tool.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{tool.description}</CardDescription>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Button asChild variant="outline" className="w-full" disabled={!tool.isReady}>
                                <Link href={tool.isReady ? tool.href : '#'}>
                                    {tool.isReady ? 'Use Tool' : 'Coming Soon'}
                                    {tool.isReady && <ArrowRight className="ml-2 h-4 w-4" />}
                                </Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>

        <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                 <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
                 <h2 className="mt-4 font-headline text-3xl font-bold">Built with Care &amp; Responsibility</h2>
                 <p className="mt-4 text-lg text-foreground/80">
                    At SheCodesHerWay, we are committed to developing AI tools that are not only powerful but also ethical and responsible. Our goal is to empower you while ensuring fairness, transparency, and respect for privacy. We design our AI to assist, not replace, human creativity and potential.
                 </p>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
