"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { UserPlus, Briefcase } from "lucide-react"

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
            <TabsTrigger value="partner" className="py-2"><Briefcase className="mr-2 h-4 w-4"/>Partner with Us</TabsTrigger>
        </TabsList>
        <TabsContent value="enroll" className="mt-8">
            <Card className="max-w-2xl mx-auto shadow-lg">
                <form onSubmit={handleSubmit} data-form-type="Enrollment">
                    <CardHeader>
                    <CardTitle>Enroll in Sangini Udaan</CardTitle>
                    <CardDescription>Begin your journey of empowerment. Fill out the form to apply.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                        <Label htmlFor="enroll-name">Full Name</Label>
                        <Input id="enroll-name" placeholder="Your Name" required/>
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="enroll-email">Email Address</Label>
                        <Input id="enroll-email" type="email" placeholder="you@example.com" required/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="enroll-status">Current Status</Label>
                        <Select required>
                            <SelectTrigger id="enroll-status">
                                <SelectValue placeholder="Select your status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="student">College/University Student</SelectItem>
                                <SelectItem value="professional">Early-Career Professional</SelectItem>
                                <SelectItem value="transitioning">Transitioning into Tech/Creative</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="enroll-motivation">Why do you want to join?</Label>
                        <Textarea id="enroll-motivation" placeholder="Tell us about your goals and aspirations..." required/>
                    </div>
                    </CardContent>
                    <CardFooter>
                    <Button type="submit">Submit Application</Button>
                    </CardFooter>
                </form>
            </Card>
        </TabsContent>
        <TabsContent value="partner" className="mt-8">
            <Card className="max-w-2xl mx-auto shadow-lg">
                 <form onSubmit={handleSubmit} data-form-type="Partnership application">
                    <CardHeader>
                        <CardTitle>Become a Partner</CardTitle>
                        <CardDescription>Join us as a mentor, trainer, or collaborator to make a difference.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="partner-name">Name / Organization Name</Label>
                            <Input id="partner-name" placeholder="Your Name or Company" required/>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="partner-email">Contact Email</Label>
                            <Input id="partner-email" type="email" placeholder="contact@company.com" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="partner-type">I want to...</Label>
                            <Select required>
                                <SelectTrigger id="partner-type">
                                    <SelectValue placeholder="Select a partnership type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="mentor">Be a Mentor</SelectItem>
                                    <SelectItem value="trainer">Be a Trainer</SelectItem>
                                    <SelectItem value="corporate">Become a Corporate Partner</SelectItem>
                                    <SelectItem value="ngo">Collaborate as an NGO/Community</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="partner-proposal">How would you like to contribute?</Label>
                            <Textarea id="partner-proposal" placeholder="Tell us about your ideas for collaboration..." required/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Send Proposal</Button>
                    </CardFooter>
                </form>
            </Card>
        </TabsContent>
        </Tabs>
    </section>
  )
}
