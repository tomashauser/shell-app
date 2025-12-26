"use client";

import { useParams, useRouter } from "next/navigation";
import { GrammarExplanation } from "@/app/components/spanish-verbs/components/GrammarExplanation";
import { verbSets } from "@/app/components/spanish-verbs/data";
import { slugToTense } from "@/app/components/spanish-verbs/utils";

export default function TenseExplanationPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.tense as string;
  const tense = slugToTense(slug);

  if (!tense || !verbSets[tense]) {
    router.push("/spanish-verbs");
    return null;
  }

  return <GrammarExplanation tenseData={verbSets[tense]} tenseKey={tense} />;
}
