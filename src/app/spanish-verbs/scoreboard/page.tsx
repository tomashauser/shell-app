"use client";

import { useRouter } from "next/navigation";
import { Scoreboard } from "@/app/components/spanish-verbs/components/Scoreboard";

export default function ScoreboardPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/spanish-verbs");
  };

  return <Scoreboard onClose={handleClose} />;
}
