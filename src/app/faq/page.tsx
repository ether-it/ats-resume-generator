import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'FAQ - Frequently Asked Questions | ATSReadyResume',
    description: 'Common questions about ATS compatibility, payment, and resume engineering.',
};

const faqs = [
    {
        question: "Why do you not use creative templates?",
        answer: "Creative templates with columns, graphics, and icons often fail ATS parsing (Application Tracking Systems). Recruiter software cannot read them accurately. We prioritize parseability over aesthetics to get you the interview."
    },
    {
        question: "Can I edit the resume after downloading?",
        answer: "Yes. We provide a fully editable Microsoft Word (.docx) file. You can make adjustments, add new experience, or tweak details anytime."
    },
    {
        question: "Is this a subscription service?",
        answer: "No. ATSReadyResume is a one-time payment for your specific resume build. We do not charge recurring monthly fees."
    },
    {
        question: "Which roles do you support?",
        answer: "Currently, we specialize in Senior Business Analyst resumes. We are rolling out Data Analyst and Product Manager roles soon to ensure each role has fully optimized keyword logic."
    },
    {
        question: "Do you use AI to write my resume?",
        answer: "We use AI to organize and format your data, but we do not 'hallucinate' or invent experience. You provide the facts; we provide the structure. This ensures your resume is safe for background checks."
    }
];

export default function FAQPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="flex-1 bg-slate-50">
                <div className="container section py-20 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h1>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg border shadow-sm">
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{faq.question}</h3>
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
