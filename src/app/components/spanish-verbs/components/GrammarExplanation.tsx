import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VerbSet } from "../data";
import { getTenseSelectedVerbs, saveSelectedVerbs } from "../storage";
import { tenseToSlug } from "../utils";
import { PageCard } from "./PageCard";

type GrammarExplanationProps = {
  tenseData: VerbSet;
  tenseKey: string;
};

export function GrammarExplanation({ tenseData, tenseKey }: GrammarExplanationProps) {
  const router = useRouter();
  const [selectedVerbs, setSelectedVerbs] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load saved selection or select all by default
    const saved = getTenseSelectedVerbs(tenseKey);
    if (saved) {
      setSelectedVerbs(new Set(saved));
    } else {
      setSelectedVerbs(new Set(tenseData.verbs.map((v) => v.infinitive)));
    }
  }, [tenseKey, tenseData.verbs]);

  const toggleVerb = (infinitive: string) => {
    const newSelected = new Set(selectedVerbs);
    if (newSelected.has(infinitive)) {
      newSelected.delete(infinitive);
    } else {
      newSelected.add(infinitive);
    }
    setSelectedVerbs(newSelected);
  };

  const selectAll = () => {
    setSelectedVerbs(new Set(tenseData.verbs.map((v) => v.infinitive)));
  };

  const deselectAll = () => {
    setSelectedVerbs(new Set());
  };

  const handleStart = () => {
    saveSelectedVerbs(tenseKey, Array.from(selectedVerbs));
    const slug = tenseToSlug(tenseKey);
    router.push(`/spanish-verbs/${slug}/practice`);
  };
  return (
    <PageCard
      title={tenseData.name}
      backHref="/spanish-verbs"
      cardClassName="max-w-3xl w-full"
      contentClassName="space-y-6 h-[40vh] overflow-y-scroll"
      footer={
        <div className="p-6 border-t">
          <Button
            onClick={handleStart}
            disabled={selectedVerbs.size === 0}
            className={cn(
              "w-full bg-gradient-to-r from-emerald-500 to-teal-500",
              "hover:from-emerald-600 hover:to-teal-600",
              "text-white shadow-md hover:shadow-lg transition-all",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            size="lg"
          >
            Start Practice ({selectedVerbs.size} {selectedVerbs.size === 1 ? "verb" : "verbs"})
          </Button>
        </div>
      }
    >
      {/* When to Use */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">When to Use</h3>
        <p className="text-gray-700 leading-relaxed">{tenseData.explanation.whenToUse}</p>
      </div>

      {/* Important Rules */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">Important Rules</h3>
        <ul className="space-y-2">
          {tenseData.explanation.importantRules.map((rule, index) => (
            <li key={index} className="flex items-start">
              <span className="text-emerald-600 mr-2 mt-1">•</span>
              <span className="text-gray-700">{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Regular Pattern */}
      <div className="bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">Regular Pattern Example</h3>
        <p className="text-gray-700 font-mono text-lg">{tenseData.explanation.regularPattern}</p>
      </div>

      {/* Note about irregulars */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-900 text-sm">
          <span className="font-semibold">Note:</span> This practice focuses on irregular verbs. The
          conjugations shown don&#39;t follow the regular pattern above.
        </p>
      </div>

      {/* Verb Selection */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-emerald-800">Select Verbs to Practice</h3>
          <div className="flex gap-2">
            <Button onClick={selectAll} variant="outline" size="sm" className="text-xs">
              Select All
            </Button>
            <Button onClick={deselectAll} variant="outline" size="sm" className="text-xs">
              Deselect All
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-64 overflow-y-auto">
          {tenseData.verbs.map((verb) => (
            <label
              key={verb.infinitive}
              className="flex items-center gap-2 cursor-pointer hover:bg-white/50 p-2 rounded transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedVerbs.has(verb.infinitive)}
                onChange={() => toggleVerb(verb.infinitive)}
                className="w-4 h-4 min-w-4 min-h-4 flex-shrink-0 accent-emerald-600 rounded cursor-pointer"
              />
              <span className="text-sm text-gray-700">
                {verb.infinitive}
                <span className="text-gray-500 text-xs ml-1">({verb.english})</span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </PageCard>
  );
}
