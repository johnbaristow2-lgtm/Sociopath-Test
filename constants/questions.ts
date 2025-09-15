
import { Question } from '../types';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        text: 'When you wrong someone, your immediate feeling is usually:',
        answers: [
            { text: 'Genuine guilt and a desire to apologize.', score: 0 },
            { text: 'Slight discomfort, but it passes quickly.', score: 1 },
            { text: 'Annoyance that they are upset with you.', score: 2 },
            { text: 'Nothing, or a strategic thought about how to fix my image.', score: 3 },
        ],
    },
    {
        id: 2,
        text: 'How do you view rules and social norms?',
        answers: [
            { text: 'As important guidelines for a functioning society.', score: 0 },
            { text: 'Generally good to follow, but bendable when necessary.', score: 1 },
            { text: 'As inconvenient restrictions that apply more to others than to me.', score: 2 },
            { text: 'As tools to be used or ignored to get what I want.', score: 3 },
        ],
    },
    {
        id: 3,
        text: 'A friend tells you about a major personal tragedy. Your first reaction is to:',
        answers: [
            { text: 'Feel their pain and offer sincere comfort.', score: 0 },
            { text: 'Feel awkward but try to say the right things.', score: 1 },
            { text: 'Feel bored or impatient with their emotional display.', score: 2 },
            { text: 'Observe their reaction to learn how to fake empathy better.', score: 3 },
        ],
    },
    {
        id: 4,
        text: 'Your relationships with others are typically:',
        answers: [
            { text: 'Deep, stable, and built on mutual trust.', score: 0 },
            { text: 'A mix of close friends and casual acquaintances.', score: 1 },
            { text: 'Often intense and short-lived.', score: 2 },
            { text: 'Based on what the other person can do for me.', score: 3 },
        ],
    },
    {
        id: 5,
        text: 'How often do you find yourself lying or exaggerating to make a story better or get out of trouble?',
        answers: [
            { text: 'Almost never. I value honesty.', score: 0 },
            { text: 'Occasionally, for small "white lies".', score: 1 },
            { text: 'Fairly often, it makes life easier.', score: 2 },
            { text: 'Constantly. It\'s a natural and effective tool.', score: 3 },
        ],
    },
    {
        id: 6,
        text: 'When faced with a risky opportunity that has a high reward, you:',
        answers: [
            { text: 'Carefully weigh the pros and cons before deciding.', score: 0 },
            { text: 'Feel a thrill but proceed with some caution.', score: 1 },
            { text: 'Jump in eagerly, focusing only on the potential reward.', score: 2 },
            { text: 'Take the risk without much thought for the consequences to myself or others.', score: 3 },
        ],
    },
    {
        id: 7,
        text: 'How do you handle criticism?',
        answers: [
            { text: 'I reflect on it to see if it has merit.', score: 0 },
            { text: 'I might feel defensive at first, but I consider it.', score: 1 },
            { text: 'I dismiss it and often feel anger toward the critic.', score: 2 },
            { text: 'I see it as a personal attack and might plan some form of retaliation.', score: 3 },
        ],
    },
    {
        id: 8,
        text: 'When you compliment someone, is it more often:',
        answers: [
            { text: 'A genuine expression of admiration.', score: 0 },
            { text: 'A polite social gesture.', score: 1 },
            { text: 'A way to make them like me or feel indebted.', score: 2 },
            { text: 'A calculated step to manipulate them for a future goal.', score: 3 },
        ],
    },
    {
        id: 9,
        text: 'How do you perceive your own importance?',
        answers: [
            { text: 'I am one person among many, with my own strengths and weaknesses.', score: 0 },
            { text: 'I have a healthy sense of self-esteem.', score: 1 },
            { text: 'I believe I am generally smarter and more capable than most people.', score: 2 },
            { text: 'I have a grandiose sense of self-worth and believe I deserve special treatment.', score: 3 },
        ],
    },
    {
        id: 10,
        text: 'Do you take responsibility for your mistakes?',
        answers: [
            { text: 'Yes, I own up to them and try to make amends.', score: 0 },
            { text: 'Usually, although it can be difficult.', score: 1 },
            { text: 'Rarely. I am skilled at shifting blame.', score: 2 },
            { text: 'Never. Nothing is ever truly my fault.', score: 3 },
        ],
    },
    {
        id: 11,
        text: 'How consistent is your life plan or career path?',
        answers: [
            { text: 'I have clear, long-term goals that I work towards.', score: 0 },
            { text: 'I have some goals, but they can change over time.', score: 1 },
            { text: 'I live mostly in the moment and lack realistic long-term goals.', score: 2 },
            { text: 'My "plan" is to seek stimulation and avoid boredom, wherever that leads.', score: 3 },
        ],
    },
    {
        id: 12,
        text: 'When observing others, you are most likely to notice:',
        answers: [
            { text: 'Their emotional state and how they might be feeling.', score: 0 },
            { text: 'Their interests and what they are talking about.', score: 1 },
            { text: 'Their weaknesses and how they could be exploited.', score: 2 },
            { text: 'How they perceive me and how I can control that perception.', score: 3 },
        ],
    }
];
