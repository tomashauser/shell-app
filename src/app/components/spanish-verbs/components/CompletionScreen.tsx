import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { PageCard } from "./PageCard";

type CompletionScreenProps = {
  round: number;
  slug: string;
};

export function CompletionScreen({ round, slug }: CompletionScreenProps) {
  return (
    <PageCard
      cardClassName="max-w-md w-full h-[90dvh] flex flex-col justify-center"
      contentClassName="text-center"
      headerContent={
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <CardTitle className="text-3xl">¡Felicidades!</CardTitle>
        </CardHeader>
      }
    >
      <p className="text-muted-foreground mb-6">
        You've mastered all the verbs in {round} round{round > 1 ? "s" : ""}!
      </p>
      <div className="flex gap-3 justify-center">
        <Button asChild variant="secondary">
          <Link href="/spanish-verbs">Back to Menu</Link>
        </Button>
        <Button asChild>
          <Link href={`/spanish-verbs/${slug}/practice`}>Practice Again</Link>
        </Button>
      </div>
    </PageCard>
  );
}
