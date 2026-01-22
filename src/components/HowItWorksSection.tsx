import Link from 'next/link';
import { FunctionComponent } from 'react';

interface HowItWorksSectionProps {
    roleName: string;
    roleSlug: string;
}

export const HowItWorksSection: FunctionComponent<HowItWorksSectionProps> = ({ roleName, roleSlug }) => {
    return (
        <section className="section" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <h2 style={{ marginBottom: '3rem' }}>How it works</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{
                            background: 'hsl(var(--primary))',
                            color: 'hsl(var(--primary-foreground))',
                            width: '2.5rem',
                            height: '2.5rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            flexShrink: 0
                        }}>1</div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Enter your {roleName} experience</h3>
                            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Fill out a simple form focused on your skills, roles, and achievements.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{
                            background: 'hsl(var(--primary))',
                            color: 'hsl(var(--primary-foreground))',
                            width: '2.5rem',
                            height: '2.5rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            flexShrink: 0
                        }}>2</div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>We structure it for ATS</h3>
                            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Our engine arranges your data into a parseable hierarchy optimized for screening algorithms.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{
                            background: 'hsl(var(--primary))',
                            color: 'hsl(var(--primary-foreground))',
                            width: '2.5rem',
                            height: '2.5rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            flexShrink: 0
                        }}>3</div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Download Word (.docx)</h3>
                            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Get a clean, editable Word document that recruiters appreciate.</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '3rem' }}>
                    <Link href={`/generate/${roleSlug}`} className="btn btn-primary">
                        Start Now
                    </Link>
                </div>
            </div>
        </section>
    );
};
