import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getRoleBySlug, getAllRoles } from '@/lib/data/roles';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { WhoItsForSection } from '@/components/WhoItsForSection';

interface PageProps {
    params: { role: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const role = await getRoleBySlug(params.role);
    if (!role) return {};

    return {
        title: role.seo_title,
        description: role.seo_description,
        openGraph: {
            title: role.seo_title,
            description: role.seo_description,
        },
    };
}

export async function generateStaticParams() {
    const roles = await getAllRoles();
    return roles.map((role) => ({
        role: role.slug,
    }));
}

export default async function ResumeLandingPage({ params }: PageProps) {
    const role = await getRoleBySlug(params.role);

    if (!role) {
        notFound();
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main>
                <Hero
                    headline={role.hero_h1}
                    subheadline={role.hero_subheadline}
                    roleSlug={role.slug}
                />
                <ProblemSection roleName={role.name} />
                <SolutionSection roleName={role.name} />
                <HowItWorksSection roleName={role.name} roleSlug={role.slug} />
                <WhoItsForSection roleName={role.name} />
            </main>
            <Footer />
        </div>
    );
}
