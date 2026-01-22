export interface Role {
    role_slug: string;
    role_name: string;
    seo_title: string;
    seo_description: string;
    hero_headline: string;
    hero_subheadline: string;
    status: 'active' | 'coming-soon';
}

export interface EarlyAccessLead {
    email: string;
    role_slug: string;
    years_of_experience?: string;
    domain?: string;
    created_at: string;
}
