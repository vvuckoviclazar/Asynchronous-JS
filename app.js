const pokemonList = document.querySelector(".pokemon-list");

const allPokemons = [];

const fetchPokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const data = await res.json();

    for (const pokemon of data.results) {
      const detailsRes = await fetch(pokemon.url);
      const detailsData = await detailsRes.json();

      allPokemons.push({
        name: detailsData.name,
        image: detailsData.sprites.front_default,
      });
    }

    renderPokemons();
  } catch (error) {
    console.error("Failed to fetch Pokémon data:", error);
    pokemonList.innerHTML = `<li>Error loading Pokémon list.</li>`;
  }
};

const renderPokemons = () => {
  pokemonList.innerHTML = "";

  allPokemons.forEach((pokemon) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-picture"/>
           <h3>${pokemon.name}</h3>
    `;
    pokemonList.appendChild(li);
  });
};

fetchPokemons();

// 1.
// kad se upali aplikacija da se izlistaju pokemoni
// neka se izlista 50 pokemona
// klik na svakog pokemona treba da napravi zahtev za tog pojedinacnog pokemona
// kad se klikne na pokemona prikazu se neke info
// a otvara se kao modal
// takodje treba da postoji select input koji ce da ima 4 vrednosti:
// fire, water, earth, wind, electric
// kad se promeni select input npr. fire treba da se dohvate samo vatreni pokemni
// takodje prikazi u listi

// 2.
// stavi jedan tekst input i na submit dohvati samo tog pokemona
// npr: ukucam pikachu i dohvatim pikachua
