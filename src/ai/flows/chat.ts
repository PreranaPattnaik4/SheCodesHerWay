
'use server';

/**
 * @fileOverview This file defines a Genkit flow for handling chatbot conversations.
 *
 * The flow takes a user's message as input, searches for a relevant answer
 * in the platform's FAQ data, and returns a response.
 */

import { z } from 'genkit';
import { faqData } from '@/lib/faq-data';
import React from 'react';

const ChatInputSchema = z.object({
  message: z.string().describe("The user's message to the chatbot."),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().describe("The chatbot's response."),
});

export type ChatOutput = z.infer<typeof ChatOutputSchema>;

// Flatten the FAQ data for easier searching
const allFaqs = faqData.flatMap(category => category.questions);

// Simple function to extract text from ReactNode
const getNodeText = (node: React.ReactNode): string => {
    if (typeof node === 'string') {
        return node;
    }
    if (typeof node === 'number') {
        return String(node);
    }
    if (Array.isArray(node)) {
        return node.map(getNodeText).join('');
    }
    if (React.isValidElement(node) && node.props.children) {
        return getNodeText(node.props.children);
    }
    return '';
};


export async function chat(input: ChatInput): Promise<ChatOutput> {
  const userMessage = input.message.toLowerCase().trim();
  const searchTerms = userMessage.split(/\s+/).filter(term => term.length > 2);

  if (userMessage === '') {
      return { message: "Hello! How can I help you today? You can ask me about our programs, careers, or what SheCodesHerWay is all about." };
  }
  
  let bestMatch = null;
  let highestScore = 0;

  allFaqs.forEach(faq => {
      const questionText = faq.question.toLowerCase();
      const answerText = getNodeText(faq.answer).toLowerCase();
      let score = 0;

      // Check for matches in the question
      if (questionText.includes(userMessage)) {
          score += 10; // High score for exact match in question
      }
      searchTerms.forEach(term => {
          if (questionText.includes(term)) {
              score += 2;
          }
          if (answerText.includes(term)) {
              score += 1;
          }
      });
      
      if (score > highestScore) {
          highestScore = score;
          bestMatch = faq;
      }
  });

  if (bestMatch && highestScore > 1) {
    const answer = getNodeText(bestMatch.answer);
    return { message: answer };
  }

  return { message: "I'm sorry, I couldn't find a specific answer to that. For more detailed questions, please feel free to browse our FAQ page or contact us directly through our social media channels. How else can I help you?" };
}
