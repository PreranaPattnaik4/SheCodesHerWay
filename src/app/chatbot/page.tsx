
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button, buttonVariants } from '@/components/ui/button';
import { Bot, Send, User, Settings, Plus, MessageSquare, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import Header from '@/components/header';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';


interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
}

const welcomeMessage: Message = {
    text: "Hi, I’m EmpowerFly AI Coach — your friendly guide to learning, careers, and opportunities, at your own pace. How can I help you today?",
    sender: 'bot',
};

export default function ChatbotPage() {
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // State for dialogs
  const [chatToDelete, setChatToDelete] = useState<string | null>(null);
  const [chatToRename, setChatToRename] = useState<ChatSession | null>(null);
  const [newChatName, setNewChatName] = useState('');

  const getActiveChat = () => {
    if (!activeChatId) return null;
    return chatHistory.find(chat => chat.id === activeChatId);
  };
  const activeChat = getActiveChat();
  
  useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);


  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTo({
                top: viewport.scrollHeight,
                behavior: 'smooth',
            });
        }
    }
  }, [activeChat?.messages]);
  
  const handleNewChat = () => {
    const newChatId = Date.now().toString();
    const newChat: ChatSession = {
      id: newChatId,
      title: 'New Chat',
      messages: [welcomeMessage],
    };
    setChatHistory(prev => [newChat, ...prev]);
    setActiveChatId(newChatId);
  };
  
  useEffect(() => {
    if (chatHistory.length === 0) {
      handleNewChat();
    } else if (!activeChatId) {
      setActiveChatId(chatHistory[0].id);
    }
  }, []);


  const handleSendMessage = () => {
    if (!inputValue.trim() || !activeChatId) return;

    const userMessage: Message = { text: inputValue, sender: 'user' };

    setChatHistory(prevHistory => {
      const updatedHistory = prevHistory.map(chat => {
        if (chat.id === activeChatId) {
          const isFirstUserMessage = chat.messages.filter(m => m.sender === 'user').length === 0;
          const newTitle = isFirstUserMessage ? inputValue.substring(0, 30) + (inputValue.length > 30 ? '...' : '') : chat.title;
          
          return {
            ...chat,
            title: newTitle,
            messages: [...chat.messages, userMessage],
          };
        }
        return chat;
      });
      return updatedHistory;
    });

    setInputValue('');

    setTimeout(() => {
      const botMessage: Message = {
        text: 'This is a simulated response. In a real application, I would connect to an AI service to provide a helpful answer!',
        sender: 'bot',
      };
      setChatHistory(prevHistory =>
        prevHistory.map(chat =>
          chat.id === activeChatId
            ? { ...chat, messages: [...chat.messages, botMessage] }
            : chat
        )
      );
    }, 1000);
  };

  const handleRenameChat = () => {
    if (!chatToRename || !newChatName.trim()) return;

    setChatHistory(prev =>
      prev.map(chat =>
        chat.id === chatToRename.id ? { ...chat, title: newChatName.trim() } : chat
      )
    );
    setChatToRename(null);
    setNewChatName('');
  };

  const handleDeleteChat = () => {
    if (!chatToDelete) return;

    const updatedHistory = chatHistory.filter(chat => chat.id !== chatToDelete);
    setChatHistory(updatedHistory);
    
    if (activeChatId === chatToDelete) {
        if (updatedHistory.length > 0) {
            setActiveChatId(updatedHistory[0].id);
        } else {
            handleNewChat();
        }
    }
    setChatToDelete(null);
  };

  return (
    <>
    <div className="flex h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 flex overflow-hidden bg-white">
        <aside className={cn(
            "flex flex-col p-4 bg-white border-r transition-all duration-300",
            isSidebarOpen ? "w-64" : "w-0 p-0 overflow-hidden"
        )}>
            <Button onClick={handleNewChat} className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                New Chat
            </Button>
            <p className="mt-6 mb-2 text-xs font-semibold text-muted-foreground uppercase">History</p>
            <ScrollArea className="flex-1 -mx-4">
              <div className="px-4 space-y-1">
                {chatHistory.map(chat => (
                    <div key={chat.id} className="group relative flex items-center">
                        <Button
                            variant={activeChatId === chat.id ? 'secondary' : 'ghost'}
                            className="w-full justify-start truncate pr-8"
                            onClick={() => setActiveChatId(chat.id)}
                        >
                            <MessageSquare className="mr-2 h-4 w-4 flex-shrink-0" />
                            {chat.title}
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="absolute right-1 h-7 w-7 opacity-0 group-hover:opacity-100">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">More options</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => { setChatToRename(chat); setNewChatName(chat.title); }}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Rename</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setChatToDelete(chat.id)} className="text-destructive">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-auto">
                <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </Button>
            </div>
        </aside>
        
        <div className="flex-1 flex flex-col bg-white">
          <div className="flex-1 relative flex flex-col">
            <ScrollArea className="flex-grow w-full" ref={scrollAreaRef as any}>
              <div className="max-w-3xl mx-auto w-full px-4 pb-24 pt-4">
                  <div className="space-y-6">
                  {activeChat?.messages.map((message, index) => (
                    <div
                        key={index}
                        className={cn(
                        'flex items-start gap-3',
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                        )}
                    >
                        {message.sender === 'bot' && (
                        <Avatar className="h-8 w-8 border">
                            <AvatarFallback><Bot size={20}/></AvatarFallback>
                        </Avatar>
                        )}
                        <div
                        className={cn(
                            'max-w-[75%] rounded-lg p-3 text-sm',
                            message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary'
                        )}
                        >
                        {message.text}
                        </div>
                         {message.sender === 'user' && (
                        <Avatar className="h-8 w-8 border">
                            <AvatarFallback><User size={20}/></AvatarFallback>
                        </Avatar>
                        )}
                    </div>
                  ))}
                  </div>
              </div>
            </ScrollArea>

            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-white to-transparent">
              <div className="relative max-w-3xl mx-auto">
                <div className='relative flex items-end'>
                    <Textarea
                      ref={textareaRef}
                      rows={1}
                      placeholder="Ask anything..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                        }
                      }}
                      className="pr-16 py-3 resize-none max-h-40 overflow-y-auto rounded-full shadow-md border-gray-300 focus:border-primary focus:ring-primary"
                    />
                    <Button 
                        onClick={handleSendMessage} 
                        disabled={!inputValue.trim()}
                        size="icon"
                        className="absolute right-2.5 bottom-2 rounded-full"
                    >
                        <Send className="w-5 h-5" />
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    {/* Rename Chat Dialog */}
    <Dialog open={!!chatToRename} onOpenChange={(open) => !open && setChatToRename(null)}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Rename Chat</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                    <Label htmlFor="chat-name">Chat Name</Label>
                    <Input
                        id="chat-name"
                        value={newChatName}
                        onChange={(e) => setNewChatName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleRenameChat()}
                    />
                </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">Cancel</Button>
                </DialogClose>
                <Button onClick={handleRenameChat}>Save</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>

    {/* Delete Chat Alert Dialog */}
    <AlertDialog open={!!chatToDelete} onOpenChange={(open) => !open && setChatToDelete(null)}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete this chat session.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setChatToDelete(null)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteChat} className={cn(buttonVariants({ variant: "destructive" }))}>
                    Delete
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </>
  );
}

    
    