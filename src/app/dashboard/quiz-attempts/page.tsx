
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ClipboardCheck } from "lucide-react";

export default function QuizAttemptsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">My Quiz Attempts</h1>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ClipboardCheck className="h-6 w-6 text-primary" />
                        Your Quiz History
                    </CardTitle>
                    <CardDescription>
                        Review your past quiz scores and attempts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                        <p>You have not attempted any quizzes yet.</p>
                        <p>Your quiz history will appear here once you do.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
