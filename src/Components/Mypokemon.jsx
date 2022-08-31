import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api_details from "../API/Api_details";
import { GiAxeSword } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
import { useAppContext } from "../Context/appContext";
import { BiMessageSquareDetail } from "react-icons/bi";

const Mypokemon = ({ poki, name }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api_details.get(name).then(({ data }) => {
      setList(data);
    });
    // eslint-disable-next-line
  }, []);

  const style = `type ${list?.types?.map((item) =>
    item.type.name.concat(" ")
  )}`;

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are : ", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((poke) => poke.id === id);
    return boolean;
  };

  const { war, addToWar, removeFromWar } = useAppContext();

  console.log("war is of : ", war);

  const playerChecker = (id) => {
    const bool = war.some((battle) => battle.id === id);
    return bool;
  };

  return (
    <>
      <div className={style}>
        <div className="rounded-2xl px-2 py-1 bg-white bg-opacity-40">
          <small className="font-semibold">#{list.id}</small>
        </div>
        <h1 className="capitalize">{list.name}</h1>
        <img
          className="w-52 h-52"
          src={list?.sprites?.front_default}
          alt={list.name}
        />
        <h3>{list?.types?.map((item) => item.type.name.concat(" "))}</h3>
        <div className="mt-0.5">
          <Link to={"/pokemon/" + list.name}>
            <button className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2">
              <BiMessageSquareDetail size={25} />
            </button>
          </Link>
          {favoritesChecker(list.id) ? (
            <button
              onClick={() => removeFromFavorites(list.id)}
              className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
            >
              <BsFillHeartFill color="red" size={25} />
            </button>
          ) : (
            <button
              onClick={() => addToFavorites(list)}
              className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
            >
              <BsFillHeartFill size={25} />
            </button>
          )}
          {playerChecker(list.id) ? (
            <button
              onClick={() => removeFromWar(list.id)}
              className="bg-red-500 s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
            >
              <GiAxeSword size={25} />
            </button>
          ) : (
            <button
            onClick={() => addToWar(list)}
             className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2">
              <GiAxeSword size={25} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Mypokemon;
