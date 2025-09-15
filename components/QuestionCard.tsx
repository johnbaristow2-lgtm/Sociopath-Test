
import React from 'react';
import { Question, Answer } from '../types';

interface QuestionCardProps {
    question: Question;
    onAnswer: (score: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
    return (
        <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">{question.text}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.answers.map((answer: Answer, index: number) => (
                    <button
                        key={index}
                        onClick={() => onAnswer(answer.score)}
                        className="w-full text-left p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                    >
                        <p className="text-gray-700">{answer.text}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
