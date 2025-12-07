"use client";

import { useState } from "react";
import { CompletionScreen } from "../spanish-verbs/components/CompletionScreen";
import { FlashCard } from "../spanish-verbs/components/FlashCard";
import { FlashCardControls } from "../spanish-verbs/components/FlashCardControls";
import { FlashCardHeader } from "../spanish-verbs/components/FlashCardHeader";
import { GrammarExplanation } from "../spanish-verbs/components/GrammarExplanation";
import { Scoreboard } from "../spanish-verbs/components/Scoreboard";
import { TenseSelectionMenu } from "../spanish-verbs/components/TenseSelectionMenu";
import {
  commandPronouns,
  pronouns,
  type Verb,
  verbSets,
} from "../spanish-verbs/data";
import { saveScore } from "../spanish-verbs/storage";

const FLIP_ANIMATION_DURATION_MS = 200;

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const SpanishVerbFlashcards = () => {
  const [selectedTense, setSelectedTense] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentDeck, setCurrentDeck] = useState<Verb[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [incorrectCards, setIncorrectCards] = useState<Verb[]>([]);
  const [round, setRound] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [totalCards, setTotalCards] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const currentCard = currentDeck[currentIndex];
  const currentPronouns =
    selectedTense === "commands" ? commandPronouns : pronouns;

  const handleSelectTense = (tenseKey: string) => {
    setSelectedTense(tenseKey);
    setShowExplanation(true);
  };

  const handleStartPractice = () => {
    if (!selectedTense) return;

    const verbs = verbSets[selectedTense].verbs;
    const shuffled = shuffleArray(verbs);
    setCurrentDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIncorrectCards([]);
    setRound(1);
    setIsComplete(false);
    setTotalCards(verbs.length);
    setIncorrectCount(0);
    setShowExplanation(false);
  };

  const handleBackToMenu = () => {
    setSelectedTense(null);
    setShowExplanation(false);
    setCurrentDeck([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIncorrectCards([]);
    setRound(1);
    setIsComplete(false);
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

    // Flip the card back immediately to start the animation
    setIsFlipped(false);

    // Delay the content change until after the flip animation completes
    setTimeout(() => {
      if (currentIndex < currentDeck.length - 1) {
        setCurrentIndex(currentIndex + 1);
        if (wasIncorrect && currentCard) {
          setIncorrectCards(newIncorrectCards);
        }
      } else {
        if (newIncorrectCards.length === 0) {
          // Save score when completing
          if (selectedTense) {
            saveScore({
              id: `${Date.now()}-${selectedTense}`,
              tense: selectedTense,
              rounds: round,
              totalCards,
              correctCards: totalCards - incorrectCount,
              timestamp: Date.now(),
              completedAt: new Date().toISOString(),
            });
          }
          setIsComplete(true);
        } else {
          setCurrentDeck(shuffleArray(newIncorrectCards));
          setIncorrectCards([]);
          setCurrentIndex(0);
          setRound(round + 1);
        }
      }
    }, FLIP_ANIMATION_DURATION_MS);
  };

  const handleRestart = () => {
    if (selectedTense) {
      const verbs = verbSets[selectedTense].verbs;
      const shuffled = shuffleArray(verbs);
      setCurrentDeck(shuffled);
      setCurrentIndex(0);
      setIsFlipped(false);
      setIncorrectCards([]);
      setRound(1);
      setIsComplete(false);
      setTotalCards(verbs.length);
      setIncorrectCount(0);
    }
  };

  if (showScoreboard) {
    return <Scoreboard onClose={() => setShowScoreboard(false)} />;
  }

  if (!selectedTense) {
    return (
      <TenseSelectionMenu
        verbSets={verbSets}
        onSelectTense={handleSelectTense}
        onViewScoreboard={() => setShowScoreboard(true)}
      />
    );
  }

  if (showExplanation && selectedTense) {
    return (
      <GrammarExplanation
        tenseData={verbSets[selectedTense]}
        onStart={handleStartPractice}
        onBack={handleBackToMenu}
      />
    );
  }

  if (!currentCard) {
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

  if (isComplete) {
    return (
      <CompletionScreen
        round={round}
        onBackToMenu={handleBackToMenu}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center p-4 overflow-hidden h-[100dvh]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center w-full justify-center self-baseline h-[100dvh]">
        <FlashCardHeader
          tenseName={verbSets[selectedTense].name}
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
        />
      </div>
    </div>
  );
};

export default SpanishVerbFlashcards;
