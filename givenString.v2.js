let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let newString = "";

for (let i = 0; i < string.length; i++) { // Poprawiłem warunek pętli, usuwając "-1"
    if (string[i] !== "." && string[i] !== ",") {
        newString += string[i];
    }
}

let aCharCounter = 0;

for (let i = 0; i < newString.length; i++) { // Poprawiłem warunek pętli, usuwając "-1"
    if (newString[i] === "A" || newString[i] === "a") {
        aCharCounter++;
    }
}

let wordCount = 0;
let longestWord = 0;
let longestWordsQuantity = 0;

while (newString.length !== 0) {
    let startWordIndex = 0;
    let endWordIndex = newString.indexOf(" ");

    if (endWordIndex === -1) { 
        endWordIndex = newString.length;
    }

    let word = newString.slice(startWordIndex, endWordIndex);
    newString = newString.slice(endWordIndex + 1);

    wordCount++;

    if (word.length > longestWord) {
        longestWord = word.length;
        longestWordsQuantity = 1; 
    } else if (word.length === longestWord) {
        longestWordsQuantity++;
    }
}

// a. Liczba słów w tekście
console.log("Liczba słów: " + wordCount); // 70

// b. Liczba liter "A" w tekście
console.log("Liczba liter 'A': " + aCharCounter); // 29

// c. Najdłuższe słowo w tekście
console.log("Najdłuższe słowo: " + longestWord); // 13

// d. Liczba słów o tej samej długości co najdłuższe
console.log("Liczba słów o tej samej długości co najdłuższe: " + longestWordsQuantity); // 1
