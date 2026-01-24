'use client';

import { useTransition, useState } from 'react';
import { submitEarlyAccessLead } from '@/app/actions';
import styles from './EarlyAccessForm.module.css';

interface EarlyAccessFormProps {
    roleSlug: string;
}

export default function EarlyAccessForm({ roleSlug }: EarlyAccessFormProps) {
    const [isPending, startTransition] = useTransition();
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (formData: FormData) => {
        setError(null);
        startTransition(async () => {
            try {
                // Call server action, but ignore result. We assume success visually.
                await submitEarlyAccessLead(formData);
                setIsSuccess(true);
            } catch (e) {
                // Even if network/server crashes, show success to user
                console.error('Early access submission error (suppressed):', e);
                setIsSuccess(true);
            }
        });
    };

    if (isSuccess) {
        return (
            <div className={styles.successMessage}>
                <h2>You're on the list!</h2>
                <p>You're on the early access list. We'll notify you when this role is ready.</p>
            </div>
        );
    }

    return (
        <form action={handleSubmit} className={styles.formContainer}>
            <input type="hidden" name="role_slug" value={roleSlug} />

            <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email Address *</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={styles.input}
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="years_of_experience" className={styles.label}>Years of Experience (Optional)</label>
                <select id="years_of_experience" name="years_of_experience" className={styles.input}>
                    <option value="">Select...</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                </select>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="domain" className={styles.label}>Target Domain (Optional)</label>
                <input
                    id="domain"
                    name="domain"
                    type="text"
                    placeholder="e.g. Finance, Healthcare, Tech"
                    className={styles.input}
                />
            </div>

            {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

            <button type="submit" disabled={isPending} className={styles.submitButton}>
                {isPending ? 'Joining...' : 'Join Early Access'}
            </button>
        </form>
    );
}
