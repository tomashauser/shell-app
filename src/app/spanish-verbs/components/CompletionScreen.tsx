import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CompletionScreenProps = {
  round: number;
  onBackToMenu: () => void;
  onRestart: () => void;
};

export function CompletionScreen({
  round,
  onBackToMenu,
  onRestart,
}: CompletionScreenProps) {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent" />

      <Card className="max-w-md w-full relative z-10 backdrop-blur-sm bg-white/95 shadow-xl h-[90dvh] flex flex-col justify-center">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <CardTitle className="text-3xl">¡Felicidades!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            You've mastered all the verbs in {round} round{round > 1 ? "s" : ""}
            !
          </p>
          <div className="flex gap-3 justify-center">
            <Button onClick={onBackToMenu} variant="secondary">
              Back to Menu
            </Button>
            <Button onClick={onRestart}>Practice Again</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
