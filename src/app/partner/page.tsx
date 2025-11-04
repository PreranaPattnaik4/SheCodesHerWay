
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
import { Linkedin } from 'lucide-react';

const mentorTopics = [
  { id: 'tech', label: 'Tech Journeys (Coding, AI, etc.)' },
  { id: 'startup', label: 'Startups & Business' },
  { id: 'creative', label: 'Creative & Content Entrepreneurship' },
  { id: 'soft-skills', label: 'Emotional & Soft Skills Growth' },
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
                        <CardTitle>Become a Mentor</CardTitle>
                        <CardDescription>
                            Are you a student or professional passionate about giving back? Join us as a mentor to guide and inspire the next generation.
                            After you apply, our team will review your profile. Selected mentors will be added to our community WhatsApp group.
                        </CardDescription>
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
