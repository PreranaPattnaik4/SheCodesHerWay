
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, X, Plus, User, Bot } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { chat } from '@/ai/flows/chat';
import { brand } from '@/lib/brand';
import LogoIcon from '../logo-icon';
import Link from 'next/link';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const welcomeMessage: Message = {
  text: "Hi, I’m EmpowerFly Assistant. How can I help you today?",
  sender: 'bot',
};

const suggestionChips = [
    `What is ${brand.programName}?`,
    "Courses & internships",
    "Mentorship support",
];

interface ChatbotPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatbotPopup({ isOpen, onClose }: ChatbotPopupProps) {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
        setMessages([welcomeMessage]);
        setInputValue('');
    }
  }, [isOpen]);

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
      viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping]);


  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = { text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
        const response = await chat({ message: text });
        const botMessage: Message = {
            text: response.message,
            sender: 'bot',
        };
        setMessages(prev => [...prev, botMessage]);
    } catch (error) {
        console.error("Failed to get response from AI", error);
        const errorMessage: Message = {
            text: "Sorry, I'm having trouble connecting. Please try again later.",
            sender: 'bot',
        };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsTyping(false);
    }
  };

  const handleSendMessage = () => {
    sendMessage(inputValue);
  };

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 h-full sm:h-[calc(100dvh-3rem)] w-full sm:w-96 rounded-lg bg-white border shadow-2xl flex flex-col z-50 overflow-hidden"
    >
      <header className="p-4 border-b flex justify-between items-center bg-secondary">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 border bg-primary text-primary-foreground p-1 shadow-sm">
            <AvatarFallback className='bg-transparent'><LogoIcon/></AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{brand.name}</h3>
            <p className="text-xs text-muted-foreground">Powered by Genkit</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="w-4 h-4" />
        </Button>
      </header>

      <ScrollArea className="flex-grow" ref={scrollAreaRef as any}>
        <div className="p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn('flex items-start gap-3', message.sender === 'user' ? 'justify-end' : '')}
            >
              {message.sender === 'bot' && (
                <Avatar className="h-8 w-8 border bg-primary text-primary-foreground p-1 shadow-sm">
                    <AvatarFallback className='bg-transparent'><LogoIcon/></AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-[80%] rounded-xl p-3 text-sm shadow-sm',
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
            <div className='flex items-start gap-3'>
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
        
        {messages.filter(m => m.sender === 'user').length === 0 && (
            <div className="px-4 pb-4">
                <div className="mt-4 pt-4 border-t">
                    <h3 className="text-center text-xs font-semibold text-muted-foreground mb-2">Or try one of these suggestions:</h3>
                    <div className="flex flex-col gap-2">
                        {suggestionChips.map(suggestion => (
                            <Button key={suggestion} variant="outline" size="sm" className="justify-start h-auto py-1.5 text-xs" onClick={() => sendMessage(suggestion)}>
                                {suggestion}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        )}
      </ScrollArea>
      
      <div className="p-4 bg-white border-t">
         <div className="relative flex items-end w-full p-1 bg-white rounded-full border shadow-sm">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full flex-shrink-0">
            <Plus className="w-4 h-4" />
            <span className="sr-only">Add attachment</span>
          </Button>
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
            className="flex-1 resize-none border-0 shadow-none focus-visible:ring-0 bg-transparent max-h-24 py-2"
          />
          <Button 
              onClick={handleSendMessage} 
              disabled={!inputValue.trim() || isTyping}
              size="icon"
              className="h-9 w-9 rounded-full flex-shrink-0"
          >
              <Send className="w-4 h-4" />
              <span className="sr-only">Send</span>
          </Button>
        </div>
         <p className="text-center text-xs text-muted-foreground mt-2">
            For more detailed conversations, visit our full{' '}
            <Link href="/chatbot" className="underline" onClick={onClose}>
             AI Assistant page
            </Link>.
        </p>
      </div>
    </motion.div>
  );
}

    