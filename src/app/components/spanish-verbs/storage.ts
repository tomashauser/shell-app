import type { ScoreboardData, ScoreRecord, TenseStats } from "./types";

const STORAGE_KEY = "spanish-verbs-scores";
const SELECTED_VERBS_KEY = "spanish-verbs-selected";

export function saveScore(score: ScoreRecord): void {
  if (typeof window === "undefined") return;

  try {
    const existing = getScores();
    const tenseScores = existing[score.tense] || [];
    tenseScores.push(score);
    existing[score.tense] = tenseScores;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (error) {
    console.error("Failed to save score:", error);
  }
}

export function getScores(): ScoreboardData {
  if (typeof window === "undefined") return {};

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error("Failed to load scores:", error);
    return {};
  }
}

export function getTenseStats(tenseKey: string): TenseStats {
  const allScores = getScores()[tenseKey] || [];

  if (allScores.length === 0) {
    return {
      bestScore: null,
      allScores: [],
      averageRounds: 0,
      totalSessions: 0,
    };
  }

  // Sort by rounds (ascending) - fewer rounds is better
  const sortedScores = [...allScores].sort((a, b) => a.rounds - b.rounds);
  const bestScore = sortedScores[0];

  const totalRounds = allScores.reduce((sum, score) => sum + score.rounds, 0);
  const averageRounds = totalRounds / allScores.length;

  return {
    bestScore,
    allScores: sortedScores,
    averageRounds,
    totalSessions: allScores.length,
  };
}

export function clearScores(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear scores:", error);
  }
}

export function saveSelectedVerbs(
  tenseKey: string,
  verbInfinitives: string[],
): void {
  if (typeof window === "undefined") return;

  try {
    const existing = getSelectedVerbs();
    existing[tenseKey] = verbInfinitives;
    localStorage.setItem(SELECTED_VERBS_KEY, JSON.stringify(existing));
  } catch (error) {
    console.error("Failed to save selected verbs:", error);
  }
}

export function getSelectedVerbs(): Record<string, string[]> {
  if (typeof window === "undefined") return {};

  try {
    const data = localStorage.getItem(SELECTED_VERBS_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error("Failed to load selected verbs:", error);
    return {};
  }
}

export function getTenseSelectedVerbs(tenseKey: string): string[] | null {
  const allSelected = getSelectedVerbs();
  return allSelected[tenseKey] || null;
}
