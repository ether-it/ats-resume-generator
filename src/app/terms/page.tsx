import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="flex-1 container section py-20 max-w-3xl">
                <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-slate max-w-none">
                    <p>By using ATSReadyResume, you agree to these terms.</p>

                    <h3>1. Service Description</h3>
                    <p>ATSReadyResume provides automated resume formatting and optimization services. We do not guarantee job interviews or employment offers.</p>

                    <h3>2. User Responsibility</h3>
                    <p>You are responsible for the accuracy of the information you input. We are not liable for false or incorrect data included in your resume.</p>

                    <h3>3. Payments</h3>
                    <p>Payments are one-time fees for the service provided. All prices are in USD unless otherwise noted.</p>

                    <h3>4. Limitation of Liability</h3>
                    <p>ATSReadyResume is provided "as is". We are not liable for any damages arising from the use of our generated documents.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
