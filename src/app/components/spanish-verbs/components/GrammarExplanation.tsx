import { Button } from "@/components/ui/button";
import type { VerbSet } from "../data";
import { PageCard } from "./PageCard";

type GrammarExplanationProps = {
  tenseData: VerbSet;
  onStart: () => void;
  onBack: () => void;
};

export function GrammarExplanation({
  tenseData,
  onStart,
  onBack,
}: GrammarExplanationProps) {
  return (
    <PageCard
      title={tenseData.name}
      onBack={onBack}
      cardClassName="max-w-3xl w-full"
      contentClassName="space-y-6 h-[40vh] overflow-y-scroll"
      footer={
        <div className="p-6 border-t">
          <Button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md hover:shadow-lg transition-all"
            size="lg"
          >
            Start Practice
          </Button>
        </div>
      }
    >
      {/* When to Use */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          When to Use
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {tenseData.explanation.whenToUse}
        </p>
      </div>

      {/* Important Rules */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Important Rules
        </h3>
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
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Regular Pattern Example
        </h3>
        <p className="text-gray-700 font-mono text-lg">
          {tenseData.explanation.regularPattern}
        </p>
      </div>

      {/* Note about irregulars */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-900 text-sm">
          <span className="font-semibold">Note:</span> This practice focuses on
          irregular verbs. The conjugations shown don't follow the regular
          pattern above.
        </p>
      </div>

      {/* Verb count */}
      <div className="text-center text-gray-600">
        <p className="text-lg">
          You'll practice{" "}
          <span className="font-bold text-emerald-700">
            {tenseData.verbs.length} irregular verbs
          </span>
        </p>
      </div>
    </PageCard>
  );
}
