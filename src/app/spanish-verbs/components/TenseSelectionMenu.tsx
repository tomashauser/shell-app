import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { VerbSets } from "../data";

type TenseSelectionMenuProps = {
  verbSets: VerbSets;
  onSelectTense: (tenseKey: string) => void;
  onViewScoreboard: () => void;
};

export function TenseSelectionMenu({
  verbSets,
  onSelectTense,
  onViewScoreboard,
}: TenseSelectionMenuProps) {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent" />

      <Card className="max-w-2xl w-full relative z-10 backdrop-blur-sm bg-white/95 shadow-xl h-[95dvh] self-baseline flex flex-col">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-end mb-2">
            <Button
              onClick={onViewScoreboard}
              variant="outline"
              size="sm"
              className="text-emerald-700 border-emerald-300 hover:bg-emerald-50"
            >
              📊 View Progress
            </Button>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 mb-2 shadow-sm">
            <CardTitle className="text-3xl md:text-4xl text-emerald-800">
              Spanish Verb Practice
            </CardTitle>
            <CardDescription className="text-base text-emerald-700 mt-2">
              Choose a tense to practice
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(verbSets).map(([key, tenseData]) => {
              const verbCount = tenseData.verbs.length;

              return (
                <Button
                  key={key}
                  onClick={() => onSelectTense(key)}
                  className="h-auto p-6 bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all"
                  size="lg"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-xl font-semibold">
                      {tenseData.name}
                    </div>
                    <div className="text-sm opacity-90">{verbCount} verbs</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
