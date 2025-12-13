export type Verb = {
  infinitive: string;
  english: string;
  conjugations: string[];
  examples: string[];
};

export type VerbSet = {
  name: string;
  verbs: Verb[];
  explanation: {
    whenToUse: string;
    importantRules: string[];
    regularPattern: string;
  };
};

export type VerbSets = {
  [key: string]: VerbSet;
};

export type ScoreRecord = {
  id: string;
  tense: string;
  rounds: number;
  totalCards: number;
  correctCards: number;
  timestamp: number;
  completedAt: string; // ISO date string
};

export type TenseStats = {
  bestScore: ScoreRecord | null;
  allScores: ScoreRecord[];
  averageRounds: number;
  totalSessions: number;
};

export type ScoreboardData = {
  [tenseKey: string]: ScoreRecord[];
};
