const searchForm = document.getElementById('poke-search');
const input = document.getElementById('input');
const pokeCard = document.getElementById('poke-card');
const btn = document.getElementById('btn');



const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

const getData = async (url) => {
    const response = await fetch (url);
    return await response.json();
}


// funcion de busqueda 

const searchPokemon = async (e) => {
    e.preventDefault();

    const pokemonId = input.value;

    if (pokemonId) {
        const pokemonData = await getData (`${apiUrl}/${pokemonId}`);
        console.log(pokemonData);
        renderPokemonCard (pokemonData);
    }
}  

// renderizar card 

const renderPokemonCard = (pokemonData) => {
    const { name, id, height, weight, types, sprites} = pokemonData;

    const cardHTML = `
    <div class="pokemon-card">
        <h2>${name}</h2>
        <img src="${sprites.other.home.front_default}"alt="${name}">
        <p>ID: ${id}</p>
        <p>Altura: ${height}</p>
        <p>Peso: ${weight}</p>
        <p>Tipo(s): ${types.map(type => type.type.name).join(', ')}</p>
    </div>
`;

pokeCard.innerHTML = cardHTML;

}





const init = () => {
    searchForm.addEventListener('submit', searchPokemon);
}

init ();