
import React, { useState, useMemo } from 'react';
import { QUESTIONS } from '../constants/questions';
import { ResultCategory } from '../types';
import QuestionCard from '../components/QuestionCard';
import ResultCard from '../components/ResultCard';

const TestPage: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [scores, setScores] = useState<number[]>([]);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    const handleAnswer = (score: number) => {
        const newScores = [...scores, score];
        setScores(newScores);

        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsFinished(true);
        }
    };

    const resetTest = () => {
        setCurrentQuestionIndex(0);
        setScores([]);
        setIsFinished(false);
    };

    const totalScore = useMemo(() => scores.reduce((acc, score) => acc + score, 0), [scores]);

    const resultCategory = useMemo<ResultCategory>(() => {
        if (!isFinished) return ResultCategory.LOW; // Default
        // Scoring: Max score is 12 * 3 = 36
        if (totalScore <= 12) return ResultCategory.LOW;
        if (totalScore <= 24) return ResultCategory.MODERATE;
        return ResultCategory.HIGH;
    }, [isFinished, totalScore]);

    const progressPercentage = (currentQuestionIndex / QUESTIONS.length) * 100;

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                {!isFinished ? (
                    <>
                        <div className="mb-6">
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-blue-700">Progress</span>
                                <span className="text-sm font-medium text-blue-700">
                                    Question {currentQuestionIndex + 1} of {QUESTIONS.length}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
                            </div>
                        </div>
                        <QuestionCard
                            question={QUESTIONS[currentQuestionIndex]}
                            onAnswer={handleAnswer}
                        />
                    </>
                ) : (
                    <ResultCard result={resultCategory} score={totalScore} onReset={resetTest} />
                )}
            </div>
        </div>
    );
};

export default TestPage;
