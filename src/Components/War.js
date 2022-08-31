import React from "react";
import { useAppContext } from "../Context/appContext";
import { GiAxeSword } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TiArrowBack } from "react-icons/ti";
import { AddFavorites } from "./Addfavorite";

const War = () => {
  const { war, addToWar, removeFromWar } = useAppContext();

  console.log("war is of : ", war);

  const playerChecker = (id) => {
    const bool = war.some((battle) => battle.id === id);
    return bool;
  };

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are : ", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((poke) => poke.id === id);
    return boolean;
  };

  return (
    <>
      {" "}
      <div className="">
        <Link to={"/"}>
          <button className="flex absolute bg-white s m-3 p-4 rounded-lg  text-red-700">
            <TiArrowBack size={20} /> Back
          </button>
        </Link>
      </div>
      <div className="text-center">
        {war.length > 0 ? (
          war.map((battle) => (
            <button>
              <div
                className={`type ${battle?.types?.map((item) =>
                  item.type.name.concat(" ")
                )}`}
              >
                <div className="rounded-2xl px-2 py-1 bg-white bg-opacity-40">
                  <small className="font-semibold">#{battle.id}</small>
                </div>
                <h1 className="capitalize">{battle.name}</h1>
                <img
                  className="w-52 h-52"
                  src={battle?.sprites?.front_default}
                  alt={battle.name}
                />
                <h3>
                  {battle?.types?.map((item) => item.type.name.concat(" "))}
                </h3>
                <div className="mt-0.5">
                  <Link to={"/pokemon/" + battle.name}>
                    <button className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2">
                      <BiMessageSquareDetail size={25} />
                    </button>
                  </Link>
                  {favoritesChecker(battle.id) ? (
                    <button
                      onClick={() => removeFromFavorites(battle.id)}
                      className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <BsFillHeartFill color="red" size={25} />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToFavorites(battle)}
                      className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <BsFillHeartFill size={25} />
                    </button>
                  )}
                  {playerChecker(battle.id) ? (
                    <button
                      onClick={() => removeFromWar(battle.id)}
                      className="bg-red-500 s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <GiAxeSword size={25} />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToWar(battle)}
                      className="bg-white s p-1.5 rounded-md shadow hover:shadow-69xl mx-2"
                    >
                      <GiAxeSword size={25} />
                    </button>
                  )}
                </div>
              </div>
            </button>
          ))
        ) : (
          <AddFavorites />
        )}
      </div>
    </>
  );
};

export default War;
