import Link from "next/link";
import { getAllRoles } from "@/lib/data/roles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function Home() {
    const roles = await getAllRoles();

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="container section" style={{ flex: 1 }}>
                <h1 style={{ marginBottom: '1.5rem' }}>Select Your Role</h1>
                <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '3rem', fontSize: '1.25rem' }}>
                    Select a role to apply role-specific ATS intelligence on a fixed, recruiter-approved resume structure.
                </p>
                <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                    {roles.map(role => (
                        <Link
                            key={role.slug}
                            href={`/resume/${role.slug}`}
                            style={{
                                display: 'block',
                                padding: '2rem',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: '0.75rem',
                                transition: 'all 0.2s',
                                backgroundColor: 'hsl(var(--card))',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <h2 style={{ fontSize: '1.5rem' }}>{role.name}</h2>
                                {role.status === 'coming-soon' && (
                                    <span style={{
                                        fontSize: '0.75rem',
                                        padding: '0.25rem 0.75rem',
                                        background: 'hsl(var(--secondary))',
                                        borderRadius: '999px',
                                        fontWeight: 600
                                    }}>Coming Soon</span>
                                )}
                            </div>
                            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                                {role.status === 'active' ? 'Build ATS-Engineered Resume' : 'Join Waitlist'} &rarr;
                            </p>
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>
                    Fixed ATS-safe layout • No hallucinated content • Predictable output quality
                </div>
            </main>
            <Footer />
        </div>
    );
}
