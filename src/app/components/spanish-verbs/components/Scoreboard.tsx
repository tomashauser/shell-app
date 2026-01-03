"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { verbSets } from "../data";
import { getTenseStats } from "../storage";
import type { TenseStats } from "../types";
import { ImprovementGraph } from "./ImprovementGraph";
import { PageCard } from "./PageCard";

export function Scoreboard() {
  const [selectedTense, setSelectedTense] = useState<string>(Object.keys(verbSets)[0]);
  const [stats, setStats] = useState<TenseStats | null>(null);

  useEffect(() => {
    const tenseStats = getTenseStats(selectedTense);
    setStats(tenseStats);
  }, [selectedTense]);

  if (!stats) return null;

  return (
    <PageCard
      title="Your Progress"
      backHref="/spanish-verbs"
      cardClassName="max-w-4xl w-full"
      contentClassName="space-y-6 flex-1 overflow-auto"
    >
      {/* Tense Selector */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(verbSets).map(([key, tenseData]) => (
          <Button
            key={key}
            onClick={() => setSelectedTense(key)}
            variant={selectedTense === key ? "default" : "outline"}
            className={
              selectedTense === key
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                : ""
            }
          >
            {tenseData.name}
          </Button>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 shadow-sm">
          <div className="text-sm text-emerald-700 font-medium">Total Sessions</div>
          <div className="text-3xl font-bold text-emerald-800">{stats.totalSessions}</div>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 shadow-sm">
          <div className="text-sm text-emerald-700 font-medium">Best Score</div>
          <div className="text-3xl font-bold text-emerald-800">
            {stats.bestScore
              ? `${stats.bestScore.rounds} round${stats.bestScore.rounds > 1 ? "s" : ""}`
              : "—"}
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 shadow-sm">
          <div className="text-sm text-emerald-700 font-medium">Average Rounds</div>
          <div className="text-3xl font-bold text-emerald-800">
            {stats.totalSessions > 0 ? stats.averageRounds.toFixed(1) : "—"}
          </div>
        </div>
      </div>

      {/* Best Score Details */}
      {stats.bestScore && (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">🏆 Best Performance</h3>
          <div className="text-sm text-emerald-700">
            <div>
              Completed in <span className="font-bold">{stats.bestScore.rounds}</span> round
              {stats.bestScore.rounds > 1 ? "s" : ""}
            </div>
            <div>
              Score: <span className="font-bold">{stats.bestScore.correctCards}</span>/
              {stats.bestScore.totalCards} correct
            </div>
            <div className="text-emerald-600 mt-1">
              {new Date(stats.bestScore.completedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      )}

      {/* Improvement Graph */}
      <ImprovementGraph scores={stats.allScores} />

      {/* Recent Scores Table */}
      {stats.allScores.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">All Sessions</h3>
          <div className="max-h-64 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50 sticky top-0">
                <tr>
                  <th className="text-left p-2 text-emerald-800">Date</th>
                  <th className="text-left p-2 text-emerald-800">Rounds</th>
                  <th className="text-left p-2 text-emerald-800">Score</th>
                </tr>
              </thead>
              <tbody>
                {stats.allScores.map((score, index) => (
                  <tr key={score.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-2">{new Date(score.completedAt).toLocaleDateString()}</td>
                    <td className="p-2 font-semibold">
                      {score.rounds} round{score.rounds > 1 ? "s" : ""}
                    </td>
                    <td className="p-2">
                      {score.correctCards}/{score.totalCards}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </PageCard>
  );
}
