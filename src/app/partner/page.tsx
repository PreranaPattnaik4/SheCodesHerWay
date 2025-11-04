
'use client';

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Info, CheckCircle2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ScrollArea } from '@/components/ui/scroll-area';


const mentorTopics = [
  { id: 'tech', label: 'Tech Journeys' },
];

export default function PartnerPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    toast({
        title: "Application Submitted!",
        description: `Your mentor application has been received. We'll be in touch soon!`,
    });
    form.reset();
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">Partner with Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Become a mentor and help shape the future of women in tech and creative fields.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto shadow-lg">
                 <form onSubmit={handleSubmit} data-form-type="Mentor application">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Become a Mentor</CardTitle>
                            <CardDescription>
                                Are you a student or professional passionate about giving back? Join us as a mentor to guide and inspire the next generation.
                                After you apply, our team will review your profile. Selected mentors will be added to our community WhatsApp group.
                            </CardDescription>
                          </div>
                           <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Info className="mr-2 h-4 w-4" />
                                  Learn More
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle className="font-headline text-2xl">🤝 For Mentors & Guides — Join the SheCodesHerWay Movement</AlertDialogTitle>
                                  <AlertDialogDescription asChild>
                                    <ScrollArea className="max-h-[60vh] pr-6">
                                      <div className="space-y-6 text-foreground/90 py-4">
                                        <div>
                                          <h3 className="font-semibold text-lg">Goal:</h3>
                                          <p>To build a supportive, collaborative network of mentors who believe in empowering women through learning, leadership, and kindness.</p>
                                        </div>
                                        
                                        <div>
                                          <h3 className="font-semibold text-lg">💫 Who Can Join as a Mentor:</h3>
                                          <ul className="mt-2 space-y-2 list-disc list-inside">
                                            <li>Professionals, educators, entrepreneurs, or creators passionate about women’s growth in tech, business, or creativity.</li>
                                            <li>Women who’ve learned from experience and want to uplift others starting their journey.</li>
                                            <li>Students or early professionals with strong technical, creative, or soft skills, willing to mentor peers.</li>
                                          </ul>
                                        </div>

                                        <div>
                                          <h3 className="font-semibold text-lg">🌷 What Mentors Will Gain:</h3>
                                          <ul className="mt-2 space-y-3">
                                            {[
                                              { title: "Certificate of Recognition", description: "Receive an official SheCodesHerWay Mentor Certificate for your contribution." },
                                              { title: "Leadership & Impact Experience", description: "Enhance your resume and personal portfolio by showcasing your mentorship and community impact." },
                                              { title: "Networking Opportunities", description: "Connect with like-minded changemakers, industry experts, and fellow mentors." },
                                              { title: "Personal Growth & Visibility", description: "Be featured on our platform as a recognized mentor — highlighting your story and journey." },
                                              { title: "Future Career Opportunities", description: "Get first preference for future collaborations, paid roles, and team opportunities as we expand." },
                                            ].map(item => (
                                              <li key={item.title} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                                <div>
                                                  <span className="font-semibold">{item.title}:</span>
                                                  <p className="text-sm text-foreground/80">{item.description}</p>
                                                </div>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h3 className="font-semibold text-lg">💖 How to Join:</h3>
                                          <ul className="mt-2 space-y-2 list-disc list-inside">
                                            <li>No fees or formal registration costs — this initiative is volunteer-based and purpose-driven.</li>
                                            <li>Fill out our Mentor Interest Form.</li>
                                            <li>Choose your area of contribution:
                                              <ul className="pl-4 mt-1 space-y-1">
                                                <li>👩‍💻 Tech & Coding</li>
                                                <li>🚀 Startup & Entrepreneurship</li>
                                                <li>🎨 Creativity & Content</li>
                                                <li>💬 Soft Skills & Emotional Growth</li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                        
                                        <p className="font-semibold text-center text-lg pt-4">✨ At SheCodesHerWay, we believe every woman who lifts another is a leader. Join us as a mentor — to guide, inspire, and grow together. 🌸</p>
                                      </div>
                                    </ScrollArea>
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogAction>Close</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="mentor-name">Full Name</Label>
                            <Input id="mentor-name" placeholder="Your Name" required/>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="mentor-email">Email Address</Label>
                            <Input id="mentor-email" type="email" placeholder="you@example.com" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="mentor-linkedin">LinkedIn Profile</Label>
                             <div className="relative">
                                <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="mentor-linkedin" placeholder="https://linkedin.com/in/your-profile" className="pl-9" required/>
                            </div>
                        </div>
                        <div className="space-y-4">
                          <Label>Which topics can you teach?</Label>
                          <div className="space-y-2">
                            {mentorTopics.map((topic) => (
                              <div key={topic.id} className="flex items-center space-x-2">
                                <Checkbox id={`topic-${topic.id}`} />
                                <Label htmlFor={`topic-${topic.id}`} className="font-normal">
                                  {topic.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="mentor-contribution">How would you like to contribute?</Label>
                            <Textarea id="mentor-contribution" placeholder="Tell us about your expertise and how you'd like to help..." required/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Apply to be a Mentor</Button>
                    </CardFooter>
                </form>
            </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
