"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { UserPlus, Briefcase, Handshake, Linkedin } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

const mentorTopics = [
  { id: 'tech', label: 'Tech Journeys (Coding, AI, etc.)' },
  { id: 'startup', label: 'Startups & Business' },
  { id: 'creative', label: 'Creative & Content Entrepreneurship' },
  { id: 'soft-skills', label: 'Emotional & Soft Skills Growth' },
];


export default function JoinUs() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formType = form.dataset.formType || "Application";
    toast({
        title: "Application Submitted!",
        description: `Your ${formType.toLowerCase()} has been received. We'll be in touch soon!`,
    });
    form.reset();
  }

  return (
    <section>
        <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Partner with Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Whether you're a student, professional, or an organization, there's a place for you at SheCodesHerWay.
            </p>
        </div>

        <Tabs defaultValue="enroll" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-auto">
            <TabsTrigger value="enroll" className="py-2"><UserPlus className="mr-2 h-4 w-4"/>Enroll in Program</TabsTrigger>
            <TabsTrigger value="partner" className="py-2"><Handshake className="mr-2 h-4 w-4"/>Become a Mentor</TabsTrigger>
        </TabsList>
        <TabsContent value="enroll" className="mt-8">
            <Card className="max-w-2xl mx-auto shadow-lg">
                <CardHeader>
                <CardTitle>Enroll in Sangini Udaan</CardTitle>
                <CardDescription>Ready to begin your journey of empowerment? Apply now!</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Button asChild size="lg">
                        <Link href="/apply">Apply to Sangini Udaan</Link>
                    </Button>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="partner" className="mt-8">
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
        </TabsContent>
        </Tabs>
    </section>
  )
}
