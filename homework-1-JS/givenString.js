let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


// a.count how many words it contains 

console.log(string.split(" ").length); // 69

string = string.replace(/[.,]/g,""); // String without punctuation


// b.count how many letter “A”  is in it

const capsString =  string.toLocaleUpperCase();

let counter = 0;

for (let char of capsString) {
    if (char === "A") {
        counter++
    }
};


console.log(counter) // 29


// c.display longest word

let longestWord = 0;

string.split(" ").forEach(e => {
    if (e.length > longestWord) {
        longestWord = e.length;
    }
});

console.log(longestWord) // 13


// d.display how many words of length same as the longest is in the string

let longestWordsQuantity = 0;

string.split(" ").forEach(e => {
    if(e.length === longestWord){
        longestWordsQuantity++;
    }
});

console.log(longestWordsQuantity) // 1