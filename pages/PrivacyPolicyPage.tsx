
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Commitment to Your Privacy</h2>
                    <p>
                        Welcome to the Sociopath Trait Assessment website. We are deeply committed to protecting your privacy. This policy outlines our practices regarding information. Our core principle is simple: we do not collect your personal data.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Information We Do Not Collect</h2>
                    <p>
                        We want to be unequivocally clear about what we do not do. We DO NOT collect, store, or process any of the following:
                    </p>
                    <ul className="list-disc list-inside mt-2 pl-4 space-y-1">
                        <li><strong>Personal Information:</strong> We do not ask for your name, email address, age, gender, or any other personally identifiable information.</li>
                        <li><strong>Test Answers and Results:</strong> Your answers to the quiz questions and the final result you receive are processed within your browser and are never sent to our servers or any third party. Once you close your browser tab, they are gone.</li>
                        <li><strong>IP Addresses:</strong> We do not log or store IP addresses of our visitors.</li>
                    </ul>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">2. How We Use Information</h2>
                    <p>
                        Since we do not collect any personal data, we do not use it for any purpose. Your interaction with the test is entirely contained within your own device.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Cookies and Tracking Technologies</h2>
                    <p>
                        This website does not use cookies for tracking, advertising, or collecting personal information. Any cookies that may be used are strictly for the basic functionality of the website itself and are not used to identify you.
                    </p>
                </section>

                 <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Data Security</h2>
                    <p>
                        While no online service can be 100% secure, we take the security of our platform seriously. Since we do not collect or store your personal data, the risk of a data breach affecting your information is eliminated.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                    </p>
                </section>

                 <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@sociopathtrait.info" className="text-blue-600 hover:underline">contact@sociopathtrait.info</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
