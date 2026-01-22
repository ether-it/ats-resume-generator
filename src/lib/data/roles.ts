export interface Role {
  slug: string;
  name: string;
  seo_title: string;
  seo_description: string;
  hero_h1: string;
  hero_subheadline: string;
  status: 'active' | 'coming-soon';
}

export const roles: Role[] = [
  {
    slug: 'business-analyst',
    name: 'Business Analyst',
    seo_title: 'ATS-Ready Business Analyst Resume Generator | Word Format',
    seo_description: 'Generate an ATS-ready Business Analyst resume in Word format. Built for ATS screening systems, not templates or design-heavy builders.',
    hero_h1: 'Generate an ATS-Ready Business Analyst Resume in Minutes',
    hero_subheadline: 'Enter your experience. Get a recruiter-ready Word resume — no templates, no design work.',
    status: 'active',
  },
  {
    slug: 'data-analyst',
    name: 'Data Analyst',
    seo_title: 'ATS-Ready Data Analyst Resume Generator | Word Format',
    seo_description: 'Generate an ATS-ready Data Analyst resume in Word format.',
    hero_h1: 'Generate an ATS-Ready Data Analyst Resume',
    hero_subheadline: 'Optimized for ATS algorithms and technical recruiters.',
    status: 'coming-soon',
  }
];

export async function getRoleBySlug(slug: string): Promise<Role | null> {
  // Simulate database latency if needed, but for now just filter
  return roles.find(role => role.slug === slug) || null;
}

export async function getAllRoles(): Promise<Role[]> {
  return roles;
}
