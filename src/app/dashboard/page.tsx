
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Book, CheckCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { useUser } from '@/firebase/hooks';

const stats = [
    { icon: BookOpen, label: "Enrolled Courses", value: "4" },
    { icon: Book, label: "Active Courses", value: "4" },
    { icon: CheckCircle, label: "Completed Courses", value: "0" },
    { icon: GraduationCap, label: "Total Courses", value: "5" },
];

const inProgressCourse = {
    title: "Web Development Fundamentals with Responsive Web Design Essentials",
    completedLessons: 0,
    totalLessons: 10,
    rating: 0.0,
    image: PlaceHolderImages.find(p => p.id === 'feature-workshops')
}

export default function DashboardPage() {
    const { user } = useUser();
  return (
    <div className="w-full">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Welcome, {user?.displayName?.split(' ')[0] || 'User'}!</h1>
        </div>

        <Card className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-primary/30 mb-8">
            <CardHeader>
                <CardTitle className="font-headline text-2xl md:text-3xl">My Program Journey</CardTitle>
                <CardDescription className="text-lg text-primary italic">“Empower Her to Fly Beyond Limits.”</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="mb-4">You are enrolled in: <strong>Sangini Udaan : EmpowerFly — Cohort 1</strong></p>
                <Button asChild>
                    <Link href="/dashboard/program">
                        View My Journey <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {stats.map((stat) => (
                <Card key={stat.label}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                        <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                        <div className="p-1.5 bg-primary/10 rounded-full">
                            <stat.icon className="h-4 w-4 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <div className="text-2xl font-bold">{stat.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">In Progress Courses</h2>
            <Card>
                <CardContent className="p-4 flex flex-col md:flex-row gap-6">
                    {inProgressCourse.image && (
                         <div className="relative w-full md:w-1/3 h-48 md:h-auto rounded-md overflow-hidden">
                             <Image
                                src={inProgressCourse.image.imageUrl}
                                alt={inProgressCourse.image.description}
                                fill
                                className="object-cover"
                                data-ai-hint={inProgressCourse.image.imageHint}
                            />
                         </div>
                    )}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">{inProgressCourse.title}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <span>☆☆☆☆☆</span>
                            <span className="font-semibold">{inProgressCourse.rating.toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                            Completed Lessons: {inProgressCourse.completedLessons} of {inProgressCourse.totalLessons}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <Progress value={(inProgressCourse.completedLessons / inProgressCourse.totalLessons) * 100} className="w-full" />
                            <span className="text-sm font-medium">
                                {Math.round((inProgressCourse.completedLessons / inProgressCourse.totalLessons) * 100)}% Complete
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
