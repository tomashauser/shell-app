import { commands } from "./data/commands";
import { future } from "./data/future";
import { imperfectSubjunctive } from "./data/imperfect-subjunctive";
import { present } from "./data/present";
import { presentSubjunctive } from "./data/present-subjunctive";
import { preterite } from "./data/preterite";
import type { VerbSets } from "./types";

export type { Verb, VerbSet, VerbSets } from "./types";

export const verbSets: VerbSets = {
  present,
  presentSubjunctive,
  imperfectSubjunctive,
  preterite,
  future,
  commands,
};

export const pronouns = [
  "yo",
  "tú",
  "él/ella/usted",
  "nosotros",
  "vosotros",
  "ellos/ellas/ustedes",
];

export const commandPronouns = ["tú (affirmative)", "tú (negative)", "—", "nosotros", "—", "—"];
