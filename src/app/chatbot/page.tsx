
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bot, Send, User, Settings, Plus, MessageSquare } from 'lucide-react';
import Header from '@/components/header';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import ExecutiveSummaryGenerator from '@/components/home/executive-summary-generator';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
}

export default function ChatbotPage() {
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const getActiveChat = () => {
    if (!activeChatId) return null;
    return chatHistory.find(chat => chat.id === activeChatId);
  };
  const activeChat = getActiveChat();

  useEffect(() => {
    if (scrollAreaRef.current) {
        // The viewport is the first child of the ScrollArea root
        const viewport = scrollAreaRef.current.children[0] as HTMLElement;
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
      messages: [],
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

  const isChatEmpty = !activeChat || activeChat.messages.length === 0;

  return (
    <div className="flex h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 flex overflow-hidden">
        <aside className="w-64 flex flex-col p-4 bg-white border-r">
            <Button onClick={handleNewChat} className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                New Chat
            </Button>
            <p className="mt-6 mb-2 text-xs font-semibold text-muted-foreground uppercase">History</p>
            <ScrollArea className="flex-1 -mx-4">
              <div className="px-4 space-y-1">
                {chatHistory.map(chat => (
                  <Button
                    key={chat.id}
                    variant={activeChatId === chat.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start truncate"
                    onClick={() => setActiveChatId(chat.id)}
                  >
                    <MessageSquare className="mr-2 h-4 w-4 flex-shrink-0" />
                    {chat.title}
                  </Button>
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
              <div className="max-w-3xl mx-auto w-full px-4 pb-20 pt-4">
                {isChatEmpty ? (
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <Bot size={48} className="mx-auto text-gray-300" />
                            <h2 className="mt-4 text-2xl font-bold text-gray-700">SheCodesHerWay Chat</h2>
                             <p className="mt-2 text-muted-foreground">What are you working on?</p>
                        </div>
                    </div>
                ) : (
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
                )}
              </div>
            </ScrollArea>

            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-white to-transparent">
              <div className="relative max-w-3xl mx-auto">
                <div className='relative flex items-center'>
                    <Input
                      type="text"
                      placeholder="Ask anything..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="pr-12 h-12 rounded-full shadow-md border-gray-300 focus:border-primary focus:ring-primary"
                    />
                    <Button 
                        onClick={handleSendMessage} 
                        disabled={!inputValue.trim()}
                        size="icon"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full"
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
  );
}
