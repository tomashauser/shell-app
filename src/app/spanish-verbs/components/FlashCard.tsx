import { useMemo } from "react";
import type { Verb } from "../data";

type FlashCardProps = {
  verb: Verb;
  isFlipped: boolean;
  pronouns: string[];
  onFlip: () => void;
};

export function FlashCard({
  verb,
  isFlipped,
  pronouns,
  onFlip,
}: FlashCardProps) {
  const exampleData = useMemo(() => {
    if (!verb.examples || verb.examples.length === 0) return null;

    // Find valid indices (where both conjugation and example exist)
    const validIndices: number[] = [];
    for (let i = 0; i < verb.conjugations.length; i++) {
      if (
        verb.conjugations[i] !== "—" &&
        verb.examples[i] &&
        verb.examples[i] !== "—"
      ) {
        validIndices.push(i);
      }
    }

    if (validIndices.length === 0) return null;

    const randomIdx =
      validIndices[Math.floor(Math.random() * validIndices.length)];
    return {
      example: verb.examples[randomIdx],
      conjugation: verb.conjugations[randomIdx],
    };
  }, [verb]);

  const renderExample = () => {
    if (!exampleData) return null;

    const { example, conjugation } = exampleData;
    const parts = example.split(new RegExp(`(${conjugation})`, "i"));

    return parts.map((part, i) => {
      if (part.toLowerCase() === conjugation.toLowerCase()) {
        return (
          <span key={i} className="font-bold text-yellow-300">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="perspective-1000 mb-6 w-full max-w-md px-2 mt-auto">
      <button
        type="button"
        onClick={onFlip}
        className="relative w-full cursor-pointer transition-transform duration-500 text-left"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "450px",
          height: "fit-content",
        }}
        aria-label={isFlipped ? "Hide conjugations" : "Show conjugations"}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", minHeight: "400px" }}
        >
          <div className="text-center p-8">
            <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-3">
              {verb.infinitive}
            </div>
            <div className="text-xl text-gray-600 mb-4">{verb.english}</div>
            <div className="text-gray-500 text-sm">
              Click to reveal conjugations
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl shadow-xl p-4 md:p-6 overflow-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            minHeight: "400px",
            maxHeight: "500px",
          }}
        >
          <div className="text-center mb-3">
            <div className="text-2xl md:text-3xl font-bold">
              {verb.infinitive}
            </div>
            <div className="text-emerald-100 text-sm">{verb.english}</div>
          </div>
          <div className="space-y-1.5 md:space-y-2 mb-4">
            {pronouns.map((pronoun, idx) => {
              if (verb.conjugations[idx] === "—") return null;

              return (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-emerald-700/40 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2"
                >
                  <span className="text-emerald-50 font-medium text-sm md:text-base">
                    {pronoun}
                  </span>
                  <span className="font-bold text-sm md:text-base">
                    {verb.conjugations[idx]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Example sentence */}
          {exampleData && (
            <div className="border-t border-emerald-500/30 pt-3 mt-auto">
              <div className="text-emerald-100 text-xs uppercase tracking-wider mb-1 font-semibold">
                Example
              </div>
              <div className="text-white text-sm md:text-base italic">
                {renderExample()}
              </div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
