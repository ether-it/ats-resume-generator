import Link from 'next/link';
import { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => {
    return (
        <header style={{ borderBottom: '1px solid hsl(var(--border))', padding: '1.5rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    ATS Resume Generator
                </Link>
                {/* Placeholder for future nav */}
            </div>
        </header>
    );
};
