import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../API/Api";
import Mypokemon from "./Mypokemon";

function All() {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    api.get().then(({ data }) => {
      setAllPokemons(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <div className="book-list">
      {allPokemons.map((pokemon) => (
          <button key={pokemon.name}>
            <Link to={"/pokemon/" + pokemon.name}>
              <Mypokemon name={pokemon.name} />
            </Link>
          </button>
      ))}
    </div>
  );
}
export default All;