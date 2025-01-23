// --------------------1------------------------------
// // Function to find the length of a string
// function getStringLength(str) {
//     return str.length;
// }

// const inputString = "Hello, World!";
// console.log("The length of the string is:", getStringLength(inputString));

// -----------------------2---------------------------
// // Function to copy one string to another string 
// let orignialString = "Hello, World!"
//  let copiedsString = orignialString;

//  console.log("orignial String:",orignialString);
//  console.log("copied String:",copiedsString);
 
//  ----------------------3---------------------------
// // Function to concatenate two strings
// function concatenateStrings(string1, string2) {
//     return string1 + string2;
// }

// const str1 = "Hello";
// const str2 = "World";

// const result = concatenateStrings(str1, str2);

// console.log("Concatenated String: " + result);

// ---------------------4------------------------------
// // Function to compare two strings
// function compareStrings(string1, string2) {
//     if (string1 === string2) {
//         return "The strings are equal.";
//     } else {
//         return "The strings are not equal.";
//     }
// }

// const str1 = "Hello";
// const str2 = "World";

// const result = compareStrings(str1, str2);

// console.log(result);

// ------------------------5---------------------
// // Function to convert a lowercase string to uppercase
// function convertToUppercase(inputString) {
//     return inputString.toUpperCase();
// }

// const lowercaseString = "hello world";

// const uppercaseString = convertToUppercase(lowercaseString);

// console.log("Uppercase String: " + uppercaseString);

// -------------------6----------------------------
// // Function to convert an uppercase string to lowercase
// function convertToLowercase(inputString) {
//     return inputString.toLowerCase();
// }

// const uppercaseString = "HELLO WORLD";

// const lowercaseString = convertToLowercase(uppercaseString);

// console.log("Lowercase String: " + lowercaseString);

// --------------------7----------------------------
// // Function to toggle the case of each character in a string
// function toggleCase(inputString) {
//     let toggledString = "";

//     for (let char of inputString) {
//         // Check if the character is uppercase
//         if (char === char.toUpperCase()) {
//             toggledString += char.toLowerCase();
//         } else {
//             toggledString += char.toUpperCase();
//         }
//     }

//     return toggledString;
// }

// const input = "Hello World!";

// const result = toggleCase(input);

// console.log("Toggled String: " + result);

// -----------------------------8------------------------------
// // Function to count alphabets, digits, and special characters
// function countCharacters(inputString) {
//     let alphabets = 0;
//     let digits = 0;
//     let specialCharacters = 0;

//     for (let char of inputString) {
//         if (/[a-zA-Z]/.test(char)) {
//             alphabets++;
//         } else if (/[0-9]/.test(char)) {
//             digits++;
//         } else {
//             specialCharacters++;
//         }
//     }

//     return { alphabets, digits, specialCharacters };
// }

// const input = "Hello World! 123";

// const result = countCharacters(input);

// console.log(`Alphabets: ${result.alphabets}`);
// console.log(`Digits: ${result.digits}`);
// console.log(`Special Characters: ${result.specialCharacters}`);

// --------------------------9------------------------------
// // Function to count vowels and consonants
// function countVowelsAndConsonants(inputString) {
//     let vowels = 0;
//     let consonants = 0;

//     // Normalize the string to lowercase to simplify comparison
//     const lowerCaseString = inputString.toLowerCase();

//     for (let char of lowerCaseString) {
//         if (/[aeiou]/.test(char)) {
//             vowels++;
//         } else if (/[a-z]/.test(char)) {
//             consonants++;
//         }
//     }

//     return { vowels, consonants };
// }

// const input = "Hello World";

// const result = countVowelsAndConsonants(input);

// console.log(`Vowels: ${result.vowels}`);
// console.log(`Consonants: ${result.consonants}`);

// --------------------------10----------------------------
// // Function count the total number of words in a string
// function countWords(str) {
//     // Trim the string to remove extra spaces and split it by spaces or line breaks
//     const words = str.trim().split(/\s+/);
  
//     // If the string is empty after trimming, return 0
//     return str.trim() === "" ? 0 : words.length;
//   }
  
//   const inputString = "   This is an example string to count words.   ";
//   const wordCount = countWords(inputString);
  
//   console.log(`Total number of words: ${wordCount}`);
  
// ---------------------------11-----------------------------
// function reverseString(str) {
//     // Split the string into an array of characters, reverse the array, and join it back
//     return str.split("").reverse().join("");
//   }
  
//   const inputString = "Hello, World!";
//   const reversedString = reverseString(inputString);
  
//   console.log(`Original String: ${inputString}`);
//   console.log(`Reversed String: ${reversedString}`);
  
// ----------------------12----------------------------------
// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert the string to lowercase
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
//     // Reverse the cleaned string
//     const reversedStr = cleanedStr.split("").reverse().join("");
  
//     // Compare the cleaned string with its reversed version
//     return cleanedStr === reversedStr;
//   }
  
//   const inputString = "A man, a plan, a canal: Panama";
//   const result = isPalindrome(inputString);
  
//   console.log(`Is "${inputString}" a palindrome? ${result}`);
  
// -------------------------13--------------------------------------
// function reverseWords(str) {
//     // Trim the string to remove extra spaces and split it into words
//     const words = str.trim().split(/\s+/);
  
//     // Reverse the array of words and join them back into a single string
//     return words.reverse().join(" ");
//   }
  
//   // Example usage:
//   const inputString = "  Hello World! This is a test.  ";
//   const reversedWordsString = reverseWords(inputString);
  
//   console.log(`Original String: "${inputString}"`);
//   console.log(`Reversed Words String: "${reversedWordsString}"`);
  
// ---------------------14-----------------------------------
// function findFirstOccurrence(str, char) {
//     // Use the indexOf method to find the first occurrence of the character
//     const index = str.indexOf(char);
  
//     // If the character is found, return its index; otherwise, return -1
//     return index !== -1 ? index : -1;
//   }
  
//   const inputString = "Hello, World!";
//   const charToFind = "o";
//   const firstOccurrence = findFirstOccurrence(inputString, charToFind);
  
//   console.log(`First occurrence of '${charToFind}' in "${inputString}" is at index: ${firstOccurrence}`);
  
// --------------------------------15-----------------------------------
// function findLastOccurrence(str, char) {
//     // Use the lastIndexOf method to find the last occurrence of the character
//     const index = str.lastIndexOf(char);
  
//     // If the character is found, return its index; otherwise, return -1
//     return index !== -1 ? index : -1;
//   }

//   const inputString = "Hello, World!";
//   const charToFind = "o";
//   const lastOccurrence = findLastOccurrence(inputString, charToFind);
  
//   console.log(`Last occurrence of '${charToFind}' in "${inputString}" is at index: ${lastOccurrence}`);
  
//   -----------------------16--------------------------------------
// function findAllOccurrences(str, char) {
//     const indices = [];
    
//     // Iterate through the string and check each character
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         indices.push(i);
//       }
//     }
    
//     // Return an array of indices where the character is found
//     return indices;
//   }
  
//   const inputString = "Hello, World!";
//   const charToFind = "o";
//   const occurrences = findAllOccurrences(inputString, charToFind);
  
//   console.log(`All occurrences of '${charToFind}' in "${inputString}" are at indices: ${occurrences}`);
  
//   -----------------------------17--------------------------------
// function countOccurrences(str, char) {
//     let count = 0;
  
//     // Iterate through the string and check each character
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   const inputString = "Hello, World!";
//   const charToCount = "o";
//   const occurrences = countOccurrences(inputString, charToCount);
  
//   console.log(`The character '${charToCount}' occurs ${occurrences} times in "${inputString}".`);
  
// ----------------------18---------------------------
// function findHighestFrequencyChar(str) {
//     const frequency = {};
//     let maxChar = "";
//     let maxCount = 0;
  
//     // Count the frequency of each character
//     for (let char of str) {
//       frequency[char] = (frequency[char] || 0) + 1;
  
//       // Update maxChar and maxCount if the current char has a higher frequency
//       if (frequency[char] > maxCount) {
//         maxChar = char;
//         maxCount = frequency[char];
//       }
//     }
  
//     return { char: maxChar, count: maxCount };
//   }
  
//   const inputString = "javascript";
//   const result = findHighestFrequencyChar(inputString);
  
//   console.log(`The character '${result.char}' occurs the most (${result.count} times) in "${inputString}".`);
  
// -------------------------------19-----------------------------
// function findLowestFrequencyChar(str) {
//     const frequency = {};
    
//     // Count the frequency of each character
//     for (let char of str) {
//       frequency[char] = (frequency[char] || 0) + 1;
//     }
  
//     let minChar = "";
//     let minCount = Infinity;
  
//     // Find the character with the lowest frequency
//     for (let char in frequency) {
//       if (frequency[char] < minCount) {
//         minChar = char;
//         minCount = frequency[char];
//       }
//     }
  
//     return { char: minChar, count: minCount };
//   }
  
//   const inputString = "javascript";
//   const result = findLowestFrequencyChar(inputString);
  
//   console.log(`The character '${result.char}' occurs the least (${result.count} time(s)) in "${inputString}".`);
  
// ------------------------------20---------------------------------
// function countCharacterFrequency(str) {
//     const frequency = {};
  
//     // Iterate through the string and count each character's frequency
//     for (let char of str) {
//       frequency[char] = (frequency[char] || 0) + 1;
//     }
  
//     return frequency;
//   }

//   const inputString = "javascript";
//   const frequencyResult = countCharacterFrequency(inputString);
  
//   console.log("Character frequencies:", frequencyResult);

//   ------------------------21------------------------------------
// function removeFirstOccurrence(str, charToRemove) {
//     // Find the index of the first occurrence of the character
//     const index = str.indexOf(charToRemove);
  
//     // If the character exists, remove it
//     if (index !== -1) {
//       return str.slice(0, index) + str.slice(index + 1);
//     }
  
//     // If the character doesn't exist, return the original string
//     return str;
//   }
  
//   const inputString = "javascript";
//   const charToRemove = "a";
//   const resultString = removeFirstOccurrence(inputString, charToRemove);
  
//   console.log(`Original String: "${inputString}"`);
//   console.log(`After removing first occurrence of '${charToRemove}': "${resultString}"`);

//   ---------------------------------22---------------------------------
// function removeLastOccurrence(str, charToRemove) {
//     // Find the index of the last occurrence of the character
//     const index = str.lastIndexOf(charToRemove);
  
//     // If the character exists, remove it
//     if (index !== -1) {
//       return str.slice(0, index) + str.slice(index + 1);
//     }
  
//     // If the character doesn't exist, return the original string
//     return str;
//   }

//   const inputString = "javascript";
//   const charToRemove = "a";
//   const resultString = removeLastOccurrence(inputString, charToRemove);
  
//   console.log(`Original String: "${inputString}"`);
//   console.log(`After removing last occurrence of '${charToRemove}': "${resultString}"`);

//   ----------------------------23----------------------------------
// function removeAllOccurrences(str, charToRemove) {
//     // Use the replace method with a regular expression to remove all occurrences
//     const regex = new RegExp(charToRemove, 'g');
//     return str.replace(regex, '');
//   }
  
//   // Example usage:
//   const inputString = "javascript";
//   const charToRemove = "a";
//   const resultString = removeAllOccurrences(inputString, charToRemove);
  
//   console.log(`Original String: "${inputString}"`);
//   console.log(`After removing all occurrences of '${charToRemove}': "${resultString}"`);

//   ---------------------------24------------------------------------
// function removeRepeatedCharacters(str) {
//     let result = '';
//     let seen = new Set();
  
//     // Iterate through the string and add characters to the result only if they haven't been seen
//     for (let char of str) {
//       if (!seen.has(char)) {
//         result += char;
//         seen.add(char);
//       }
//     }
  
//     return result;
//   }

//   const inputString = "javascript";
//   const resultString = removeRepeatedCharacters(inputString);
  
//   console.log(`Original String: "${inputString}"`);
//   console.log(`After removing repeated characters: "${resultString}"`);

//  ---------------------------25-----------------------------------------
// function replaceFirstOccurrence(str, targetChar, replacementChar) {
//     // Use the replace method with a regular expression to replace only the first occurrence
//     return str.replace(targetChar, replacementChar);
//   }
  
//   let originalString = "Hello World";
//   let modifiedString = replaceFirstOccurrence(originalString, 'o', '0');
  
//   console.log(modifiedString); // "Hell0 World"

//   ------------------------------26-------------------------------
// function replaceLastOccurrence(str, targetChar, replacementChar) {
//     // Find the last occurrence of the target character using lastIndexOf
//     let lastIndex = str.lastIndexOf(targetChar);
    
//     // If the target character exists in the string, replace it
//     if (lastIndex !== -1) {
//       str = str.substring(0, lastIndex) + replacementChar + str.substring(lastIndex + 1);
//     }
    
//     return str;
//   }
  
//   let originalString = "Hello World";
//   let modifiedString = replaceLastOccurrence(originalString, 'o', '0');
  
//   console.log(modifiedString); // "Hello W0rld"

// -----------------------------27------------------------------
// function replaceCharacter(str, target, replacement) {
//     // Using the replaceAll() method to replace all occurrences of the target character
//     return str.split(target).join(replacement);
// }

// // Example usage
// let originalString = "hello world";
// let resultString = replaceCharacter(originalString, 'o', '0');

// console.log(resultString); // Output: "hell0 w0rld"

// ---------------------------28------------------------------
// function findFirstOccurrence(str, word) {
//     // Use the indexOf() method to find the first occurrence of the word
//     let index = str.indexOf(word);

//     if (index !== -1) {
//         return `The word "${word}" first occurs at index ${index}.`;
//     } else {
//         return `The word "${word}" is not found in the string.`;
//     }
// }

// // Example usage
// let myString = "This is a sample string with sample words.";
// let wordToFind = "sample";
// let result = findFirstOccurrence(myString, wordToFind);

// console.log(result); // Output: The word "sample" first occurs at index 10.

// --------------------------29--------------------------------------
// function findLastOccurrence(str, word) {
//     // Use the lastIndexOf() method to find the last occurrence of the word
//     let index = str.lastIndexOf(word);

//     if (index !== -1) {
//         return `The word "${word}" last occurs at index ${index}.`;
//     } else {
//         return `The word "${word}" is not found in the string.`;
//     }
// }

// // Example usage
// let myString = "This is a sample string with sample words and sample sentences.";
// let wordToFind = "sample";
// let result = findLastOccurrence(myString, wordToFind);

// console.log(result); // Output: The word "sample" last occurs at index 34.

// -----------------------------30-----------------------------------
// function findAllOccurrences(str, word) {
//     let indices = [];
//     let index = str.indexOf(word);

//     // Loop to find all occurrences
//     while (index !== -1) {
//         indices.push(index);
//         index = str.indexOf(word, index + 1); // Search for the next occurrence
//     }

//     if (indices.length > 0) {
//         return `The word "${word}" is found at the following indices: ${indices.join(", ")}.`;
//     } else {
//         return `The word "${word}" is not found in the string.`;
//     }
// }

// // Example usage
// let myString = "This is a sample string with sample words and another sample example.";
// let wordToFind = "sample";
// let result = findAllOccurrences(myString, wordToFind);

// console.log(result); // Output: The word "sample" is found at the following indices: 10, 35, 55.

// -------------------------------31-------------------------------------
// function countOccurrences(str, word) {
//     let count = 0;
//     let index = str.indexOf(word);

//     // Loop to count all occurrences
//     while (index !== -1) {
//         count++;
//         index = str.indexOf(word, index + 1); // Search for the next occurrence
//     }

//     return `The word "${word}" appears ${count} time(s) in the string.`;
// }

// // Example usage
// let myString = "This is a sample string with sample words and another sample example.";
// let wordToFind = "sample";
// let result = countOccurrences(myString, wordToFind);

// console.log(result); // Output: The word "sample" appears 3 time(s) in the string.

// -----------------------------32-------------------------------------
// function removeFirstOccurrence(str, word) {
//     // Find the index of the first occurrence of the word
//     let index = str.indexOf(word);

//     if (index !== -1) {
//         // Remove the word by slicing the string before and after the word
//         return str.slice(0, index) + str.slice(index + word.length);
//     } else {
//         return `The word "${word}" is not found in the string.`;
//     }
// }

// let myString = "This is a sample string with sample words.";
// let wordToRemove = "sample";
// let result = removeFirstOccurrence(myString, wordToRemove);

// console.log(result); // Output: "This is a  string with sample words."
//
// ------------------------33----------------------------------------
// function removeLastOccurrence(str, word) {
//     // Find the index of the last occurrence of the word
//     let index = str.lastIndexOf(word);

//     if (index !== -1) {
//         // Remove the word by slicing the string before and after the word
//         return str.slice(0, index) + str.slice(index + word.length);
//     } else {
//         return `The word "${word}" is not found in the string.`;
//     }
// }

// let myString = "This is a sample string with sample words and another sample.";
// let wordToRemove = "sample";
// let result = removeLastOccurrence(myString, wordToRemove);

// console.log(result); // Output: "This is a sample string with sample words and another."

// ----------------------------34-----------------------------------
// function removeAllOccurrences(str, word) {
//     // Use the replace() method with a global regular expression to remove all occurrences
//     let regex = new RegExp(word, 'g');
//     return str.replace(regex, '');
// }

// let myString = "This is a sample string with sample words and another sample.";
// let wordToRemove = "sample";
// let result = removeAllOccurrences(myString, wordToRemove);

// console.log(result); // Output: "This is a  string with  words and another ."

// -----------------------------------35------------------------------------
// function trimLeadingWhitespace(str) {
//     // Use the trimStart() method to remove leading white spaces
//     return str.trimStart();
// }

// // Example usage
// let myString = "   This string has leading spaces.";
// let result = trimLeadingWhitespace(myString);

// console.log(result); // Output: "This string has leading spaces."

// --------------------------------36------------------------------------
// function trimTrailingWhitespace(str) {
//     // Use the trimEnd() method to remove trailing white spaces
//     return str.trimEnd();
// }

// // Example usage
// let myString = "This string has trailing spaces.   ";
// let result = trimTrailingWhitespace(myString);

// console.log(result); // Output: "This string has trailing spaces."

// ---------------------------37-----------------------------------------
// function trimWhitespace(str) {
//     // Use the trim() method to remove both leading and trailing white spaces
//     return str.trim();
// }

// // Example usage
// let myString = "   This string has leading and trailing spaces.   ";
// let result = trimWhitespace(myString);

// console.log(result); // Output: "This string has leading and trailing spaces."

// -----------------------------38-----------------------------------
// function removeExtraSpaces(str) {
//     // Use a regular expression to replace multiple spaces with a single space
//     return str.replace(/\s+/g, ' ').trim();
// }

// let myString = "   This   is   a   string    with   extra  spaces.   ";
// let result = removeExtraSpaces(myString);

// console.log(result); // Output: "This is a string with extra spaces."


