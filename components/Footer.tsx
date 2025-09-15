
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 mt-12">
            <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                <p>&copy; {currentYear} Sociopath Trait Assessment. All Rights Reserved.</p>
                <div className="mt-2">
                    <Link to="/privacy-policy" className="text-sm hover:text-blue-600 transition-colors">
                        Privacy Policy
                    </Link>
                </div>
                 <p className="text-xs mt-4 max-w-2xl mx-auto">
                    <strong>Disclaimer:</strong> This website and its test are intended for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
