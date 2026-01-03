/**
 * Converts a camelCase tense key to kebab-case URL slug
 * @example tenseToSlug("presentSubjunctive") // "present-subjunctive"
 */
export function tenseToSlug(tense: string): string {
  return tense.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Converts a kebab-case URL slug to camelCase tense key
 * @example slugToTense("present-subjunctive") // "presentSubjunctive"
 */
export function slugToTense(slug: string): string {
  return slug.replace(/-([a-z])/g, (_, letter) => (letter as string).toUpperCase());
}

/**
 * Shuffles an array using the Fisher-Yates algorithm
 * @example shuffleArray([1, 2, 3, 4, 5])
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
