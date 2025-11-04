
'use server';

import { generateExecutiveSummary, type GenerateExecutiveSummaryInput } from "@/ai/flows/generate-executive-summary";
import { z } from "zod";

const GenerateExecutiveSummaryInputSchema = z.object({
  startupName: z.string().min(1, 'Startup name is required.'),
  mission: z.string().min(1, 'Mission is required.'),
  flagshipProgram: z.string().min(1, 'Flagship program is required.'),
  founderName: z.string().min(1, 'Founder name is required.'),
  vision: z.string().min(1, 'Vision is required.'),
});

export type ActionState = {
    success: boolean;
    data?: { executiveSummary: string; };
    error?: string | z.typeToFlattenedError<GenerateExecutiveSummaryInput>['fieldErrors'];
}

export async function handleGenerateSummary(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const input: GenerateExecutiveSummaryInput = {
        startupName: formData.get('startupName') as string,
        mission: formData.get('mission') as string,
        flagshipProgram: formData.get('flagshipProgram') as string,
        founderName: formData.get('founderName') as string,
        vision: formData.get('vision') as string,
    }
    
    const validatedInput = GenerateExecutiveSummaryInputSchema.safeParse(input);

    if (!validatedInput.success) {
        return { success: false, error: validatedInput.error.flatten().fieldErrors };
    }
    
    try {
        const result = await generateExecutiveSummary(validatedInput.data);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to generate summary. Please try again.' };
    }
}
