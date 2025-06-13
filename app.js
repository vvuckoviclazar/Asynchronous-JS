const pokemonList = document.querySelector(".pokemon-list");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-pokemon");
const typeSelect = document.querySelector(".select-pokemons");

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
        types: detailsData.types.map((t) => t.type.name),
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

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

const liveSearch = async () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  if (!searchTerm) {
    renderPokemons();
    return;
  }

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    const data = await res.json();
    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((t) => t.type.name),
    };

    renderFilteredPokemons([pokemon]);
  } catch (error) {
    pokemonList.innerHTML = `<li class="error">No Pokémon found with the name "${searchTerm}"</li>`;
  }
};

searchInput.addEventListener("input", debounce(liveSearch, 400));

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

typeSelect.addEventListener("change", async () => {
  const selectedType = typeSelect.value;

  if (selectedType === "all") {
    renderPokemons();
    return;
  }

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);

    const data = await res.json();

    const pokemonEntries = data.pokemon;

    const pokemonDetails = await Promise.all(
      pokemonEntries.map(async (entry) => {
        const res = await fetch(entry.pokemon.url);
        const details = await res.json();
        return {
          id: details.id,
          name: details.name,
          image: details.sprites.front_default,
          types: details.types.map((t) => t.type.name),
        };
      })
    );

    renderFilteredPokemons(pokemonDetails);
  } catch (error) {
    console.error(error);
    pokemonList.innerHTML = `<li class="error">No Pokémon found with type "${selectedType}"</li>`;
  }
});

// pogledaj sta je debounce
