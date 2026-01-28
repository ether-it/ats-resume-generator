import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function RefundPage() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="flex-1 container section py-20 max-w-3xl">
                <h1 className="text-3xl font-bold mb-8">Refund Policy</h1>
                <div className="prose prose-slate max-w-none">
                    <p>We want you to be satisfied with your ATS-optimized resume.</p>

                    <h3>7-Day Money-Back Guarantee</h3>
                    <p>If you are not satisfied with the technical structure or compatibility of the generated resume, you may request a refund within 7 days of purchase.</p>

                    <h3>How to Request</h3>
                    <p>Please email support@atsreadyresume.com with your order details and the reason for the refund request. We aim to process refunds within 3-5 business days.</p>

                    <h3>Exceptions</h3>
                    <p>Refunds are not granted for content-related issues due to user input errors (e.g., spelling mistakes you made) or for "change of mind" after successfully downloading the document.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
