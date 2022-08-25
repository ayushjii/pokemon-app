import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import api from "../API/Api";
import Mypokemon from "./Mypokemon";
import Spinner from './Spinner.js';


function All() {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    api.get().then(({ data }) => {
      setAllPokemons(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <div>
      {/* <InfiniteScroll
        dataLength={allPokemons.length}
        next={setAllPokemons}
        hasMore={true}
        loader={<Spinner />}
      > */}
        <div className="">
          {allPokemons.map((pokemon) => (
            <button key={pokemon.name}>
              <Link to={"/pokemon/" + pokemon.name}>
                {<Mypokemon name={pokemon.name} />}
              </Link>
            </button>
          ))}
        </div>
      {/* </InfiniteScroll> */}
    </div>
  );
}
export default All;
