'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useUser } from '@/firebase/hooks';
import { Award, LayoutDashboard, User as UserIcon, BookOpen, MessageSquare, Heart, ShoppingCart, HelpCircle, Rocket, Annoyed, DollarSign, ClipboardCheck, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'lucide-react';
import Logo from '../logo';

const mainNav = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Profile', href: '/dashboard/profile', icon: UserIcon },
    { name: 'My Program', href: '/dashboard/program', icon: Rocket },
    { name: 'Enrolled Courses', href: '/courses', icon: BookOpen },
    { name: 'My Certificates', href: '/dashboard/certificates', icon: Award },
    { name: 'My Quiz Attempts', href: '/dashboard/quiz-attempts', icon: ClipboardCheck },
    { name: 'Wishlist', href: '/dashboard/wishlist', icon: Heart },
    { name: 'Order History', href: '/dashboard/order-history', icon: ShoppingCart },
    { name: 'Question & Answer', href: '/dashboard/q-a', icon: HelpCircle },
];

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const pathname = usePathname();
  const { user } = useUser();

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    const names = name.split(' ');
    return names.map((n) => n[0]).join('');
  };

  return (
    <aside className={cn("flex-shrink-0 bg-white shadow-lg transition-all duration-300", isSidebarOpen ? 'w-64' : 'w-20')}>
      <div className="flex flex-col h-full">
        <div className={cn("p-6 text-center border-b", isSidebarOpen ? 'p-6' : 'p-2')}>
            <Avatar className={cn("mx-auto border-4 border-primary", isSidebarOpen ? "h-24 w-24" : "h-12 w-12")}>
                <AvatarImage src={user?.photoURL || ''} alt={user?.displayName || 'User'} />
                <AvatarFallback className={cn(isSidebarOpen ? "text-3xl" : "text-lg")}>{getInitials(user?.displayName)}</AvatarFallback>
            </Avatar>
            <h3 className={cn("mt-4 text-lg font-semibold transition-opacity", isSidebarOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden')}>{user?.displayName}</h3>
        </div>
        <nav className={cn("flex-1 p-4 space-y-2", !isSidebarOpen && 'p-2')}>
          <TooltipProvider delayDuration={0}>
            {mainNav.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                   <Link href={item.href}>
                      <Button
                          variant={pathname === item.href ? 'secondary' : 'ghost'}
                          className={cn(
                              'w-full justify-start',
                              !isSidebarOpen && 'justify-center w-12 h-12'
                          )}
                          aria-label={item.name}
                      >
                          <item.icon className={cn("h-5 w-5", isSidebarOpen && "mr-3")} />
                          <span className={cn(isSidebarOpen ? 'inline' : 'hidden')}>{item.name}</span>
                      </Button>
                  </Link>
                </TooltipTrigger>
                 {!isSidebarOpen && (
                  <TooltipContent side="right">
                    {item.name}
                  </TooltipContent>
                 )}
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </div>
    </aside>
  );
}
