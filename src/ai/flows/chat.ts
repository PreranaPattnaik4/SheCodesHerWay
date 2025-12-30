
'use server';

/**
 * @fileOverview This file defines a Genkit flow for handling chatbot conversations.
 *
 * The flow takes a user's message as input and uses a language model to generate a response,
 * acting as the "EmpowerFly Assistant".
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe('The user\'s message to the chatbot.'),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().describe('The chatbot\'s response.'),
});

export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatPrompt = ai.definePrompt({
  name: 'chatPrompt',
  input: { schema: ChatInputSchema },
  output: { schema: ChatOutputSchema },
  prompt: `You are EmpowerFly Assistant, a friendly and supportive guide for SheCodesHerWay, a women-empowerment platform.

Your purpose is to help users with questions about:
- SheCodesHerWay's mission and programs (like Sangini Udaan : EmpowerFly).
- Learning paths in tech, creative fields, and business.
- Available courses, internships, and mentorship opportunities.
- General career advice and encouragement.

Keep your tone warm, encouraging, and professional. Answer concisely. When greeting the user, say "Hello there! Welcome to SheCodesHerWay. I'm here to help you navigate SheCodesHerWay and explore our programs, learning paths, and opportunities. How can I assist you today?".

User's message: {{{message}}}`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await chatPrompt(input);
    return output!;
  }
);
