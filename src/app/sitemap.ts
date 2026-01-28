import { MetadataRoute } from 'next';
import { getAllRoles } from '@/lib/data/roles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://atsreadyresume.com';

    // Static pages
    const routes = [
        '',
        '/pricing',
        '/features',
        '/about',
        '/faq',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic role pages
    const roles = await getAllRoles();
    const roleRoutes = roles.map((role) => ({
        url: `${baseUrl}/resume/${role.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...roleRoutes];
}
