
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="text-center py-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                Sociopath Trait Assessment
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
                Explore behavioral patterns and personality traits in this confidential and educational quiz.
            </p>
            
            <div className="mt-8">
                <Link
                    to="/test"
                    className="inline-block px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
                >
                    Start the Free Test
                </Link>
            </div>

            <div className="mt-16 text-left max-w-4xl mx-auto space-y-12">
                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">What is the Sociopath Test?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This "sociopath test" is an informal, educational quiz designed to help you understand certain personality traits that are sometimes associated with Antisocial Personality Disorder (ASPD), colloquially known as sociopathy. It is not a diagnostic tool. The questions focus on behavior, empathy, interpersonal relationships, and attitudes towards rules.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Is This a Sociopath vs Psychopath Test?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        While the terms are often used interchangeably, this quiz focuses on traits commonly linked to sociopathy, such as impulsivity and difficulty forming stable relationships. The 'psychopath sociopath test' distinction often involves nuances not covered in a simple online quiz. Our goal is education on a specific set of behaviors, not a clinical differentiation.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Privacy and Anonymity Guaranteed</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Your privacy is our priority. This free sociopath test is completely anonymous. We do not collect any personally identifiable information. Your responses and results are not saved or tracked. You can take the test with complete peace of mind.
                    </p>
                </section>

                 <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md" role="alert">
                    <p className="font-bold">Educational Use Only</p>
                    <p>This tool is not a substitute for a professional evaluation. If you are concerned about your mental health, please consult a licensed psychologist or medical professional.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
