// Keep connecting words as written, and preserve acronyms and brand casing.
const supportingWords = new Set([
  "a", "an", "the", "and", "but", "or", "nor", "for", "so", "yet",
  "as", "at", "by", "in", "of", "on", "per", "to", "up", "via",
  "with", "from", "into", "onto", "over", "than", "through", "under",
  "upon", "versus", "vs", "without", "within", "between", "among", "about",
]);

/** Title-case heading text without changing body copy, brands or acronyms. */
export function titleCaseHeading<T extends string | number | null | undefined>(value: T): T {
  if (typeof value !== "string") return value;

  return value.replace(
    /&(?:#\d+|#x[\da-fA-F]+|[a-zA-Z]+);|[a-zA-Z]+(?:['\u2019][a-zA-Z]+)*/g,
    (word) => {
      if (word.startsWith("&") || supportingWords.has(word.toLowerCase())) return word;
      // Internal capitals identify names such as iOS, BrainADZ, SaaS and APIs.
      if (/[A-Z]/.test(word.slice(1))) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
  ) as T;
}
