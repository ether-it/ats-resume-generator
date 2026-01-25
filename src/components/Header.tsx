import Link from 'next/link';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export const Header: FunctionComponent = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.mainHeader}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    <Link href="/" className={styles.brandLink}>
                        <Image
                            src="/logo-mark.png"
                            alt="ATSReadyResume"
                            width={48}
                            height={48}
                            className={styles.logo}
                            priority
                        />
                        <div className={styles.brandTextColumn}>
                            <span className={styles.brandName}>ATSReadyResume</span>
                            <span className={styles.slogan}>ATS Resume Engineering</span>
                            <span className={styles.microCopy}>Fixed structure. Zero AI variability. Recruiter-safe.</span>
                        </div>
                    </Link>

                    <div className={styles.trustSignal}>
                        Fixed ATS-safe standard
                    </div>
                </div>
            </div>
            <div className={styles.infraBar}>
                <div className="container" style={{ textAlign: 'center' }}>
                    Most resumes fail before a human sees them. This system is designed for that stage.
                </div>
            </div>
        </header>
    );
};
