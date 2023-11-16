const array = [1,6,23,8,4,8,3,7];

// 1.	Create a function that takes in an array of numbers and returns sum of all elements

function sumAllnumbers (array){
    let sum = 0;
    for (const number of array) {
        sum += number;
    };
    return sum;
};

console.log(sumAllnumbers(array)); // 60

// 2.	Create a function that takes in an array of numbers and returns sum of first and last element

function summTwoNumbers (array) {
    let sum = array[0] + array[array.length -1];
    return sum;
};

console.log(summTwoNumbers(array)) //8

// 3.	Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)

function reveseArray (array) {
    let newArray = [];
        for(let i = array.length -1; i >= 0; i--) {
            newArray.push(array[i]);
        };
    return newArray;
};

console.log(reveseArray(array)) // [7,  3, 8, 4, 8, 23, 6, 1]

// 4.	Create a function that takes two parameters - array of numbers, and number of attempts. Choose random numbers from the array based on the number of attempts and return the lowest among them.

function findLowestRandomNumber(array, attemptsNumber) {
    let randomNumbersOfArray = [];
    let randomIndex = [];
    let lowestNumber = Infinity;


    if(attemptsNumber > array.length){
        attemptsNumber = array.length
    } 

    while (randomNumbersOfArray.length !== attemptsNumber) {
        let randomNumber = Math.floor(Math.random() * array.length);

        if (!randomIndex.includes(randomNumber)) {
            randomNumbersOfArray.push(array[randomNumber]);
            randomIndex.push(randomNumber);

            if (lowestNumber > array[randomNumber]) {
                lowestNumber = array[randomNumber];
            }
        }
    }
    
    return lowestNumber;
}
console.log(findLowestRandomNumber(array, 18));


// 5.	Create a function that takes in an array and returns it in random order

    function randomOrder (array) {
        
        let randomOrderArray = [];
        let arrayCopy = array.slice();

        while (arrayCopy.length !== 0){
            let randomIndex = Math.floor(Math.random() * arrayCopy.length);
            randomOrderArray.push(arrayCopy[randomIndex]);
            arrayCopy.splice(randomIndex, 1);
        };
        
        return randomOrderArray
    }

    console.log(randomOrder(array));

// 6.	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

const arraySecound = [1,6,23,8,4,98,3,7,3,98,4,98];

function addOddNumbers(array){

    let sum = 0;

    for (const number of array) {
        if (number % 2 !== 0){ 
            sum += number;
        };
    };
    return sum;
};

console.log(addOddNumbers(arraySecound)); // 37

// 7.	With  a given start value of 0. Iterate the array and add even items and subtract odd ones.     

let arrayThird = [1,6,23,8,4,98,3,7,3,98,4,98];

function addEvenSubOdd (array) {
    let sum = 0;
    
    for( let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            sum += array[i];
        } else {
            sum -= array[i];
        };
    };
    return sum;
};

console.log(addEvenSubOdd(arrayThird)); // 279