
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ExternalLink, FileText, LayoutTemplate, Link as LinkIcon, Search, CheckCircle2, Rocket } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

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

const sampleProjects = [
    {
        title: "Personal Portfolio Website",
        track: "Women in Tech",
        description: "Build and deploy a beautiful, responsive portfolio website to showcase your skills and projects.",
        tasks: [
            "Design a single-page layout in Figma.",
            "Write the HTML structure for all sections.",
            "Style the page using basic CSS.",
            "Add a simple JavaScript animation.",
            "Deploy the site to a free hosting service."
        ],
        image: "https://picsum.photos/seed/project1/600/400"
    },
    {
        title: "Simple Business Pitch Deck",
        track: "Women in Business",
        description: "Create a compelling 5-slide pitch deck for a fictional small business idea.",
        tasks: [
            "Define the problem your business solves.",
            "Outline your unique solution.",
            "Identify your target customer.",
            "Create a simple one-year financial goal.",
            "Design the slides using Canva or Google Slides."
        ],
        image: "https://picsum.photos/seed/project2/600/400"
    },
    {
        title: "Your First Blog Post",
        track: "Creative & Content",
        description: "Write, design, and publish your first blog post on a topic you are passionate about.",
        tasks: [
            "Choose a topic and create an outline.",
            "Write a 500-word article.",
            "Design a header image using Canva.",
            "Publish the post on a platform like Medium.",
            "Share your article on one social media channel."
        ],
        image: "https://picsum.photos/seed/project3/600/400"
    },
    {
        title: "Personal Development Plan",
        track: "Personal & Soft Skills",
        description: "Create a structured personal development plan to track your growth over the next 3 months.",
        tasks: [
            "Identify one key skill you want to improve.",
            "Set a clear, measurable goal for that skill.",
            "List 3-5 specific actions you will take.",
            "Define how you will measure your progress.",
            "Schedule weekly check-ins with yourself."
        ],
        image: "https://picsum.photos/seed/project4/600/400"
    },
    {
        title: "Digital Tool Mastery",
        track: "Non-Tech Empowerment",
        description: "Learn to use a new digital tool (like a project manager or online form builder) to organize a task.",
        tasks: [
            "Choose a tool (e.g., Trello, Google Forms).",
            "Watch a 10-minute tutorial on its basic features.",
            "Create a simple project (e.g., a to-do list).",
            "Use the tool to track one task from start to finish.",
            "Share a screenshot of your completed task."
        ],
        image: "https://picsum.photos/seed/project5/600/400"
    },
    {
        title: "Mini-Project: A Landing Page",
        track: "All-in-One Journey",
        description: "Combine basic tech and business skills to create a landing page for a simple service or product.",
        tasks: [
            "Define a simple service you could offer.",
            "Write a short headline and description.",
            "Build a single-page website using a template.",
            "Add a call-to-action button.",
            "Share the link with a friend for feedback."
        ],
        image: "https://picsum.photos/seed/project6/600/400"
    }
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

        <Separator />

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Project Samples</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Get inspired with these beginner-friendly sample projects from our learning tracks.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleProjects.map((project, index) => (
                    <Card key={index} className="flex flex-col shadow-lg overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit">{project.track}</Badge>
                            <CardTitle className="pt-2">{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <h4 className="font-semibold mb-2">Key Tasks:</h4>
                            <ul className="space-y-2">
                                {project.tasks.map((task, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-foreground/80">{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <div className="p-6 pt-0">
                           <Button asChild className="w-full" variant="outline">
                                <Link href="#">
                                    <Rocket className="mr-2 h-4 w-4" />
                                    Start this Project
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
