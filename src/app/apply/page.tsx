
'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { brand } from '@/lib/brand';

const programPaths = [
  { id: 'all-in-one', label: `Complete ${brand.programName} Journey (All-in-One Track)`, description: 'Holistic growth, independence, and leadership.' },
  { id: 'tech', label: 'For Women in Tech Journeys', description: 'Coding, digital tools, AI basics, career confidence.' },
  { id: 'startup', label: 'For Women Aspiring to Start Startups or Businesses', description: 'Startup building, business modeling, entrepreneurship bootcamps.' },
  { id: 'creative', label: 'For Creative & Content Entrepreneurs', description: 'Blogging, book publishing, Canva editing, art creation, WordPress.' },
  { id: 'soft-skills', label: 'For Emotional, Personal & Soft Skills Growth', description: 'Confidence, leadership, communication, emotional intelligence.' },
];

const formSchema = z.object({
  fullName: z.string().min(1, 'Full name is required.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().optional(),
  location: z.string().optional(),
  programPath: z.string({ required_error: 'Please select a program path.' }),
  motivation: z.string().min(50, 'Please tell us more about your motivation (at least 50 characters).'),
  goals: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ApplyPage() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      programPath: 'soft-skills',
      motivation: '',
      goals: '',
      terms: false,
    },
  });

  function onSubmit(data: FormData) {
    console.log(data);
    toast({
      title: 'Application Submitted!',
      description: "We've received your application and will be in touch soon.",
    });
    form.reset();
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">Apply for {brand.programName}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Choose your path and begin your journey to learn, lead, and rise with SheCodesHerWay.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle>Your Application</CardTitle>
              <CardDescription>Fill out the form below to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="you@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="+91-xxxx-xxxx" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current City/State (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Bangalore, Karnataka" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Select Your Preferred {brand.programName} Path</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="programPath"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-2"
                                >
                                  {programPaths.map((path) => (
                                    <FormItem key={path.id} className="flex items-start space-x-3 space-y-0 rounded-md border p-4 transition-colors hover:bg-muted/50 has-[:checked]:bg-muted has-[:checked]:border-primary">
                                      <FormControl>
                                        <RadioGroupItem value={path.id} />
                                      </FormControl>
                                      <div className="space-y-1 leading-none">
                                        <FormLabel className="font-semibold">{path.label}</FormLabel>
                                        <p className="text-sm text-muted-foreground">{path.description}</p>
                                      </div>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    <Card>
                       <CardHeader>
                          <CardTitle className="text-xl">Your Motivation</CardTitle>
                       </CardHeader>
                       <CardContent className="space-y-4">
                          <FormField
                            control={form.control}
                            name="motivation"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Why are you interested in this program?</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your goals and aspirations..."
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="goals"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>What are your primary goals for joining SheCodesHerWay? (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="What do you hope to achieve?"
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                       </CardContent>
                    </Card>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                             I agree to the SheCodesHerWay{' '}
                            <Link href="/terms" className="text-primary hover:underline">
                              Terms & Conditions
                            </Link>{' '}
                            and{' '}
                            <Link href="/privacy" className="text-primary hover:underline">
                              Privacy Policy
                            </Link>
                            .
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
