// Program to find the maximum between two numbers

// function findMaximum(num1, num2) {
//     if (num1 > num2) {
//         console.log(`The maximum number is: ${num1}`);
//     } else if (num2 > num1) {
//         console.log(`The maximum number is: ${num2}`);
//     } else {
//         console.log("Both numbers are equal.");
//     }
// }

// // Example usage
// const number1 = 42;
// const number2 = 68;
// findMaximum(number1, number2);

// ----------------------------------------------------
// Program to find the maximum between three numbers

// function findMaximum(num1, num2, num3){
//     if (num1 > num2 && num1 > num3) {
//         console.log(`The maximum number is:${num1}`);
//     }
//     else if(num2 > num1 && num2 > num3){
//         console.log(`The maximum number is:${num2}`);
//     }
//     else if(num3 > num1 && num3 >num2){
//        console.log(`The maximum number is:${num3} `);
//     }
//     else{
//         console.log("Some or all numbers are equal.");
//     }
// }
// // Example usage
// const number1 = 42;
// const number2 = 68;
// const number3 = 35;
// findMaximum(number1, number2, number3)

// ------------------------------------------------------
// Program to check whehter a numbers negative,positive or zero

// function checknumber(num){
//     if (num > 0) {
//         console.log(`${sum} is a positive number.`);
//     }
//     else if (num < 0) {
//         console.log(`${sum} is a negative number.`);
//     }
//     else {
//         console.log(`${sum} is zero.`);
        
//     }
// }
// // Example usage
// const number1 = -5;
// checknumber(Number);

// ------------------------------------------------------
// Function to check divisibility by 5 and 11
// function isDivisibleBy5And11(number) {
//     if (number % 5 === 0 && number % 11 === 0) {
//         return `${number} is divisible by both 5 and 11.`;
//     } else {
//         return `${number} is not divisible by both 5 and 11.`;
//     }
// }

// // Example usage
// const number = parseInt(prompt("Enter a number to check: "), 10);
// const result = isDivisibleBy5And11(number);
// console.log(result);
// alert(result);

// --------------------------------------------------------
// Function to check if a number is even or odd
// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return `${number} is an even number.`;
//     } else {
//         return `${number} is an odd number.`;
//     }
// }

// // Example usage
// const input = prompt("Enter a number to check:");
// const number = parseFloat(input);

// if (!isNaN(number)) {
//     const result = checkEvenOrOdd(number);
//     console.log(result);
//     alert(result);
// } else {
//     alert("Please enter a valid number.");
// }

// ------------------------------------------------------
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true; // The year is a leap year
//     } else {
//         return false; // The year is not a leap year
//     }
// }

// // Example usage:
// const year = 2024; // Replace with the year you want to check
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

// ------------------------------------------------------
// function isAlphabet(character) {
//     // Check if the character is between 'a' and 'z' or 'A' and 'Z'
//     if (
//         (character >= 'a' && character <= 'z') || 
//         (character >= 'A' && character <= 'Z')
//     ) {
//         return true; // The character is an alphabet
//     } else {
//         return false; // The character is not an alphabet
//     }
// }

// // Example usage:
// const char = 'G'; // Replace with the character you want to check
// if (isAlphabet(char)) {
//     console.log(`'${char}' is an alphabet.`);
// } else {
//     console.log(`'${char}' is not an alphabet.`);
// }

// // --------------------------------------------------------
// function checkVowelOrConsonant(char) {
//     // Convert the character to lowercase for case-insensitive comparison
//     const lowerChar = char.toLowerCase();

//     // Check if the character is a vowel
//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//         return `${char} is a vowel.`;
//     } 
//     // Check if the character is a valid alphabet (consonant)
//     else if (lowerChar >= 'a' && lowerChar <= 'z') {
//         return `${char} is a consonant.`;
//     } 
//     // Not a valid alphabet
//     else {
//         return `${char} is not a valid alphabet.`;
//     }
// }

// // Example usage:
// const input = prompt("Enter an alphabet:"); // Take user input
// if (input && input.length === 1) {
//     console.log(checkVowelOrConsonant(input));
// } else {
//     console.log("Please enter a single character.");
// }

// ---------------------------------------------------
// function checkCharacterType(char) {
//     if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//         return `${char} is an alphabet.`;
//     } else if (char >= '0' && char <= '9') {
//         return `${char} is a digit.`;
//     } else {
//         return `${char} is a special character.`;
//     }
// }

// // Example usage:
// const input = prompt("Enter a character:"); // Take user input
// if (input && input.length === 1) {
//     console.log(checkCharacterType(input));
// } else {
//     console.log("Please enter a single character.");
// }

// ---------------------------------------------------
// function checkCase(character) {
//     if (character >= 'A' && character <= 'Z') {
//         return `${character} is an uppercase alphabet.`;
//     } else if (character >= 'a' && character <= 'z') {
//         return `${character} is a lowercase alphabet.`;
//     } else {
//         return `${character} is not an alphabet.`;
//     }
// }

// // Example usage:
// const input = prompt("Enter a character:"); // Take user input
// if (input && input.length === 1) {
//     console.log(checkCase(input));
// } else {
//     console.log("Please enter a single character.");
// }

// ----------------------------------------------------
// function getWeekDay(weekNumber) {
//     switch (weekNumber) {
//         case 1:
//             return "Monday";
//         case 2:
//             return "Tuesday";
//         case 3:
//             return "Wednesday";
//         case 4:
//             return "Thursday";
//         case 5:
//             return "Friday";
//         case 6:
//             return "Saturday";
//         case 7:
//             return "Sunday";
//         default:
//             return "Invalid week number. Please enter a number between 1 and 7.";
//     }
// }

// // Example usage:
// const input = parseInt(prompt("Enter a week number (1-7):"), 10); // Take user input
// console.log(getWeekDay(input));

// --------------------------------------------
// function getDaysInMonth(monthNumber, year) {
//     switch (monthNumber) {
//         case 1: // January
//         case 3: // March
//         case 5: // May
//         case 7: // July
//         case 8: // August
//         case 10: // October
//         case 12: // December
//             return 31;
//         case 4: // April
//         case 6: // June
//         case 9: // September
//         case 11: // November
//             return 30;
//         case 2: // February
//             // Check if it's a leap year
//             if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//                 return 29; // Leap year
//             } else {
//                 return 28; // Non-leap year
//             }
//         default:
//             return "Invalid month number. Please enter a number between 1 and 12.";
//     }
// }

// // Example usage:
// const monthNumber = parseInt(prompt("Enter a month number (1-12):"), 10);
// const year = parseInt(prompt("Enter a year:"), 10);

// const result = getDaysInMonth(monthNumber, year);
// console.log(result);

// // -------------------------------------------
// function countNotes(amount) {
//     const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
//     const noteCount = {};

//     for (let denomination of denominations) {
//         if (amount >= denomination) {
//             noteCount[denomination] = Math.floor(amount / denomination);
//             amount %= denomination;
//         }
//     }

//     return noteCount;
// }

// // Example usage:
// const input = parseInt(prompt("Enter the amount:"), 10);

// if (isNaN(input) || input <= 0) {
//     console.log("Please enter a valid positive amount.");
// } else {
//     const result = countNotes(input);
//     console.log("Currency notes distribution:");
//     for (let [denomination, count] of Object.entries(result)) {
//         console.log(`${denomination}: ${count}`);
//     }
// }

// ---------------------------------------------------
// function isValidTriangle(angle1, angle2, angle3) {
//     // Check if the sum of angles is 180 and all angles are positive
//     if (angle1 > 0 && angle2 > 0 && angle3 > 0 && (angle1 + angle2 + angle3 === 180)) {
//         return "The triangle is valid.";
//     } else {
//         return "The triangle is not valid.";
//     }
// }

// // Example usage:
// const angle1 = parseFloat(prompt("Enter the first angle of the triangle:"));
// const angle2 = parseFloat(prompt("Enter the second angle of the triangle:"));
// const angle3 = parseFloat(prompt("Enter the third angle of the triangle:"));

// console.log(isValidTriangle(angle1, angle2, angle3));

// ----------------------------------------------------
// function isValidTriangle(side1, side2, side3) {
//     // Check if the sum of any two sides is greater than the third side
//     if (
//         side1 + side2 > side3 &&
//         side1 + side3 > side2 &&
//         side2 + side3 > side1
//     ) {
//         return "The triangle is valid.";
//     } else {
//         return "The triangle is not valid.";
//     }
// }

// // Example usage:
// const side1 = parseFloat(prompt("Enter the first side of the triangle:"));
// const side2 = parseFloat(prompt("Enter the second side of the triangle:"));
// const side3 = parseFloat(prompt("Enter the third side of the triangle:"));

// console.log(isValidTriangle(side1, side2, side3));

// ----------------------------------------------------------
// function checkTriangleType(side1, side2, side3) {
//     // Check if the sides form a valid triangle
//     if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
//         // Check for triangle type
//         if (side1 === side2 && side2 === side3) {
//             return "The triangle is equilateral.";
//         } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//             return "The triangle is isosceles.";
//         } else {
//             return "The triangle is scalene.";
//         }
//     } else {
//         return "The sides do not form a valid triangle.";
//     }
// }

// // Example usage:
// const side1 = parseFloat(prompt("Enter the first side of the triangle:"));
// const side2 = parseFloat(prompt("Enter the second side of the triangle:"));
// const side3 = parseFloat(prompt("Enter the third side of the triangle:"));

// console.log(checkTriangleType(side1, side2, side3));

// ---------------------------------------------------
// function findRoots(a, b, c) {
//     // Calculate the discriminant
//     let discriminant = b * b - 4 * a * c;

//     // If discriminant is greater than or equal to 0, roots are real
//     if (discriminant > 0) {
//         // Two distinct real roots
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return `The roots are real and distinct: root1 = ${root1}, root2 = ${root2}`;
//     } else if (discriminant === 0) {
//         // One real root (repeated root)
//         let root = -b / (2 * a);
//         return `There is one real root: root = ${root}`;
//     } else {
//         // Complex roots
//         let realPart = -b / (2 * a);
//         let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
//         return `The roots are complex: root1 = ${realPart} + ${imaginaryPart}i, root2 = ${realPart} - ${imaginaryPart}i`;
//     }
// }

// // Example usage:
// const a = parseFloat(prompt("Enter the coefficient a:"));
// const b = parseFloat(prompt("Enter the coefficient b:"));
// const c = parseFloat(prompt("Enter the coefficient c:"));

// console.log(findRoots(a, b, c));

// ------------------------------------------------------
// function calculateProfitOrLoss(costPrice, sellingPrice) {
//     if (sellingPrice > costPrice) {
//         let profit = sellingPrice - costPrice;
//         return `You made a profit of ${profit}.`;
//     } else if (sellingPrice < costPrice) {
//         let loss = costPrice - sellingPrice;
//         return `You incurred a loss of ${loss}.`;
//     } else {
//         return "There is no profit or loss. The selling price is equal to the cost price.";
//     }
// }

// // Example usage:
// const costPrice = parseFloat(prompt("Enter the cost price of the item:"));
// const sellingPrice = parseFloat(prompt("Enter the selling price of the item:"));

// console.log(calculateProfitOrLoss(costPrice, sellingPrice));

// ---------------------------------------------------------
// function calculateGrade(marks) {
//     // Calculate the total and percentage
//     const totalMarks = marks.PH + marks.CHE + marks.BIO + marks.MATH + marks.COMP;
//     const percentage = (totalMarks / 500) * 100;

//     // Determine the grade based on percentage
//     let grade;
//     if (percentage >= 90) {
//         grade = 'A';
//     } else if (percentage >= 80) {
//         grade = 'B';
//     } else if (percentage >= 70) {
//         grade = 'C';
//     } else if (percentage >= 60) {
//         grade = 'D';
//     } else if (percentage >= 40) {
//         grade = 'E';
//     } else {
//         grade = 'F';
//     }

//     return `Total Marks: ${totalMarks}/500\nPercentage: ${percentage}%\nGrade: ${grade}`;
// }

// // Example usage:
// const marks = {
//     PH: parseFloat(prompt("Enter marks for Physics:")),
//     CHE: parseFloat(prompt("Enter marks for Chemistry:")),
//     BIO: parseFloat(prompt("Enter marks for Biology:")),
//     MATH: parseFloat(prompt("Enter marks for Mathematics:")),
//     COMP: parseFloat(prompt("Enter marks for Computer:"))
// };

// console.log(calculateGrade(marks));

// --------------------------------------------
// function calculateGrossSalary(basicSalary) {
//     let HRA, DA;

//     // Determine HRA and DA based on basic salary
//     if (basicSalary <= 10000) {
//         HRA = basicSalary * 0.20;  // HRA = 20% of basic salary
//         DA = basicSalary * 0.80;   // DA = 80% of basic salary
//     } else if (basicSalary <= 20000) {
//         HRA = basicSalary * 0.25;  // HRA = 25% of basic salary
//         DA = basicSalary * 0.90;   // DA = 90% of basic salary
//     } else {
//         HRA = basicSalary * 0.30;  // HRA = 30% of basic salary
//         DA = basicSalary * 0.95;   // DA = 95% of basic salary
//     }

//     // Calculate Gross Salary
//     const grossSalary = basicSalary + HRA + DA;
//     return `Basic Salary: ${basicSalary}\nHRA: ${HRA}\nDA: ${DA}\nGross Salary: ${grossSalary}`;
// }

// // Example usage:
// const basicSalary = parseFloat(prompt("Enter the basic salary of the employee:"));

// console.log(calculateGrossSalary(basicSalary));

// -------------------------------------------------
// function calculateElectricityBill(units) {
//     let bill = 0;

//     // Calculate bill based on unit usage
//     if (units <= 50) {
//         bill = units * 0.50;  // Rs. 0.50 per unit for first 50 units
//     } else if (units <= 150) {
//         bill = 50 * 0.50 + (units - 50) * 0.75;  // Rs. 0.75 per unit for next 100 units
//     } else if (units <= 250) {
//         bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;  // Rs. 1.20 per unit for next 100 units
//     } else {
//         bill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;  // Rs. 1.50 per unit for units above 250
//     }

//     // Add 20% surcharge
//     let surcharge = bill * 0.20;
//     let totalBill = bill + surcharge;

//     return `Total Bill (including surcharge): Rs. ${totalBill.toFixed(2)}`;
// }

// // Example usage:
// const units = parseFloat(prompt("Enter the number of electricity units consumed:"));

// console.log(calculateElectricityBill(units));
