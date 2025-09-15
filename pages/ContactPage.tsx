
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">Contact & FAQ</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Get in Touch</h2>
                        <p className="text-gray-700">
                            For questions, feedback, or inquiries, please reach out to us. We value your input to improve our educational resources.
                        </p>
                        <div className="mt-4">
                            <a href="mailto:contact@sociopathtrait.info" className="text-blue-600 hover:underline font-medium">
                                contact@sociopathtrait.info
                            </a>
                        </div>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Trust & Safety</h2>
                        <p className="text-gray-700">
                            Your privacy is paramount. We do not store personal data or test results. All interactions are anonymous. Please see our <a href="/#/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for more details.
                        </p>
                    </section>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800">Is this test accurate?</h3>
                            <p className="text-gray-700">This is an educational tool, not a diagnostic instrument. Its accuracy is limited as it relies on self-reporting and is not a substitute for a clinical evaluation by a professional.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Are my results saved?</h3>
                            <p className="text-gray-700">No. We do not collect or store any of your answers or final results. Your session is completely anonymous and private.</p>
                        </div>
                         <div>
                            <h3 className="font-semibold text-gray-800">What should I do if I'm concerned about my results?</h3>
                            <p className="text-gray-700">If your results or personal experiences are causing you concern, we strongly recommend speaking with a licensed therapist, psychologist, or psychiatrist. They can provide a proper assessment and guidance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
