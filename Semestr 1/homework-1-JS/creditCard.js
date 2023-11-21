let currentCardNumber = 340123456789022;
currentCardNumber = String(currentCardNumber);

let currentCardLength = currentCardNumber.length;

let firstCardNumber = parseInt(currentCardNumber[0]);
let secondCardNumber = parseInt(currentCardNumber[1]);


const errorMessage = () =>{
    console.log("Invalid card");
};


const successMessage = (typeOfCard) => {
    console.log("Valid card - " + typeOfCard);
};


let isCadValid = false;


const visaCheck = (cardLength, firstCardNumber) => {
  if (cardLength === 13 || cardLength === 16  && firstCardNumber === 4){
    isCadValid = true;
    typeOfCard = "Visa";
  };
};

const masterCardCheck = (cardLength, firstCardNumber, secondCardNumber) => {
  if (cardLength === 16 && firstCardNumber === 5 && (secondCardNumber <= 5 && secondCardNumber !== 0 )){
    isCadValid = true;
    typeOfCard = "MasterCard";
  }
};

const americanExpressCheck = (cardLength, firstCardNumber, secondCardNumber) => {
  if(cardLength === 15 && firstCardNumber === 3 && secondCardNumber === 4){
    isCadValid = true;
    typeOfCard = "AmericanExpress";
  };
};

const checkCard = (cardLength, firstCardNumber, secondCardNumber) => {
  visaCheck(cardLength,firstCardNumber);
  masterCardCheck(cardLength,firstCardNumber,secondCardNumber);
  americanExpressCheck(cardLength,firstCardNumber,secondCardNumber);

  isCadValid ? successMessage(typeOfCard) : errorMessage();
 }

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

sum % 10 === 0 ? checkCard(currentCardLength, firstCardNumber, secondCardNumber) :  errorMessage();