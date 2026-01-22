interface ProblemSectionProps {
    roleName: string;
}

export const ProblemSection: FunctionComponent<ProblemSectionProps> = ({ roleName }) => {
    return (
        <section className="section" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Why most {roleName} resumes fail ATS screening</h2>
                    <div style={{
                        display: 'grid',
                        gap: '1.5rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                    }}>
                        <div style={{ background: 'hsl(var(--background))', padding: '2rem', borderRadius: '1rem', border: '1px solid hsl(var(--border))' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>Generic Filtering</h3>
                            <p style={{ color: 'hsl(var(--muted-foreground))' }}>ATS systems automatically filter resumes before recruiters screens them. If you don't match the parsing logic, you're invisible.</p>
                        </div>
                        <div style={{ background: 'hsl(var(--background))', padding: '2rem', borderRadius: '1rem', border: '1px solid hsl(var(--border))' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>Missing Keywords</h3>
                            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Important Business Analyst keywords are often missing or misaligned in standard templates.</p>
                        </div>
                        <div style={{ background: 'hsl(var(--background))', padding: '2rem', borderRadius: '1rem', border: '1px solid hsl(var(--border))' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>Visuals over Content</h3>
                            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Most resume builders optimize for fancy visuals that confuse ATS parsers, rather than strict data structure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
