// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: 
// https://rickandmortyapi.com/documentation/#rest

let url = "https://rickandmortyapi.com/api"

let characters

fetch(url)
.then(res => res.json())
.then(data =>  fetch(data.characters))
.then(res => res.json())
.then(data => showCharacters(data))


function showCharacters(characters){
    characters = characters.results

    charactersFrom7Episode = characters.filter(character => character.episode.includes('https://rickandmortyapi.com/api/episode/7')).map(character => character.name);
    
    console.log(charactersFrom7Episode)
}

