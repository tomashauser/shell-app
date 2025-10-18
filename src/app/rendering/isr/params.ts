const isrSlugs = [
  "chicken-and-rice",
  "noodles-with-minced-chicken",
  "onigiri",
] as const;
const dynamicSlugs = [
  "egg-tortilla-wrap",
  "oats-with-milk-and-protein",
] as const;

type IsrSlug = (typeof isrSlugs)[number];
type DynamicSlug = (typeof dynamicSlugs)[number];

const isrSlugLabels: Record<IsrSlug, string> = {
  "chicken-and-rice": "chicken and rice",
  "noodles-with-minced-chicken": "noodles with minced chicken",
  onigiri: "onigiri",
};

const dynamicSlugLabels: Record<DynamicSlug, string> = {
  "egg-tortilla-wrap": "egg and tortilla wrap",
  "oats-with-milk-and-protein": "oats with milk and protein",
};

export { isrSlugs, dynamicSlugs, isrSlugLabels, dynamicSlugLabels };
export type { IsrSlug, DynamicSlug };
