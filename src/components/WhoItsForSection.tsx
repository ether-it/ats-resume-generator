import { FunctionComponent } from 'react';

interface WhoItsForSectionProps {
    roleName: string;
}

export const WhoItsForSection: FunctionComponent<WhoItsForSectionProps> = ({ roleName }) => {
    return (
        <section className="section">
            <div className="container">
                <div style={{ display: 'grid', md: { gridTemplateColumns: '1fr 1fr' }, gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <h2 style={{ marginBottom: '2rem' }}>Who this is for</h2>
                            <ul style={{ listStyle: 'none', spaceY: '1rem' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ color: 'green' }}>✓</span> {roleName}s applying via ATS portals
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ color: 'green' }}>✓</span> Professionals who want recruiter-ready resumes
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ color: 'green' }}>✓</span> Users who prefer Word over PDFs
                                </li>
                            </ul>
                        </div>

                        <div style={{ flex: '1 1 300px' }}>
                            <h2 style={{ marginBottom: '2rem' }}>Who this is NOT for</h2>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ color: 'red' }}>×</span> Creative or design-heavy resumes
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ color: 'red' }}>×</span> Users who want exaggerated experience
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ color: 'red' }}>×</span> People looking for a generic bio-generator
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
