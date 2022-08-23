import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import  {Mypokemon}  from "./Mypokemon";

function All() {
  const [allPoke, setAllPoke] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20",
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(props) {
      props.forEach(async (pokemon) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
        const res = await fetch(url);
        const data = await res.json();
        setAllPoke((currentlist) => [...currentlist, data]);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1 className="">Pokemon Pokemon</h1>

      <div className="pokemon-container">
        <InfiniteScroll
          dataLength={allPoke.length}
          next={getAllPokemons}
          hasMore={allPoke.length !== 0 }
          loader={<h4>Loading...</h4>}
        >
          <div className="all-container">
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
        </InfiniteScroll>
        {/* <button className="" onClick={() => getAllPokemons()}>
          More Pokemon
        </button> */}
      </div>
    </div>
  );
}

export default All;
