
export interface Answer {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export enum ResultCategory {
    LOW = 'Low Traits',
    MODERATE = 'Moderate Traits',
    HIGH = 'High Traits'
}
