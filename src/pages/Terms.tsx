import { FileText, Scale, AlertCircle, Gavel, Handshake, Globe } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="neurgrid-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Scale className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of <span className="neurgrid-gradient-text">Service</span>
            </h1>
            <p className="text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Please read these Terms of Service ("Terms") carefully before using the website or 
                services of Neurgrid Energy Solution Inc. ("Company," "we," "our," or "us"). 
                By accessing or using our website and services, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700">
                  By accessing or using our website, products, or services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms. If you do not agree to these Terms, 
                  you may not access or use our services.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. Description of Services</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  Neurgrid Energy Solution Inc. provides turnkey Battery Energy Storage System (BESS) 
                  equipment and solutions, including but not limited to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Integrated BESS equipment packages for commercial, industrial, and utility-scale applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Energy Management System (NeurGrid OS) software and AI-driven arbitrage solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Compliance pre-audit and design assistance services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Operations and maintenance (O&M) support services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Microgrid and hybrid energy system solutions</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. User Responsibilities</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  When using our website or services, you agree to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Provide accurate and complete information when submitting inquiries or requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Use our services only for lawful purposes and in accordance with these Terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Not engage in any activity that could damage, disable, or impair our website or services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Not attempt to gain unauthorized access to any portion of our systems</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Gavel className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Intellectual Property</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  All content on our website, including but not limited to text, graphics, logos, images, 
                  software, and documentation, is the property of Neurgrid Energy Solution Inc. or its 
                  licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, modify, create derivative works from, or otherwise 
                  exploit any content without our prior written consent.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Disclaimer of Warranties</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  Our website and services are provided on an "as is" and "as available" basis. 
                  Neurgrid Energy Solution Inc. makes no warranties, express or implied, including but not limited to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Merchantability, fitness for a particular purpose, or non-infringement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>That our website will be uninterrupted, timely, secure, or error-free</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>That any errors will be corrected or that our website is free of viruses</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. Limitation of Liability</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700">
                  To the maximum extent permitted by law, Neurgrid Energy Solution Inc. shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, including but not 
                  limited to loss of profits, data, or use, arising out of or in connection with these Terms 
                  or your use of our website or services.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">7. Project Engagement Terms</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  For project engagements, the following additional terms apply:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>All engineering design, permitting, and construction services are retained by your chosen licensed EPC and Engineer of Record (EOR)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>We provide design assistance and compliance pre-audit services only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Specific project terms will be outlined in separate agreements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>ROI assessments and projections are estimates based on available data and do not constitute guarantees</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. Governing Law</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  Province of British Columbia, Canada, without regard to its conflict of law provisions. 
                  Any disputes arising under these Terms shall be subject to the exclusive jurisdiction 
                  of the courts of British Columbia.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">9. Changes to Terms</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700">
                  We reserve the right to modify or replace these Terms at any time. Changes will be 
                  effective immediately upon posting to our website. Your continued use of our services 
                  after any changes constitutes acceptance of the new Terms.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">10. Contact Information</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <p className="text-gray-700">
                    <strong>Neurgrid Energy Solution Inc.</strong><br />
                    Vancouver, British Columbia, Canada<br />
                    Email: <a href="mailto:sarah@neurgrid.ca" className="text-blue-600 hover:underline">sarah@neurgrid.ca</a><br />
                    Phone: <a href="tel:+1-778-917-9876" className="text-blue-600 hover:underline">+1-778-917-9876</a>
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong>Disclaimer:</strong> All financial simulations are indicative and based on historical data and current tariff structures. System performance, permitting approval, and financial outcomes are subject to site conditions, utility policies, and regulatory authority decisions. NeurGrid does not provide engineering stamp, legal, or financial advisory services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
