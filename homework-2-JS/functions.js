// 1.	Create a function that returns number of days till Friday
function showDaysTillFriday (){
  let today = new Date();
  let dayOfWeek = today.getDay();
  let daysUntilFriday = (5 - dayOfWeek + 7) % 7; 
  return daysUntilFriday;
};

console.log(showDaysTillFriday());


  
// 2.	Create two functions:
// a.	First that takes in a string and shift number, and returns encrypted string using Caesar Cipher
// b.	Second that takes in encrypted string and shift number, and returns decrypted message using Caesar Cipher

let text = "This is a string to cipher.";

let alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
const alphabetLength = alphabet.length;

function caesarCipher(text, shiftNum, mode) {
  let resultText = "";

  for (let char of text) {
    if (char.match(/[a-z]/i)) {
      let index = alphabet.indexOf(char.toLowerCase());
      let newIndex;

      if (mode === "encrypt") {
        newIndex = (index + shiftNum + alphabetLength) % alphabetLength;
      } else if (mode === "decrypt") {
        newIndex = (index - shiftNum + alphabetLength) % alphabetLength;
      }

      if (char === char.toUpperCase()) {
        resultText += alphabet[newIndex].toUpperCase();
      } else {
        resultText += alphabet[newIndex];
      }
    } else {
      resultText += char;
    }
  }

  return resultText;
}


console.log(caesarCipher(text, 20, "encrypt"));

  
// 3.	Create a function that takes in a n (number) as a parameter and returns first n Fibonacci numbers - use recursion

function getFibonacci (n){
  if (n === 0 || n === 1){
    return n;
  } else {
    return getFibonacci(n - 1) + getFibonacci(n - 2);
  };
};

function fibonacciSequence(n) {
  const sequence = [];
  
  for (let i = 0; i <= n; i++) {
    sequence.push(getFibonacci(i));
  }

  return sequence;
}

console.log(fibonacciSequence(10));

// Fibonacci in otherway

function fibonacci (num) {
  let fibonacciNumbers = [];
  
  for(let i = 0; i <= num; i++){
    i <= 1  &&   i >= 0 ? fibonacciNumbers.push(i) : fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);
  };

  return fibonacciNumbers;
};

console.log(fibonacci(10));


//  4.	Create a function that:
//  a.	Checks if a given number is a prime number

function checkNumber(num) {
  if (num < 2) {
    return `Liczba ${num} nie jest liczbą pierwszą`;
  }

  if (num === 2) {
    return `Liczba ${num} jest liczbą pierwszą!`;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `Liczba ${num} nie jest liczbą pierwszą`;
    }
  }
  return `Liczba ${num} jest liczbą pierwszą!`;
}

console.log(checkNumber(1));

// // b.	Takes in n (numbers) as a parameter and returns first n prime numbers


function getPrimeNumbers(num) {
  let primeNumbers = [];
  let numToCheck = 2;

  while (primeNumbers.length < num) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(numToCheck); i++) {
      if (numToCheck % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumbers.push(numToCheck);
    }

    numToCheck++;
  }

  return primeNumbers;
}

console.log(getPrimeNumbers(5));