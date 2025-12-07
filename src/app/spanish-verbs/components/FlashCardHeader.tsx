import { BackButton } from "./BackButton";

type FlashCardHeaderProps = {
  tenseName: string;
  round: number;
  currentIndex: number;
  totalCards: number;
  incorrectCount: number;
  onBackToMenu: () => void;
};

export function FlashCardHeader({
  tenseName,
  round,
  currentIndex,
  totalCards,
  incorrectCount,
  onBackToMenu,
}: FlashCardHeaderProps) {
  return (
    <div className="mb-4 text-center px-2 w-full max-w-md">
      <div className="flex items-center justify-between mb-2">
        <BackButton onClick={onBackToMenu} />
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          {tenseName}
        </h1>
        <div className="w-16"></div>
      </div>
      <div className="text-sm md:text-base text-gray-600">
        Round {round} • Card {currentIndex + 1} of {totalCards}
        <span
          className="block md:inline md:ml-3 mt-1 md:mt-0"
          style={{ color: incorrectCount === 0 ? "transparent" : "unset" }}
        >
          ({incorrectCount} to review this round)
        </span>
      </div>
    </div>
  );
}
