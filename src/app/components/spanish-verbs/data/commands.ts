import type { VerbSet } from "../types";

export const commands: VerbSet = {
  name: "Commands (Tú & Nosotros)",
  explanation: {
    whenToUse:
      "Use commands (imperative) to give direct orders, instructions, or requests. Forms vary based on formality and whether they are affirmative or negative.",
    importantRules: [
      "Affirmative tú: Usually same as él/ella present indicative form",
      "Negative tú: Use present subjunctive (no + subjunctive)",
      "Nosotros (let's): Use present subjunctive",
      "Many common verbs have irregular affirmative tú forms",
    ],
    regularPattern:
      "hablar → habla (tú affirmative), no hables (tú negative), hablemos (nosotros)",
  },
  verbs: [
    {
      infinitive: "decir",
      english: "to say/tell",
      conjugations: ["di", "(no digas)", "—", "digamos", "—", "—"],
      examples: [
        "Di la verdad sobre lo que pasó anoche.",
        "No digas mentiras a tus padres nunca.",
        "—",
        "Digamos lo que pensamos en la reunión de hoy.",
        "—",
        "—",
      ],
    },
    {
      infinitive: "hacer",
      english: "to do/make",
      conjugations: ["haz", "(no hagas)", "—", "hagamos", "—", "—"],
      examples: [
        "Haz tu tarea antes de salir a jugar.",
        "No hagas ruido porque el bebé está durmiendo.",
        "—",
        "Hagamos una fiesta para celebrar el fin de curso.",
        "—",
        "—",
      ],
    },
    {
      infinitive: "ir",
      english: "to go",
      conjugations: ["ve", "(no vayas)", "—", "vamos", "—", "—"],
      examples: [
        "Ve al supermercado y compra leche, por favor.",
        "No vayas solo al centro de noche.",
        "—",
        "Vamos al cine a ver la nueva película.",
        "—",
        "—",
      ],
    },
    {
      infinitive: "poner",
      english: "to put",
      conjugations: ["pon", "(no pongas)", "—", "pongamos", "—", "—"],
      examples: [
        "Pon la mesa para seis personas, por favor.",
        "No pongas los pies en el sofá.",
        "—",
        "Pongamos música alegre para la fiesta.",
        "—",
        "—",
      ],
    },
    {
      infinitive: "salir",
      english: "to leave/go out",
      conjugations: ["sal", "(no salgas)", "—", "salgamos", "—", "—"],
      examples: [
        "Sal de tu habitación y ven a comer.",
        "No salgas sin abrigo porque hace mucho frío.",
        "—",
        "Salgamos a caminar después de cenar.",
        "—",
        "—",
      ],
    },
    {
      infinitive: "ser",
      english: "to be",
      conjugations: ["sé", "(no seas)", "—", "seamos", "—", "—"],
      examples: [
        "Sé honesto conmigo siempre, por favor.",
        "No seas impaciente con tus hermanos pequeños.",
        "—",
        "Seamos positivos sobre el resultado del examen.",
        "—",
        "—",
      ],
    },
    {
      infinitive: "tener",
      english: "to have",
      conjugations: ["ten", "(no tengas)", "—", "tengamos", "—", "—"],
      examples: [
        "Ten cuidado al cruzar la calle.",
        "No tengas miedo de hacer preguntas en clase.",
        "—",
        "Tengamos paciencia con el proceso de aprendizaje.",
        "—",
        "—",
      ],
    },
    {
      infinitive: "venir",
      english: "to come",
      conjugations: ["ven", "(no vengas)", "—", "vengamos", "—", "—"],
      examples: [
        "Ven a mi casa esta tarde después de clase.",
        "No vengas tarde a la reunión importante.",
        "—",
        "Vengamos todos juntos para apoyar al equipo.",
        "—",
        "—",
      ],
    },
  ],
};
