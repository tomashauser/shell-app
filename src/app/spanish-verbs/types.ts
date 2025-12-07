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
