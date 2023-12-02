// EXAM Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck at random. Based on cards on our hand the program should tell us what is the best poker set. Reference: https://pl.wikipedia.org/wiki/Poker#Starsze%C5%84stwo_uk%C5%82ad%C3%B3w_kart

const cards = require('./cards.json');


const pokerSet = [];

function getPokerSet (){

    while(pokerSet.length != 5){
        let randomIndex = Math.round(Math.random() * 51);

        !pokerSet.includes(cards[randomIndex]) ? pokerSet.push(cards[randomIndex]) : null;
    }
    
    return pokerSet.sort((a,b) => a.value - b.value);
}

getPokerSet()
console.log(pokerSet);

// CHECK 


function checkPokerSet(){
    if(royalFlush()){
        return "Royal flush";
    } else if (straightFlush()){
        return "Straight flush";
    } else if (quads()) {
        return "Quads";
    } else if (fullHouse()) {
        return "Full house";
    } else if (flush()){
        return "Flush";
    } else if(straight()){
        return"Straight";
    }else if(threeOfKind()){
        return "Three of kind";
    } else if(twoPair()){
        return "Two pair"
    } else if(onePair()) {
        return "One pair"
    }else {
        return `"Najwyższa karta: ${pokerSet[pokerSet.length - 1].sign + pokerSet[pokerSet.length - 1].color}`
    };
};

/// CHECK FUNCTIONS

const currentCardColor = pokerSet[0].color;

function royalFlush() {
    let royalFlushSet = ["10", "J", "D", "K", "A"];

    for (const card of pokerSet) {
        if (royalFlushSet.includes(card.sign) && card.color === currentCardColor) {
            royalFlushSet = royalFlushSet.filter(currentCard => currentCard !== card.sign);
        } else {
            return false;
        };
    };

    return true;
}


function straightFlush () {
    
    const pokerSetCopy = JSON.parse(JSON.stringify(pokerSet));
    const firstCard = pokerSetCopy[0];
    const lastCard = pokerSetCopy[pokerSetCopy.length - 1];

    for( let i = 0; i < 4 ; i ++){

        if (firstCard.value === 2 && lastCard.value === 14) {
            lastCard.value = 1;
            pokerSetCopy.unshift(lastCard);
            pokerSetCopy.splice(5);
        };
        
        if(pokerSetCopy[i].value != pokerSetCopy[i + 1].value - 1 || pokerSetCopy[i].color != currentCardColor){
            return false;
        };
    };

    return true;
};


function quads() {
    for (const e of pokerSet) {
        let currentCardValue = e.value;

        const cardsCounter = pokerSet.reduce((counter, card) => {
            if (card.value === currentCardValue) {
                counter += 1;
            };

            return counter;
        }, 0);

        if (cardsCounter === 4) {
            return true;
        };
    };

    return false;
};


function fullHouse () {
    let middleCard = pokerSet[2]

    if (middleCard.value === pokerSet[0].value && middleCard.value === pokerSet[1].value){
        if (pokerSet[3].value === pokerSet[4].value){
            return true;
        }else{
            return false ;
        };
    } else if (middleCard.value === pokerSet[3].value && middleCard.value === pokerSet[4].value){
        if (pokerSet[0].value === pokerSet[1].value){
            return true;
        }else{
            return false ;
        };
    };

};


function flush () {

    for (const card of pokerSet) {
        if (card.color != currentCardColor){
            return false;
        };
    };

    return true;
};


function straight () {
    const pokerSetCopy = JSON.parse(JSON.stringify(pokerSet));
    const firstCard = pokerSetCopy[0];
    const lastCard = pokerSetCopy[pokerSetCopy.length - 1];;

    for( let i = 0; i < 4 ; i ++){

        if (firstCard.value === 2 && lastCard.value === 14) {
            lastCard.value = 1;
            pokerSetCopy.unshift(lastCard);
            pokerSetCopy.splice(5);
        };
        
        if(pokerSetCopy[i].value != pokerSetCopy[i + 1].value - 1){
            return false;
        };
    };

    return true;
};


function threeOfKind () {

    for (const e of pokerSet) {
        let currentCardValue = e.value;

        const cardsCounter = pokerSet.reduce((counter, card) => {
            if (card.value === currentCardValue) {
                counter += 1;
            };

            return counter;
        }, 0);

        if (cardsCounter === 3) {
            return true;
        };
    };

    return false;

};


function twoPair () {
    let pokerSetCopy = JSON.parse(JSON.stringify(pokerSet));

    let pairCounter = 0;

    for (const e of pokerSetCopy) {
        let currentCardValue = e.value;

        const cardsCounter = pokerSetCopy.reduce((counter, card) => {
            if (card.value === currentCardValue) {
                counter += 1;
                pokerSetCopy = pokerSetCopy.filter(item => item.value != currentCardValue)
            };

            return counter;
        }, 0);

        if (cardsCounter === 2) {
            pairCounter += 1;
        };

        if(pairCounter == 2){
            return true;
        };

    };

    return false;

};


function onePair () {

    for (const e of pokerSet) {
        let currentCardValue = e.value;

        const cardsCounter = pokerSet.reduce((counter, card) => {
            if (card.value === currentCardValue) {
                counter += 1;
            };

            return counter;
        }, 0);

        if (cardsCounter === 2) {
            return true;
        };
    };

    return false;

};

console.log(checkPokerSet())

 