'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ChatbotPopup from './chatbot-popup';
import { AnimatePresence, motion } from 'framer-motion';
import LogoIcon from '../logo-icon';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
             <motion.div
              initial={{ scale: 0, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                size="icon"
                className="rounded-full w-16 h-16 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:ring-4 focus:ring-primary/30"
                onClick={() => setIsOpen(true)}
              >
                <LogoIcon className="w-8 h-8" />
                <span className="sr-only">Open Chatbot</span>
              </Button>
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <ChatbotPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
