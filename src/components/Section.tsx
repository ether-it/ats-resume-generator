import styles from './Section.module.css';

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    id?: string;
}

export default function Section({ title, children, id }: SectionProps) {
    return (
        <section className={styles.section} id={id}>
            <div className={styles.container}>
                {title && <h2 className={styles.title}>{title}</h2>}
                <div className={styles.content}>{children}</div>
            </div>
        </section>
    );
}
