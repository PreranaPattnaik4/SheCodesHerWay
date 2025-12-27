
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ExternalLink, FileText, LayoutTemplate, Link as LinkIcon, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const resources = [
  {
    title: "Python Cheat Sheet",
    description: "Quick reference guide for Python basics, syntax, and common functions.",
    type: "link",
    href: "#",
    category: "Guides & Tutorials",
    icon: FileText,
    format: "PDF"
  },
  {
    title: "Figma UI Templates",
    description: "Free UI kits and design systems to kickstart your web and mobile projects.",
    type: "external",
    href: "#",
    category: "Templates & Tools",
    icon: LayoutTemplate,
    format: "Figma"
  },
  {
    title: "Kaggle Datasets",
    description: "A vast collection of datasets for data science, machine learning, and AI projects.",
    type: "external",
    href: "https://www.kaggle.com/datasets",
    category: "External References",
    icon: LinkIcon,
    format: "Website"
  },
  {
    title: "JavaScript ES6+ Guide",
    description: "A comprehensive guide to modern JavaScript features and syntax.",
    type: "link",
    href: "#",
    category: "Guides & Tutorials",
    icon: FileText,
    format: "PDF"
  },
  {
    title: "React Component Library",
    description: "A set of reusable React components to accelerate your web development.",
    type: "external",
    href: "#",
    category: "Templates & Tools",
    icon: LayoutTemplate,
    format: "Code"
  },
   {
    title: "Awesome Design Tools",
    description: "A curated list of the best design tools for UI/UX designers.",
    type: "external",
    href: "#",
    category: "External References",
    icon: LinkIcon,
    format: "Website"
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold md:text-6xl">Resources</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Explore curated resources, guides, and references to support your learning and project work. Access downloadable content and important materials from trusted sources—all in one place.
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-12">
                <div className="relative max-w-lg mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search resources..." className="pl-12 text-base" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                    <Card key={index} className="flex flex-col shadow-lg">
                        <CardHeader>
                            <div className='flex items-center justify-between'>
                                <div className="bg-primary/10 text-primary p-3 rounded-full">
                                    <resource.icon className="h-6 w-6" />
                                </div>
                                <Badge variant="outline">{resource.category}</Badge>
                            </div>
                            <CardTitle className="pt-4">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{resource.description}</CardDescription>
                        </CardContent>
                        <div className="p-6 pt-0">
                           <Button asChild className="w-full">
                                <Link href={resource.href} target={resource.type === 'external' ? '_blank' : '_self'}>
                                    {resource.type === 'link' ? 'Download' : 'Visit Link'}
                                    {resource.type === 'link' ? <Download className="ml-2 h-4 w-4" /> : <ExternalLink className="ml-2 h-4 w-4" />}
                                </Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
