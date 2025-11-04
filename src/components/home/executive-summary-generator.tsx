
"use client"

import React, { useEffect } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { handleGenerateSummary, type ActionState } from "@/app/actions"
import { brand } from "@/lib/brand"
import { useToast } from "@/components/ui/use-toast"
import { Bot, Loader2, Copy } from "lucide-react"

const formSchema = z.object({
  startupName: z.string().default(brand.name),
  mission: z.string().default(brand.mission),
  flagshipProgram: z.string().default(brand.programName),
  founderName: z.string().default(brand.founder.name),
  vision: z.string().default(brand.vision),
})

type FormData = z.infer<typeof formSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Generate Summary
        </>
      )}
    </Button>
  );
}

export default function ExecutiveSummaryGenerator() {
  const [state, formAction] = useFormState<ActionState, FormData>(handleGenerateSummary, { success: false })
  const { toast } = useToast()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startupName: brand.name,
      mission: brand.mission,
      flagshipProgram: brand.programName,
      founderName: brand.founder.name,
      vision: brand.vision,
    },
  })
  const { formState, reset } = form;

  const [generatedSummary, setGeneratedSummary] = React.useState<string | null>(null)
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state.success && state.data) {
      setGeneratedSummary(state.data.executiveSummary)
      toast({
        title: "Summary Generated!",
        description: "Your executive summary has been created successfully.",
      })
      reset(form.getValues()) // Reset form state but keep values
    } else if (!state.success && state.error && typeof state.error === 'string') {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      })
    }
  }, [state, toast, reset, form])

  const copyToClipboard = () => {
    if (generatedSummary) {
      navigator.clipboard.writeText(generatedSummary);
      toast({
        title: "Copied to Clipboard!",
        description: "The executive summary has been copied.",
      });
    }
  };

  return (
    <section className="w-full">
      <div className="text-center mb-10">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">AI-Powered Executive Summary</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Generate a concise and compelling executive summary for your pitch deck using our AI tool.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Form {...form}>
          <form
            action={formAction}
            className="space-y-8"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Startup Details</CardTitle>
                <CardDescription>Provide the key details for your startup.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="startupName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Startup Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., SheCodesHerWay" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="founderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Founder's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Prerana Kailash Pattnaik" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mission"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mission</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your startup's mission statement" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vision"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vision</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your startup's vision statement" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="flagshipProgram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Flagship Program</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Sangini Udaan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </Card>
          </form>
        </Form>

        <Card className="shadow-lg h-full">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle>Generated Summary</CardTitle>
                <CardDescription>Your AI-crafted executive summary will appear here.</CardDescription>
            </div>
            {generatedSummary && (
              <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <div className="prose prose-stone dark:prose-invert min-h-[300px] rounded-md border bg-muted/50 p-4">
              {pending ? (
                 <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin mb-4" />
                    <p>Generating your summary...</p>
                 </div>
              ) : generatedSummary ? (
                <p>{generatedSummary}</p>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <Bot className="h-8 w-8 mb-4"/>
                    <p>Your summary will be displayed here.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
