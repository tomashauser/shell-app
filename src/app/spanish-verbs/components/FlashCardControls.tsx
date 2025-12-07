import { Button } from "@/components/ui/button";

type FlashCardControlsProps = {
  isFlipped: boolean;
  onKnew: () => void;
  onDidntKnow: () => void;
};

export function FlashCardControls({
  isFlipped,
  onKnew,
  onDidntKnow,
}: FlashCardControlsProps) {
  if (!isFlipped) {
    return (
      <div className="flex gap-3 md:gap-4 w-full max-w-md px-2 h-10 mt-auto">
        <div className="flex items-center justify-center w-full text-gray-500 text-sm">
          Click the card to flip it
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 md:gap-4 w-full max-w-md px-2 mt-auto">
      <Button
        onClick={onDidntKnow}
        variant="destructive"
        size="lg"
        className="flex-1 bg-rose-500 hover:bg-rose-600 shadow-md hover:shadow-lg"
      >
        <span className="text-xl mr-1">✗</span> Didn't Know
      </Button>
      <Button
        onClick={onKnew}
        size="lg"
        className="flex-1 bg-emerald-500 hover:bg-emerald-600 shadow-md hover:shadow-lg"
      >
        <span className="text-xl mr-1">✓</span> I Knew It
      </Button>
    </div>
  );
}
