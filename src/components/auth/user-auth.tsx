'use client';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SignUpDialog from './sign-up-dialog';
import LoginDialog from './login-dialog';
import { useState } from 'react';

export default function UserAuth() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    const names = name.split(' ');
    return names.map((n) => n[0]).join('');
  };

  if (isUserLoading) {
    return <Button variant="outline">Loading...</Button>;
  }

  if (!user) {
    return (
      <>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => setLogInOpen(true)}>
            Log In
          </Button>
          <Button onClick={() => setSignUpOpen(true)}>Sign Up</Button>
        </div>
        <SignUpDialog open={signUpOpen} onOpenChange={setSignUpOpen} onLoginRequest={() => setLogInOpen(true)}/>
        <LoginDialog open={logInOpen} onOpenChange={setLogInOpen} onSignUpRequest={() => setSignUpOpen(false)}/>
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
            <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.displayName || 'User'}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut(auth)}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
