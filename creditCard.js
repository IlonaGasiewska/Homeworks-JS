let currentCardNumber = 5151236457891231;
currentCardNumber = String(currentCardNumber);


let currentCardLenght = currentCardNumber.length;


function errorMessage(){
    console.log("Invalid card")
};


function sukccessMessage(typeOfCard){
    console.log("Valid card - " + typeOfCard)
};



if ((currentCardLenght === 13 || currentCardLenght === 16) && parseInt(currentCardNumber[0])=== 4) {
    sukccessMessage("Visa");
} else if (currentCardLenght === 16 && (parseInt(currentCardNumber[0])=== 5 && parseInt(currentCardNumber[1]) <= 5)) {
    sukccessMessage("MasterCard");
} else if (currentCardLenght === 15 && (parseInt(currentCardNumber[0])=== 3 && (parseInt(currentCardNumber[1])=== 4 || parseInt(currentCardNumber[0])=== 7))){
    sukccessMessage("AmericanExpress");
} else {
    errorMessage();
}