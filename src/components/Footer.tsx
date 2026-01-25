import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
    return (
        <footer style={{ borderTop: '1px solid hsl(var(--border))', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ textAlign: 'center', color: 'hsl(var(--muted-foreground))' }}>
                <p>&copy; {new Date().getFullYear()} ATSReadyResume — ATS Resume Engineering System</p>
            </div>
        </footer>
    );
};
