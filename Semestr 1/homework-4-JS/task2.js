// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: 
// https://rickandmortyapi.com/documentation/#rest

const url = "https://rickandmortyapi.com/api/episode";

fetch(url)
  .then((res) => res.json())
  .then((data) => showCharacters(data, 7));

function showCharacters(data, episodeNumber) {
    const episode = data.results.find(e => e.id == episodeNumber);

    const characterPromises = episode.characters.map((character) =>
        fetch(character).then((res) => res.json())
    );

    Promise.all(characterPromises)
        .then((characters) => {
        const characterNames = characters.map((character) => character.name);
        console.log(characterNames);
        });
};