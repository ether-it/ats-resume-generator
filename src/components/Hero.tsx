import Link from 'next/link';
import { FunctionComponent } from 'react';

interface HeroProps {
    headline: string;
    subheadline: string;
    roleSlug: string;
}

export const Hero: FunctionComponent<HeroProps> = ({ headline, subheadline, roleSlug }) => {
    return (
        <section className="section" style={{ padding: '8rem 0 6rem', textAlign: 'center' }}>
            <div className="container">
                <h1 style={{
                    marginBottom: '1.5rem',
                    maxWidth: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em'
                }}>
                    {headline}
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    color: 'hsl(var(--muted-foreground))',
                    marginBottom: '3rem',
                    maxWidth: '700px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    lineHeight: 1.5
                }}>
                    {subheadline}
                </p>
                <Link
                    href={`/resume/${roleSlug}`}
                    className="btn btn-primary"
                    style={{
                        fontSize: '1.25rem',
                        padding: '1.2rem 2.5rem',
                        borderRadius: '0.75rem',
                        fontWeight: 600
                    }}
                >
                    Build ATS-Optimized Resume
                </Link>

                <div style={{ marginTop: '4rem', textAlign: 'left', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'hsl(var(--header-color))', textAlign: 'center' }}>Why ATSReadyResume Is Different</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'hsl(var(--muted-foreground))', lineHeight: '1.8' }}>
                        <li>Fixed ATS-approved layout (non-editable by design)</li>
                        <li>No hallucinated experience, metrics, or skills</li>
                        <li>Role-specific keyword intelligence</li>
                        <li>Predictable, repeatable output quality</li>
                        <li>Built for shortlisting, not visual creativity</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
