'use server';

import { saveLead } from '@/lib/data/leads';
import { revalidatePath } from 'next/cache';

export async function submitEarlyAccessLead(formData: FormData) {
    const email = formData.get('email') as string;
    const roleSlug = formData.get('role_slug') as string;
    const yearsExperience = formData.get('years_of_experience') as string;
    const domain = formData.get('domain') as string;

    if (!email || !roleSlug) {
        return { success: false, message: 'Email is required' };
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
        console.error('Failed to save lead:', error);
        return { success: false, message: 'Failed to join early access. Please try again.' };
    }
}
