import { FunctionComponent } from 'react';
import { Check, X } from 'lucide-react';

export const FeaturesSection: FunctionComponent = () => {
    return (
        <section className="section" style={{ backgroundColor: 'hsl(var(--background))' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Infrastructure Standard vs. Resume Builders</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', maxWidth: '600px', margin: '0 auto' }}>
                        Why recruiters prefer the ATSReadyResume standard over creative templates.
                    </p>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                                <th style={{ textAlign: 'left', padding: '1rem', width: '40%' }}>Feature</th>
                                <th style={{ textAlign: 'center', padding: '1rem', width: '30%', color: 'hsl(var(--header-color))', fontWeight: 700 }}>ATSReadyResume</th>
                                <th style={{ textAlign: 'center', padding: '1rem', width: '30%', color: 'hsl(var(--muted-foreground))', fontWeight: 400 }}>Standard Builders</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: "ATS Parseability Score", us: "100% (Deterministic)", them: "Variable" },
                                { name: "Layout Structure", us: "Fixed / Standardized", them: "Creative / Broken" },
                                { name: "Keyword Optimization", us: "Role-Specific Injection", them: "Manual" },
                                { name: "File Format", us: "Clean .DOCX / PDF", them: "PDF (often unreadable)" },
                                { name: "AI Hallucinations", us: "Zero (Strict Guards)", them: "Frequent" },
                                { name: "Recruiter Preference", us: "High (Predictable)", them: "Low (Visual Clutter)" }
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                                    <td style={{ padding: '1rem', fontWeight: 500 }}>{row.name}</td>
                                    <td style={{ padding: '1rem', textAlign: 'center', color: 'hsl(var(--primary))', fontWeight: 600, backgroundColor: 'hsl(var(--secondary)/0.3)' }}>
                                        {row.us}
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'center', color: 'hsl(var(--muted-foreground))' }}>
                                        {row.them}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
