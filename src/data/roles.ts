import { Role } from "@/types";

export const roles: Role[] = [
    {
        role_slug: "business-analyst",
        role_name: "Business Analyst",
        seo_title: "ATS-Ready Business Analyst Resume Generator | Word Format",
        seo_description: "Generate an ATS-ready Business Analyst resume in Word format. Built for ATS screening systems, not templates.",
        hero_headline: "Generate an ATS-Ready Business Analyst Resume in Minutes",
        hero_subheadline: "Enter your experience. Get a recruiter-ready Word resume — no templates, no design work.",
        status: "active",
    },
];

export const getRoleBySlug = (slug: string): Role | undefined => {
    return roles.find((role) => role.role_slug === slug);
};
