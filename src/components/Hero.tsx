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
                    href={`/generate/${roleSlug}`}
                    className="btn btn-primary"
                    style={{
                        fontSize: '1.25rem',
                        padding: '1.2rem 2.5rem',
                        borderRadius: '0.75rem',
                        fontWeight: 600
                    }}
                >
                    Generate My Resume
                </Link>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
                    Free early access &nbsp;•&nbsp; No credit card required
                </p>
            </div>
        </section>
    );
};
