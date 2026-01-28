import { FunctionComponent } from 'react';

export const TestimonialsSection: FunctionComponent = () => {
    return (
        <section className="section" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Recruiter-Safe Standard</h2>
                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {[
                        {
                            quote: "Finally a resume format that parses perfectly in Workday. I don't have to manually fix fields anymore.",
                            role: "Senior Tech Recruiter",
                            company: "Enterprise SaaS"
                        },
                        {
                            quote: "It’s boring, and that’s exactly what I want. Clean, standard data structure. Instant shortlist.",
                            role: "Hiring Manager",
                            company: "FinTech Corp"
                        },
                        {
                            quote: "I passed the initial screen for the first time in 4 months. The keyword optimization is real.",
                            role: "Business Analyst",
                            company: "Candidate"
                        }
                    ].map((t, i) => (
                        <div key={i} style={{ backgroundColor: 'hsl(var(--card))', padding: '2rem', borderRadius: '0.75rem', border: '1px solid hsl(var(--border))' }}>
                            <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: 'hsl(var(--foreground))' }}>"{t.quote}"</p>
                            <div>
                                <div style={{ fontWeight: 600, color: 'hsl(var(--header-color))' }}>{t.role}</div>
                                <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>{t.company}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', opacity: 0.6, filter: 'grayscale(100%)' }}>
                    {/* Placeholder for Trust Badges (could be SVGs or Text) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                        <span>🔒</span> Secure Payment
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                        <span>🛡️</span> Money Back Guarantee
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                        <span>✨</span> Satisfaction Rated
                    </div>
                </div>
            </div>
        </section>
    );
};
