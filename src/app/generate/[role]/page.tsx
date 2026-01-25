import { notFound } from 'next/navigation';
import { getRoleBySlug } from '@/lib/data/roles';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import EarlyAccessForm from '@/components/EarlyAccessForm';

interface PageProps {
    params: { role: string };
}

export async function generateMetadata({ params }: PageProps) {
    const role = await getRoleBySlug(params.role);
    if (!role) return {};
    return {
        title: `Join Early Access - ${role.name} Resume System`,
        description: `We're building the ultimate ATS-ready resume system for ${role.name}s. Join the waitlist.`
    }
}

export default async function GeneratePage({ params }: PageProps) {
    const role = await getRoleBySlug(params.role);

    if (!role) {
        notFound();
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
                <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
                    <span style={{
                        background: 'hsl(var(--secondary))',
                        color: 'hsl(var(--secondary-foreground))',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        display: 'inline-block',
                        marginBottom: '1.5rem'
                    }}>
                        Coming Soon
                    </span>
                    <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>We’re preparing this ATS resume system</h1>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '3rem', fontSize: '1.125rem' }}>
                        We are rolling this out role-by-role to maintain ATS accuracy, zero hallucination risk, and consistent output quality.
                    </p>

                    <div style={{ textAlign: 'left' }}>
                        <EarlyAccessForm roleSlug={role.slug} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
