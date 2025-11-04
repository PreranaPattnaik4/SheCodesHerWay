"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Target } from "lucide-react"

const chartData = [
  { goal: "Women Trained", target: 1000, fill: "var(--color-women)" },
  { goal: "Mentors", target: 100, fill: "var(--color-mentors)" },
  { goal: "Partners", target: 10, fill: "var(--color-partners)" },
  { goal: "Community", target: 5000, fill: "var(--color-community)" },
]

const chartConfig = {
  target: {
    label: "Target",
  },
  women: {
    label: "Women Trained",
    color: "hsl(var(--chart-1))",
  },
  mentors: {
    label: "Mentor Network",
    color: "hsl(var(--chart-2))",
  },
  partners: {
    label: "Organizations",
    color: "hsl(var(--chart-4))",
  },
  community: {
    label: "Community Members",
    color: "hsl(var(--chart-5))",
  },
}

export default function ImpactGoals() {
  return (
    <section>
        <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Impact Goals (2025-2026)</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                We are committed to making a tangible difference in the lives of women across India.
            </p>
        </div>
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6"/>
                    Key Performance Indicators
                </CardTitle>
                <CardDescription>Our measurable goals for the next two years.</CardDescription>
            </CardHeader>
            <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="goal"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            width={120}
                            />
                        <XAxis dataKey="target" type="number" hide />
                        <Tooltip cursor={{fill: 'hsl(var(--muted))'}} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey="target" radius={8} />
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
            </CardContent>
        </Card>
    </section>
  )
}
