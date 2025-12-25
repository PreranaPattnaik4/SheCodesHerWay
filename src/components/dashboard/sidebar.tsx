'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useUser } from '@/firebase/hooks';
import { Star, LayoutDashboard, User as UserIcon, BookOpen, MessageSquare, Heart, ShoppingCart, HelpCircle, Rocket, Annoyed, DollarSign, ClipboardCheck } from 'lucide-react';
import Logo from '../logo';

const mainNav = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Profile', href: '/dashboard/profile', icon: UserIcon },
    { name: 'My Program', href: '/dashboard/program', icon: Rocket },
    { name: 'Enrolled Courses', href: '/courses', icon: BookOpen },
    { name: 'Reviews', href: '/dashboard/reviews', icon: Star },
    { name: 'My Quiz Attempts', href: '/dashboard/quiz-attempts', icon: ClipboardCheck },
    { name: 'Wishlist', href: '/dashboard/wishlist', icon: Heart },
    { name: 'Order History', href: '/dashboard/order-history', icon: ShoppingCart },
    { name: 'Question & Answer', href: '/dashboard/q-a', icon: HelpCircle },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    const names = name.split(' ');
    return names.map((n) => n[0]).join('');
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-white shadow-lg">
      <div className="flex flex-col h-full">
        <div className="p-6 text-center border-b">
            <Avatar className="h-24 w-24 mx-auto border-4 border-primary">
                <AvatarImage src={user?.photoURL || ''} alt={user?.displayName || 'User'} />
                <AvatarFallback className="text-3xl">{getInitials(user?.displayName)}</AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-lg font-semibold">{user?.displayName}</h3>
        </div>
        <nav className="flex-1 p-4 space-y-2">
            {mainNav.map((item) => (
                <Link href={item.href} key={item.name}>
                    <Button
                        variant={pathname === item.href ? 'secondary' : 'ghost'}
                        className={cn(
                            'w-full justify-start'
                        )}
                    >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                    </Button>
                </Link>
            ))}
        </nav>
      </div>
    </aside>
  );
}
