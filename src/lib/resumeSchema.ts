import { z } from 'zod';

export const resumeSchema = z.object({
    personal: z.object({
        full_name: z.string().min(2, "Full name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().min(5, "Phone number is required"),
        location: z.string().min(2, "Location is required"),
    }),
    summary: z.string().min(50, "Summary must be at least 50 characters for ATS impact"),
    skills: z.array(z.string()).min(3, "Add at least 3 skills"),
    experience: z.array(z.object({
        role: z.string().min(2, "Role is required"),
        company: z.string().min(2, "Company is required"),
        dates: z.string().min(2, "Dates are required"),
        bullets: z.array(z.string()).min(1, "Add at least one achievement bullet"),
    })).min(1, "Add at least one experience entry"),
    projects: z.array(z.object({
        client: z.string().min(2, "Client/Project Name is required"),
        dates: z.string().min(2, "Dates are required"),
        bullets: z.array(z.string()).min(1, "Add at least one detail bullet"),
    })).optional(),
    education: z.string().min(5, "Education details are required"),
});

export type ResumeData = z.infer<typeof resumeSchema>;
