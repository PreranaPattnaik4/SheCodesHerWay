'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating an executive summary for a startup pitch deck.
 *
 * The flow takes key details about the startup as input and uses a language model to generate a concise and compelling executive summary.
 *
 * @interface GenerateExecutiveSummaryInput - The input type for the generateExecutiveSummary function.
 * @interface GenerateExecutiveSummaryOutput - The output type for the generateExecutiveSummary function.
 * @function generateExecutiveSummary -  A function that handles the executive summary generation process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExecutiveSummaryInputSchema = z.object({
  startupName: z.string().describe('The name of the startup.'),
  mission: z.string().describe('The mission statement of the startup.'),
  flagshipProgram: z.string().describe('The name of the flagship program.'),
  founderName: z.string().describe('The name of the founder.'),
  vision: z.string().describe('The vision statement of the startup.'),
});

export type GenerateExecutiveSummaryInput = z.infer<typeof GenerateExecutiveSummaryInputSchema>;

const GenerateExecutiveSummaryOutputSchema = z.object({
  executiveSummary: z.string().describe('The generated executive summary.'),
});

export type GenerateExecutiveSummaryOutput = z.infer<typeof GenerateExecutiveSummaryOutputSchema>;

export async function generateExecutiveSummary(input: GenerateExecutiveSummaryInput): Promise<GenerateExecutiveSummaryOutput> {
  return generateExecutiveSummaryFlow(input);
}

const generateExecutiveSummaryPrompt = ai.definePrompt({
  name: 'generateExecutiveSummaryPrompt',
  input: {schema: GenerateExecutiveSummaryInputSchema},
  output: {schema: GenerateExecutiveSummaryOutputSchema},
  prompt: `You are an expert in crafting executive summaries for startup pitch decks. Using the information provided, create a concise and compelling executive summary that highlights the startup's mission, vision, flagship program, and founder.

Startup Name: {{{startupName}}}
Mission: {{{mission}}}
Flagship Program: {{{flagshipProgram}}}
Founder Name: {{{founderName}}}
Vision: {{{vision}}}`,
});

const generateExecutiveSummaryFlow = ai.defineFlow(
  {
    name: 'generateExecutiveSummaryFlow',
    inputSchema: GenerateExecutiveSummaryInputSchema,
    outputSchema: GenerateExecutiveSummaryOutputSchema,
  },
  async input => {
    const {output} = await generateExecutiveSummaryPrompt(input);
    return output!;
  }
);
