import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { brand } from '@/lib/brand';
import { Rocket, Eye, Goal } from 'lucide-react';

export default function MissionVision() {
  return (
    <section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-lg transform transition-transform hover:scale-105 duration-300 bg-white dark:bg-card">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <Rocket className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-foreground/80">"{brand.mission}"</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg transform transition-transform hover:scale-105 duration-300 bg-white dark:bg-card">
                <CardHeader className="flex flex-row items-center gap-4">
                     <div className="rounded-full bg-accent/20 p-3 text-accent-foreground">
                        <Eye className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-foreground/80">{brand.vision}</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg transform transition-transform hover:scale-105 duration-300 md:col-span-2 lg:col-span-1 bg-white dark:bg-card">
                <CardHeader className="flex flex-row items-center gap-4">
                     <div className="rounded-full bg-secondary p-3 text-secondary-foreground">
                        <Goal className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Our Goal</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-foreground/80">To support women who have skills, experience, and potential but were left behind due to life responsibilities—by helping them rediscover their strengths, rebuild confidence, and create meaningful careers on their own terms.</p>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
