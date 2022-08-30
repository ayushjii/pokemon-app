import React from "react";
import { useAppContext } from "../Context/appContext";
import { GiAxeSword } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import {AddFavorites} from './Addfavorite';

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are : ", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <>
      {favorites.length > 0 ? (
        favorites.map((poke) => (
          <button>
            <div
              className={`type ${poke?.types?.map((item) =>
                item.type.name.concat(" ")
              )}`}
            >
              <div className="rounded-2xl px-2 py-1 bg-white bg-opacity-40">
                <small className="font-semibold">#{poke.id}</small>
              </div>
              <h1 className="capitalize">{poke.name}</h1>
              <img
                className="w-52 h-52"
                src={poke?.sprites?.front_default}
                alt={poke.name}
              />
              <h3>{poke?.types?.map((item) => item.type.name.concat(" "))}</h3>
              <div className="mt-0.5">
                <Link to={"/pokemon/" + poke.name}>
                  <button className="bg-white p-1.5 rounded-md shadow hover:shadow-69xl mx-2">
                    <BiMessageSquareDetail size={25} />
                  </button>
                </Link>
                {favoritesChecker(poke.id) ? (
                  <button
                    onClick={() => removeFromFavorites(poke.id)}
                    className="bg-white p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                  >
                    <BsFillHeartFill color="red" size={25} />
                  </button>
                ) : (
                  <button
                    onClick={() => addToFavorites(poke)}
                    className="bg-white p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                  >
                    <BsFillHeartFill size={25} />
                  </button>
                )}

                <Link to={"/war"}>
                  <button className="bg-white p-1.5 rounded-md shadow hover:shadow-69xl mx-2">
                    <GiAxeSword size={25} />
                  </button>
                </Link>
              </div>
            </div>
          </button>
        ))
      ) : (
        <h1><AddFavorites/></h1>
      )}
    </>
  );
};

export default Favorites;
