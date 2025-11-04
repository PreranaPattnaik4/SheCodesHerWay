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
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSignUpRequest: () => void;
}

export default function LoginDialog({ open, onOpenChange, onSignUpRequest }: LoginDialogProps) {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSwitchToSignUp = () => {
    onOpenChange(false);
    onSignUpRequest();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>Access your SheCodesHerWay account.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        <Button onClick={handleLogin}>Log In</Button>
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Button variant="link" size="sm" className="p-0 h-auto" onClick={handleSwitchToSignUp}>
            Sign up
          </Button>
        </p>
      </DialogContent>
    </Dialog>
  );
}
