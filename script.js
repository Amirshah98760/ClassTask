// First number 

// let userInput = +prompt("Enter a number:");
// let sum = 0;
// let number = userInput;
// if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid number.");
// } else {
   
//     let numString = number.toString();

//     for (let i = 0; i < numString.length; i++) {
//         sum += parseInt(numString[i]);
//     }
    
//     console.log("Sum of digits:", sum);
// }



// Second program 
// let firstNumber = +prompt("Enter the first number : ");
// let secondNumber = +prompt("Enter the second number : ");
 
//     let totalSum = 0;
    
   
//     if (firstNumber > secondNumber) {
//         let temp = firstNumber;
//         firstNumber = secondNumber;
//         secondNumber = temp;
//     }
    
//     for (let i = firstNumber; i <= secondNumber; i++) {
       
        
//         for ( let currentNumber = i; currentNumber > 0;) {
//             totalSum += currentNumber % 10; 
//             currentNumber = Math.floor(currentNumber / 10);
//         }
//     }
    
//     console.log("Sum of digits between", firstNumber, "and", secondNumber, "is:", totalSum);


// Third Program Average of two numbers 

// let firstNumber = +prompt("Enter the first value : ");

// let secondNumber = +prompt("Enter the second value: ");
//     let sum = firstNumber + secondNumber;
//     let average = sum / 2;
// console.log("The sum of first number and second number is " , sum);
//     console.log("Average of", firstNumber, "and", secondNumber, "is:", Math.floor(average));


// Fourth program 
// let str1 = prompt("Enter the first string:");
// let str2 = prompt("Enter the second string:");

// if (str1.length === str2.length) {
//     console.log("Yes it is equal");    
// }
// else{
//     console.log("No it is not equal");
// }

// Fifth Perform 
const inputString = prompt("Enter a string:");

if (inputString) {
    const characters = inputString.split('');
    const temp = characters[0];
    characters[0] = characters[characters.length - 1];
    characters[characters.length - 1] = temp;

    const swappedString = characters.join('');

   
    console.log(`Original string: ${inputString}`);
    console.log(`Swapped string: ${swappedString}`);
} else {
    console.log("Please enter a valid string.");
}