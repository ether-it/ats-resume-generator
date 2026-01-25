import Link from 'next/link';
import { FunctionComponent } from 'react';
import Image from 'next/image';

export const Header: FunctionComponent = () => {
    return (
        <header style={{ borderBottom: '1px solid hsl(var(--border))', padding: '1.5rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        src="/logo.png"
                        alt="ATSReadyResume"
                        width={32}
                        height={32}
                        style={{ height: '32px', width: '32px', objectFit: 'contain' }}
                        priority
                    />
                </Link>
                {/* Placeholder for future nav */}
            </div>
        </header>
    );
};
