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

console.log(sumStarships(starships).length);


// 2. Find the fastest starship you can afford having 8500000 credits

function findStarship(data, maxPrice) {
    let theFasterStarshipInPrice = [];
    let highestSpeed = 0;

    data
        .filter(starship => parseInt(starship.cost_in_credits) <= maxPrice)
        .forEach(starship => {
            const currentShipSpeed = parseInt(starship.max_atmosphering_speed);

            if (currentShipSpeed > highestSpeed) {
                highestSpeed = currentShipSpeed;
                theFasterStarshipInPrice = [starship.name];
            } else if (currentShipSpeed === highestSpeed) {
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



function getSortedNames() {
    const indexs = planets
        .sort((a, b) => a.diameter - b.diameter)
        .map(planet => planet.residents.map(person => parseInt(person.slice(29, -1)) - 1))
        .flat();

    const names = indexs
        .filter(index => people[index])
        .filter(index => people[index].films.some(film => film.includes("1") || film.includes("5") ))
        .map(index => people[index].name);

    return names
}

console.log(getSortedNames());