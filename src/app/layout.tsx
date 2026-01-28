import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL('https://atsreadyresume.com'),
    title: {
        default: "ATSReadyResume | ATS-Optimized Resume Generator",
        template: "%s | ATSReadyResume"
    },
    description: "Build recruiter-safe, ATS-optimized resumes instantly. No AI hallucinations, fixed engineering-grade structure for Senior Business Analysts and more.",
    keywords: ["ATS resume generator", "Business analyst resume template", "ATS-compatible resume builder", "resume engineering"],
    authors: [{ name: "ATSReadyResume Team" }],
    creator: "ATSReadyResume",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://atsreadyresume.com",
        title: "ATSReadyResume | Engineering-Grade Resume Standard",
        description: "Zero AI variability. Fixed ATS-safe structure. The default standard for recruiter-safe resumes.",
        siteName: "ATSReadyResume",
        images: [
            {
                url: "/logo-mark.png", // We should ideally have an OG image, using logo for now or placeholder
                width: 1200,
                height: 630,
                alt: "ATSReadyResume Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ATSReadyResume | ATS-Optimized Resume Generator",
        description: "Build recruiter-safe, ATS-optimized resumes instantly.",
        images: ["/logo-mark.png"],
    },
    alternates: {
        canonical: "/",
    },
    verification: {
        google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_ID", // Placeholder for handoff
    },
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' }
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ]
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ATSReadyResume",
    "url": "https://atsreadyresume.com",
    "logo": "https://atsreadyresume.com/logo-mark.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@atsreadyresume.com"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <Script
                    id="org-schema"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
