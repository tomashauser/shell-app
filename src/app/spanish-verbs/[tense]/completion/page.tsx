import { notFound } from "next/navigation";
import { CompletionScreen } from "@/app/components/spanish-verbs/components/CompletionScreen";
import { verbSets } from "@/app/components/spanish-verbs/data";
import { slugToTense, tenseToSlug } from "@/app/components/spanish-verbs/utils";

export function generateStaticParams() {
  return Object.keys(verbSets).map((tense) => ({
    tense: tenseToSlug(tense),
  }));
}

type Props = {
  params: Promise<{ tense: string }>;
  searchParams: Promise<{ rounds?: string }>;
};

export default async function CompletionPage({ params, searchParams }: Props) {
  const { tense: slug } = await params;
  const { rounds: roundsParam } = await searchParams;
  const tense = slugToTense(slug);
  const rounds = parseInt(roundsParam ?? "1", 10);

  if (!verbSets[tense]) {
    notFound();
  }

  return <CompletionScreen round={rounds} slug={slug} />;
}
