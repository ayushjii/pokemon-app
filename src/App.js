import { useEffect, useState } from "react";
import { Mypokemon } from "./Components/Mypokemon";

function App() {
  const [allPoke, setAllPoke] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(props) {
      props.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPoke((currentlist) => [...currentlist, data]);
      });
    }
    createPokemonObject(data.props);
    await console.log(allPoke);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div className="App">
      <h1> Pokemon Pokemon</h1>

      <div className="">
        <div className="">
          {allPoke.map((pokemon, index) => (
            <Mypokemon 
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              height={pokemon.height}
              weight={pokemon.weight}
              stat1={pokemon.stats[0].stat.name}
              stat2={pokemon.stats[1].stat.name}
              stat3={pokemon.stats[2].stat.name}
              stat4={pokemon.stats[3].stat.name}
              stat5={pokemon.stats[4].stat.name}
              stat6={pokemon.stats[5].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
              bs3={pokemon.stats[2].base_stat}
              bs4={pokemon.stats[3].base_stat}
              bs5={pokemon.stats[4].base_stat}
              bs6={pokemon.stats[5].base_stat}
            />
          ))}
        </div>
        <button className="" onClick={() => getAllPokemons()}>
          More Pokemon
        </button>
      </div>
    </div>
  );
}

export default App;
