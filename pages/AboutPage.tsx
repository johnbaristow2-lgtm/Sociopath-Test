
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">About This Project</h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
                    <p>
                        Our primary mission is to provide an accessible, educational tool for individuals interested in learning about the personality traits associated with Antisocial Personality Disorder (ASPD). We aim to increase awareness and understanding of complex psychological concepts in a safe, anonymous, and informative environment.
                    </p>
                    <p className="mt-2">
                        This website is born from a passion for psychology and a belief in the power of knowledge. We want to demystify terms like 'sociopath' and provide context that is often missing in popular media.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">A Tool for Education, Not Diagnosis</h2>
                    <p>
                        It is crucial to understand that the "Sociopath Trait Assessment" is not a clinical diagnostic tool. A real diagnosis of ASPD can only be made by a qualified mental health professional through comprehensive interviews, observations, and assessments. Our quiz is designed to be a starting point for self-reflection and education, not a definitive conclusion.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Credibility and Approach</h2>
                    <p>
                        The questions in our assessment are inspired by established psychological literature and diagnostic criteria for ASPD, simplified into an accessible multiple-choice format. We have focused on key areas such as:
                    </p>
                    <ul className="list-disc list-inside mt-2 pl-4 space-y-1">
                        <li>Empathy and Remorse</li>
                        <li>Behavioral Controls and Impulsivity</li>
                        <li>Interpersonal Relationships and Manipulation</li>
                        <li>Regard for Rules and Social Norms</li>
                    </ul>
                    <p className="mt-2">
                        We are committed to providing a responsible and ethical platform. This includes maintaining user anonymity, being transparent about the limitations of our tool, and encouraging users to seek professional help if they have genuine concerns.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
