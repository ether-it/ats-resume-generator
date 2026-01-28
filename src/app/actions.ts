'use server';

import { saveLead } from '@/lib/data/leads';
import { revalidatePath } from 'next/cache';
import { resumeSchema } from '@/lib/resumeSchema';

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

export async function submitResume(data: any) {
    console.log("Submitting resume to webhook...");

    // 1. Validate data against schema
    const validation = resumeSchema.safeParse(data);
    if (!validation.success) {
        console.error("Validation failed:", validation.error);
        return { success: false, error: "Invalid data format." };
    }

    const payload = {
        ...data,
        pricePaid: "2900", // Hardcoded for v1 MVP placeholder
        paymentId: `PAY-${Date.now()}-${Math.random().toString(36).substr(2, 9)}` // Mock payment ID
    };

    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
        console.warn("WEBHOOK_URL not set. Returning mock success.");
        // Mock response for dev
        return {
            success: true,
            fileUrl: "#", // No file in mock mode
            mock: true
        };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Webhook failed with status ${response.status}`);
        }

        const result = await response.json();
        console.log("Webhook success:", result);

        return {
            success: true,
            fileUrl: result.fileUrl,
            emailSent: result.emailSent
        };

    } catch (error) {
        console.error("Webhook submission error:", error);
        return { success: false, error: "Failed to generate resume. Please contact support." };
    }
}
