"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FlashCard } from "@/app/components/spanish-verbs/components/FlashCard";
import { FlashCardControls } from "@/app/components/spanish-verbs/components/FlashCardControls";
import { FlashCardHeader } from "@/app/components/spanish-verbs/components/FlashCardHeader";
import {
  commandPronouns,
  pronouns,
  type Verb,
  verbSets,
} from "@/app/components/spanish-verbs/data";
import { saveScore } from "@/app/components/spanish-verbs/storage";
import { slugToTense } from "@/app/components/spanish-verbs/utils";

const FLIP_ANIMATION_DURATION_MS = 200;

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

type PreviousCard = {
  index: number;
  wasIncorrect: boolean;
  wasFlipped: boolean;
} | null;

export default function PracticePage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.tense as string;
  const tense = slugToTense(slug);

  const [currentDeck, setCurrentDeck] = useState<Verb[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [incorrectCards, setIncorrectCards] = useState<Verb[]>([]);
  const [round, setRound] = useState(1);
  const [totalCards, setTotalCards] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [previousCard, setPreviousCard] = useState<PreviousCard>(null);

  useEffect(() => {
    if (!tense || !verbSets[tense]) {
      router.push("/spanish-verbs");
      return;
    }

    const verbs = verbSets[tense].verbs;
    const shuffled = shuffleArray(verbs);
    setCurrentDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIncorrectCards([]);
    setRound(1);
    setTotalCards(verbs.length);
    setIncorrectCount(0);
    setPreviousCard(null);
  }, [tense, router]);

  const currentCard = currentDeck[currentIndex];
  const currentPronouns = tense === "commands" ? commandPronouns : pronouns;

  const handleBackToMenu = () => {
    router.push("/spanish-verbs");
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKnew = () => {
    moveToNext(false);
  };

  const handleDidntKnow = () => {
    moveToNext(true);
  };

  const moveToNext = (wasIncorrect: boolean) => {
    const newIncorrectCards =
      wasIncorrect && currentCard
        ? [...incorrectCards, currentCard]
        : incorrectCards;

    if (wasIncorrect) {
      setIncorrectCount((prev) => prev + 1);
    }

    // Save current state before moving
    setPreviousCard({
      index: currentIndex,
      wasIncorrect,
      wasFlipped: isFlipped,
    });

    setIsFlipped(false);

    setTimeout(() => {
      if (currentIndex < currentDeck.length - 1) {
        setCurrentIndex(currentIndex + 1);
        if (wasIncorrect && currentCard) {
          setIncorrectCards(newIncorrectCards);
        }
      } else {
        if (newIncorrectCards.length === 0) {
          saveScore({
            id: `${Date.now()}-${tense}`,
            tense: tense,
            rounds: round,
            totalCards,
            correctCards: totalCards - incorrectCount,
            timestamp: Date.now(),
            completedAt: new Date().toISOString(),
          });
          router.push(`/spanish-verbs/${slug}/completion?rounds=${round}`);
        } else {
          setCurrentDeck(shuffleArray(newIncorrectCards));
          setIncorrectCards([]);
          setCurrentIndex(0);
          setRound(round + 1);
          setPreviousCard(null); // Clear history when starting new round
        }
      }
    }, FLIP_ANIMATION_DURATION_MS);
  };

  const handleBack = () => {
    if (!previousCard) return;

    // Restore previous state
    setCurrentIndex(previousCard.index);
    setIsFlipped(previousCard.wasFlipped);

    // Undo the answer
    if (previousCard.wasIncorrect) {
      // Remove the last card from incorrectCards
      setIncorrectCards((prev) => prev.slice(0, -1));
      setIncorrectCount((prev) => prev - 1);
    }

    // Clear previous card state
    setPreviousCard(null);
  };

  if (!tense || !verbSets[tense] || !currentCard) {
    return (
      <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent" />
        <div className="text-center relative z-10">
          <div className="text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center p-4 overflow-hidden h-[100dvh]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center w-full justify-center self-baseline h-[100dvh]">
        <FlashCardHeader
          tenseName={verbSets[tense].name}
          round={round}
          currentIndex={currentIndex}
          totalCards={currentDeck.length}
          incorrectCount={incorrectCards.length}
          onBackToMenu={handleBackToMenu}
        />

        <FlashCard
          verb={currentCard}
          isFlipped={isFlipped}
          pronouns={currentPronouns}
          onFlip={handleFlip}
        />

        <FlashCardControls
          isFlipped={isFlipped}
          onKnew={handleKnew}
          onDidntKnow={handleDidntKnow}
          onBack={handleBack}
          canGoBack={previousCard !== null}
        />
      </div>
    </div>
  );
}
