// Prompt user for input
// let userInput = prompt("Enter 1 to turn the light on, or 0 to turn it off:");

// // Check the input
// if (userInput === '1') {
//     console.log("The light is ON");
// } else if (userInput === '0') {
//     console.log("The light is OFF");
// } else {
//     console.log("Invalid Input");
// }
// ----------------------2---------------------------
// Prompt user for input
// let trafficlightcolor = prompt("Enter the traffic light color(red,yellow,green):");

// // check the input
// if(trafficlightcolor.toLowerCase()==='red'){
//     console.log("stop");
// }
// else if(trafficlightcolor.toLowerCase()==='yellow'){
//     console.log("slow down");
// }
// else if(trafficlightcolor.toLowerCase()==='green'){
//     console.log("go");
// }
// else{
//     console.log("invalid color");

// }
// -----------------------3------------------------------
// Prompt user for input temperature in celsius
// let temperature = parseFloat (prompt("enter the water temperature in celsius:"));

// // check the input
// if (temperature <=0 ) {
//     console.log(Freezing);

// }
// else if (temperature >0 && temperature <=15){
//     console.log(Cold);
// }
// else if (temperature >15 && temperature <=30){
//     console.log(Warm);
// }
// else (temperature>30)
// {
//     console.log(Hot);
// }
// ---------------------4--------------------------------
// Prompt user in input two player

// let player1 = prompt(
//   "Player 1: Select your choice : \n1- Rock \n2- Paper \n3- Scissor"
// ).toLowerCase();
// let player2 = prompt(
//   "Player 2: Select your choice : \n1- Rock \n2- Paper \n3- Scissor"
// ).toLowerCase();

// let array = ["rock", "paper", "scissor"];

// if (!array.includes(player1) || !array.includes(player2)) {
//   alert("invalid input please enter your choice");
// } else {
//   if (player1 === player2) {
//     alert("its a tie try again");
//   } else if (
//     (player1 === "rock" && player2 === "scissor") ||
//     (player1 === "paper" && player2 === "rock") ||
//     (player1 === "scissor" && player2 === "paper")
//   ) {
//     alert("player 1 win the game");
//   } else {
//     alert("player 2 win the game");
//   }
// }

// -----------------------------------5-------------------------
// Prompt user input 
// let door = prompt ("Verify that is the door open.\n give the answer in yes or no ").toUpperCase()
// let motion = prompt ("Verify that is the motion detected.\n give the answer in yes or no ").toUpperCase() 

// if(door === 'YES' || motion === 'YES'){
//     alert("Alarm Triggered")
// }
// else if(door === 'NO' && motion === 'NO'){
//     alert("All Safe")
// }
// else{
//     alert("invalid input")
// }

// -------------------------------6---------------------------------
// Prompt user input
// let userInput = prompt ("enter 1 to turn Celsius to Fahrenheit,or 2 to turn it Fahrenheit to Celsius");
// let temp = prompt("Enter the Temperature");
// if (userInput == 1) {
//     F=((temp*(9/5))+32)
//     alert(`the result is:${F}F `);   
// }
// else if (userInput == 2) {
//     C=((temp-32)*(5/9))
//     alert(`the result is: ${C}C`);   
// }
// else{
//     alert("enter valid input");
// }

// -----------------------------7-----------------------------------
// Prompt user input
// let password  = prompt("Enter the password");
// let lengths = password.length;

// if(lengths >= 8 ){
    //     alert("Password is strong")
// }
// else if(lengths >=5 && lengths <=7){
    //     alert("Password is moderate")
    // }
    // else if(lengths < 5){
        //     alert("Weak Password")
        // }
        // else{
            //     alert("enter valid input")
            // }
            
            
            // -----------------------
            
// Ask the user to input 1 for Heads or 0 for Tails
// let userInput = prompt("Enter 1 for Heads or 0 for Tails:");

// // Validate the input
// if (userInput !== "0" && userInput !== "1") {
//     alert("Invalid input! Please enter 1 for Heads or 0 for Tails.");
// } else {
//     // Convert input to a number
//     let userChoice = parseInt(userInput);

//     // Simulate a coin toss (0 or 1)
//     let coinToss = Math.floor(Math.random() * 2);

//     // Compare the result
//     if (userChoice === coinToss) {
//         alert("You Win!");
//     } else {
//         alert("You Lose!");
//     }

// }

// -----------------------------

// let input = prompt("chose Weather \n1-Sunny \n2-Rainy\n3-Cold").toLowerCase();

// if(input == "sunny"){
//     alert("Wear sunglasses")
// }
// else if(input === "rainy"){
//     alert("take an umbrella")
// }
// else if(input === "cold"){
//     alert("wear a jacket")
// }
// else{
//     alert("please chose a correct option")
// }

// --------------------------------


// // Generate two random numbers between 1 and 10
// let num1 = Math.floor(Math.random() * 10) + 1;
// let num2 = Math.floor(Math.random() * 10) + 1;

// // Generate a random operator
// let operators = ['+', '-', '*', '/'];
// let index = Math.floor(Math.random() * operators.length);
// let operator = operators[index];

// // Calculate the correct answer
// let correctAnswer;
// switch (operator) {
//     case '+':
//         correctAnswer = num1 + num2;
//         break;
//     case '-':
//         correctAnswer = num1 - num2;
//         break;
//     case '*':
//         correctAnswer = num1 * num2;
//         break;
//     case '/':
//         correctAnswer = parseFloat((num1 / num2).toFixed(2)); // Limit to 2 decimal places
//         break;
// }

// // Ask the user to calculate the result
// let userAnswer = parseFloat(prompt(`What is ${num1} ${operator} ${num2}?`));

// // Compare the user's answer with the correct answer
// if (userAnswer === correctAnswer) {
//     alert("Correct!");
// } else {
//     alert(`Try Again! The correct answer was ${correctAnswer}.`);
// }






// --------------------------------------


// // Prompt the user to enter their age
// let age = parseInt(prompt("Enter your age:"));

// // Check if the age is valid
// if (isNaN(age) || age < 0) {
//     alert("Please enter a valid age.");
// } else {
//     // Check voting eligibility
//     if (age >= 18) {
//         alert("You are eligible to vote.");
//     } else {
//         alert("You are not eligible to vote.");
//     }
// }

// ---------------------------------------

// // Prompt the user to enter two numbers
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));

// // Check if the inputs are valid numbers
// if (isNaN(num1) || isNaN(num2)) {
//     alert("Please enter valid numbers.");
// } else {
//     // Compare the two numbers
//     if (num1 > num2) {
//         alert(`The larger number is: ${num1}`);
//     } else if (num2 > num1) {
//         alert(`The larger number is: ${num2}`);
//     } else {
//         alert("Both numbers are equal.");
//     }
// }
