import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works - The ATS Algorithm | ATSReadyResume',
    description: 'Understand how our resume engineering process guarantees ATS parseability. Infrastructure-grade resume generation.',
};

export default function AboutPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-20 bg-slate-900 text-white text-center">
                    <div className="container">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">We Don't Design Resumes.<br />We Engineer Them.</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Most candidates fail because they treat resumes as art.
                            We treat them as data payloads for ATS databases.
                        </p>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="section py-20">
                    <div className="container max-w-4xl">
                        <div className="space-y-16">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="bg-blue-100 text-blue-800 font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                                    01
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Structure Enforcement</h2>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        Human readability is secondary. Machine readability is primary.
                                        We enforce a strict, single-column logic that maps 1:1 to Taleo, Workday, and Greenhouse database schemas.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        <li>No tables or text boxes (which break parsers).</li>
                                        <li>Standardized section headers (e.g., "Professional Experience" not "My Journey").</li>
                                        <li>Chronological ordering enforced by code.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="bg-blue-100 text-blue-800 font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                                    02
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Keyword Injection</h2>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        We analyze thousands of job descriptions for your specific role (e.g., Business Analyst)
                                        to identify the high-frequency semantic keywords recruiters filter for.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Our system guides you to include these naturally, ensuring your "relevance score" is maximized before a human ever sees your file.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="bg-blue-100 text-blue-800 font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                                    03
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Zero Hallucination</h2>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        Generative AI often invents skills you don't have. That's dangerous.
                                        ATSReadyResume uses a "Human-in-the-Loop" generation model.
                                    </p>
                                    <p className="text-muted-foreground">
                                        You provide the raw truth. We provide the formatting and keyword optimization.
                                        We never invent experience. This makes our resumes 100% safe for background checks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-slate-50 border-t text-center">
                    <div className="container">
                        <h2 className="text-3xl font-bold mb-6">Ready to stop guessing?</h2>
                        <a href="/resume/business-analyst" className="btn btn-primary text-xl px-8 py-4 inline-block">
                            Build Your ATS Resume Now
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
