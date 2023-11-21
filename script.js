function analyzeSentence(sentence) {
    // Calculate the length of the sentence (excluding the period)
    const sentenceLength = sentence.length - 1;

    // Split the sentence into words and count the number of words
    const words = sentence.split(' ');
    const numWords = words.length;

    // Count the number of vowels in the sentence
    const vowelRegex = /[aeiouAEIOU]/g; // Define a regular expression for vowels
    const vowels = sentence.match(vowelRegex);
    const numVowels = vowels ? vowels.length : 0;

    return [sentenceLength, numWords, numVowels];
}

// Example of usage:
const inputSentence = "This is a sample sentence with some vowels.";
const [length, words, vowels] = analyzeSentence(inputSentence);

console.log(`Length of the sentence: ${length}`);
console.log(`Number of words: ${words}`);
console.log(`Number of vowels: ${vowels}`);

//This project took me a significant amoount of time fixing
