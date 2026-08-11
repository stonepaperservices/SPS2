import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionWrapper } from '@/components/common/SectionWrapper';

const TermsPage: React.FC = () => {
  return (
    <Layout title="Terms & Conditions | Stone Paper Services" description="Read the Stone Paper Services terms and conditions.">
      <SectionWrapper variant="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-poppins text-2xl md:text-5xl font-bold text-foreground mb-6 text-balance">Terms & Conditions</h1>
          <p className="text-muted-foreground text-pretty">Last updated: July 26, 2026</p>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground">
          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">1. Acceptance of Terms</h2>
          <p className="text-pretty mb-4">By accessing our website, requesting a quote, or using our services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">2. Description of Services</h2>
          <p className="text-pretty mb-4">Stone Paper Services provides professional book typesetting, digital publishing, eBook conversion, print-ready PDF creation, layout design, and related publishing support. The specific scope, deliverables, formats, and turnaround time for each project are defined in the individual quote, agreement, or order confirmation.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">3. Account and Acceptable Use</h2>
          <p className="text-pretty mb-4">You agree to provide accurate and complete information when contacting us or submitting a project. You may not use our services for unlawful, defamatory, infringing, or fraudulent purposes. You may not attempt to gain unauthorized access to our systems, interfere with our operations, or reverse-engineer our workflows or tools.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">4. Project Submissions and Client Content</h2>
          <p className="text-pretty mb-4">You retain full ownership of all manuscripts, images, text, and other materials you submit. You represent that you have the right to provide these materials and that they do not infringe the intellectual property or privacy rights of any third party. You grant us a limited, temporary license to use your materials solely for the purpose of delivering the agreed services.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">5. Manuscript Confidentiality and Intellectual Property</h2>
          <p className="text-pretty mb-4">All client files, manuscripts, and project information are treated as strictly confidential. We do not disclose, publish, sell, or use your materials for any purpose outside the agreed project. Upon project completion, all rights in the final deliverables belong to you, subject to payment of applicable fees. We retain ownership only of our internal methods, templates, and generic processes.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">6. Revisions Policy</h2>
          <p className="text-pretty mb-4">Each service plan includes a specified number of revision rounds. Revisions are requests that fall within the original project scope and do not include major structural changes, new content, or substantial scope expansion. Additional revisions beyond the included limit may be quoted separately. We ask that revision requests be submitted in a single batch where possible to maintain efficient turnaround.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">7. Delivery Timelines</h2>
          <p className="text-pretty mb-4">Delivery timelines are estimates based on the project scope, complexity, and materials provided. Timelines begin once we receive complete project files, agreed specifications, and any required deposit or payment confirmation. We are not responsible for delays caused by incomplete materials, late feedback, or circumstances outside our reasonable control.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">8. Payment Terms</h2>
          <p className="text-pretty mb-4">Payment terms are specified in the project quote or agreement. For most projects, work begins after acceptance of the quote and any required upfront payment. Invoices are due on the date stated unless otherwise agreed. Late payments may delay delivery and may incur reasonable interest charges. Final deliverables are released upon receipt of full payment unless alternative terms have been agreed in writing.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">9. Refund and Cancellation</h2>
          <p className="text-pretty mb-4">If you cancel a project before work has begun, we will refund any fees paid, minus any non-refundable processing or administrative costs. Once work has commenced or files have been delivered, refunds are generally not available because digital services are custom and cannot be returned. Disputes will be handled in good faith on a case-by-case basis.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">10. Disclaimer of Warranties</h2>
          <p className="text-pretty mb-4">Our services are provided on an "as is" and "as available" basis. We make reasonable efforts to ensure quality and accuracy, but we do not warrant that outputs will be error-free, meet every third-party platform requirement, or achieve any specific commercial result. Clients are responsible for reviewing proofs and approving final files before production or distribution.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">11. Limitation of Liability</h2>
          <p className="text-pretty mb-4">To the fullest extent permitted by law, Stone Paper Services is not liable for any indirect, incidental, consequential, special, or punitive damages arising from the use of our services. Our total liability for any claim related to a project is limited to the total amount paid by you for that specific project.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">12. Indemnification</h2>
          <p className="text-pretty mb-4">You agree to indemnify and hold Stone Paper Services harmless from any claims, damages, losses, or expenses arising from your breach of these terms, your content, or your misuse of our services.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">13. Termination</h2>
          <p className="text-pretty mb-4">Either party may terminate a project if the other party materially breaches the agreement and fails to cure the breach within a reasonable time. Upon termination, you remain responsible for payment for all work completed and expenses incurred up to the termination date.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">14. Governing Law</h2>
          <p className="text-pretty mb-4">These Terms and Conditions shall be governed by and construed in accordance with the laws of India.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">15. Changes to These Terms</h2>
          <p className="text-pretty mb-4">We may update these Terms & Conditions from time to time. The revised version will be posted on this page with the updated effective date. Continued use of our services after changes constitutes acceptance of the revised terms.</p>

          <h2 className="font-poppins text-xl font-semibold text-foreground mt-8 mb-3">16. Contact Information</h2>
          <p className="text-pretty mb-4">For questions about these Terms & Conditions, please contact us at stonepaperservices@gmail.com or +91 8148477490.</p>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default TermsPage;
