import React from "react";
import { useAppContext } from "../Context/appContext";

export const WarPokemon = () => {
  const { war } = useAppContext();

  return (
    <div className="grid grid-cols-2 shadow outline-dashed outline-4 outline-gray-600 mt-3">
      {war.length > 0 ? (
        war.length < 3 ? (
          war.map((battle) => (
            <div className="odd:bg-red-600 flex flex-col odd:bg-opacity-90 m-2 rounded-lg items-center p-4 text-center even:bg-opacity-90 even:bg-blue-600 ">
              <h1 className="capitalize font-bold text-4xl">{battle.name}</h1>
              <img
                className="w-64 h-64 "
                src={battle?.sprites?.front_default}
                alt={battle.name}
              />
              <h3 className="capitalize text-lg">
                # {battle?.types?.map((item) => item.type.name.concat(" "))}
              </h3>
              <div className="flex flex-col">
                <label>
                  {battle.stats.reduce(
                    (acc, curr) => (acc += curr.base_stat),
                    0
                  )}
                </label>
                <progress
                  className="text-xl rounded-2xl bg-slate-300 p-1.5"
                  id="file"
                  value={battle.stats.reduce(
                    (acc, curr) => (acc += curr.base_stat),
                    0
                  )}
                  max="600"
                />
              </div>
            </div>
          ))
        ) : (
          <div>ADD less pokemon</div>
        )
      ) : (
        <div>No Pokemon added for war</div>
      )}
    </div>
  );
};
