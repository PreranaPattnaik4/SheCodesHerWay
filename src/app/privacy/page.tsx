
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function PrivacyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold md:text-6xl">Privacy Policy</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                    Last updated: November 2025
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="prose prose-stone dark:prose-invert max-w-4xl mx-auto">
                <h2>1. Introduction</h2>
                <p>
                    Welcome to SheCodesHerWay. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
                </p>
                
                <h2>2. Information We Collect</h2>
                <p>
                    We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
                </p>
                <p>
                    The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following: name, email address, contact data, and other similar information.
                </p>

                <h2>3. How We Use Your Information</h2>
                <p>
                    We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>

                <h2>4. Will Your Information Be Shared With Anyone?</h2>
                <p>
                    We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                </p>

                <h2>5. How Long Do We Keep Your Information?</h2>
                <p>
                    We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
