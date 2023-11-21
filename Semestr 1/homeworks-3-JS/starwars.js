const films = require("./sw-films.json");
const people = require("./sw-people.json");
const planets = require("./sw-planets.json");
const starships = require("./sw-starships.json");

// 1. Count sum of all starships cost from episodes 4-6

function sumStarships (data){
    return data.reduce((starshipsArray, starship) => {

        starship.films.forEach(film => {
            for (let i = 4; i <= 6; i ++){
                if(film.includes(i)){
                    starshipsArray.includes(starship.name) ? null : starshipsArray.push(starship.name);
                };
            };
        });

        return starshipsArray;
    }, []);
};

console.log(sumStarships(starships).length)/22;


// 2. Find the fastest starship you can afford having 8500000 credits

function findStarship(data, maxPrice) {
    let theFasterStarshipInPrice = [];
    let heightSpeed = 0;

    data
        .filter(starship => parseInt(starship.cost_in_credits) <= maxPrice)
        .forEach(starship => {
            const currentShipSpeed = parseInt(starship.max_atmosphering_speed);

            if (currentShipSpeed > heightSpeed) {
                heightSpeed = currentShipSpeed;
                theFasterStarshipInPrice = [starship.name];
            } else if (currentShipSpeed === heightSpeed) {
                theFasterStarshipInPrice.push(starship.name);
            }
        });

    return theFasterStarshipInPrice;
}

console.log(findStarship(starships, 8500000));


// 3. Find the planet’s name with the lowest difference between the rotation period and orbital period

function findPlanet (data) {
    let planetNameWithtTheLowestDiff;
    let currentLowestDiff = Infinity;
    
    data.filter(planet =>{if (planet.rotation_period != "unknown" || planet.orbital_period != "unknown"){
        return planet;
    }
}).map((planet =>{
        let currentPlanetDiff = parseInt(planet.orbital_period) - parseInt(planet.rotation_period);
        
   

        if (currentPlanetDiff < currentLowestDiff) {
            if(planet.name != "unknown"){
                planetNameWithtTheLowestDiff = planet.name;
                currentLowestDiff = currentPlanetDiff;
            };
           
        };
      
    }));
    return planetNameWithtTheLowestDiff;
};

console.log(findPlanet(planets)); // Megeeto


// 4. Map all starships with crew <= 4 that were created between 10 Dec 2014 and 15 Dec 2014

function findStarshipWith4Crew (data){

    const validDates = ["2014-12-10", "2014-12-11", "2014-12-12", "2014-12-13", "2014-12-14", "2014-12-15"];

    return data.reduce(((starshipsArray, starship ) => {

        if(parseInt(starship.crew) <= 4){

            for(i=0 ; i<validDates.length; i++){
                if(starship.created.includes(validDates[i])){
                    starshipsArray.push(starship.name)
                };
            };

        };

        return starshipsArray
    }), [])

};

console.log(findStarshipWith4Crew(starships)); // ['Millennium Falcon', 'Y-wing', 'X-wing', 'TIE Advanced x1', 'Slave 1']

// 5. Create an array of people’s names from episodes 1 and 5 sorted by the diameter of the origin planet low to high


function getNames(data) {

    let array = [];

    data.sort((a, b) => {
        const homeworldA = a.homeworld;
        const homeworldB = b.homeworld;

        if (homeworldA < homeworldB) {
            return -1;
        }
        if (homeworldA > homeworldB) {
            return 1;
        }
        return 0;
    });
    
    data.filter(people => {
        people.films.some(film => {
            if(film.includes("1") || film.includes("5")){
                return array.push(people);
            };
        });
    })
    return array.map(people => people.name)
}


console.log(getNames(people))




