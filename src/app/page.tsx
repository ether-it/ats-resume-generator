import Link from "next/link";
import Script from "next/script";
import { getAllRoles } from "@/lib/data/roles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default async function Home() {
    const roles = await getAllRoles();
    const primaryRole = roles.find(r => r.status === 'active') || roles[0];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ATSReadyResume",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "ATS-optimized resume generator for Business Analysts. Build recruiter-safe, parseable resumes instantly.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "120"
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <main style={{ flex: 1 }}>
                <Hero
                    headline="ATS-Optimized Senior Business Analyst Resume – Instant Download"
                    subheadline="Build a recruiter-safe, engineering-grade resume found by algorithms. Fixed structure. Zero hallucination."
                    roleSlug={primaryRole.slug}
                />

                <FeaturesSection />

                <div id="roles" className="container section" style={{ padding: '4rem 1.5rem', scrollMarginTop: '100px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Select Your Role</h2>
                        <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.25rem' }}>
                            Select a role to apply role-specific ATS intelligence on a fixed, recruiter-approved resume structure.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                        {roles.map(role => (
                            <Link
                                key={role.slug}
                                href={`/resume/${role.slug}`}
                                style={{
                                    display: 'block',
                                    padding: '2rem',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '0.75rem',
                                    transition: 'all 0.2s',
                                    backgroundColor: 'hsl(var(--card))',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{role.name}</h3>
                                    {role.status === 'coming-soon' && (
                                        <span style={{
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.75rem',
                                            background: 'hsl(var(--secondary))',
                                            borderRadius: '999px',
                                            fontWeight: 600,
                                            color: 'hsl(var(--secondary-foreground))'
                                        }}>Coming Soon</span>
                                    )}
                                </div>
                                <p style={{ color: 'hsl(var(--muted-foreground))', fontWeight: 500 }}>
                                    {role.status === 'active' ? 'Build ATS-Engineered Resume' : 'Join Waitlist'} &rarr;
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                <ProblemSection roleName="Business Analyst" />
                <SolutionSection roleName="Business Analyst" />
                <HowItWorksSection roleName="Business Analyst" roleSlug={primaryRole.slug} />
                <TestimonialsSection />
            </main>

            <Footer />
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
