import Link from 'next/link';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export const Header: FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Link href="/" className={styles.brandLink}>
                    <Image
                        src="/logo.png"
                        alt="ATSReadyResume"
                        width={64}
                        height={64}
                        className={styles.logo}
                        priority
                    />
                    <div className={styles.brandTextColumn}>
                        <span className={styles.brandName}>ATSReadyResume</span>
                        <span className={styles.slogan}>ATS Resume Engineering</span>
                    </div>
                </Link>
            </div>
        </header>
    );
};
