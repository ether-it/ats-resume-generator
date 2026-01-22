import fs from 'fs/promises';
import path from 'path';

export interface EarlyAccessLead {
    email: string;
    role_slug: string;
    years_experience?: string;
    domain?: string;
    created_at: string;
}

const DB_PATH = path.join(process.cwd(), 'leads.json');

export async function saveLead(lead: EarlyAccessLead): Promise<void> {
    let leads: EarlyAccessLead[] = [];

    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        leads = JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, start with empty array
    }

    leads.push(lead);

    await fs.writeFile(DB_PATH, JSON.stringify(leads, null, 2));
}

export async function getLeadsCount(role_slug?: string): Promise<number> {
    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        const leads: EarlyAccessLead[] = JSON.parse(data);
        if (role_slug) {
            return leads.filter(l => l.role_slug === role_slug).length;
        }
        return leads.length;
    } catch (error) {
        return 0;
    }
}
