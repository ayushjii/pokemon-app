import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import api from "../API/Api";
import api_details from "../API/Api_details";
import Mypokemon from "./Mypokemon";
import Spinner from './Spinner.js';


function All() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [list, setList] = useState([]);

useEffect(() => {
    api_details.get().then(({ data }) => {
      setList(data);
    });
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    api.get().then(({ data }) => {

      setAllPokemons(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <div>

    <Link to='/test'> crollllllllll;fbnkgjksgjkgkjejkgsjk jkjkjk jkssgj</Link>
      <InfiniteScroll
        dataLength={allPokemons.length}
        next={() => setList}
        hasMore={true}
        loader={<Spinner />}
      >
      {list.name}
        <div className="">
          {allPokemons.map((pokemon) => (
             <button key={pokemon.name}>
              <Link to={"/pokemon/" + pokemon.name}>
                <Mypokemon name={pokemon.name} />
              </Link>
            </button>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
export default All;
