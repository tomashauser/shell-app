import type { ScoreRecord } from "../types";

type ImprovementGraphProps = {
  scores: ScoreRecord[];
};

export function ImprovementGraph({ scores }: ImprovementGraphProps) {
  if (scores.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No data yet. Complete some practice sessions to see your progress!
      </div>
    );
  }

  // Take the last 10 scores for the graph
  const recentScores = scores.slice(-10).reverse();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Recent Progress</h3>
      <div className="space-y-2">
        {recentScores.map((score) => {
          const accuracyPercentage = (score.correctCards / score.totalCards) * 100;

          return (
            <div key={score.id} className="space-y-1">
              <div className="flex justify-between text-xs text-gray-600">
                <span>{new Date(score.completedAt).toLocaleDateString()}</span>
                <span className="font-semibold">
                  {score.rounds} round{score.rounds > 1 ? "s" : ""}
                </span>
              </div>
              <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg transition-all"
                  style={{ width: `${accuracyPercentage}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-end pr-2">
                  <span className="text-xs font-medium text-gray-700">
                    {score.correctCards}/{score.totalCards} correct
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
