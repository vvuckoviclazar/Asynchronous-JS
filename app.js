const pokemonList = document.querySelector(".pokemon-list");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-pokemon");

let allPokemons = [];

const fetchPokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const data = await res.json();
    console.log(data.results);
    for (const pokemon of data.results) {
      const detailsRes = await fetch(pokemon.url);
      const detailsData = await detailsRes.json();
      console.log(detailsData);
      allPokemons.push({
        id: detailsData.id,
        name: detailsData.name,
        image: detailsData.sprites.front_default,
      });
    }

    console.log(allPokemons);

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
    li.id = pokemon.id;
    li.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-picture"/>
           <h3>${pokemon.name}</h3>
    `;

    li.addEventListener("click", () => handlePokemonClick(pokemon.id));

    pokemonList.appendChild(li);
  });
};

fetchPokemons();

const handlePokemonClick = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    const name = data.name;
    const height = data.height;
    const weight = data.weight;
    const types = data.types.map((t) => t.type.name).join(", ");
    const abilities = data.abilities.map((a) => a.ability.name).join(", ");

    showPokemonModal({ name, height, weight, types, abilities });
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
  }
};

const showPokemonModal = ({ name, height, weight, types, abilities }) => {
  document.getElementById("modalName").textContent = name;
  document.getElementById("modalHeight").textContent = height;
  document.getElementById("modalWeight").textContent = weight;
  document.getElementById("modalTypes").textContent = types;
  document.getElementById("modalAbilities").textContent = abilities;

  const modal = document.getElementById("pokemonModal");
  modal.classList.remove("hidden");

  document.getElementById("closeModal").onclick = () => {
    modal.classList.add("hidden");
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  };
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm === "") {
    renderPokemons();
    return;
  }

  const filtered = allPokemons.filter(
    (pokemon) => pokemon.name.toLowerCase() === searchTerm
  );

  if (filtered.length > 0) {
    renderFilteredPokemons(filtered);
  } else {
    pokemonList.innerHTML = `<li>No Pokémon found with the name "${searchTerm}"</li>`;
  }
});

const renderFilteredPokemons = (filteredPokemons) => {
  pokemonList.innerHTML = "";

  filteredPokemons.forEach((pokemon) => {
    const li = document.createElement("li");
    li.id = pokemon.id;
    li.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-picture"/>
      <h3>${pokemon.name}</h3>
    `;

    li.addEventListener("click", () => handlePokemonClick(pokemon.id));

    pokemonList.appendChild(li);
  });
};

// kad se klikne na pokemona
// procitaj id sa njega
// napravi zahtev ka bazi za pokemona sa tim id
// izvuci neke podatke po zelji
// prikazi u modalu te podatke

// dodaj search input
// na submit pokusaj da dohvatis podatke za pokemona sa tim imenom

// pokusaj da napravis dohvacanje pokemona po tipu (vatra, voda, vetar...)
// pristup ce biti isti kao za pocetnu listu (get.pokemons) https://pokeapi.co/api/v2/type/water
