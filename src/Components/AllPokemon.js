import axios from "axios";
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";
import { API } from "../API/api";
import Mypokemon from "./Mypokemon";
import {Searchbar}  from "./Searchbar";
import Spinner from "./Spinner.js";


export default class All extends Component {
  state = {
    url: API,
    pokemon: [],
    itemsCountPerPage: 20,
    activePage: 1,
  };

  loadPokemon = () => {
    axios.get(this.state.url).then((res) => {
      this.setState((prevState) => {
        return {
          pokemon: [...prevState.pokemon, ...res.data.results],
          url: res.data.next,
        }; 
      });
    });
  };

  render() {
    return (
      <React.Fragment>
      <Searchbar />
        {this.state.pokemon ? (
          <div className="row">
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadPokemon}
              hasMore={this.state.url}
              loader={<Spinner />}
            >
              {this.state.pokemon.map((pokemon, i) => (
                <button key={i}>
                  <Link to={"/pokemon/" + pokemon.name}>
                    <Mypokemon name={pokemon.name} />
                  </Link>
                </button>
              ))}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
