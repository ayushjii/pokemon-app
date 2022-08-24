import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "./Pokemon";
  
export const Aboutpokemon = (about) => {
  const params = useParams();
  const { name } = params;
  console.warn(name)
  const [alldata, setdata] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20",
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(props) {
      props.forEach(async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const res = await fetch(url);
        const data = await res.json();
        setdata((currentlist) => [...currentlist, data]);
      });
    }
    createPokemonObject(data.results);
   await console.log(name)
  //  await console.log(alldata)
  }
 

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="">
      {alldata.map((pokemon, index) => (
        <Pokemon
        name={name}
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
  );
};
