
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function WishlistPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Heart className="h-6 w-6 text-primary" />
                        Your Wishlist
                    </CardTitle>
                    <CardDescription>
                        Courses and items you've saved for later.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                        <p>Your wishlist is empty.</p>
                        <p>Add courses to your wishlist to see them here.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
