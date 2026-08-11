import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionWrapper } from '@/components/common/SectionWrapper';

const PrivacyPage: React.FC = () => {
  return (
    <Layout title="Privacy Policy | Stone Paper Services" description="Read the Stone Paper Services privacy policy.">
      <SectionWrapper variant="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-poppins text-2xl md:text-5xl font-bold text-foreground mb-6 text-balance">Privacy Policy</h1>
          <p className="text-muted-foreground text-pretty">Last updated: July 26, 2026</p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground">
          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">1. Introduction</h2>
          <p className="text-pretty mb-4">Stone Paper Services ("we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, store, and protect personal information when you visit our website, request a quote, or use our professional typesetting and digital publishing services.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">2. Information We Collect</h2>
          <p className="text-pretty mb-4">We collect information you provide directly, including your name, email address, phone number, company or institution name, billing address, and project details. We also collect manuscripts, documents, and other files you share for quotation or production. Technical information such as your IP address, browser type, device information, and pages visited may be collected automatically through standard analytics tools.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">3. How We Use Your Information</h2>
          <p className="text-pretty mb-4">We use your information to respond to inquiries, prepare quotes, manage active projects, communicate with you about deliverables, process payments, improve our services, and comply with legal obligations. We do not use your content for marketing purposes without your consent.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">4. Manuscripts and Client Content</h2>
          <p className="text-pretty mb-4">All manuscripts, files, and content you submit remain your intellectual property. Stone Paper Services treats every client file as confidential and uses it solely to perform the requested service. We do not publish, share, sell, reproduce, or use your content for any purpose outside your project unless expressly authorized by you.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">5. Data Security</h2>
          <p className="text-pretty mb-4">We implement reasonable organizational and technical safeguards to protect your personal information and client files against unauthorized access, alteration, disclosure, or destruction. These include access controls, secure storage, and encrypted transmission where appropriate. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">6. Sharing of Information</h2>
          <p className="text-pretty mb-4">We do not sell or rent your personal information or manuscripts to third parties. We may share information only with trusted service providers who help us operate our business, such as email, hosting, payment, or analytics providers, and only under strict confidentiality obligations. We may also disclose information if required by law or to protect our rights.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">7. Cookies and Analytics</h2>
          <p className="text-pretty mb-4">Our website may use cookies and similar technologies to improve functionality, analyze traffic, and understand user behavior. You can control cookie preferences through your browser settings. Disabling cookies may affect some features of the site.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">8. Data Retention</h2>
          <p className="text-pretty mb-4">We retain personal information and project files only for as long as necessary to fulfill the purpose for which they were collected, comply with legal obligations, resolve disputes, and enforce our agreements. After project completion, client files are typically archived for a limited period and then securely deleted unless you request earlier deletion or extended retention.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">9. Your Rights</h2>
          <p className="text-pretty mb-4">Depending on your location, you may have the right to access, correct, update, delete, or restrict the processing of your personal information. You may also request a copy of your data or withdraw consent where processing is based on consent. To exercise these rights, please contact us using the details provided below.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">10. Changes to This Policy</h2>
          <p className="text-pretty mb-4">We may update this Privacy Policy from time to time. The updated version will be posted on this page with the revised effective date. We encourage you to review this policy periodically.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">11. Contact Us</h2>
          <p className="text-pretty mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us at stonepaperservices@gmail.com or +91 8148477490.</p>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default PrivacyPage;
