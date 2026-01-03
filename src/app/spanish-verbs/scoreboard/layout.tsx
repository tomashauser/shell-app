import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progress - Spanish Verbs",
  description: "View your Spanish verb practice progress",
};

export default function ScoreboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
