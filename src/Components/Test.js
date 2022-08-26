import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Mypokemon from "./Mypokemon";

export default class App extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=10",
    pokemon: [],
    itemsCountPerPage: 20,
    activePage: 1
  };

  loadPokemon = () => {
    axios
      .get(this.state.url)
      .then(res => {
        this.setState(prevState => {
          return {
            pokemon: [...prevState.pokemon, ...res.data.results],
            url: res.data.next
          };
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  render() {
    // console.log(this.state.pokemon);
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadPokemon}
              hasMore={this.state.url}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              {this.state.pokemon.map((pokemon, i) => (
                <div
                  style={{ borderBottom: "1px solid", padding: "10px" }}
                  key={pokemon.name + i}
                >
                                 <Mypokemon name={pokemon.name} />

                </div>
              ))}
            </InfiniteScroll>
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
      </React.Fragment>
    );
  }
}
