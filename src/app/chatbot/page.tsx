
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bot, Send, User, Settings, Plus, MessageSquare } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

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

  // Function to get the current active chat
  const getActiveChat = () => {
    if (!activeChatId) return null;
    return chatHistory.find(chat => chat.id === activeChatId);
  };
  const activeChat = getActiveChat();

  // Effect to scroll to the bottom of the chat on new messages
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [activeChat?.messages]);
  
  // Start a new chat session
  const handleNewChat = () => {
    const newChatId = Date.now().toString();
    const newChat: ChatSession = {
      id: newChatId,
      title: 'New Chat',
      messages: [
        {
          text: "Hello! I'm the SheCodesHerWay AI assistant. How can I help you today?",
          sender: 'bot',
        },
      ],
    };
    setChatHistory(prev => [newChat, ...prev]);
    setActiveChatId(newChatId);
  };
  
  // Start a new chat if none exists
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
          // If this is the first user message, update the chat title
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

    // Simulate bot response
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

  return (
    <div className="flex h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex overflow-hidden">
        <aside className="w-64 flex flex-col p-4 bg-background border-r">
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
        
        <div className="flex-1 flex flex-col">
            {activeChat ? (
                <>
                <ScrollArea className="flex-1 p-4" ref={scrollAreaRef as any}>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {activeChat.messages.map((message, index) => (
                        <div
                            key={index}
                            className={cn(
                            'flex items-start gap-4',
                            message.sender === 'user' ? 'justify-end' : ''
                            )}
                        >
                            {message.sender === 'bot' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback><Bot size={20}/></AvatarFallback>
                            </Avatar>
                            )}
                            <div
                            className={cn(
                                'max-w-[75%] rounded-lg p-3 text-sm shadow-sm',
                                message.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-background'
                            )}
                            >
                            {message.text}
                            </div>
                             {message.sender === 'user' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback><User size={20}/></AvatarFallback>
                            </Avatar>
                            )}
                        </div>
                        ))}
                    </div>
                </ScrollArea>

                <div className="p-4 border-t bg-background">
                    <div className="relative max-w-3xl mx-auto">
                    <Input
                        type="text"
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="pr-12 h-12"
                    />
                    <Button 
                        onClick={handleSendMessage} 
                        disabled={!inputValue.trim()}
                        size="icon"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2"
                    >
                        <Send className="w-5 h-5" />
                        <span className="sr-only">Send</span>
                    </Button>
                    </div>
                </div>
                </>
            ) : (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                    <p>Select a chat or start a new one.</p>
                </div>
            )}
        </div>
      </main>
    </div>
  );
}
