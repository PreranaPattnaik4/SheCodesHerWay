'use client';

import { useState } from 'react';
import ChatbotPopup from './chatbot-popup';
import { Button } from '../ui/button';
import { Bot, X } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <ChatbotPopup isOpen={isOpen} onOpenChange={setIsOpen} />
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full w-16 h-16 shadow-lg"
          >
            <Bot className="w-8 h-8" />
          </Button>
        )}
      </div>
    </div>
  );
}
