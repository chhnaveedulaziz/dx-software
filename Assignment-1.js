//<editor-fold desc="Utility functions">
/**
 * @public
 * @static
 * Get total vowels from given word
 * @param {string} word - The word to process
 * @return {Array<string>} - List of vowels
 */
function getVowels(word) {
  return [...word.match(/[aeiou]/gi)];
}

/**
 * @public
 * @static
 * Create a word list by highest to the lowest term
 * @param {string} input - The input string
 * @return {Array<string>}
 */
function parseLongestWords(input) {
  /** @type {Array<string>} */
  const words = input
    .split(/\s+/)
    .sort((a, b) => b.length - a.length)
    .map((word) => word.replace(/[^\w]+/g, ""));

  /** @type {Array<string>} */
  return words.filter((word) => word.length === words[0].length);
}

/**
 * @public
 * @static
 * Get the word which contains the highest vowels
 * @param {Array<string>} words
 * @return {string}
 */
function getHighestVowelWord(words) {
  let [vowelWord = ""] = words;

  for (const word of words) {
    /** @type {number} */
    const vowelLen = getVowels(vowelWord).length;

    if (getVowels(word) && getVowels(word).length > vowelLen) {
      vowelWord = word;
    }
  }

  return vowelWord;
}
//</editor-fold>

/** @type {string} */
const paragraph = `Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers`;

/** @type {Array<string>} */
const longestWords = parseLongestWords(paragraph);
console.log("longestWords:", longestWords);

/** @type {string} */
const highestVowelWord = getHighestVowelWord(longestWords);

console.log(highestVowelWord, "has most vowels");

// Assignmnet-1 (Test)
