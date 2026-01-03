"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { CompletionScreen } from "@/app/components/spanish-verbs/components/CompletionScreen";
import { verbSets } from "@/app/components/spanish-verbs/data";
import { slugToTense } from "@/app/components/spanish-verbs/utils";

export default function CompletionPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.tense as string;
  const tense = slugToTense(slug);
  const rounds = parseInt(searchParams.get("rounds") ?? "1", 10);

  if (!tense || !verbSets[tense]) {
    router.push("/spanish-verbs");
    return null;
  }

  return <CompletionScreen round={rounds} slug={slug} />;
}
