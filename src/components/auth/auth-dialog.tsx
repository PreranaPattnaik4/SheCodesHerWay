
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/firebase/hooks';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { brand } from '@/lib/brand';
import Logo from '../logo';
import { Card, CardContent, CardDescription } from '../ui/card';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialTab?: "signup" | "login";
}

export default function AuthDialog({ open, onOpenChange, initialTab = "signup" }: AuthDialogProps) {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setError(null);
    setLoading(true);
    if (!email || !password || !firstName || !lastName) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`
      });
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    if (!email || !password) {
      setError("Please enter email and password.");
      setLoading(false);
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const onTabChange = () => {
    setError(null);
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
            <Logo />
            <DialogTitle className="font-headline text-2xl pt-2">{brand.name}</DialogTitle>
            <DialogDescription className="text-balance">
                {brand.mission}
            </DialogDescription>
        </DialogHeader>

        <p className="text-center text-sm italic text-muted-foreground px-4">
            <strong>Our Vision:</strong> {brand.vision}
        </p>
        
        <Tabs defaultValue={initialTab} className="w-full" onValueChange={onTabChange}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Log In</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
             <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Your first name"/>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Your last name"/>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password"/>
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button onClick={handleSignUp} disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</Button>
            </div>
          </TabsContent>
          <TabsContent value="login">
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password"/>
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button onClick={handleLogin} disabled={loading}>{loading ? 'Logging In...' : 'Log In'}</Button>

              <Card className="mt-4 bg-muted/50 border-dashed">
                <CardHeader className="p-4">
                  <CardDescription>For testing purposes, you can use:</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm">
                  <p><strong>Email:</strong> test@example.com</p>
                  <p><strong>Password:</strong> password123</p>
                </CardContent>
              </Card>

            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
