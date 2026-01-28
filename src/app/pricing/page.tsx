import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing - One-Time Payment | ATSReadyResume',
    description: 'Simple, transparent pricing. One-time payment for a recruiter-safe, ATS-optimized resume. No subscriptions.',
};

export default function PricingPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="flex-1 bg-slate-50">
                <div className="container section py-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold mb-6">Simple, One-Time Investment</h1>
                        <p className="text-xl text-muted-foreground">
                            Stop paying monthly subscriptions for "creative" templates that get auto-rejected.
                            Pay once for a resume engineered to pass the screen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
                        {/* The "Bad" Option */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 opacity-70 hover:opacity-100 transition-opacity">
                            <h3 className="text-xl font-semibold mb-2 text-slate-500">Standard Resume Builders</h3>
                            <div className="text-3xl font-bold mb-6 text-slate-400">Free / Monthly</div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-3 text-slate-500">
                                    <X className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>Creative columns (unparseable)</span>
                                </li>
                                <li className="flex gap-3 text-slate-500">
                                    <X className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>Graphics & icons (confuse ATS)</span>
                                </li>
                                <li className="flex gap-3 text-slate-500">
                                    <X className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>Generic keywords</span>
                                </li>
                                <li className="flex gap-3 text-slate-500">
                                    <X className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>Recurring subscriptions</span>
                                </li>
                            </ul>
                            <div className="text-center py-3 bg-slate-100 rounded-lg text-slate-500 font-medium">
                                High Rejection Risk
                            </div>
                        </div>

                        {/* The "Good" Option */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-primary shadow-xl relative transform md:-translate-y-4">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                                RECRUITER APPROVED
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-primary">ATSReadyResume Standard</h3>
                            <div className="text-4xl font-bold mb-6 text-slate-900">$29 <span className="text-lg font-normal text-slate-500">/ one-time</span></div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>Fixed ATS-safe Layout (XML-ready)</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>Role-Specific Keyword Injection</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>Zero Hallucination Guarantee</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>Word (.docx) Download</span>
                                </li>
                            </ul>
                            <Link href="/resume/business-analyst" className="btn btn-primary w-full py-4 text-lg justify-center shadow-lg hover:shadow-primary/20">
                                Build My Resume
                            </Link>
                            <p className="text-center text-xs text-muted-foreground mt-4">
                                Secure Payment • Money-back Guarantee
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto mt-20">
                        <h2 className="text-2xl font-bold mb-8 text-center">Payment FAQ</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg border">
                                <h3 className="font-semibold mb-2">Is this a subscription?</h3>
                                <p className="text-muted-foreground">No. You pay once to generate and download your resume. No hidden monthly fees.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border">
                                <h3 className="font-semibold mb-2">Can I edit the resume later?</h3>
                                <p className="text-muted-foreground">Yes. We provide a tailored Microsoft Word (.docx) file that you can edit forever.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border">
                                <h3 className="font-semibold mb-2">What if I'm not happy?</h3>
                                <p className="text-muted-foreground">We offer a 7-day money-back guarantee if the format doesn't parse correctly in standard ATS checkers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
