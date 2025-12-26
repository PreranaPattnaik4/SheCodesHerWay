
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export default function OrderHistoryPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Order History</h1>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ShoppingCart className="h-6 w-6 text-primary" />
                        Your Orders
                    </CardTitle>
                    <CardDescription>
                        A history of your enrollments and purchases.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                        <p>You have no order history yet.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
