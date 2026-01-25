import Link from 'next/link';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export const Header: FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Link href="/" className={styles.brandLink}>
                    <Image
                        src="/logo.png"
                        alt="ATSReadyResume"
                        width={44}
                        height={44}
                        className={styles.logo}
                        priority
                    />
                    <div className={styles.brandTextColumn}>
                        <span className={styles.brandName}>ATSReadyResume</span>
                        <span className={styles.slogan}>ATS Resume Engineering — Fixed. Predictable. Recruiter-Approved.</span>
                    </div>
                </Link>

                <div className={styles.trustSignal}>
                    Fixed ATS-safe structure
                </div>
            </div>
        </header>
    );
};
