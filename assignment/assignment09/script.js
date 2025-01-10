
// ---------------------1-----------------------
// // Function to print natural numbers from 1 to n
// function printNaturalNumbers(n) {
//     let i = 1; // Initialize the counter
//     while (i <= n) {
//         console.log(i); // Print the current number
//         i++; // Increment the counter
//     }
// }

// // Example usage
// const n = 10; // Change this value to your desired upper limit
// printNaturalNumbers(n);

// -----------------------2------------------------
// // Function to print  natural numbers from n to 1
// function printNaturalNumbersReverse(n) {
//     let i = n; // Initialize the counter to n
//     while (i>=1) {
//         console.log(i); // Print the current number 
//         i--; // decrement the counter
//     }
// }

// // Example usage
// const n = 10; // Change this value to your desired upper limit
// printNaturalNumbersReverse(n);

// -----------------------3---------------------
// // Function to print all alphabets from a to z
// function printAlphabets() {
//     let charCode = 97; // ASCII code for 'a'
//     while (charCode <= 122) { // ASCII code for 'z'
//         console.log(String.fromCharCode(charCode)); // Convert charCode to character and print
//         charCode++; // Move to the next character
//     }
// }

// // Call the function
// printAlphabets();

// -----------------------4------------------------
// // Function to print all even numbers between 1 and 100
// function printEvenNumbers() {
//     let number = 2; // Start with the first even number
//     while (number <= 100) {
//         console.log(number); // Print the current number
//         number += 2; // Increment by 2 to get the next even number
//     }
// }

// // Call the function
// printEvenNumbers();

// ------------------------5---------------------------
// // Function to print all odd numbers between 1 and 100
// function printOddNumbers() {
//     let number = 1; // Start with the first odd number
//     while (number <= 100) {
//         console.log(number); // Print the current number
//         number += 2; // Increment by 2 to get the next odd number
//     }
// }

// // Call the function
// printOddNumbers();

// -------------------------6----------------------------
// // Function to find the sum of all natural numbers between 1 and n
// function sumOfNaturalNumbers(n) {
//     let sum = 0; // Initialize sum to 0
//     let i = 1; // Start with the first natural number
//     while (i <= n) {
//         sum += i; // Add the current number to the sum
//         i++; // Increment to the next number
//     }
//     return sum; // Return the total sum
// }

// // Example usage
// const n = 10; // Change this value to your desired upper limit
// console.log(`The sum of all natural numbers between 1 and ${n} is: ${sumOfNaturalNumbers(n)}`);

// // ------------------------7----------------------------
// // Function to calculate the sum of all even numbers between 1 and n
// function sumOfEvenNumbers(n) {
//     let sum = 0; // Initialize sum to 0
//     let i = 2; // Start with the first even number
//     while (i <= n) {
//         sum += i; // Add the current even number to the sum
//         i += 2; // Move to the next even number
//     }
//     return sum; // Return the total sum
// }

// // Example usage
// const n = 10; // Change this value to your desired upper limit
// console.log(`The sum of all even numbers between 1 and ${n} is: ${sumOfEvenNumbers(n)}`);

// ----------------------------8------------------------------
// // Function to calculate the sum of all odd numbers between 1 and n
// function sumOfOddNumbers(n) {
//     let sum = 0; // Initialize sum to 0
//     let i = 1; // Start with the first odd number
//     while (i <= n) {
//         sum += i; // Add the current odd number to the sum
//         i += 2; // Move to the next odd number
//     }
//     return sum; // Return the total sum
// }

// // Example usage
// const n = 10; // Change this value to your desired upper limit
// console.log(`The sum of all odd numbers between 1 and ${n} is: ${sumOfOddNumbers(n)}`);

// ---------------------------9---------------------------
// // Function to count the number of digits in a number
// function countDigits(number) {
//     let count = 0;
//     while (number !== 0) {
//         number = Math.floor(number / 10); // Remove the last digit
//         count++; // Increment the count for each digit removed
//     }
//     return count; // Return the total count
// }

// // Example usage
// const number = 12345; // Change this value to the number you want to count digits of
// console.log(`The number of digits in ${number} is: ${countDigits(number)}`);

// --------------------------10--------------------------
// // Function to print the multiplication table of a given number
// function printMultiplicationTable(num) {
//     let i = 1;
//     while (i <= 10) {
//         console.log(`${num} x ${i} = ${num * i}`); // Print the multiplication result
//         i++; // Increment the counter
//     }
// }

// // Example usage
// const num = 5; // Change this value to the number for which you want the multiplication table
// printMultiplicationTable(num);

// ----------------------11--------------------------------
// // Function to find the first and last digits of a number
// function findFirstAndLastDigit(number) {
//     // Find the last digit using the modulus operator
//     let lastDigit = number % 10;
    
//     // Find the first digit by repeatedly dividing the number by 10
//     let firstDigit = number;
//     while (firstDigit >= 10) {
//         firstDigit = Math.floor(firstDigit / 10);
//     }

//     return { firstDigit, lastDigit }; // Return the first and last digits
// }

// // Example usage
// const number = 12345; // Change this value to your desired number
// const digits = findFirstAndLastDigit(number);
// console.log(`The first digit is: ${digits.firstDigit}`);
// console.log(`The last digit is: ${digits.lastDigit}`);

// --------------------------------12---------------------------
// // Function to find the sum of the first and last digits of a number
// function sumOfFirstAndLastDigit(number) {
//     // Find the last digit using the modulus operator
//     let lastDigit = number % 10;
    
//     // Find the first digit by repeatedly dividing the number by 10
//     let firstDigit = number;
//     while (firstDigit >= 10) {
//         firstDigit = Math.floor(firstDigit / 10);
//     }

//     // Return the sum of the first and last digits
//     return firstDigit + lastDigit;
// }

// // Example usage
// const number = 12345; // Change this value to your desired number
// const sum = sumOfFirstAndLastDigit(number);
// console.log(`The sum of the first and last digit of ${number} is: ${sum}`);

// --------------------------13------------------------------
// // Function to swap the first and last digits of a number
// function swapFirstAndLastDigit(number) {
//     // Convert the number to a string to easily access first and last digits
//     let numStr = number.toString();

//     // If the number is a single-digit number, return it as is
//     if (numStr.length === 1) {
//         return number;
//     }

//     // Find the first and last digits
//     let firstDigit = numStr[0];
//     let lastDigit = numStr[numStr.length - 1];

//     // Swap the first and last digits
//     let swappedNumber = lastDigit + numStr.slice(1, numStr.length - 1) + firstDigit;

//     // Return the new number
//     return parseInt(swappedNumber); // Convert the string back to a number
// }

// // Example usage
// const number = 12345; // Change this value to your desired number
// const swapped = swapFirstAndLastDigit(number);
// console.log(`The number after swapping the first and last digits is: ${swapped}`);

// --------------------------14----------------------------------
// // Function to calculate the sum of digits of a number
// function sumOfDigits(number) {
//     let sum = 0;
    
//     // Loop through each digit of the number
//     while (number > 0) {
//         sum += number % 10; // Add the last digit to the sum
//         number = Math.floor(number / 10); // Remove the last digit from the number
//     }

//     return sum; // Return the total sum
// }

// // Example usage
// const number = 12345; // Change this value to your desired number
// const sum = sumOfDigits(number);
// console.log(`The sum of digits of ${number} is: ${sum}`);

// ------------------------------15----------------------------
// // Function to calculate the product of digits of a number
// function productOfDigits(number) {
//     let product = 1; // Initialize product to 1 (since we're multiplying digits)
    
//     // Loop through each digit of the number
//     while (number > 0) {
//         product *= number % 10; // Multiply the last digit to the product
//         number = Math.floor(number / 10); // Remove the last digit from the number
//     }

//     return product; // Return the total product
// }

// // Example usage
// const number = 12345; // Change this value to your desired number
// const product = productOfDigits(number);
// console.log(`The product of digits of ${number} is: ${product}`);

// -----------------------------16--------------------------------
// // Function to reverse a number
// function reverseNumber(number) {
//     let reversed = 0;
    
//     // Loop to reverse the number
//     while (number !== 0) {
//         let digit = number % 10; // Get the last digit of the number
//         reversed = reversed * 10 + digit; // Build the reversed number
//         number = Math.floor(number / 10); // Remove the last digit from the original number
//     }

//     return reversed; // Return the reversed number
// }

// // Example usage
// let number = prompt("Enter a number: "); // Ask user for input
// number = parseInt(number); // Convert input to an integer

// const reversedNumber = reverseNumber(number);
// console.log(`The reverse of ${number} is: ${reversedNumber}`);

// ------------------------------17-------------------------------
// // Function to check if a number is a palindrome
// function isPalindrome(number) {
//     let originalNumber = number; // Store the original number
//     let reversed = 0;

//     // Reverse the number
//     while (number !== 0) {
//         let digit = number % 10; // Get the last digit of the number
//         reversed = reversed * 10 + digit; // Build the reversed number
//         number = Math.floor(number / 10); // Remove the last digit from the original number
//     }

//     // Check if the original number and reversed number are the same
//     if (originalNumber === reversed) {
//         return true; // It's a palindrome
//     } else {
//         return false; // It's not a palindrome
//     }
// }

// // Example usage
// let number = prompt("Enter a number: "); // Ask user for input
// number = parseInt(number); // Convert input to an integer

// if (isPalindrome(number)) {
//     console.log(`${number} is a palindrome.`);
// } else {
//     console.log(`${number} is not a palindrome.`);
// }

// ------------------------------18-------------------------
// // Function to find the frequency of each digit in a number
// function digitFrequency(number) {
//     let freq = {}; // Object to store the frequency of each digit
    
//     // Convert the number to a string to loop through each digit
//     let numStr = number.toString();
    
//     // Loop through each digit of the number
//     for (let i = 0; i < numStr.length; i++) {
//         let digit = numStr[i]; // Get the current digit
        
//         // If the digit is already in the frequency object, increment its count
//         if (freq[digit]) {
//             freq[digit]++;
//         } else {
//             freq[digit] = 1; // If it's the first occurrence, initialize it with 1
//         }
//     }

//     return freq; // Return the frequency object
// }

// // Example usage
// let number = prompt("Enter a number: "); // Ask user for input
// number = parseInt(number); // Convert input to an integer

// let frequencies = digitFrequency(number);

// // Print the frequency of each digit
// for (let digit in frequencies) {
//     console.log(`Digit ${digit} appears ${frequencies[digit]} times.`);
// }

// ------------------------19---------------------------------------
// // Function to convert a number to words
// function numberToWords(number) {
//     const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//     const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
//     const thousands = ["", "Thousand", "Million", "Billion"];

//     // Helper function to convert a number less than 1000 to words
//     function convertChunk(number) {
//         let chunk = "";
//         if (number >= 100) {
//             chunk += ones[Math.floor(number / 100)] + " Hundred ";
//             number %= 100;
//         }
//         if (number >= 20) {
//             chunk += tens[Math.floor(number / 10)] + " ";
//             number %= 10;
//         }
//         if (number >= 10) {
//             chunk += teens[number - 10] + " ";
//             number = 0;
//         }
//         if (number > 0) {
//             chunk += ones[number] + " ";
//         }
//         return chunk.trim();
//     }

//     if (number === 0) return "Zero";

//     let result = "";
//     let chunkIndex = 0;

//     // Process the number in chunks of 3 digits
//     while (number > 0) {
//         let chunk = number % 1000;
//         if (chunk > 0) {
//             result = convertChunk(chunk) + " " + thousands[chunkIndex] + " " + result;
//         }
//         number = Math.floor(number / 1000);
//         chunkIndex++;
//     }

//     return result.trim(); // Return the result without extra spaces
// }

// // Example usage
// let number = prompt("Enter a number: "); // Ask user for input
// number = parseInt(number); // Convert input to an integer

// let resultInWords = numberToWords(number);
// console.log(`The number ${number} in words is: ${resultInWords}`);

// -----------------------20-------------------------------------
// // Function to print all ASCII characters with their values
// function printAsciiCharacters() {
//     // Loop through ASCII values from 32 to 126 (printable characters)
//     for (let i = 32; i <= 126; i++) {
//         console.log(`ASCII value of '${String.fromCharCode(i)}' is: ${i}`);
//     }
// }

// // Call the function to print ASCII characters and their values
// printAsciiCharacters();

// -------------------------21--------------------------------
// // Function to calculate the power of a number
// function power(base, exponent) {
//     let result = 1; // Initialize result to 1

//     // Use a for loop to multiply the base 'exponent' times
//     for (let i = 1; i <= exponent; i++) {
//         result *= base; // Multiply result by base in each iteration
//     }

//     return result; // Return the calculated power
// }

// // Example usage
// let base = prompt("Enter the base number: "); // Ask user for base
// let exponent = prompt("Enter the exponent: "); // Ask user for exponent

// base = parseFloat(base); // Convert input to a floating-point number
// exponent = parseInt(exponent); // Convert input to an integer

// let result = power(base, exponent);
// console.log(`${base} raised to the power of ${exponent} is: ${result}`);

// ------------------------22--------------------------------
// // Function to find all factors of a number
// function findFactors(number) {
//     let factors = []; // Array to store the factors
    
//     // Loop through all numbers from 1 to the given number
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) { // If i divides the number evenly, it is a factor
//             factors.push(i); // Add the factor to the array
//         }
//     }

//     return factors; // Return the array of factors
// }

// // Example usage
// let number = prompt("Enter a number: "); // Ask user for input
// number = parseInt(number); // Convert input to an integer

// let factors = findFactors(number);
// console.log(`The factors of ${number} are: ${factors.join(", ")}`);

// ---------------------------23-------------------------------------
// // Function to calculate the factorial of a number
// function factorial(number) {
//     let result = 1;

//     // Loop to multiply the number and all numbers before it
//     for (let i = 1; i <= number; i++) {
//         result *= i; // Multiply result by current number
//     }

//     return result; // Return the calculated factorial
// }

// // Example usage
// let number = prompt("Enter a number: "); // Ask user for input
// number = parseInt(number); // Convert input to an integer

// let result = factorial(number);
// console.log(`The factorial of ${number} is: ${result}`);

// ----------------------------24---------------------------------
// // Function to calculate HCF (GCD) of two numbers using Euclidean algorithm
// function findHCF(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b; // Remainder of a divided by b
//         a = temp; // Assign the value of b to a
//     }
//     return a; // The HCF is stored in a when b becomes 0
// }

// // Example usage
// let num1 = prompt("Enter the first number: "); // Ask user for the first number
// let num2 = prompt("Enter the second number: "); // Ask user for the second number

// num1 = parseInt(num1); // Convert input to integer
// num2 = parseInt(num2); // Convert input to integer

// let hcf = findHCF(num1, num2);
// console.log(`The HCF (GCD) of ${num1} and ${num2} is: ${hcf}`);

// -------------------------25--------------------------------------
// // Function to calculate the LCM of two numbers
// function findLCM(a, b) {
//     // Calculate the HCF (GCD) first using Euclidean algorithm
//     let hcf = findHCF(a, b);
    
//     // Calculate the LCM using the formula: LCM(a, b) = (a * b) / HCF(a, b)
//     let lcm = (a * b) / hcf;
//     return lcm;
// }

// // Function to calculate HCF (GCD) of two numbers using Euclidean algorithm
// function findHCF(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b; // Remainder of a divided by b
//         a = temp; // Assign the value of b to a
//     }
//     return a; // The HCF is stored in a when b becomes 0
// }

// // Example usage
// let num1 = prompt("Enter the first number: "); // Ask user for the first number
// let num2 = prompt("Enter the second number: "); // Ask user for the second number

// num1 = parseInt(num1); // Convert input to integer
// num2 = parseInt(num2); // Convert input to integer

// let lcm = findLCM(num1, num2);
// console.log(`The LCM of ${num1} and ${num2} is: ${lcm}`);

// ---------------------------------26-----------------------------
// // Function to check if a number is prime
// function isPrime(number) {
//     // Edge cases for numbers less than 2
//     if (number <= 1) {
//         return false; // 0 and 1 are not prime numbers
//     }

//     // Check divisibility from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false; // If divisible by any number, it's not prime
//         }
//     }

//     return true; // If no divisors were found, the number is prime
// }

// // Example usage
// let number = prompt("Enter a number: "); // Ask user for input
// number = parseInt(number); // Convert input to an integer

// if (isPrime(number)) {
//     console.log(`${number} is a prime number.`);
// } else {
//     console.log(`${number} is not a prime number.`);
// }

// ---------------------------27---------------------------------
// // Function to check if a number is prime
// function isPrime(number) {
//     if (number <= 1) {
//         return false; // 0 and 1 are not prime numbers
//     }

//     // Check divisibility from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false; // If divisible by any number, it's not prime
//         }
//     }

//     return true; // If no divisors were found, the number is prime
// }

// // Function to print all prime numbers between 1 and n
// function printPrimesUpToN(n) {
//     console.log(`Prime numbers between 1 and ${n}:`);
//     for (let i = 1; i <= n; i++) {
//         if (isPrime(i)) {
//             console.log(i); // Print the prime number
//         }
//     }
// }

// // Example usage
// let n = prompt("Enter a number: "); // Ask user for input
// n = parseInt(n); // Convert input to an integer

// printPrimesUpToN(n);

// --------------------------28------------------------------------
// // Function to check if a number is prime
// function isPrime(number) {
//     if (number <= 1) {
//         return false; // 0 and 1 are not prime numbers
//     }

//     // Check divisibility from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false; // If divisible by any number, it's not prime
//         }
//     }

//     return true; // If no divisors were found, the number is prime
// }

// // Function to find the sum of all prime numbers between 1 and n
// function sumOfPrimesUpToN(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (isPrime(i)) {
//             sum += i; // Add the prime number to the sum
//         }
//     }
//     return sum; // Return the sum of all primes
// }

// // Example usage
// let n = prompt("Enter a number: "); // Ask user for input
// n = parseInt(n); // Convert input to an integer

// let sum = sumOfPrimesUpToN(n);
// console.log(`The sum of all prime numbers between 1 and ${n} is: ${sum}`);

// --------------------------29----------------------------------
// // Function to check if a number is prime
// function isPrime(number) {
//     if (number <= 1) {
//         return false; // 0 and 1 are not prime numbers
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false; // If divisible by any number, it's not prime
//         }
//     }

//     return true; // If no divisors were found, the number is prime
// }

// // Function to find all prime factors of a number
// function primeFactors(number) {
//     let factors = [];
    
//     // Check for divisibility by 2 to handle even numbers first
//     while (number % 2 === 0) {
//         factors.push(2);
//         number /= 2; // Divide by 2 until it is no longer divisible
//     }

//     // Check for odd factors starting from 3 to square root of the number
//     for (let i = 3; i <= Math.sqrt(number); i += 2) {
//         while (number % i === 0) {
//             if (isPrime(i)) {
//                 factors.push(i); // Add prime factor to the list
//             }
//             number /= i; // Divide by current factor
//         }
//     }

//     // If the number is still greater than 2, then it's a prime factor
//     if (number > 2 && isPrime(number)) {
//         factors.push(number);
//     }

//     return factors; // Return the array of prime factors
// }

// // Example usage
// let number = prompt("Enter a number: "); // Ask user for input
// number = parseInt(number); // Convert input to an integer

// let factors = primeFactors(number);
// console.log(`The prime factors of ${number} are: ${factors.join(", ")}`);

// --------------------30--------------------------------------
// // Function to check if a number is an Armstrong number
// function isArmstrong(number) {
//     // Convert the number to a string to easily access each digit
//     let numStr = number.toString();
    
//     // Find the number of digits in the number
//     let numDigits = numStr.length;
    
//     let sum = 0;
    
//     // Loop through each digit, raise it to the power of the number of digits, and add to sum
//     for (let i = 0; i < numDigits; i++) {
//         let digit = parseInt(numStr[i]); // Get the digit at position i
//         sum += Math.pow(digit, numDigits); // Add the digit raised to the power of numDigits
//     }

//     // If sum is equal to the original number, it's an Armstrong number
//     return sum === number;
// }

// // Example usage
// let number = prompt("Enter a number: "); // Ask user for input
// number = parseInt(number); // Convert input to an integer

// if (isArmstrong(number)) {
//     console.log(`${number} is an Armstrong number.`);
// } else {
//     console.log(`${number} is not an Armstrong number.`);

// }

// ------------------------31-----------------------------------
// // Function to check if a number is an Armstrong number
// function isArmstrong(number) {
//     let numStr = number.toString();  // Convert number to string
//     let numDigits = numStr.length;   // Find the number of digits in the number
//     let sum = 0;

//     // Loop through each digit, raise it to the power of numDigits and add to sum
//     for (let i = 0; i < numDigits; i++) {
//         let digit = parseInt(numStr[i]); // Get the digit at position i
//         sum += Math.pow(digit, numDigits); // Add the digit raised to the power of numDigits
//     }

//     return sum === number;  // Return true if sum is equal to the number
// }

// // Function to print all Armstrong numbers between 1 and n
// function printArmstrongNumbersUpToN(n) {
//     console.log(`Armstrong numbers between 1 and ${n}:`);
//     for (let i = 1; i <= n; i++) {
//         if (isArmstrong(i)) {
//             console.log(i);  // Print Armstrong number
//         }
//     }
// }

// // Example usage
// let n = prompt("Enter a number: "); // Ask user for input
// n = parseInt(n); // Convert input to an integer

// printArmstrongNumbersUpToN(n);

// --------------------------32-------------------------------
// function isPerfectNumber(num) {
//     // A perfect number must be positive
//     if (num <= 0) {
//         return false;
//     }

//     let sum = 0;

//     // Find all divisors of the number except itself
//     for (let i = 1; i <= Math.floor(num / 2); i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }

//     // Check if the sum of divisors equals the number
//     return sum === num;
// }

// // Example usage
// const number = 28; // Change this to test other numbers

// if (isPerfectNumber(number)) {
//     console.log(`${number} is a Perfect Number.`);
// } else {
//     console.log(`${number} is not a Perfect Number.`);
// }

// -----------------------33----------------------------------------
// function isPerfectNumber(num) {
//     if (num <= 0) {
//         return false;
//     }

//     let sum = 0;

//     // Find all divisors of the number except itself
//     for (let i = 1; i <= Math.floor(num / 2); i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }

//     // Check if the sum of divisors equals the number
//     return sum === num;
// }

// function printPerfectNumbers(n) {
//     console.log(`Perfect numbers between 1 and ${n} are:`);

//     for (let i = 1; i <= n; i++) {
//         if (isPerfectNumber(i)) {
//             console.log(i);
//         }
//     }
// }

// // Example usage
// const n = 10000; // Change this value to test with other ranges
// printPerfectNumbers(n);

// ----------------------34----------------------------------
// // Function to calculate factorial of a number
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     let fact = 1;
//     for (let i = 2; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// }

// // Function to check if a number is a Strong Number
// function isStrongNumber(num) {
//     let sum = 0;
//     let temp = num;

//     while (temp > 0) {
//         let digit = temp % 10; // Extract the last digit
//         sum += factorial(digit); // Add the factorial of the digit
//         temp = Math.floor(temp / 10); // Remove the last digit
//     }

//     return sum === num; // Check if the sum equals the original number
// }

// // Example usage
// const number = 145; // Change this number to test other cases

// if (isStrongNumber(number)) {
//     console.log(`${number} is a Strong Number.`);
// } else {
//     console.log(`${number} is not a Strong Number.`);
// }

// ----------------------35-----------------------------------
// // Function to calculate factorial of a number
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     let fact = 1;
//     for (let i = 2; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// }

// // Function to check if a number is a Strong Number
// function isStrongNumber(num) {
//     let sum = 0;
//     let temp = num;

//     while (temp > 0) {
//         let digit = temp % 10; // Extract the last digit
//         sum += factorial(digit); // Add the factorial of the digit
//         temp = Math.floor(temp / 10); // Remove the last digit
//     }

//     return sum === num; // Check if the sum equals the original number
// }

// // Function to print all Strong Numbers between 1 and n
// function printStrongNumbers(n) {
//     console.log(`Strong numbers between 1 and ${n} are:`);
//     for (let i = 1; i <= n; i++) {
//         if (isStrongNumber(i)) {
//             console.log(i);
//         }
//     }
// }

// // Example usage
// const n = 1000; // Change this value to test with other ranges
// printStrongNumbers(n);

// ------------------------36------------------------------------
// function printFibonacciSeries(n) {
//     if (n <= 0) {
//         console.log("Please enter a positive integer.");
//         return;
//     }

//     let a = 0, b = 1;

//     console.log("Fibonacci Series:");
//     for (let i = 1; i <= n; i++) {
//         console.log(a); // Print the current term
//         let nextTerm = a + b; // Calculate the next term
//         a = b; // Update `a` to the current `b`
//         b = nextTerm; // Update `b` to the next term
//     }
// }

// // Example usage
// const n = 10; // Change this value to get more or fewer terms
// printFibonacciSeries(n);

// ------------------------37----------------------------------
// function findOnesComplement(binary) {
//     // Validate that the input is a binary number
//     if (!/^[01]+$/.test(binary)) {
//         return "Invalid binary number.";
//     }

//     // Compute the one's complement
//     let onesComplement = "";
//     for (let i = 0; i < binary.length; i++) {
//         onesComplement += binary[i] === "0" ? "1" : "0";
//     }

//     return onesComplement;
// }

// // Example usage
// const binaryNumber = "101010"; // Change this to test other binary numbers
// const result = findOnesComplement(binaryNumber);
// console.log(`The one's complement of ${binaryNumber} is: ${result}`);

// -----------------------------38------------------------------------
// function findOnesComplement(binary) {
//     // Validate that the input is a binary number
//     if (!/^[01]+$/.test(binary)) {
//         return "Invalid binary number.";
//     }

//     // Compute the one's complement
//     let onesComplement = "";
//     for (let i = 0; i < binary.length; i++) {
//         onesComplement += binary[i] === "0" ? "1" : "0";
//     }

//     return onesComplement;
// }

// function findTwosComplement(binary) {
//     // Find the one's complement
//     const onesComplement = findOnesComplement(binary);

//     if (onesComplement === "Invalid binary number.") {
//         return "Invalid binary number.";
//     }

//     // Add 1 to the one's complement
//     let twosComplement = "";
//     let carry = 1;

//     for (let i = onesComplement.length - 1; i >= 0; i--) {
//         let sum = parseInt(onesComplement[i]) + carry;
//         twosComplement = (sum % 2) + twosComplement; // Append the current bit
//         carry = Math.floor(sum / 2); // Update the carry
//     }

//     // Add carry if necessary
//     if (carry === 1) {
//         twosComplement = "1" + twosComplement;
//     }

//     return twosComplement;
// }

// // Example usage
// const binaryNumber = "101010"; // Change this to test other binary numbers
// const result = findTwosComplement(binaryNumber);
// console.log(`The two's complement of ${binaryNumber} is: ${result}`);

// ----------------------39-------------------------------------------
// function binaryToOctal(binary) {
//     // Validate that the input is a binary number
//     if (!/^[01]+$/.test(binary)) {
//         return "Invalid binary number.";
//     }

//     // Pad the binary number with leading zeros to make its length a multiple of 3
//     while (binary.length % 3 !== 0) {
//         binary = "0" + binary;
//     }

//     let octal = "";

//     // Process each group of 3 bits
//     for (let i = 0; i < binary.length; i += 3) {
//         const group = binary.substring(i, i + 3); // Extract 3 bits
//         const decimalValue = parseInt(group, 2); // Convert to decimal
//         octal += decimalValue.toString(); // Append to the octal result
//     }

//     return octal;
// }

// // Example usage
// const binaryNumber = "101010"; // Change this to test other binary numbers
// const result = binaryToOctal(binaryNumber);
// console.log(`The octal equivalent of binary ${binaryNumber} is: ${result}`);

// ------------------------40----------------------------------------
// function binaryToDecimal(binary) {
//     // Validate that the input is a binary number
//     if (!/^[01]+$/.test(binary)) {
//         return "Invalid binary number.";
//     }

//     let decimal = 0;

//     // Convert binary to decimal
//     for (let i = 0; i < binary.length; i++) {
//         const bit = parseInt(binary[binary.length - 1 - i]); // Get the current bit
//         decimal += bit * Math.pow(2, i); // Add the bit's contribution to the decimal value
//     }

//     return decimal;
// }

// // Example usage
// const binaryNumber = "101010"; // Change this to test other binary numbers
// const result = binaryToDecimal(binaryNumber);
// console.log(`The decimal equivalent of binary ${binaryNumber} is: ${result}`);

// ---------------------------41-----------------------------------------
// function binaryToHexadecimal(binary) {
//     // Validate that the input is a binary number
//     if (!/^[01]+$/.test(binary)) {
//         return "Invalid binary number.";
//     }

//     // Pad the binary number with leading zeros to make its length a multiple of 4
//     while (binary.length % 4 !== 0) {
//         binary = "0" + binary;
//     }

//     let hexadecimal = "";

//     // Hexadecimal mapping for 4-bit binary numbers
//     const binaryToHexMap = {
//         "0000": "0", "0001": "1", "0010": "2", "0011": "3",
//         "0100": "4", "0101": "5", "0110": "6", "0111": "7",
//         "1000": "8", "1001": "9", "1010": "A", "1011": "B",
//         "1100": "C", "1101": "D", "1110": "E", "1111": "F"
//     };

//     // Process each group of 4 bits
//     for (let i = 0; i < binary.length; i += 4) {
//         const group = binary.substring(i, i + 4); // Extract 4 bits
//         hexadecimal += binaryToHexMap[group]; // Convert to hexadecimal
//     }

//     return hexadecimal;
// }

// // Example usage
// const binaryNumber = "101010"; // Change this to test other binary numbers
// const result = binaryToHexadecimal(binaryNumber);
// console.log(`The hexadecimal equivalent of binary ${binaryNumber} is: ${result}`);

// ------------------------------42--------------------------------------
// function octalToBinary(octal) {
//     // Validate that the input is a valid octal number
//     if (!/^[0-7]+$/.test(octal)) {
//         return "Invalid octal number.";
//     }

//     // Binary equivalent of octal digits
//     const octalToBinaryMap = {
//         "0": "000", "1": "001", "2": "010", "3": "011",
//         "4": "100", "5": "101", "6": "110", "7": "111"
//     };

//     let binary = "";

//     // Convert each octal digit to its binary equivalent
//     for (let i = 0; i < octal.length; i++) {
//         binary += octalToBinaryMap[octal[i]]; // Append the binary equivalent
//     }

//     // Remove leading zeros if necessary (except for "0" itself)
//     return binary.replace(/^0+/, "") || "0";
// }

// // Example usage
// const octalNumber = "27"; // Change this to test other octal numbers
// const result = octalToBinary(octalNumber);
// console.log(`The binary equivalent of octal ${octalNumber} is: ${result}`);

// -------------------------------43-------------------------------------
// function octalToDecimal(octal) {
//     // Validate that the input is a valid octal number
//     if (!/^[0-7]+$/.test(octal)) {
//         return "Invalid octal number.";
//     }

//     let decimal = 0;

//     // Convert octal to decimal
//     for (let i = 0; i < octal.length; i++) {
//         const digit = parseInt(octal[octal.length - 1 - i], 10); // Get the current digit
//         decimal += digit * Math.pow(8, i); // Multiply by 8 raised to the power of its position
//     }

//     return decimal;
// }

// // Example usage
// const octalNumber = "27"; // Change this to test other octal numbers
// const result = octalToDecimal(octalNumber);
// console.log(`The decimal equivalent of octal ${octalNumber} is: ${result}`);

// ---------------------------------44--------------------------------
// // Function to convert octal to decimal
// function octalToDecimal(octal) {
//     // Validate that the input is a valid octal number
//     if (!/^[0-7]+$/.test(octal)) {
//         return "Invalid octal number.";
//     }

//     let decimal = 0;

//     // Convert octal to decimal
//     for (let i = 0; i < octal.length; i++) {
//         const digit = parseInt(octal[octal.length - 1 - i], 10); // Get the current digit
//         decimal += digit * Math.pow(8, i); // Multiply by 8 raised to the power of its position
//     }

//     return decimal;
// }

// // Function to convert decimal to hexadecimal
// function decimalToHexadecimal(decimal) {
//     return decimal.toString(16).toUpperCase();
// }

// // Function to convert octal to hexadecimal
// function octalToHexadecimal(octal) {
//     // Convert octal to decimal
//     const decimal = octalToDecimal(octal);
    
//     if (typeof decimal === "string") {
//         return decimal; // Return error message if octal is invalid
//     }

//     // Convert decimal to hexadecimal
//     const hexadecimal = decimalToHexadecimal(decimal);

//     return hexadecimal;
// }

// // Example usage
// const octalNumber = "27"; // Change this to test other octal numbers
// const result = octalToHexadecimal(octalNumber);
// console.log(`The hexadecimal equivalent of octal ${octalNumber} is: ${result}`);

// --------------------------------45-----------------------------------------
// function decimalToBinary(decimal) {
//     // Validate that the input is a non-negative integer
//     if (decimal < 0 || !Number.isInteger(decimal)) {
//         return "Please enter a valid non-negative integer.";
//     }

//     // Edge case: if the decimal is 0, return "0"
//     if (decimal === 0) {
//         return "0";
//     }

//     let binary = "";

//     // Convert decimal to binary
//     while (decimal > 0) {
//         const remainder = decimal % 2; // Get the remainder when divided by 2
//         binary = remainder + binary; // Prepend the remainder to form the binary string
//         decimal = Math.floor(decimal / 2); // Divide the decimal by 2 (discard the fraction)
//     }

//     return binary;
// }

// // Example usage
// const decimalNumber = 42; // Change this to test other decimal numbers
// const result = decimalToBinary(decimalNumber);
// console.log(`The binary equivalent of decimal ${decimalNumber} is: ${result}`);

// ----------------------------------46-----------------------------------
// function decimalToOctal(decimal) {
//     // Validate that the input is a non-negative integer
//     if (decimal < 0 || !Number.isInteger(decimal)) {
//         return "Please enter a valid non-negative integer.";
//     }

//     // Edge case: if the decimal is 0, return "0"
//     if (decimal === 0) {
//         return "0";
//     }

//     let octal = "";

//     // Convert decimal to octal
//     while (decimal > 0) {
//         const remainder = decimal % 8; // Get the remainder when divided by 8
//         octal = remainder + octal; // Prepend the remainder to form the octal string
//         decimal = Math.floor(decimal / 8); // Divide the decimal by 8 (discard the fraction)
//     }

//     return octal;
// }

// // Example usage
// const decimalNumber = 42; // Change this to test other decimal numbers
// const result = decimalToOctal(decimalNumber);
// console.log(`The octal equivalent of decimal ${decimalNumber} is: ${result}`);

// ------------------------------47-------------------------------------------
// function decimalToHexadecimal(decimal) {
//     // Validate that the input is a non-negative integer
//     if (decimal < 0 || !Number.isInteger(decimal)) {
//         return "Please enter a valid non-negative integer.";
//     }

//     // Edge case: if the decimal is 0, return "0"
//     if (decimal === 0) {
//         return "0";
//     }

//     const hexDigits = "0123456789ABCDEF"; // Hexadecimal digit map
//     let hexadecimal = "";

//     // Convert decimal to hexadecimal
//     while (decimal > 0) {
//         const remainder = decimal % 16; // Get the remainder when divided by 16
//         hexadecimal = hexDigits[remainder] + hexadecimal; // Prepend the hexadecimal digit
//         decimal = Math.floor(decimal / 16); // Divide the decimal by 16 (discard the fraction)
//     }

//     return hexadecimal;
// }

// // Example usage
// const decimalNumber = 42; // Change this to test other decimal numbers
// const result = decimalToHexadecimal(decimalNumber);
// console.log(`The hexadecimal equivalent of decimal ${decimalNumber} is: ${result}`);

// --------------------------------48----------------------------------------
// function hexadecimalToBinary(hexadecimal) {
//     // Validate that the input is a valid hexadecimal number
//     if (!/^[0-9A-Fa-f]+$/.test(hexadecimal)) {
//         return "Invalid hexadecimal number.";
//     }

//     // Map each hexadecimal digit to its 4-bit binary equivalent
//     const hexToBinaryMap = {
//         "0": "0000", "1": "0001", "2": "0010", "3": "0011",
//         "4": "0100", "5": "0101", "6": "0110", "7": "0111",
//         "8": "1000", "9": "1001", "A": "1010", "B": "1011",
//         "C": "1100", "D": "1101", "E": "1110", "F": "1111"
//     };

//     let binary = "";

//     // Convert each hexadecimal digit to its binary equivalent
//     for (let i = 0; i < hexadecimal.length; i++) {
//         binary += hexToBinaryMap[hexadecimal[i].toUpperCase()]; // Convert to uppercase for consistency
//     }

//     // Remove leading zeros (except for "0" itself)
//     return binary.replace(/^0+/, "") || "0";
// }

// // Example usage
// const hexadecimalNumber = "2A"; // Change this to test other hexadecimal numbers
// const result = hexadecimalToBinary(hexadecimalNumber);
// console.log(`The binary equivalent of hexadecimal ${hexadecimalNumber} is: ${result}`);

// -------------------------------49-------------------------------------------
// // Function to convert hexadecimal to decimal
// function hexadecimalToDecimal(hexadecimal) {
//     // Validate that the input is a valid hexadecimal number
//     if (!/^[0-9A-Fa-f]+$/.test(hexadecimal)) {
//         return "Invalid hexadecimal number.";
//     }

//     // Convert hexadecimal to decimal using parseInt
//     const decimal = parseInt(hexadecimal, 16);
//     return decimal;
// }

// // Function to convert decimal to octal
// function decimalToOctal(decimal) {
//     return decimal.toString(8); // Convert decimal to octal using toString(8)
// }

// // Function to convert hexadecimal to octal
// function hexadecimalToOctal(hexadecimal) {
//     // Convert hexadecimal to decimal
//     const decimal = hexadecimalToDecimal(hexadecimal);
    
//     if (typeof decimal === "string") {
//         return decimal; // Return error message if hexadecimal is invalid
//     }

//     // Convert decimal to octal
//     const octal = decimalToOctal(decimal);

//     return octal;
// }

// // Example usage
// const hexadecimalNumber = "2A"; // Change this to test other hexadecimal numbers
// const result = hexadecimalToOctal(hexadecimalNumber);
// console.log(`The octal equivalent of hexadecimal ${hexadecimalNumber} is: ${result}`);

// --------------------------------50----------------------------------------
// function hexadecimalToDecimal(hexadecimal) {
//     // Validate that the input is a valid hexadecimal number
//     if (!/^[0-9A-Fa-f]+$/.test(hexadecimal)) {
//         return "Invalid hexadecimal number.";
//     }

//     // Convert hexadecimal to decimal using parseInt with base 16
//     const decimal = parseInt(hexadecimal, 16);

//     return decimal;
// }

// // Example usage
// const hexadecimalNumber = "2A"; // Change this to test other hexadecimal numbers
// const result = hexadecimalToDecimal(hexadecimalNumber);
// console.log(`The decimal equivalent of hexadecimal ${hexadecimalNumber} is: ${result}`);

// --------------------------------51-------------------------------------------
// function printPascalTriangle(n) {
//     // Loop to generate each row of the Pascal's Triangle
//     for (let row = 0; row < n; row++) {
//         let rowArr = []; // Create a temporary array to hold the row values
        
//         // Loop to calculate each element in the row
//         for (let col = 0; col <= row; col++) {
//             // Use the combination formula C(n, k) = n! / (k! * (n - k)!)
//             // where `n` is the row index and `k` is the column index
//             rowArr.push(combination(row, col));
//         }
        
//         // Print the row as a string with spaces between numbers
//         console.log(rowArr.join(' '));
//     }
// }

// // Function to calculate combination C(n, k)
// function combination(n, k) {
//     // If k is 0 or k equals n, return 1 (base cases)
//     if (k === 0 || k === n) {
//         return 1;
//     }

//     // Recursive formula: C(n, k) = C(n-1, k-1) + C(n-1, k)
//     return combination(n - 1, k - 1) + combination(n - 1, k);
// }

// // Example usage
// const n = 5; // Change this to print a different number of rows
// printPascalTriangle(n);
