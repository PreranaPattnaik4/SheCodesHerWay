
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function TermsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold md:text-6xl">Terms and Conditions</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Last updated: November 2025
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="prose prose-stone dark:prose-invert max-w-4xl mx-auto">
                <h2>1. Introduction</h2>
                <p>
                    Welcome to SheCodesHerWay ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at shecodesherway.com (together or individually "Service") operated by SheCodesHerWay.
                </p>
                <p>
                    Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
                </p>
                <p>
                    Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
                </p>

                <h2>2. Content</h2>
                <p>
                    Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.
                </p>

                <h2>3. Accounts</h2>
                <p>
                    When you create an account with us, you guarantee that you are above the age of 13, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.
                </p>

                <h2>4. Intellectual Property</h2>
                <p>
                    The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of SheCodesHerWay and its licensors.
                </p>

                <h2>5. Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of India, which governing law applies to agreement without regard to its conflict of law provisions.
                </p>

                <h2>6. Changes To Service</h2>
                <p>
                    We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice.
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
