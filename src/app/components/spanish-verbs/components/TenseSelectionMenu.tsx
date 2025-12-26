import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { VerbSets } from "../data";
import { tenseToSlug } from "../utils";
import { PageCard } from "./PageCard";

type TenseSelectionMenuProps = {
  verbSets: VerbSets;
};

export function TenseSelectionMenu({ verbSets }: TenseSelectionMenuProps) {
  return (
    <PageCard
      contentClassName="flex-1 overflow-auto"
      headerContent={
        <CardHeader className="text-center pb-4">
          <div className="flex justify-end mb-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-emerald-700 border-emerald-300 hover:bg-emerald-50"
            >
              <Link href="/spanish-verbs/scoreboard">📊 View Progress</Link>
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
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(verbSets).map(([key, tenseData]) => {
          const verbCount = tenseData.verbs.length;
          const slug = tenseToSlug(key);

          return (
            <Button
              key={key}
              asChild
              className="h-auto p-6 bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all"
              size="lg"
            >
              <Link href={`/spanish-verbs/${slug}`}>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-xl font-semibold">{tenseData.name}</div>
                  <div className="text-sm opacity-90">{verbCount} verbs</div>
                </div>
              </Link>
            </Button>
          );
        })}
      </div>
    </PageCard>
  );
}
