import { notFound } from "next/navigation";
import { verbSets } from "@/app/components/spanish-verbs/data";
import { slugToTense, tenseToSlug } from "@/app/components/spanish-verbs/utils";
import { PracticeClient } from "./PracticeClient";

export function generateStaticParams() {
  return Object.keys(verbSets).map((tense) => ({
    tense: tenseToSlug(tense),
  }));
}

type Props = {
  params: Promise<{ tense: string }>;
};

export default async function PracticePage({ params }: Props) {
  const { tense: slug } = await params;
  const tense = slugToTense(slug);

  if (!verbSets[tense]) {
    notFound();
  }

  return <PracticeClient tense={tense} slug={slug} />;
}
