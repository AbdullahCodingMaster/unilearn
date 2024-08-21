// pages/privacy-policy.tsx

import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
    <Header/>
    <main>   
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              We collect information about you when you visit our website, make a purchase, or contact us. This may include your name, email address, phone number, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              We use the information we collect to process your orders, communicate with you, and improve our website and services. We may also use your information to send you promotional materials or updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">3. Sharing Your Information</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              We may share your information with third-party service providers who assist us in operating our website or processing transactions. We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">4. Your Rights</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              You have the right to access, correct, or delete your personal information. If you have any questions or concerns about your personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">5. Changes to This Privacy Policy</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">6. Contact Us</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              If you have any questions or concerns about this Privacy Policy, please contact us at [your contact information].
            </p>
          </section>
        </div>
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
}
