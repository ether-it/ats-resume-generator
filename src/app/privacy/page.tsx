import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="flex-1 container section py-20 max-w-3xl">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none">
                    <p>Last Updated: January 2026</p>
                    <p>ATSReadyResume ("we", "us") respects your privacy. This policy explains how we handle your data.</p>

                    <h3>1. Data Collection</h3>
                    <p>We collect the information you voluntarily provide to generate your resume (Name, Email, Professional Experience). We do not scrape external data about you.</p>

                    <h3>2. Use of Data</h3>
                    <p>Your data is used solely for the purpose of generating your resume document. We do not sell your personal data to third parties.</p>

                    <h3>3. Data Retention</h3>
                    <p>We store your generated resume data securely to allow you to download it. You may request deletion of your data at any time by contacting support.</p>

                    <h3>4. Third-Party Services</h3>
                    <p>We use secure payment processors (e.g., Razorpay) for transactions. We do not store your credit card information.</p>

                    <h3>5. Contact</h3>
                    <p>For privacy concerns, email support@atsreadyresume.com.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
