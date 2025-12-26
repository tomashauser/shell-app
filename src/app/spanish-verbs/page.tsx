"use client";

import { TenseSelectionMenu } from "@/app/components/spanish-verbs/components/TenseSelectionMenu";
import { verbSets } from "@/app/components/spanish-verbs/data";

export default function SpanishVerbsPage() {
  return <TenseSelectionMenu verbSets={verbSets} />;
}
