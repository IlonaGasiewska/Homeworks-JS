let currentCardNumber = 5167954040046803;
currentCardNumber = String(currentCardNumber);


let currentCardLength = currentCardNumber.length;


let firstCardNumber = parseInt(currentCardNumber[0]);
let secondCardNumber = parseInt(currentCardNumber[1]);


function errorMessage(){
    console.log("Invalid card");
};


function successMessage(typeOfCard){
    console.log("Valid card - " + typeOfCard);
};

const visaCheck = (cardLength, firstCardNumber) => {
    cardLength === 13 || cardLength === 16  && firstCardNumber === 4 ? console.log(successMessage("Visa")) : masterCardCheck(currentCardLength, firstCardNumber, secondCardNumber);
};

const masterCardCheck = (cardLength, firstCardNumber, secondCardNumber) => {
    cardLength === 16  && firstCardNumber === 5 && (secondCardNumber <= 5 && secondCardNumber !== 0 ) ? console.log(successMessage("MasterCard")) : console.log(errorMessage());
};

const americanExpressCheck = (cardLenght, firstCardNumber, secondCardNumber) => {
    cardLenght === 15 && firstCardNumber === 3 && secondCardNumber === 4 ? console.log(successMessage("AmericanExpress")) : console.log(errorMessage())
};


const checkCard = (cardLength, firstCardNumber, secondCardNumber) => {
    if (cardLength === 13 || cardLength === 16){
        visaCheck(currentCardLength, firstCardNumber);
    }
     else if (cardLength === 15) {
        americanExpressCheck(currentCardLength, firstCardNumber, secondCardNumber);
    } else {
        console.log(errorMessage())
    }
}



let isValid = false;

let sum = 0;
let isSecondDigit = false;

for (let i = currentCardLength -1; i >= 0; i--) {
  let digit = parseInt(currentCardNumber[i]);

  if (isSecondDigit) {
    digit *= 2;
    if (digit > 9) {
      digit -= 9;
    }
  }

  sum += digit;
  isSecondDigit = !isSecondDigit;
}



if (sum % 10 === 0) {

    isValid = true;
}

if (isValid){
    checkCard(currentCardLength, firstCardNumber, secondCardNumber);
} else {
    errorMessage();
}

console.log(sum)