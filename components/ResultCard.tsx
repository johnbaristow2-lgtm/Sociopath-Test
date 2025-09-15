
import React from 'react';
import { ResultCategory } from '../types';

interface ResultCardProps {
    result: ResultCategory;
    score: number;
    onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, score, onReset }) => {
    const getResultDetails = () => {
        switch (result) {
            case ResultCategory.LOW:
                return {
                    title: "Low Exhibition of Sociopathic Traits",
                    description: "Your responses suggest a low exhibition of the traits measured in this quiz. This often aligns with strong empathy, a solid moral compass, and genuine interpersonal connections. People in this range typically follow social norms and feel authentic remorse when they make mistakes."
                };
            case ResultCategory.MODERATE:
                return {
                    title: "Moderate Exhibition of Sociopathic Traits",
                    description: "Your responses indicate a moderate level of some traits measured. This could mean you sometimes prioritize personal gain, can be calculating in social situations, or have a flexible approach to rules. It does not mean you have a disorder, as many successful people possess some of these traits to a degree."
                };
            case ResultCategory.HIGH:
                return {
                    title: "High Exhibition of Sociopathic Traits",
                    description: "Your answers show a high correlation with the traits explored in this quiz, such as a lack of empathy, manipulative tendencies, and disregard for social rules. It is important to remember this is an educational tool, not a diagnosis. If you have concerns about your behavior or relationships, seeking advice from a qualified mental health professional is a recommended step."
                };
            default:
                return { title: "", description: "" };
        }
    };

    const { title, description } = getResultDetails();

    return (
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Your Result</h2>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-4">{title}</h1>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-8 rounded-md" role="alert">
                <p className="font-bold">Important Disclaimer</p>
                <p>This test is for educational and informational purposes only and is not a substitute for professional medical or psychological diagnosis. The results are based on your self-reported answers and do not constitute a clinical assessment.</p>
            </div>

            <button
                onClick={onReset}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
            >
                Take the Test Again
            </button>
        </div>
    );
};

export default ResultCard;
