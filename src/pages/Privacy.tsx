import { Shield, Lock, Eye, FileText, User, Globe } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="neurgrid-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy <span className="neurgrid-gradient-text">Policy</span>
            </h1>
            <p className="text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Neurgrid Energy Solution Inc. ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact details you provide through our contact forms or during business communications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Technical Information:</strong> IP address, browser type, device information, operating system, and browsing behavior on our website.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Project Information:</strong> Details about your energy storage projects, requirements, and preferences that you share with us.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>To respond to your inquiries and provide requested services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>To develop and prepare project proposals and ROI assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>To improve our website, products, and services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>To communicate with you about updates, promotions, and industry news (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>To comply with legal obligations and protect our rights</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Information Sharing and Disclosure</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (e.g., cloud hosting, analytics)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Business Partners:</strong> With your consent, we may share information with EPC contractors and engineering partners involved in your projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Your Rights and Choices</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Access:</strong> Request a copy of the personal information we hold about you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Correction:</strong> Request that we correct inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Deletion:</strong> Request that we delete your personal information, subject to legal obligations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us at <a href="mailto:scot@neurgrid.ca" className="text-blue-600 hover:underline">scot@neurgrid.ca</a>.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. Cookies and Tracking</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze website traffic, and understand where our visitors are coming from. You can control cookies 
                  through your browser settings.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">7. Changes to This Policy</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
                  an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. Contact Us</h2>
              </div>
              <div className="pl-13">
                <p className="text-gray-700 mb-4">
                  If you have any questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <p className="text-gray-700">
                    <strong>Neurgrid Energy Solution Inc.</strong><br />
                    Vancouver, British Columbia, Canada<br />
                    Email: <a href="mailto:scot@neurgrid.ca" className="text-blue-600 hover:underline">scot@neurgrid.ca</a><br />
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

export default Privacy;
