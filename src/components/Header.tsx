import Link from 'next/link';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export const Header: FunctionComponent = () => {
    return (
        <header style={{ borderBottom: '1px solid hsl(var(--border))', padding: '1.5rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        src="/logo.png"
                        alt="ATSReadyResume"
                        width={40}
                        height={40}
                        className={styles.logo}
                        priority
                    />
                </Link>
                {/* Placeholder for future nav */}
            </div>
        </header>
    );
};
