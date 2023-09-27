const shortWords = [
  "an",
  "the",
  "a",
  "he",
  "she",
  "it",
  "they",
  "we",
  "them",
  "is",
  "my",
  "me",
  "to",
  "of",
  "off",
  "be",
  "but",
  "on",
];

export const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

export const isShortWord = (word: string): boolean => {
  return shortWords.includes(word);
};
