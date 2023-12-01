// EXAM Scale riddle. With 8 balls, ex.  [1,2,1,1,1,1,1,1] get position of the “heavy” ball. Indexes are to be chosen at random. Use weights comparison only two times.


// Create a ballsArray and get heavy ball index

const ballsArray = [1, 1, 1, 1, 1, 1, 1, 1];

function getBallsArray () {
    let randomIndex = Math.round(Math.random() * (ballsArray.length -1));
    ballsArray[randomIndex] = 2
    return ballsArray
}

console.log(getBallsArray())

// Find index of heavy ball

/*
To find the heavy ball, I chose a method:
-I have grouped the balls into 3 groups : 1st(3 balls), 2nd(3 balls) and 3rd(2 balls),
-First weights comparison it's comparison group 1st and 2nd:
    a) If weight its the same it means heavy ball is in the last group and the secound comparison it's comparison two last balls
    b) If not the secound comparison its comparison the first and last ball from group if it's the same ball without comparison is heavy ball
.*/


function findHeavyBall () {

    const firstGroup = ballsArray.slice(0, 3);
    const secoundGroup = ballsArray.slice(3, 6);
    const thirdGroup = ballsArray.slice(6, 8);
    
    const firstGroupWeight = (firstGroup.reduce((weight, ball) => {
        weight += ball;
        return weight;
    }, 0));

    const secoundGroupWeight = (secoundGroup.reduce((weight, ball) => {
        weight += ball;
        return weight;
    }, 0));


    if(firstGroupWeight > secoundGroupWeight){
        if(ballsArray[0] === ballsArray[2]){
            return "Ciężka piłika jest na indexie 1";
        } else{
            return ballsArray[0] > ballsArray[2] ? "Ciężka piłika jest na indexie 0" : "Ciężka piłika jest na indexie 2";
        };
    } else if (firstGroupWeight < secoundGroupWeight){
        if(ballsArray[3] === ballsArray[5]){
            return "Ciężka piłika jest na indexie 4";
        } else{
            return ballsArray[3] > ballsArray[5] ? "Ciężka piłika jest na indexie 3" : "Ciężka piłika jest na indexie 5";
        };
    } else {
        return ballsArray[6] > ballsArray[7] ? "Ciężka piłika jest na indexie 6" : "Ciężka piłika jest na indexie 7";
    };

    // return ballsArray.indexOf(2)
} 

//I know I could use the indexOf method, but I preferred to make a challenge of it 👼

console.log(findHeavyBall());

