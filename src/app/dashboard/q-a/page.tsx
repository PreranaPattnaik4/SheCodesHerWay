
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export default function QAPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Question & Answer</h1>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <HelpCircle className="h-6 w-6 text-primary" />
                        Your Questions
                    </CardTitle>
                    <CardDescription>
                        A log of all the questions you've asked in courses.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                        <p>You have not asked any questions yet.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
