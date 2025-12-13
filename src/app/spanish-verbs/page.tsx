"use client";

import { useRouter } from "next/navigation";
import { TenseSelectionMenu } from "@/app/components/spanish-verbs/components/TenseSelectionMenu";
import { verbSets } from "@/app/components/spanish-verbs/data";
import { tenseToSlug } from "@/app/components/spanish-verbs/utils";

export default function SpanishVerbsPage() {
  const router = useRouter();

  const handleSelectTense = (tenseKey: string) => {
    const slug = tenseToSlug(tenseKey);
    router.push(`/spanish-verbs/${slug}`);
  };

  const handleViewScoreboard = () => {
    router.push("/spanish-verbs/scoreboard");
  };

  return (
    <TenseSelectionMenu
      verbSets={verbSets}
      onSelectTense={handleSelectTense}
      onViewScoreboard={handleViewScoreboard}
    />
  );
}
