
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function CertificatesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">My Certificates</h1>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Award className="h-6 w-6 text-primary" />
                        Your Achievements
                    </CardTitle>
                    <CardDescription>
                        All your hard-earned certificates in one place.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                        <p>You haven't earned any certificates yet.</p>
                        <p>Complete a course to see your certificates here!</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
