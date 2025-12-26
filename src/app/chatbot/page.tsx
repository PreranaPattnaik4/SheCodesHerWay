
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button, buttonVariants } from '@/components/ui/button';
import { Send, Plus, Settings, MessageSquare, MoreHorizontal, Edit, Trash2, User, ArrowUp, Mic, Menu } from 'lucide-react';
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
import LogoIcon from '@/components/logo-icon';
import { chat } from '@/ai/flows/chat';
import { brand } from '@/lib/brand';

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
    text: "Hi, I’m EmpowerFly Assistant — your friendly guide to learning, careers, and opportunities, at your own pace. How can I help you today?",
    sender: 'bot',
};

const suggestionChips = [
    `What is ${brand.programName}?`,
    "Courses & internships",
    "Mentorship support",
    "About SheCodesHerWay",
];

// Extend window type for SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function ChatbotPage() {
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [chatToDelete, setChatToDelete] = useState<string | null>(null);
  const [chatToRename, setChatToRename] = useState<ChatSession | null>(null);
  const [newChatName, setNewChatName] = useState('');

  const activeChat = chatHistory.find(chat => chat.id === activeChatId);
  
  // Speech Recognition state
  const [isListening, setIsListening] = useState(false);
  const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setIsSpeechRecognitionSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        setInputValue(inputValue + finalTranscript + interimTranscript);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [inputValue]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
    setIsListening(!isListening);
  };


  useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = `${Math.min(scrollHeight, 120)}px`;
    }
  }, [inputValue]);
  
  useEffect(() => {
    const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (viewport) {
      if (activeChat?.messages.length === 1) {
        viewport.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
      }
    }
  }, [activeChat?.messages, isTyping]);


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
    // Load chat history from local storage
    const storedHistory = localStorage.getItem('chatHistory');
    if (storedHistory) {
        const parsedHistory = JSON.parse(storedHistory);
        if (parsedHistory.length > 0) {
            setChatHistory(parsedHistory);
            const activeId = localStorage.getItem('activeChatId') || parsedHistory[0].id;
            setActiveChatId(activeId);
            return;
        }
    }
    // If no history, start a new chat
    handleNewChat();
  }, []);

  useEffect(() => {
    // Save chat history to local storage
    if (chatHistory.length > 0) {
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
    if (activeChatId) {
        localStorage.setItem('activeChatId', activeChatId);
    }
  }, [chatHistory, activeChatId]);


  const sendMessage = async (text: string) => {
    if (!text.trim() || !activeChatId || isTyping) return;

    const userMessage: Message = { text, sender: 'user' };
  
    setChatHistory(prevHistory => {
        const isFirstUserMessage = prevHistory.find(c => c.id === activeChatId)?.messages.filter(m => m.sender === 'user').length === 0;
        
        return prevHistory.map(chat => {
            if (chat.id === activeChatId) {
                const newTitle = isFirstUserMessage ? text.substring(0, 30) + (text.length > 30 ? '...' : '') : chat.title;
                return {
                    ...chat,
                    title: newTitle,
                    messages: [...chat.messages, userMessage],
                };
            }
            return chat;
        });
    });
  
    setInputValue('');
    setIsTyping(true);
  
    try {
        const response = await chat({ message: text });
        const botMessage: Message = {
            text: response.message,
            sender: 'bot',
        };
        setChatHistory(prevHistory =>
            prevHistory.map(chat =>
            chat.id === activeChatId
                ? { ...chat, messages: [...chat.messages, botMessage] }
                : chat
            )
        );
    } catch (error) {
        console.error("Failed to get response from AI", error);
        const errorMessage: Message = {
            text: "Sorry, I'm having trouble connecting right now. Please try again later.",
            sender: 'bot',
        };
        setChatHistory(prevHistory =>
            prevHistory.map(chat =>
            chat.id === activeChatId
                ? { ...chat, messages: [...chat.messages, errorMessage] }
                : chat
            )
        );
    } finally {
        setIsTyping(false);
    }
  }

  const handleSendMessage = () => {
    sendMessage(inputValue);
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
            const newActiveId = updatedHistory[0].id;
            setActiveChatId(newActiveId);
            localStorage.setItem('activeChatId', newActiveId);
        } else {
            handleNewChat();
        }
    }
    setChatToDelete(null);

    // Also remove from local storage if it was the last chat
    if (updatedHistory.length === 0) {
        localStorage.removeItem('chatHistory');
        localStorage.removeItem('activeChatId');
    }
  };

  return (
    <>
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <aside className={cn(
            "flex flex-col p-4 bg-white border-r transition-all duration-300",
            isSidebarOpen ? "w-72" : "w-0 p-0 overflow-hidden"
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
                            className="w-full justify-start truncate pr-8 h-10"
                            onClick={() => setActiveChatId(chat.id)}
                        >
                            <MessageSquare className="mr-2 h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{chat.title}</span>
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
            <div className="mt-auto border-t -mx-4 pt-2 px-4">
                <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </Button>
            </div>
        </aside>
        
        <main className="flex-1 flex flex-col bg-white">
            <div className="p-2 border-b flex items-center">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle sidebar</span>
                </Button>
                <h2 className="text-lg font-semibold ml-2 truncate">
                    {activeChat ? activeChat.title : 'Chat'}
                </h2>
            </div>
            <ScrollArea className="flex-grow" ref={scrollAreaRef as any}>
                <div className="max-w-3xl mx-auto w-full px-4 pt-8 pb-4">
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
                            <Avatar className="h-8 w-8 border bg-primary text-primary-foreground p-1 shadow-sm">
                                <AvatarFallback className='bg-transparent'><LogoIcon/></AvatarFallback>
                            </Avatar>
                          )}
                          <div
                          className={cn(
                              'max-w-[75%] rounded-xl p-3 text-sm shadow-sm',
                              message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary'
                          )}
                          >
                          {message.text}
                          </div>
                           {message.sender === 'user' && (
                            <Avatar className="h-8 w-8 border shadow-sm">
                                <AvatarFallback><User size={18}/></AvatarFallback>
                            </Avatar>
                          )}
                      </div>
                    ))}
                    {isTyping && (
                         <div className='flex items-start gap-3 justify-start'>
                             <Avatar className="h-8 w-8 border bg-primary text-primary-foreground p-1 shadow-sm">
                                <AvatarFallback className='bg-transparent'><LogoIcon/></AvatarFallback>
                            </Avatar>
                            <div className="bg-secondary rounded-xl p-3 text-sm shadow-sm">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-0"></span>
                                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-150"></span>
                                    <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-300"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>

                    {activeChat?.messages.filter(m => m.sender === 'user').length === 0 && (
                        <div className="mt-8 pt-8 border-t">
                            <h3 className="text-center text-sm font-semibold text-muted-foreground mb-4">Or try one of these suggestions:</h3>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {suggestionChips.map(suggestion => (
                                    <Button key={suggestion} variant="outline" className="justify-start h-auto py-2" onClick={() => sendMessage(suggestion)}>
                                        {suggestion}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </ScrollArea>

            <div className="p-4 bg-white/95 backdrop-blur-sm border-t">
              <div className="max-w-3xl mx-auto">
                <div className="relative flex items-center w-full">
                  <Textarea
                    ref={textareaRef}
                    rows={1}
                    placeholder={`Ask ${brand.appName} anything...`}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                      }
                    }}
                    className="w-full resize-none bg-transparent border-2 border-border focus-visible:ring-primary focus-visible:ring-offset-0 p-3 pr-24 pl-12 rounded-2xl shadow-sm"
                  />
                  {isSpeechRecognitionSupported && (
                    <Button 
                        onClick={toggleListening} 
                        size="icon"
                        variant="ghost"
                        className={cn(
                          "absolute left-2.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full",
                          isListening ? "text-primary animate-pulse" : "text-muted-foreground"
                        )}
                    >
                        <Mic className="w-4 h-4" />
                        <span className="sr-only">{isListening ? 'Stop listening' : 'Start listening'}</span>
                    </Button>
                  )}
                  <Button 
                      onClick={handleSendMessage} 
                      disabled={!inputValue.trim() || isTyping}
                      size="icon"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-foreground text-background hover:bg-foreground/80"
                  >
                      <ArrowUp className="w-4 h-4" />
                      <span className="sr-only">Send</span>
                  </Button>
                </div>
              </div>
            </div>
        </main>
      </div>
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

    