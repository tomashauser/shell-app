import type { Metadata } from "next";
import { verbSets } from "@/app/components/spanish-verbs/data";
import { slugToTense } from "@/app/components/spanish-verbs/utils";

export async function generateMetadata({
  params,
}: {
  params: { tense: string };
}): Promise<Metadata> {
  const tense = slugToTense(params.tense);
  const tenseData = verbSets[tense];

  if (!tenseData) {
    return {
      title: "Spanish Verb Practice",
    };
  }

  return {
    title: `${tenseData.name} - Spanish Verbs`,
    description: `Practice ${tenseData.name} conjugations`,
  };
}

export default function TenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
