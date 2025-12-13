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
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
