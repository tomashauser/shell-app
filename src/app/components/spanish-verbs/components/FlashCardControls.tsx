import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type FlashCardControlsProps = {
  isFlipped: boolean;
  onKnew: () => void;
  onDidntKnow: () => void;
  onBack: () => void;
  canGoBack: boolean;
};

export function FlashCardControls({
  isFlipped,
  onKnew,
  onDidntKnow,
  onBack,
  canGoBack,
}: FlashCardControlsProps) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-md px-2 mt-auto">
      {isFlipped ? (
        <div className="flex gap-3 md:gap-4">
          <Button
            onClick={onDidntKnow}
            variant="destructive"
            size="lg"
            className="flex-1 bg-rose-500 hover:bg-rose-600 shadow-md hover:shadow-lg"
          >
            <span className="text-xl mr-1">✗</span> Didn&#39;t Know
          </Button>
          <Button
            onClick={onKnew}
            size="lg"
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 shadow-md hover:shadow-lg"
          >
            <span className="text-xl mr-1">✓</span> I Knew It
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full text-gray-500 text-sm h-10">
          Click the card to flip it
        </div>
      )}
      {canGoBack && (
        <Button onClick={onBack} variant="outline" size="sm" className="shadow-md hover:shadow-lg">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Previous Card
        </Button>
      )}
    </div>
  );
}
