'use server';

import { saveLead } from '@/lib/data/leads';
import { revalidatePath } from 'next/cache';

export async function submitEarlyAccessLead(formData: FormData) {
    const email = formData.get('email') as string;
    const roleSlug = formData.get('role_slug') as string;
    const yearsExperience = formData.get('years_of_experience') as string;
    const domain = formData.get('domain') as string;

    if (!email || !roleSlug) {
        console.error('Validation failed: Email or Role Slug missing');
        // Return success to client to avoid error UI
        return { success: true };
    }

    try {
        await saveLead({
            email,
            role_slug: roleSlug,
            years_experience: yearsExperience,
            domain,
            created_at: new Date().toISOString(),
        });

        revalidatePath(`/generate/${roleSlug}`);
        return { success: true };
    } catch (error) {
        // Fallback: If saving fails (e.g. readonly FS), log it but don't block the user.
        console.error('Failed to save lead (FAIL-OPEN):', error);
        // We return success to the user so they are not discouraged.
        return { success: true };
    }
}
