import { FunctionComponent } from 'react';

interface SolutionSectionProps {
    roleName: string;
}

export const SolutionSection: FunctionComponent<SolutionSectionProps> = ({ roleName }) => {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Built specifically for ATS screening — not templates</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{roleName}-Specific Structure</h3>
                        <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                            We use a data-first approach that structures your experience exactly how recruiting software expects to parse it.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Standardized Headings</h3>
                        <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                            No creative section names. We use standard headings that map 1:1 to database fields in Taleo, Workday, and Greenhouse.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Content Over Design</h3>
                        <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                            A clean, single-column layout without tables or graphics ensures 100% parseability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
