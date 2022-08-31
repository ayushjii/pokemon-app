import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api_details from "../API/Api_details";
import { ErrorPage } from "./ErrorPage";
import { TiArrowBack } from "react-icons/ti";
import { GiBodyHeight, GiWeight } from "react-icons/gi";

function Aboutpokemon() {
  const { name } = useParams();
  const [list, setList] = useState([]);
  const [error, setError] = useState(!name);

  useEffect(() => {
    api_details
      .get(name)
      .then(({ data }) => {
        setList(data);
      })
      .catch(() => {
        setError(true);
      });
  }, [name]);

  const style = `type ${list?.types?.map((item) =>
    item.type.name.concat(" ")
  )}`;

  return (
    <>
      {error && <ErrorPage />}

      {!error && (
        <div className="flex justify-between bg-white m-6 rounded-2xl">
          <div className="m-3">
            <div className="m-3">
              <Link to={"/"}>
                <button className="flex s text-blue-700">
                  <TiArrowBack size={20} /> Back
                </button>
              </Link>
            </div>
            <div className="text-8xl uppercase text-center m-12">
              <h1 className={style}>{list.name}</h1>
            </div>
            <div className="text-center flex justify-center">
              <div className="mx-6 flex gap-1 items-center">
                <GiBodyHeight size={25} />
                <h3 className="text-2xl">Height : {list.height * 10} cm</h3>
              </div>
              <div className="mx-6 flex gap-1 items-center">
                <GiWeight size={25} />
                <h3 className="text-2xl">Weight : {list.weight * 0.1} kg</h3>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="ml-4 mb-4">
                <div className="text-center">
                  <h1 className="font-semibold my-4 text-4xl text-red-500">
                    Statistics
                  </h1>
                </div>
                <div>
                  {list?.stats?.map((item, index) => {
                    return (
                      <div
                        key={item.stat.name}
                        className="flex gap-12 capitalize justify-between items-center"
                      >
                        <label for="file" className="font-bold">
                          {item.stat.name} : {item.base_stat}
                        </label>
                        <progress
                          className="text-xl rounded-2xl bg-slate-300 p-1.5 "
                          id="file"
                          value={item.base_stat}
                          max="100"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="ml-12 mb-4">
                <div className="text-center">
                  <h1 className="font-semibold my-4 text-4xl text-red-500">
                    Moves
                  </h1>
                </div>
                <div className="flex">
                  {list?.moves?.map((item) => {
                    return (
                      <div key={item.move.name} className="moves">
                        <button className="hover:bg-cyan-600 hover:shadow-69xl bg-cyan-500 rounded-md p-1 m-1">
                          {item.move.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="mr-8 mt-8">
            <div className={style}>
              <img src={list?.sprites?.front_default} className="w-52 h-52" alt={list.name} />
            </div>
            <div>
              <h1 className="capitalize font-bold text-xl">
                Pokemon Type :{" "}
                {list?.types?.map((poke) => poke.type.name.concat(" "))}
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Aboutpokemon;
