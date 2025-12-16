'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bot, Send, X } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

interface ChatbotPopupProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatbotPopup({ isOpen, onOpenChange }: ChatbotPopupProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm the SheCodesHerWay AI assistant. How can I help you today?",
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatbotAvatar = PlaceHolderImages.find((p) => p.id === 'chatbot-avatar');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a simulated response.', sender: 'bot' },
        ]);
      }, 1000);
      setInputValue('');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-4 z-50">
        <Card className="w-80 h-[28rem] shadow-2xl flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                {chatbotAvatar && (
                    <Image
                        src={chatbotAvatar.imageUrl}
                        alt="Chatbot Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                        data-ai-hint={chatbotAvatar.imageHint}
                    />
                )}
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
              </div>
              <div className="grid gap-0.5">
                <CardTitle className="text-lg">AI Assistant</CardTitle>
                <CardDescription>SheCodesHerWay</CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X className="w-5 h-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && chatbotAvatar && (
                    <Image
                        src={chatbotAvatar.imageUrl}
                        alt="Bot Avatar"
                        width={32}
                        height={32}
                        className="rounded-full h-8 w-8"
                        data-ai-hint={chatbotAvatar.imageHint}
                    />
                )}
                <div
                  className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="p-4 border-t">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </CardFooter>
        </Card>
    </div>
  );
}
