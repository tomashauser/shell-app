import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Verb Practice",
  description: "Practice Spanish verb conjugations",
};

export default function SpanishVerbsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
