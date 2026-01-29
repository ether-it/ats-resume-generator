import { notFound } from 'next/navigation';
import { getRoleBySlug } from '@/lib/data/roles';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import EarlyAccessForm from '@/components/EarlyAccessForm';
import ResumeForm from '@/components/ResumeForm';

interface PageProps {
    params: { role: string };
}

export async function generateMetadata({ params }: PageProps) {
    const role = await getRoleBySlug(params.role);
    if (!role) return {};

    if (role.status === 'active') {
        return {
            title: `Build ${role.name} Resume | ATSReadyResume`,
            description: `Generate an ATS-optimized ${role.name} resume instantly.`
        };
    }

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

    const isActive = role.status === 'active';

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div className="flex-1 bg-slate-50">
                <main className="container section">
                    {isActive ? (
                        <>
                            <div className="text-center mb-10">
                                <h1 className="text-3xl font-bold mb-4">Build Your {role.name} Resume</h1>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Fill in your details below. We will strictly format them into a recruiter-safe, parseable document.
                                </p>
                            </div>
                            <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border">
                                <ResumeForm roleSlug={role.slug} />
                            </div>
                        </>
                    ) : (
                        <div style={{ maxWidth: '500px', width: '100%', margin: '0 auto', textAlign: 'center', padding: '4rem 0' }}>
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
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
}
